import { z } from "zod";

//
// ✅ Department Schema & Type
//
export const departmentSchema = z.object({
  id: z.string().min(1, "Department ID is required"),
  name: z.string().min(1, "Department name is required").min(2, "Department name must be at least 2 characters"),
  description: z.string().min(1, "Department description is required").min(10, "Description must be at least 10 characters"),
  imageUrl: z.string().url("Please enter a valid image URL")
});

export type Department = z.infer<typeof departmentSchema>;

//
// ✅ Course Schema & Type
//
export const courseSchema = z.object({
  id: z.string().min(1, "Course ID is required"),
  title: z.string().min(1, "Course title is required").min(2, "Course title must be at least 2 characters"),
  description: z.string().min(1, "Course description is required").min(10, "Description must be at least 10 characters"),
  duration: z.string().min(1, "Course duration is required")
});

export type Course = z.infer<typeof courseSchema>;

//
// ✅ Application Form Schema & Type
//
export const insertApplicationSchema = z.object({
  firstName: z.string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens, and apostrophes"),
  
  lastName: z.string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes"),
  
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters")
    .toLowerCase(),
  
  phone: z.string()
    .min(1, "Phone number is required")
    .regex(/^(\+254|0)[17]\d{8}$/, "Please enter a valid Kenyan phone number (e.g., +254712345678 or 0712345678)")
    .transform((val) => {
      // Normalize phone number format
      if (val.startsWith('0')) {
        return '+254' + val.slice(1);
      }
      return val;
    }),
  
  program: z.string().min(1, "Please select a program"),
  department: z.string().min(1, "Please select a department"),
  education: z.string().min(1, "Please select your educational background"),
  
  additionalInfo: z.string()
    .max(500, "Additional information must be less than 500 characters")
    .optional(),
  
  agreesToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions"
  }),
  
  // Optional fields for enhanced functionality
  dateOfBirth: z.string()
    .optional()
    .refine((val) => {
      if (!val) return true;
      const date = new Date(val);
      const now = new Date();
      const age = now.getFullYear() - date.getFullYear();
      return age >= 16 && age <= 65;
    }, "You must be between 16 and 65 years old"),
  
  gender: z.enum(["male", "female", "other", "prefer-not-to-say"]).optional(),
  
  county: z.string().optional(),
  
  emergencyContact: z.object({
    name: z.string().optional(),
    phone: z.string().optional(),
    relationship: z.string().optional()
  }).optional()
});

export type InsertApplication = z.infer<typeof insertApplicationSchema>;

//
// ✅ Contact Form Schema & Type (Enhanced)
//
export const insertContactSchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters")
    .toLowerCase(),
  
  subject: z.string()
    .min(1, "Subject is required")
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must be less than 200 characters"),
  
  message: z.string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  
  // Optional phone number for contact form
  phone: z.string()
    .optional()
    .refine((val) => {
      if (!val) return true;
      return /^(\+254|0)[17]\d{8}$/.test(val);
    }, "Please enter a valid Kenyan phone number"),
  
  // Contact type for better categorization
  contactType: z.enum([
    "general-inquiry",
    "admissions",
    "academic-info",
    "technical-support",
    "complaints",
    "suggestions",
    "other"
  ]).default("general-inquiry"),
  
  // Whether the user wants to receive updates
  subscribesToUpdates: z.boolean().default(false)
});

export type InsertContact = z.infer<typeof insertContactSchema>;

//
// ✅ Newsletter Subscription Schema
//
export const newsletterSubscriptionSchema = z.object({
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters")
    .toLowerCase(),
  
  name: z.string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .optional(),
  
  interests: z.array(z.string()).default([])
});

export type NewsletterSubscription = z.infer<typeof newsletterSubscriptionSchema>;

//
// ✅ Dropdown Options (Enhanced)
//
export const programOptions = [
  { value: "diploma-mechanical", label: "Diploma in Mechanical Engineering", department: "engineering" },
  { value: "diploma-it", label: "Diploma in Information Technology", department: "ict" },
  { value: "diploma-business", label: "Diploma in Business Management", department: "business" },
  { value: "diploma-electrical", label: "Diploma in Electrical Engineering", department: "engineering" },
  { value: "diploma-hotel", label: "Diploma in Hotel Management", department: "hospitality" },
  { value: "diploma-nursing", label: "Diploma in Nursing", department: "health" },
  { value: "cert-automotive", label: "Certificate in Motor Vehicle Mechanics", department: "engineering" },
  { value: "cert-computer", label: "Certificate in Computer Applications", department: "ict" },
  { value: "cert-carpentry", label: "Carpentry & Joinery", department: "engineering" },
  { value: "cert-fashion", label: "Certificate in Fashion & Design", department: "fashion" },
  { value: "cert-agriculture", label: "Certificate in Agriculture", department: "agriculture" },
  { value: "cert-beauty", label: "Certificate in Beauty & Cosmetology", department: "fashion" }
] as const;

export const educationOptions = [
  { value: "kcpe", label: "KCPE Certificate", level: 1 },
  { value: "kcse", label: "KCSE Certificate", level: 2 },
  { value: "certificate", label: "Certificate Course", level: 3 },
  { value: "diploma", label: "Diploma", level: 4 },
  { value: "degree", label: "University Degree", level: 5 },
  { value: "postgraduate", label: "Postgraduate", level: 6 },
  { value: "other", label: "Other", level: 0 }
] as const;

export const departmentOptions = [
  { value: "engineering", label: "Engineering Department", description: "Mechanical, Electrical & Automotive Engineering" },
  { value: "ict", label: "ICT Department", description: "Information Technology & Computer Sciences" },
  { value: "business", label: "Business Department", description: "Business Management & Entrepreneurship" },
  { value: "hospitality", label: "Hospitality Department", description: "Hotel Management & Tourism" },
  { value: "health", label: "Health Sciences Department", description: "Nursing & Health Related Courses" },
  { value: "agriculture", label: "Agriculture Department", description: "Agricultural Sciences & Technology" },
  { value: "fashion", label: "Fashion & Design Department", description: "Fashion Design & Beauty Therapy" }
] as const;

export const contactTypeOptions = [
  { value: "general-inquiry", label: "General Inquiry" },
  { value: "admissions", label: "Admissions Information" },
  { value: "academic-info", label: "Academic Information" },
  { value: "technical-support", label: "Technical Support" },
  { value: "complaints", label: "Complaints" },
  { value: "suggestions", label: "Suggestions" },
  { value: "other", label: "Other" }
] as const;

export const kenyanCounties = [
  "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa",
  "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi",
  "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos",
  "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a",
  "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri",
  "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans Nzoia",
  "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
] as const;

//
// ✅ Utility Functions
//
export const getProgramsByDepartment = (department: string) => {
  return programOptions.filter(program => program.department === department);
};

export const getDepartmentByProgram = (programValue: string) => {
  return programOptions.find(program => program.value === programValue)?.department;
};

//
// ✅ Validation Helpers
//
export const validateKenyanPhone = (phone: string): boolean => {
  return /^(\+254|0)[17]\d{8}$/.test(phone);
};

export const formatKenyanPhone = (phone: string): string => {
  if (phone.startsWith('0')) {
    return '+254' + phone.slice(1);
  }
  return phone;
};