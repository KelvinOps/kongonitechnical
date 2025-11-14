// components/student-portal.tsx
"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { PlusIcon, TrashIcon, FileIcon } from "lucide-react";
import { useState } from "react";

// Enhanced schema for comprehensive application
const enhancedApplicationSchema = z.object({
  preferredCampus: z.string().min(1, { message: "Preferred campus is required" }),
  preferredIntake: z.string().min(1, { message: "Preferred intake is required" }),
  preferredAttendance: z.string().min(1, { message: "Preferred attendance is required" }),
  programType: z.string().min(1, { message: "Program type is required" }),
  stageYearLevel: z.string().min(1, { message: "Stage/Year/Level is required" }),
  program: z.string().min(1, { message: "Program is required" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "Last name is required" }),
  livingWithDisability: z.boolean().default(false),
  title: z.string().min(1, { message: "Title is required" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
  nationality: z.string().min(1, { message: "Nationality is required" }),
  ethnicity: z.string().optional(),
  nationalId: z.string().min(1, { message: "National ID/Passport is required" }),
  kcseIndex: z.string().optional(),
  kcpeIndex: z.string().optional(),
  countyState: z.string().min(1, { message: "County/State is required" }),
  subCountyDistrict: z.string().min(1, { message: "Sub-County/District is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  careOf: z.string().optional(),
  town: z.string().min(1, { message: "Town is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  mobilePhone: z.string().min(1, { message: "Mobile phone is required" }),
  alternatePhone: z.string().optional(),
  academicQualifications: z.array(z.object({
    certification: z.string().min(1, { message: "Certification is required" }),
    overallScore: z.string().min(1, { message: "Overall score is required" }),
    institutionName: z.string().min(1, { message: "Institution name is required" }),
    yearRange: z.string().min(1, { message: "Year range is required" }),
  })).min(1, { message: "At least one academic qualification is required" }),
  howDidYouKnow: z.string().optional(),
  scholarshipInterest: z.boolean().default(false),
  additionalInfo: z.string().optional(),
  agreesToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms and Conditions",
  }),
});

type EnhancedApplication = z.infer<typeof enhancedApplicationSchema>;

// Document upload state interface
interface DocumentFiles {
  idCopy: File | null;
  birthCertificate: File | null;
  kcpeCertificate: File | null;
  kcseCertificate: File | null;
  kraCertificate: File | null;
}

export default function StudentPortal() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [documentFiles, setDocumentFiles] = useState<DocumentFiles>({
    idCopy: null,
    birthCertificate: null,
    kcpeCertificate: null,
    kcseCertificate: null,
    kraCertificate: null,
  });

  const form = useForm<EnhancedApplication>({
    resolver: zodResolver(enhancedApplicationSchema),
    defaultValues: {
      preferredCampus: "",
      preferredIntake: "",
      preferredAttendance: "",
      programType: "",
      stageYearLevel: "",
      program: "",
      firstName: "",
      middleName: "",
      lastName: "",
      livingWithDisability: false,
      title: "",
      gender: "",
      dateOfBirth: "",
      nationality: "",
      ethnicity: "",
      nationalId: "",
      kcseIndex: "",
      kcpeIndex: "",
      countyState: "",
      subCountyDistrict: "",
      address: "",
      careOf: "",
      town: "",
      email: "",
      mobilePhone: "",
      alternatePhone: "",
      academicQualifications: [
        { certification: "", overallScore: "", institutionName: "", yearRange: "" }
      ],
      howDidYouKnow: "",
      scholarshipInterest: false,
      additionalInfo: "",
      agreesToTerms: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "academicQualifications"
  });

  const handleFileChange = (fileType: keyof DocumentFiles, file: File | null) => {
    setDocumentFiles(prev => ({
      ...prev,
      [fileType]: file
    }));
  };

  const clearAllFiles = () => {
    setDocumentFiles({
      idCopy: null,
      birthCertificate: null,
      kcpeCertificate: null,
      kcseCertificate: null,
      kraCertificate: null,
    });
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      (input as HTMLInputElement).value = '';
    });
  };

  const applicationMutation = useMutation({
    mutationFn: async (data: EnhancedApplication) => {
      const formData = new FormData();
      
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'academicQualifications') {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, String(value));
        }
      });

      if (documentFiles.idCopy) formData.append('idCopy', documentFiles.idCopy);
      if (documentFiles.birthCertificate) formData.append('birthCertificate', documentFiles.birthCertificate);
      if (documentFiles.kcpeCertificate) formData.append('kcpeCertificate', documentFiles.kcpeCertificate);
      if (documentFiles.kcseCertificate) formData.append('kcseCertificate', documentFiles.kcseCertificate);
      if (documentFiles.kraCertificate) formData.append('kraCertificate', documentFiles.kraCertificate);

      const response = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit application');
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted Successfully!",
        description: "We have received your application and will contact you soon.",
      });
      form.reset();
      clearAllFiles();
      queryClient.invalidateQueries({ queryKey: ["/api/applications"] });
    },
    onError: (error) => {
      toast({
        title: "Application Failed",
        description: error instanceof Error ? error.message : "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
      console.error("Application error:", error);
    },
  });

  const onSubmit = (data: EnhancedApplication) => {
    applicationMutation.mutate(data);
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Online Course Application
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Complete your application form below to begin your educational journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                {/* Programme/Course Information */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Programme/Course Interested
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="preferredCampus"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Campus *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select campus" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="z-50 bg-white">
                                <SelectItem className="hover:bg-gray-100" value="main-campus">Kongoni College</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferredIntake"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Intake *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select intake" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="z-50 bg-white">
                                <SelectItem className="hover:bg-gray-100" value="september">September</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="january">January</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="may">May</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferredAttendance"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Attendance *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select attendance" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="z-50 bg-white">
                                <SelectItem className="hover:bg-gray-100" value="full-time">Full Time</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="part-time">Part Time</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="programType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Programme Type *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="z-50 bg-white">
                                <SelectItem className="hover:bg-gray-100" value="diploma">Diploma</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="certificate">Certificate</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="artisan">Artisan</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="stageYearLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Stage/Year/Level *</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="e.g., 1, 2, 3" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="program"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Programme/Course *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select programme" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="z-50 bg-white max-h-[200px] overflow-y-auto">
                                <SelectItem className="hover:bg-gray-100" value="diploma-mechanical">Diploma in Mechanical Engineering</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="diploma-it">Diploma in Information Technology</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="diploma-business">Diploma in Business Management</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="diploma-electrical">Diploma in Electrical Engineering</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="diploma-hotel">Diploma in Hotel Management</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="diploma-nursing">Diploma in Nursing</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="cert-automotive">Certificate in Motor Vehicle Mechanics</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="cert-computer">Certificate in Computer Applications</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="cert-carpentry">Certificate in Carpentry & Joinery</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="cert-fashion">Certificate in Fashion & Design</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="cert-agriculture">Certificate in Agriculture</SelectItem>
                                <SelectItem className="hover:bg-gray-100" value="cert-beauty">Certificate in Beauty & Cosmetology</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Personal Details */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Personal Details
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="First Name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="middleName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Middle Name</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Middle Name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Surname *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Surname" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="livingWithDisability"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="cursor-pointer">Living with Disability</FormLabel>
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Title *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="z-50 bg-white">
                                  <SelectItem className="hover:bg-gray-100" value="mr">Mr.</SelectItem>
                                  <SelectItem className="hover:bg-gray-100" value="mrs">Mrs.</SelectItem>
                                  <SelectItem className="hover:bg-gray-100" value="ms">Ms.</SelectItem>
                                  <SelectItem className="hover:bg-gray-100" value="dr">Dr.</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Gender *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="z-50 bg-white">
                                  <SelectItem className="hover:bg-gray-100" value="male">Male</SelectItem>
                                  <SelectItem className="hover:bg-gray-100" value="female">Female</SelectItem>
                                  <SelectItem className="hover:bg-gray-100" value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="dateOfBirth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date of Birth *</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="nationality"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nationality *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Nationality" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="ethnicity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ethnicity</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Ethnicity" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="nationalId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>National ID/Passport No *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="ID/Passport Number" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="kcseIndex"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>KCSE Index</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="INDEX NUMBER/YEAR" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="kcpeIndex"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>KCPE Index</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="KCPE Index" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="countyState"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>County/State/Province *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="County/State/Province" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subCountyDistrict"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Sub-County/District *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Sub-County/District" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Applicant Contacts */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Applicant Contacts
                    </h3>
                    
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address *</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Address" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="careOf"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>C/O</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="C/O" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="town"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Town *</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Town" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" {...field} placeholder="Email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="mobilePhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mobile Phone *</FormLabel>
                              <FormControl>
                                <Input type="tel" {...field} placeholder="Mobile Phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="alternatePhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Alternate Mobile Phone</FormLabel>
                              <FormControl>
                                <Input type="tel" {...field} placeholder="Alternate Phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Academic Qualifications */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Academic Qualifications
                      </h3>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => append({ certification: "", overallScore: "", institutionName: "", yearRange: "" })}
                        className="flex items-center gap-2"
                      >
                        <PlusIcon className="w-4 h-4" />
                        Add
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {fields.map((field, index) => (
                        <div key={field.id} className="border rounded-lg p-4 relative">
                          {fields.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => remove(index)}
                              className="absolute top-2 right-2 text-red-500"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </Button>
                          )}
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <FormField
                              control={form.control}
                              name={`academicQualifications.${index}.certification`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Certification *</FormLabel>
                                  <FormControl>
                                    <Input {...field} placeholder="Certification" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name={`academicQualifications.${index}.overallScore`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Overall Score *</FormLabel>
                                  <FormControl>
                                    <Input {...field} placeholder="Overall Score" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name={`academicQualifications.${index}.institutionName`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Institution Name *</FormLabel>
                                  <FormControl>
                                    <Input {...field} placeholder="Institution Name" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name={`academicQualifications.${index}.yearRange`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Year Range *</FormLabel>
                                  <FormControl>
                                    <Input {...field} placeholder="e.g., 2020-2024" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Document Upload Section */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Document Upload
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                          <label className="block mb-2 font-semibold text-gray-700">
                            <FileIcon className="inline w-4 h-4 mr-2" />
                            National ID/Passport Copy *
                          </label>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => handleFileChange('idCopy', e.target.files?.[0] || null)}
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                          {documentFiles.idCopy && (
                            <p className="text-sm text-green-600 mt-2">✓ {documentFiles.idCopy.name}</p>
                          )}
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                          <label className="block mb-2 font-semibold text-gray-700">
                            <FileIcon className="inline w-4 h-4 mr-2" />
                            Birth Certificate *
                          </label>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => handleFileChange('birthCertificate', e.target.files?.[0] || null)}
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                          {documentFiles.birthCertificate && (
                            <p className="text-sm text-green-600 mt-2">✓ {documentFiles.birthCertificate.name}</p>
                          )}
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                          <label className="block mb-2 font-semibold text-gray-700">
                            <FileIcon className="inline w-4 h-4 mr-2" />
                            KCPE Certificate *
                          </label>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => handleFileChange('kcpeCertificate', e.target.files?.[0] || null)}
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                          {documentFiles.kcpeCertificate && (
                            <p className="text-sm text-green-600 mt-2">✓ {documentFiles.kcpeCertificate.name}</p>
                          )}
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                          <label className="block mb-2 font-semibold text-gray-700">
                            <FileIcon className="inline w-4 h-4 mr-2" />
                            KCSE Certificate *
                          </label>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => handleFileChange('kcseCertificate', e.target.files?.[0] || null)}
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                          {documentFiles.kcseCertificate && (
                            <p className="text-sm text-green-600 mt-2">✓ {documentFiles.kcseCertificate.name}</p>
                          )}
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:col-span-2">
                          <label className="block mb-2 font-semibold text-gray-700">
                            <FileIcon className="inline w-4 h-4 mr-2" />
                            KRA PIN Certificate (Optional)
                          </label>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => handleFileChange('kraCertificate', e.target.files?.[0] || null)}
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                          {documentFiles.kraCertificate && (
                            <p className="text-sm text-green-600 mt-2">✓ {documentFiles.kraCertificate.name}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Information */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Additional Information
                    </h3>
                    
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="howDidYouKnow"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How did you know about us?</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="e.g., Social Media, Friend, Website" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="scholarshipInterest"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="cursor-pointer">
                              I am interested in scholarship opportunities
                            </FormLabel>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Comments</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                placeholder="Any additional information you'd like to share..."
                                rows={4}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Terms and Conditions */}
                <Card>
                  <CardContent className="pt-6">
                    <FormField
                      control={form.control}
                      name="agreesToTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="cursor-pointer font-semibold">
                              I agree to the Terms and Conditions *
                            </FormLabel>
                            <p className="text-sm text-gray-500">
                              By submitting this application, you confirm that all information provided is accurate and complete.
                            </p>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    disabled={applicationMutation.isPending}
                    className="px-12 py-6 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {applicationMutation.isPending ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}