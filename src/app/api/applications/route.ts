// app/api/applications/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Updated interface to match new form structure
interface ApplicationData {
  // Section A - Personal Details
  surname: string;
  firstName: string;
  otherNames?: string;
  idPassportNumber: string;
  dateOfBirth: string;
  maritalStatus: string;
  gender: string;
  postalAddress: string;
  postalCode?: string;
  town: string;
  county: string;
  subCounty: string;
  ward?: string;
  location?: string;
  subLocation?: string;
  village?: string;
  nemisCode?: string;
  kraPin?: string;
  mobileNumber: string;
  emailAddress: string;
  nationality: string;
  disability: boolean;
  disabilityDetails?: string;
  
  // Section B - Academic Qualifications
  kcseSchool?: string;
  kcseIndex?: string;
  kcseYear?: string;
  kcseMeanGrade?: string;
  kcpeSchool?: string;
  kcpeIndex?: string;
  kcpeYear?: string;
  kcpeMeanGrade?: string;
  collegeAttended?: string;
  collegeYear?: string;
  collegeMeanGrade?: string;
  
  // Section C - Sponsor/Guardian Details
  sponsorFullName?: string;
  sponsorIdPassport?: string;
  sponsorPostalAddress?: string;
  sponsorTown?: string;
  relationshipToApplicant?: string;
  sponsorEmail?: string;
  sponsorMobile?: string;
  sponsorOccupation?: string;
  
  // Section D - Course Details
  courseNameFull: string;
  intake: string;
  programmeDuration?: string;
  examiningBody?: string;
  level: string;
  applicationType: string;
  
  // Agreement
  agreesToTerms: boolean;
}

interface DocumentFiles {
  idCopy?: File;
  birthCertificate?: File;
  kcpeCertificate?: File;
  kcseCertificate?: File;
  passportPhoto?: File;
}

export async function POST(request: NextRequest) {
  try {
    console.log('Receiving application submission...');
    
    const formData = await request.formData();
    
    // Parse form data with proper type handling
    const data: Partial<ApplicationData> = {};
    const files: DocumentFiles = {};
    
    for (const [key, value] of formData.entries()) {
      console.log(`Processing field: ${key} = ${value}`);
      
      if (key === 'idCopy' || key === 'birthCertificate' || key === 'kcpeCertificate' || 
          key === 'kcseCertificate' || key === 'passportPhoto') {
        files[key as keyof DocumentFiles] = value as File;
        console.log(`File received: ${key} - ${(value as File).name}`);
      } else if (key === 'disability' || key === 'agreesToTerms') {
        data[key] = value === 'true';
      } else {
        data[key as keyof ApplicationData] = value as string;
      }
    }

    console.log('Parsed application data:', JSON.stringify(data, null, 2));
    console.log('Files received:', Object.keys(files));

    // Validate required fields
    if (!data.emailAddress || !data.firstName || !data.surname) {
      console.error('Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields: Name and Email are required' },
        { status: 400 }
      );
    }

    // Validate required documents
    if (!files.idCopy || !files.birthCertificate || !files.kcpeCertificate || !files.kcseCertificate) {
      console.error('Validation failed - missing required documents');
      return NextResponse.json(
        { error: 'Please upload all required documents (ID, Birth Certificate, KCPE, and KCSE certificates)' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { error: 'Email configuration is missing. Please contact the administrator.' },
        { status: 500 }
      );
    }

    console.log('Creating email transporter...');
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter
    console.log('Verifying email transporter...');
    try {
      await transporter.verify();
      console.log('Email transporter verified successfully');
    } catch (verifyError) {
      console.error('Email transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email configuration error. Please check the server logs.' },
        { status: 500 }
      );
    }

    // Prepare attachments
    const attachments: Array<{
      filename: string;
      content: Buffer;
      contentType: string;
    }> = [];

    if (files.idCopy) {
      attachments.push({
        filename: `ID_Copy_${data.surname}_${files.idCopy.name}`,
        content: Buffer.from(await files.idCopy.arrayBuffer()),
        contentType: files.idCopy.type,
      });
    }

    if (files.birthCertificate) {
      attachments.push({
        filename: `Birth_Certificate_${data.surname}_${files.birthCertificate.name}`,
        content: Buffer.from(await files.birthCertificate.arrayBuffer()),
        contentType: files.birthCertificate.type,
      });
    }

    if (files.kcpeCertificate) {
      attachments.push({
        filename: `KCPE_Certificate_${data.surname}_${files.kcpeCertificate.name}`,
        content: Buffer.from(await files.kcpeCertificate.arrayBuffer()),
        contentType: files.kcpeCertificate.type,
      });
    }

    if (files.kcseCertificate) {
      attachments.push({
        filename: `KCSE_Certificate_${data.surname}_${files.kcseCertificate.name}`,
        content: Buffer.from(await files.kcseCertificate.arrayBuffer()),
        contentType: files.kcseCertificate.type,
      });
    }

    if (files.passportPhoto) {
      attachments.push({
        filename: `Passport_Photo_${data.surname}_${files.passportPhoto.name}`,
        content: Buffer.from(await files.passportPhoto.arrayBuffer()),
        contentType: files.passportPhoto.type,
      });
    }

    // Send email to institution
    const institutionEmailHTML = generateInstitutionEmailHTML(data as ApplicationData);
    const institutionMailOptions: nodemailer.SendMailOptions = {
      from: `"Kongoni College Applications" <${process.env.GMAIL_USER}>`,
      to: process.env.INSTITUTION_EMAIL || 'registry@kongonitechnical.ac.ke',
      subject: `New Application: ${data.firstName} ${data.surname} - ${data.courseNameFull}`,
      html: institutionEmailHTML,
      attachments,
    };

    console.log(`Sending email to institution: ${institutionMailOptions.to}`);
    await transporter.sendMail(institutionMailOptions);
    console.log('Institution email sent successfully');

    // Send confirmation email to applicant
    const applicantEmailHTML = generateApplicantConfirmationHTML(data as ApplicationData);
    const applicantMailOptions: nodemailer.SendMailOptions = {
      from: `"Kongoni Technical College" <${process.env.GMAIL_USER}>`,
      to: data.emailAddress,
      subject: 'Application Received - Kongoni Technical College',
      html: applicantEmailHTML,
    };

    console.log(`Sending confirmation email to applicant: ${data.emailAddress}`);
    await transporter.sendMail(applicantMailOptions);
    console.log('Applicant confirmation email sent successfully');

    return NextResponse.json(
      { 
        message: 'Application submitted successfully. Check your email for confirmation.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error details:', errorMessage);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit application',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}

// Email template for institution (with attachments)
function generateInstitutionEmailHTML(data: ApplicationData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 900px; margin: 0 auto; padding: 20px; }
    .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .section { background-color: #f9fafb; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #2563eb; }
    .section-title { color: #2563eb; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #2563eb; padding-bottom: 5px; }
    .field { margin: 10px 0; display: grid; grid-template-columns: 200px 1fr; }
    .field-label { font-weight: bold; color: #4b5563; }
    .field-value { color: #1f2937; }
    .academic-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .academic-table th { background-color: #2563eb; color: white; padding: 10px; text-align: left; font-size: 14px; }
    .academic-table td { padding: 10px; border-bottom: 1px solid #e5e7eb; background-color: white; }
    .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
    .documents-notice { background-color: #dbeafe; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0; }
    .status-yes { color: #059669; font-weight: bold; }
    .status-no { color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎓 NEW APPLICATION RECEIVED</h1>
      <p style="margin: 5px 0;">Kongoni Technical and Vocational College</p>
      <p style="font-size: 14px; margin: 5px 0;">Submitted on ${new Date().toLocaleString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}</p>
    </div>

    <div class="documents-notice">
      <strong>📎 Attached Documents:</strong>
      <ul style="margin: 10px 0; padding-left: 20px;">
        <li>✓ National ID / Passport Copy</li>
        <li>✓ Birth Certificate</li>
        <li>✓ KCPE Certificate</li>
        <li>✓ KCSE Certificate</li>
        ${data.passportPhoto ? '<li>✓ Passport Photo</li>' : ''}
      </ul>
    </div>

    <!-- Section A: Personal Details -->
    <div class="section">
      <div class="section-title">A. PERSONAL DETAILS</div>
      <div class="field">
        <span class="field-label">Full Name:</span>
        <span class="field-value">${data.surname || ''} ${data.firstName || ''} ${data.otherNames || ''}</span>
      </div>
      <div class="field">
        <span class="field-label">ID/Passport Number:</span>
        <span class="field-value">${data.idPassportNumber || 'N/A'}</span>
      </div>
      <div class="field">
        <span class="field-label">Date of Birth:</span>
        <span class="field-value">${data.dateOfBirth || 'N/A'}</span>
      </div>
      <div class="field">
        <span class="field-label">Gender:</span>
        <span class="field-value">${data.gender || 'N/A'}</span>
      </div>
      <div class="field">
        <span class="field-label">Marital Status:</span>
        <span class="field-value">${data.maritalStatus || 'N/A'}</span>
      </div>
      <div class="field">
        <span class="field-label">Nationality:</span>
        <span class="field-value">${data.nationality || 'N/A'}</span>
      </div>
      <div class="field">
        <span class="field-label">Disability:</span>
        <span class="${data.disability ? 'status-yes' : 'status-no'}">${data.disability ? 'YES' : 'NO'}${data.disabilityDetails ? ' - ' + data.disabilityDetails : ''}</span>
      </div>
      <div class="field">
        <span class="field-label">Mobile Number:</span>
        <span class="field-value">${data.mobileNumber || 'N/A'}</span>
      </div>
      <div class="field">
        <span class="field-label">Email Address:</span>
        <span class="field-value">${data.emailAddress || 'N/A'}</span>
      </div>
      <div class="field">
        <span class="field-label">Postal Address:</span>
        <span class="field-value">${data.postalAddress || 'N/A'} ${data.postalCode ? '- ' + data.postalCode : ''}</span>
      </div>
      <div class="field">
        <span class="field-label">Town:</span>
        <span class="field-value">${data.town || 'N/A'}</span>
      </div>
      <div class="field">
        <span class="field-label">County:</span>
        <span class="field-value">${data.county || 'N/A'}</span>
      </div>
      <div class="field">
        <span class="field-label">Sub-County:</span>
        <span class="field-value">${data.subCounty || 'N/A'}</span>
      </div>
      ${data.ward ? `<div class="field"><span class="field-label">Ward:</span><span class="field-value">${data.ward}</span></div>` : ''}
      ${data.location ? `<div class="field"><span class="field-label">Location:</span><span class="field-value">${data.location}</span></div>` : ''}
      ${data.subLocation ? `<div class="field"><span class="field-label">Sub-Location:</span><span class="field-value">${data.subLocation}</span></div>` : ''}
      ${data.village ? `<div class="field"><span class="field-label">Village:</span><span class="field-value">${data.village}</span></div>` : ''}
      ${data.nemisCode ? `<div class="field"><span class="field-label">NEMIS Code:</span><span class="field-value">${data.nemisCode}</span></div>` : ''}
      ${data.kraPin ? `<div class="field"><span class="field-label">KRA PIN:</span><span class="field-value">${data.kraPin}</span></div>` : ''}
    </div>

    <!-- Section B: Academic Qualifications -->
    <div class="section">
      <div class="section-title">B. ACADEMIC QUALIFICATIONS</div>
      <table class="academic-table">
        <thead>
          <tr>
            <th>EXAMINATION</th>
            <th>SCHOOL/COLLEGE</th>
            <th>INDEX NUMBER</th>
            <th>YEAR</th>
            <th>MEAN GRADE/MARKS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>KCSE</strong></td>
            <td>${data.kcseSchool || '-'}</td>
            <td>${data.kcseIndex || '-'}</td>
            <td>${data.kcseYear || '-'}</td>
            <td>${data.kcseMeanGrade || '-'}</td>
          </tr>
          <tr>
            <td><strong>KCPE</strong></td>
            <td>${data.kcpeSchool || '-'}</td>
            <td>${data.kcpeIndex || '-'}</td>
            <td>${data.kcpeYear || '-'}</td>
            <td>${data.kcpeMeanGrade || '-'}</td>
          </tr>
          ${data.collegeAttended ? `
          <tr>
            <td><strong>COLLEGE</strong></td>
            <td>${data.collegeAttended}</td>
            <td>-</td>
            <td>${data.collegeYear || '-'}</td>
            <td>${data.collegeMeanGrade || '-'}</td>
          </tr>
          ` : ''}
        </tbody>
      </table>
    </div>

    <!-- Section C: Sponsor/Guardian Details -->
    ${data.sponsorFullName ? `
    <div class="section">
      <div class="section-title">C. SPONSOR/GUARDIAN DETAILS</div>
      <div class="field">
        <span class="field-label">Full Name:</span>
        <span class="field-value">${data.sponsorFullName}</span>
      </div>
      ${data.sponsorIdPassport ? `<div class="field"><span class="field-label">ID/Passport:</span><span class="field-value">${data.sponsorIdPassport}</span></div>` : ''}
      ${data.sponsorPostalAddress ? `<div class="field"><span class="field-label">Postal Address:</span><span class="field-value">${data.sponsorPostalAddress}</span></div>` : ''}
      ${data.sponsorTown ? `<div class="field"><span class="field-label">Town:</span><span class="field-value">${data.sponsorTown}</span></div>` : ''}
      ${data.relationshipToApplicant ? `<div class="field"><span class="field-label">Relationship:</span><span class="field-value">${data.relationshipToApplicant}</span></div>` : ''}
      ${data.sponsorEmail ? `<div class="field"><span class="field-label">Email:</span><span class="field-value">${data.sponsorEmail}</span></div>` : ''}
      ${data.sponsorMobile ? `<div class="field"><span class="field-label">Mobile:</span><span class="field-value">${data.sponsorMobile}</span></div>` : ''}
      ${data.sponsorOccupation ? `<div class="field"><span class="field-label">Occupation:</span><span class="field-value">${data.sponsorOccupation}</span></div>` : ''}
    </div>
    ` : ''}

    <!-- Section D: Course Details -->
    <div class="section">
      <div class="section-title">D. COURSE DETAILS</div>
      <div class="field">
        <span class="field-label">Course Name:</span>
        <span class="field-value">${data.courseNameFull || 'N/A'}</span>
      </div>
      <div class="field">
        <span class="field-label">Intake:</span>
        <span class="field-value">${data.intake || 'N/A'}</span>
      </div>
      <div class="field">
        <span class="field-label">Level:</span>
        <span class="field-value">${data.level || 'N/A'}</span>
      </div>
      <div class="field">
        <span class="field-label">Application Type:</span>
        <span class="field-value">${data.applicationType || 'N/A'}</span>
      </div>
      ${data.programmeDuration ? `<div class="field"><span class="field-label">Duration:</span><span class="field-value">${data.programmeDuration}</span></div>` : ''}
      ${data.examiningBody ? `<div class="field"><span class="field-label">Examining Body:</span><span class="field-value">${data.examiningBody}</span></div>` : ''}
    </div>

    <div class="footer">
      <p><strong>Kongoni Technical and Vocational College</strong></p>
      <p>This is an automated email from the Online Application System</p>
      <p style="margin-top: 10px;">Please review the attached documents and contact the applicant for any clarifications.</p>
    </div>
  </div>
</body>
</html>
  `;
}

// Email template for applicant confirmation
function generateApplicantConfirmationHTML(data: ApplicationData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 700px; margin: 0 auto; padding: 20px; }
    .header { background-color: #2563eb; color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background-color: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
    .success-badge { background-color: #059669; color: white; padding: 10px 20px; border-radius: 20px; display: inline-block; margin: 20px 0; font-weight: bold; }
    .info-box { background-color: #f0f9ff; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0; }
    .detail-section { margin: 20px 0; padding: 15px; background-color: #f9fafb; border-radius: 8px; }
    .detail-title { color: #2563eb; font-weight: bold; margin-bottom: 10px; font-size: 16px; }
    .detail-item { margin: 8px 0; }
    .label { font-weight: bold; color: #4b5563; }
    .value { color: #1f2937; }
    .next-steps { background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; }
    .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; margin-top: 30px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🎓 Kongoni Technical College</h1>
      <p style="margin: 10px 0 0 0; font-size: 18px;">Application Confirmation</p>
    </div>

    <div class="content">
      <div style="text-align: center;">
        <span class="success-badge">✓ Application Received Successfully</span>
      </div>

      <p style="font-size: 16px; margin-top: 20px;">Dear <strong>${data.firstName} ${data.surname}</strong>,</p>

      <p>Thank you for submitting your application to Kongoni Technical and Vocational College. We have successfully received your application and all required documents.</p>

      <div class="info-box">
        <strong>📅 Application Date:</strong> ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}<br>
        <strong>⏰ Time:</strong> ${new Date().toLocaleTimeString('en-US')}<br>
        <strong>📋 Reference:</strong> KTVC/APP/${new Date().getFullYear()}/${Math.floor(Math.random() * 10000)}
      </div>

      <div class="detail-section">
        <div class="detail-title">📋 Application Summary</div>
        <div class="detail-item">
          <span class="label">Course:</span>
          <span class="value">${data.courseNameFull || 'N/A'}</span>
        </div>
        <div class="detail-item">
          <span class="label">Level:</span>
          <span class="value">${data.level || 'N/A'}</span>
        </div>
        <div class="detail-item">
          <span class="label">Intake:</span>
          <span class="value">${data.intake || 'N/A'}</span>
        </div>
        <div class="detail-item">
          <span class="label">Application Type:</span>
          <span class="value">${data.applicationType || 'N/A'}</span>
        </div>
      </div>

      <div class="detail-section">
        <div class="detail-title">👤 Your Contact Information</div>
        <div class="detail-item">
          <span class="label">Email:</span>
          <span class="value">${data.emailAddress}</span>
        </div>
        <div class="detail-item">
          <span class="label">Mobile:</span>
          <span class="value">${data.mobileNumber}</span>
        </div>
        <div class="detail-item">
          <span class="label">Address:</span>
          <span class="value">${data.postalAddress}, ${data.town}</span>
        </div>
      </div>

      <div class="next-steps">
        <strong>⚡ What Happens Next?</strong>
        <ul style="margin: 10px 0; padding-left: 20px;">
          <li>Our admissions team will review your application within 5-7 business days</li>
          <li>We will contact you via email (${data.emailAddress}) or phone (${data.mobileNumber})</li>
          <li>You will receive information about the admission status and next steps</li>
          <li>Please ensure you check your email regularly, including your spam folder</li>
        </ul>
      </div>

      <div class="info-box">
        <strong>📎 Documents Submitted:</strong>
        <ul style="margin: 10px 0; padding-left: 20px;">
          <li>✓ National ID/Passport Copy</li>
          <li>✓ Birth Certificate</li>
          <li>✓ KCPE Certificate</li>
          <li>✓ KCSE Certificate</li>
          ${data.passportPhoto ? '<li>✓ Passport Photo</li>' : ''}
        </ul>
      </div>

      <div style="margin: 30px 0; padding: 20px; background-color: #f9fafb; border-radius: 8px; text-align: center;">
        <h3 style="color: #2563eb; margin-top: 0;">Need Assistance?</h3>
        <p style="margin: 10px 0;">If you have any questions or need to update your information, please contact us:</p>
        <p style="margin: 5px 0;">📧 Email: kongonitvc@gmail.com</p>
        <p style="margin: 5px 0;">📧 Registry: registry@kongonitechnical.ac.ke</p>
        <p style="margin: 5px 0;">📞 Phone: 0748 676 309 / 0791 304 448</p>
        <p style="margin: 5px 0;">📍 Location: Along Eldoret - Kitale Road, Matunda</p>
      </div>

      <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">
        <strong>Note:</strong> Please save this email for your records. You may be asked to reference your application details during the admission process.
      </p>

      <p style="margin-top: 30px;">Best regards,<br>
      <strong>Admissions Office</strong><br>
      Kongoni Technical and Vocational College</p>
    </div>

    <div class="footer">
      <p><strong>Kongoni Technical and Vocational College</strong></p>
      <p>Empowering trainees through digital innovation and technical excellence</p>
      <p style="margin-top: 10px; font-size: 11px;">
        This is an automated message. Please do not reply directly to this email.<br>
        For inquiries, contact kongonitvc@gmail.com
      </p>
    </div>
  </div>
</body>
</html>
  `;
}