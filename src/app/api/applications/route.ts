// app/api/applications/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

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

// Generate PDF Application Form using jsPDF
function generateApplicationPDF(data: ApplicationData): Buffer {
  const doc = new jsPDF();
  let yPos = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15; // Reduced margin
  const lineHeight = 6; // Reduced line height
  const compactLineHeight = 5; // Even more compact for dense sections

  // Load logos (keep your existing logo code)
  let leftLogoBase64 = '';
  let rightLogoBase64 = '';
  
  try {
    const leftLogoPath = path.join(process.cwd(), 'public', 'images', 'moelogo.png');
    const rightLogoPath = path.join(process.cwd(), 'public', 'images', 'kongonilogo.png');
    
    if (fs.existsSync(leftLogoPath)) {
      const leftLogoBuffer = fs.readFileSync(leftLogoPath);
      leftLogoBase64 = `data:image/png;base64,${leftLogoBuffer.toString('base64')}`;
    }
    
    if (fs.existsSync(rightLogoPath)) {
      const rightLogoBuffer = fs.readFileSync(rightLogoPath);
      rightLogoBase64 = `data:image/jpeg;base64,${rightLogoBuffer.toString('base64')}`;
    }
  } catch (error) {
    console.error('Error loading logos:', error);
  }

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number = 10) => {
    if (yPos + requiredSpace > pageHeight - 20) {
      doc.addPage();
      yPos = 20;
      return true;
    }
    return false;
  };

  // Compact header
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageWidth, 40, 'F'); // Reduced header height

  const logoWidth = 25;
  const logoHeight = 18;
  const logoMarginX = 12;
  const logoY = 6;

  // Add logos (your existing logo code)
  if (leftLogoBase64) {
    try {
      doc.addImage(leftLogoBase64, 'PNG', logoMarginX, logoY, logoWidth, logoHeight);
    } catch (error) {
      // Fallback placeholder
    }
  }

  if (rightLogoBase64) {
    try {
      doc.addImage(rightLogoBase64, 'JPEG', pageWidth - logoMarginX - logoWidth, logoY, logoWidth, logoHeight);
    } catch (error) {
      // Fallback placeholder
    }
  }

  // Center text - compact
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('KONGONI TECHNICAL AND', pageWidth / 2, 12, { align: 'center' });
  doc.text('VOCATIONAL COLLEGE', pageWidth / 2, 18, { align: 'center' });

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text('P.O Box 45 - 30205, Matunda', pageWidth / 2, 25, { align: 'center' });
  doc.text('Tel: 0788 070 303 | Email: kongonitvc@gmail.com', pageWidth / 2, 30, { align: 'center' });

  yPos = 45; // Start content closer to header

  // Title
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('ADMISSION APPLICATION FORM', pageWidth / 2, yPos, { align: 'center' });
  
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text(`Application Date: ${new Date().toLocaleDateString()}`, pageWidth - margin, yPos, { align: 'right' });
  yPos += 12;

  // Helper function to add compact section header
  const addSection = (title: string) => {
    checkNewPage(8);
    doc.setFillColor(37, 99, 235);
    doc.rect(margin, yPos - 3, pageWidth - (2 * margin), 6, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin + 2, yPos);
    yPos += 8;
    doc.setTextColor(0, 0, 0);
  };

  // Helper function to add compact field
  const addField = (label: string, value: string) => {
    checkNewPage(lineHeight);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(`${label}:`, margin, yPos);
    doc.setFont('helvetica', 'normal');
    const textWidth = doc.getTextWidth(`${label}: `);
    
    // Handle long values by splitting text
    const maxWidth = pageWidth - margin - (margin + textWidth + 5);
    const valueLines = doc.splitTextToSize(value || 'N/A', maxWidth);
    
    if (valueLines.length > 1) {
      doc.text(valueLines[0], margin + textWidth + 3, yPos);
      yPos += compactLineHeight;
      for (let i = 1; i < valueLines.length; i++) {
        checkNewPage(compactLineHeight);
        doc.text(valueLines[i], margin + 5, yPos);
        yPos += compactLineHeight;
      }
    } else {
      doc.text(value || 'N/A', margin + textWidth + 3, yPos);
      yPos += lineHeight;
    }
  };

  // Helper function to add compact two-column field
  const addTwoColumnField = (label1: string, value1: string, label2: string, value2: string) => {
    checkNewPage(lineHeight);
    doc.setFontSize(8);
    const midPoint = pageWidth / 2;
    const columnWidth = (pageWidth - (2 * margin)) / 2 - 5;
    
    // Left column
    doc.setFont('helvetica', 'bold');
    doc.text(`${label1}:`, margin, yPos);
    doc.setFont('helvetica', 'normal');
    const textWidth1 = doc.getTextWidth(`${label1}: `);
    
    const value1Lines = doc.splitTextToSize(value1 || 'N/A', columnWidth - textWidth1);
    doc.text(value1Lines[0], margin + textWidth1 + 3, yPos);
    
    // Right column
    doc.setFont('helvetica', 'bold');
    doc.text(`${label2}:`, midPoint, yPos);
    doc.setFont('helvetica', 'normal');
    const textWidth2 = doc.getTextWidth(`${label2}: `);
    
    const value2Lines = doc.splitTextToSize(value2 || 'N/A', columnWidth - textWidth2);
    doc.text(value2Lines[0], midPoint + textWidth2 + 3, yPos);
    
    // Handle multi-line values
    const maxLines = Math.max(value1Lines.length, value2Lines.length);
    if (maxLines > 1) {
      yPos += compactLineHeight;
      for (let i = 1; i < maxLines; i++) {
        checkNewPage(compactLineHeight);
        if (value1Lines[i]) {
          doc.text(value1Lines[i], margin + 5, yPos);
        }
        if (value2Lines[i]) {
          doc.text(value2Lines[i], midPoint + 5, yPos);
        }
        yPos += compactLineHeight;
      }
    } else {
      yPos += lineHeight;
    }
  };

  // SECTION A: PERSONAL DETAILS - Compact layout
  addSection('SECTION A: PERSONAL DETAILS');
  
  // Combine name fields to save space
  addField('Full Name', `${data.surname} ${data.firstName} ${data.otherNames || ''}`);
  addTwoColumnField('ID/Passport', data.idPassportNumber, 'Date of Birth', data.dateOfBirth);
  addTwoColumnField('Gender', data.gender, 'Marital Status', data.maritalStatus);
  addTwoColumnField('Nationality', data.nationality, 'Disability', data.disability ? `YES${data.disabilityDetails ? ' - ' + data.disabilityDetails : ''}` : 'NO');
  
  // Combine address fields
  const fullAddress = `${data.postalAddress}${data.postalCode ? ' - ' + data.postalCode : ''}, ${data.town}, ${data.county}`;
  addField('Address', fullAddress);
  
  addTwoColumnField('Sub-County', data.subCounty, 'Ward', data.ward || 'N/A');
  
  if (data.location || data.subLocation) {
    addTwoColumnField('Location', data.location || 'N/A', 'Sub-Location', data.subLocation || 'N/A');
  }
  
  if (data.village) {
    addField('Village', data.village);
  }
  
  addTwoColumnField('Mobile', data.mobileNumber, 'Email', data.emailAddress);
  
  if (data.nemisCode || data.kraPin) {
    addTwoColumnField('NEMIS', data.nemisCode || 'N/A', 'KRA PIN', data.kraPin || 'N/A');
  }

  yPos += 3;

  // SECTION B: ACADEMIC QUALIFICATIONS - More compact table
  addSection('SECTION B: ACADEMIC QUALIFICATIONS');
  
  doc.setFontSize(7); // Smaller font for table
  
  // Compact table header
  const col1X = margin;
  const col2X = margin + 25;
  const col3X = margin + 70;
  const col4X = margin + 100;
  const col5X = margin + 120;
  
  doc.setFont('helvetica', 'bold');
  doc.text('Exam', col1X, yPos);
  doc.text('School', col2X, yPos);
  doc.text('Index', col3X, yPos);
  doc.text('Year', col4X, yPos);
  doc.text('Grade', col5X, yPos);
  yPos += compactLineHeight;
  
  // Add horizontal line
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, yPos - 2, pageWidth - margin, yPos - 2);
  yPos += 2;
  
  doc.setFont('helvetica', 'normal');
  
  // KCSE row
  doc.text('KCSE', col1X, yPos);
  doc.text(data.kcseSchool || '-', col2X, yPos);
  doc.text(data.kcseIndex || '-', col3X, yPos);
  doc.text(data.kcseYear || '-', col4X, yPos);
  doc.text(data.kcseMeanGrade || '-', col5X, yPos);
  yPos += compactLineHeight;
  
  // KCPE row
  doc.text('KCPE', col1X, yPos);
  doc.text(data.kcpeSchool || '-', col2X, yPos);
  doc.text(data.kcpeIndex || '-', col3X, yPos);
  doc.text(data.kcpeYear || '-', col4X, yPos);
  doc.text(data.kcpeMeanGrade || '-', col5X, yPos);
  yPos += compactLineHeight;
  
  // College row (if provided)
  if (data.collegeAttended) {
    doc.text('College', col1X, yPos);
    doc.text(data.collegeAttended, col2X, yPos);
    doc.text('-', col3X, yPos);
    doc.text(data.collegeYear || '-', col4X, yPos);
    doc.text(data.collegeMeanGrade || '-', col5X, yPos);
    yPos += compactLineHeight;
  }
  
  yPos += 3;

  // SECTION C: SPONSOR/GUARDIAN DETAILS - Only if provided, compact layout
  if (data.sponsorFullName) {
    addSection('SECTION C: SPONSOR/GUARDIAN DETAILS');
    
    addField('Name', data.sponsorFullName);
    if (data.sponsorIdPassport) {
      addTwoColumnField('ID/Passport', data.sponsorIdPassport, 'Relationship', data.relationshipToApplicant || 'N/A');
    }
    if (data.sponsorPostalAddress) {
      const sponsorAddress = `${data.sponsorPostalAddress}${data.sponsorTown ? ', ' + data.sponsorTown : ''}`;
      addField('Address', sponsorAddress);
    }
    if (data.sponsorMobile) {
      addTwoColumnField('Mobile', data.sponsorMobile, 'Email', data.sponsorEmail || 'N/A');
    }
    if (data.sponsorOccupation) {
      addField('Occupation', data.sponsorOccupation);
    }
    
    yPos += 3;
  }

  // SECTION D: COURSE DETAILS - Compact layout
  addSection('SECTION D: COURSE DETAILS');
  
  addField('Course', data.courseNameFull);
  addTwoColumnField('Level', data.level, 'Intake', data.intake);
  addTwoColumnField('Type', data.applicationType, 'Duration', data.programmeDuration || 'N/A');
  if (data.examiningBody) {
    addField('Exam Body', data.examiningBody);
  }
  
  yPos += 3;

  // Compact Declaration
  addSection('DECLARATION');
  
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  const declarationText = 'I declare that the information provided in this application is true and correct to the best of my knowledge. I understand that providing false information may result in the rejection of my application or termination of my studies.';
  const lines = doc.splitTextToSize(declarationText, pageWidth - (2 * margin));
  doc.text(lines, margin, yPos);
  yPos += lines.length * compactLineHeight + 3;
  
  doc.text(`Applicant: ${data.firstName} ${data.surname}`, margin, yPos);
  yPos += compactLineHeight;
  doc.text(`Date: ${new Date().toLocaleDateString()}`, margin, yPos);
  yPos += 10;

  // Compact Footer
  checkNewPage(15);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');
  doc.text('FOR OFFICIAL USE ONLY', pageWidth / 2, yPos, { align: 'center' });
  yPos += compactLineHeight;
  doc.setFont('helvetica', 'normal');
  doc.text('Received by: ___________ Date: _______ Signature: ___________', pageWidth / 2, yPos, { align: 'center' });
  yPos += compactLineHeight;
  doc.text('Approved by: ___________ Date: _______ Signature: ___________', pageWidth / 2, yPos, { align: 'center' });

  // Convert to Buffer
  const pdfOutput = doc.output('arraybuffer');
  return Buffer.from(pdfOutput);
}

export async function POST(request: NextRequest) {
  try {
    console.log('Receiving application submission...');
    
    const formData = await request.formData();
    
    // Parse form data with proper type handling
    const data: Record<string, string | boolean> = {};
    const files: DocumentFiles = {};
    
    for (const [key, value] of formData.entries()) {
      if (key === 'idCopy' || key === 'birthCertificate' || key === 'kcpeCertificate' || 
          key === 'kcseCertificate' || key === 'passportPhoto') {
        files[key as keyof DocumentFiles] = value as File;
      } else if (key === 'disability' || key === 'agreesToTerms') {
        data[key] = value === 'true';
      } else {
        data[key] = value as string;
      }
    }

    console.log('Parsed data:', { ...data, files: Object.keys(files) });

    // Validate required fields
    if (!data.emailAddress || !data.firstName || !data.surname) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields: Name and Email are required' },
        { status: 400 }
      );
    }

    // Validate required documents
    if (!files.idCopy || !files.birthCertificate || !files.kcpeCertificate || !files.kcseCertificate) {
      console.error('Missing required documents');
      return NextResponse.json(
        { error: 'Please upload all required documents (ID, Birth Certificate, KCPE, and KCSE certificates)' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Email configuration missing');
      return NextResponse.json(
        { error: 'Email configuration is missing. Please contact the administrator.' },
        { status: 500 }
      );
    }

    console.log('Generating PDF application form...');
    const pdfBuffer = generateApplicationPDF(data as unknown as ApplicationData);
    console.log('PDF generated successfully');

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
    await transporter.verify();
    console.log('Email transporter verified');

    // Prepare attachments with submitted documents
    const attachments: Array<{
      filename: string;
      content: Buffer;
      contentType?: string;
    }> = [
      {
        filename: `Application_Form_${data.surname}_${data.firstName}.pdf`,
        content: pdfBuffer,
        contentType: 'application/pdf',
      }
    ];

    if (files.idCopy) {
      attachments.push({
        filename: `ID_Copy_${data.surname}.${files.idCopy.name.split('.').pop()}`,
        content: Buffer.from(await files.idCopy.arrayBuffer()),
        contentType: files.idCopy.type,
      });
    }

    if (files.birthCertificate) {
      attachments.push({
        filename: `Birth_Certificate_${data.surname}.${files.birthCertificate.name.split('.').pop()}`,
        content: Buffer.from(await files.birthCertificate.arrayBuffer()),
        contentType: files.birthCertificate.type,
      });
    }

    if (files.kcpeCertificate) {
      attachments.push({
        filename: `KCPE_Certificate_${data.surname}.${files.kcpeCertificate.name.split('.').pop()}`,
        content: Buffer.from(await files.kcpeCertificate.arrayBuffer()),
        contentType: files.kcpeCertificate.type,
      });
    }

    if (files.kcseCertificate) {
      attachments.push({
        filename: `KCSE_Certificate_${data.surname}.${files.kcseCertificate.name.split('.').pop()}`,
        content: Buffer.from(await files.kcseCertificate.arrayBuffer()),
        contentType: files.kcseCertificate.type,
      });
    }

    if (files.passportPhoto) {
      attachments.push({
        filename: `Passport_Photo_${data.surname}.${files.passportPhoto.name.split('.').pop()}`,
        content: Buffer.from(await files.passportPhoto.arrayBuffer()),
        contentType: files.passportPhoto.type,
      });
    }

    // Send email to registry with PDF form and documents
    const registryMailOptions: nodemailer.SendMailOptions = {
      from: `"Kongoni Technical & Vocational College Applications" <${process.env.GMAIL_USER}>`,
      to: 'registry@kongonitechnical.ac.ke',
      subject: `New Application: ${data.firstName} ${data.surname} - ${data.courseNameFull}`,
      html: `
        <h2>New Application Received</h2>
        <p>A new application has been submitted. Please find the completed application form and supporting documents attached.</p>
        <h3>Quick Summary:</h3>
        <ul>
          <li><strong>Name:</strong> ${data.firstName} ${data.surname}</li>
          <li><strong>Course:</strong> ${data.courseNameFull}</li>
          <li><strong>Level:</strong> ${data.level}</li>
          <li><strong>Intake:</strong> ${data.intake}</li>
          <li><strong>Email:</strong> ${data.emailAddress}</li>
          <li><strong>Phone:</strong> ${data.mobileNumber}</li>
        </ul>
        <p><strong>Attachments:</strong></p>
        <ul>
          <li>Completed Application Form (PDF)</li>
          <li>ID/Passport Copy</li>
          <li>Birth Certificate</li>
          <li>KCPE Certificate</li>
          <li>KCSE Certificate</li>
          ${files.passportPhoto ? '<li>Passport Photo</li>' : ''}
        </ul>
        <p>Please review and process this application accordingly.</p>
      `,
      attachments,
    };

    console.log('Sending email to registry...');
    await transporter.sendMail(registryMailOptions);
    console.log('Registry email sent successfully');

    // Send confirmation email to applicant
    const applicantMailOptions: nodemailer.SendMailOptions = {
      from: `"Kongoni Technical & Vocational College" <${process.env.GMAIL_USER}>`,
      to: data.emailAddress as string,
      subject: 'Application Received - Kongoni Technical & Vocational College',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
            <h1>Application Received Successfully</h1>
          </div>
          <div style="padding: 20px; background-color: #f9fafb;">
            <p>Dear ${data.firstName} ${data.surname},</p>
            <p>Thank you for submitting your application to Kongoni Technical and Vocational College.</p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0;">
              <h3 style="color: #2563eb; margin-top: 0;">Application Details:</h3>
              <p><strong>Course:</strong> ${data.courseNameFull}</p>
              <p><strong>Level:</strong> ${data.level}</p>
              <p><strong>Intake:</strong> ${data.intake}</p>
              <p><strong>Application Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            <div style="background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0;">
              <h4 style="margin-top: 0;">What's Next?</h4>
              <ul>
                <li>Our admissions team will review your application within 5-7 business days</li>
                <li>We will contact you via email or phone with updates</li>
                <li>Please check your email regularly, including spam folder</li>
              </ul>
            </div>
            <p><strong>Contact Information:</strong></p>
            <p>📧 Email: kongonitvc@gmail.com<br>
            📧 Registry: registry@kongonitechnical.ac.ke<br>
            📞 Phone: 0788 070 303</p>
            <p>Best regards,<br><strong>Admissions Office</strong><br>Kongoni Technical College</p>
          </div>
        </div>
      `,
    };

    console.log('Sending confirmation email to applicant...');
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
    const errorStack = error instanceof Error ? error.stack : '';
    
    console.error('Error details:', errorMessage);
    console.error('Error stack:', errorStack);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit application',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}