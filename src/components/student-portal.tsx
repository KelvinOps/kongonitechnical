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
import { useToast } from "@/components/ui/toast";
import { apiRequest } from "@/lib/queryClient";
import { PlusIcon, TrashIcon } from "lucide-react";

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
  academicCertificates: z.any().optional(),
  howDidYouKnow: z.string().optional(),
  scholarshipInterest: z.boolean().default(false),
  additionalInfo: z.string().optional(),
  agreesToTerms: z.boolean()
    .refine(val => val === true, { message: "You must agree to terms" }),
});

type EnhancedApplication = z.infer<typeof enhancedApplicationSchema>;

export default function StudentPortal() {
  const { addToast } = useToast();
  const queryClient = useQueryClient();

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

  const applicationMutation = useMutation({
    mutationFn: async (data: EnhancedApplication) => {
      const formData = new FormData();
      
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'academicQualifications') {
          formData.append(key, JSON.stringify(value));
        } else if (key === 'academicCertificates' && value) {
          formData.append(key, value as File);
        } else {
          formData.append(key, String(value));
        }
      });

      const response = await apiRequest("POST", "/api/applications", formData);
      return response.json();
    },
    onSuccess: () => {
      addToast({
        title: "Application Submitted Successfully!",
        description: "We have received your application and will contact you soon.",
        variant: "default",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/applications"] });
    },
    onError: (error) => {
      addToast({
        title: "Application Failed",
        description: "There was an error submitting your application. Please try again.",
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
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                            <FormLabel>Living with Disability</FormLabel>
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
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
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

                    <div className="mt-6">
                      <FormField
                        control={form.control}
                        name="academicCertificates"
                        render={({ field: { onChange, ...field } }) => (
                          <FormItem>
                            <FormLabel>Academic Certificate(s) Attachment (Combined in one PDF file format) *</FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                accept=".pdf"
                                onChange={(e) => onChange(e.target.files?.[0])}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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
                        name="scholarshipInterest"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel>Scholarship(s)</FormLabel>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="howDidYouKnow"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How did you know about Us:</FormLabel>
                            <FormControl>
                              <Textarea {...field} placeholder="How did you know about Us" rows={3} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Comments:</FormLabel>
                            <FormControl>
                              <Textarea {...field} placeholder="Any additional information..." rows={3} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

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
                              <FormLabel className="text-sm">
                                I agree to the Terms and Conditions and Privacy Policy *
                              </FormLabel>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Buttons */}
                <div className="flex justify-center gap-4 pt-6">
                  <Button
                    type="submit"
                    className="px-8 py-3 bg-primary text-white hover:bg-secondary transition-colors duration-200"
                    disabled={applicationMutation.isPending}
                  >
                    {applicationMutation.isPending ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      "SUBMIT"
                    )}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                    className="px-8 py-3"
                  >
                    CLEAR
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => window.history.back()}
                    className="px-8 py-3"
                  >
                    CANCEL
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          {/* Information Panel */}
          <div className="bg-gray-50 p-8 border-t">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Application Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">📅</span> Application Deadlines
                </h4>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>• <span className="font-medium">September Intake:</span> July 31st</p>
                  <p>• <span className="font-medium">January Intake:</span> November 30th</p>
                  <p>• <span className="font-medium">May Intake:</span> March 31st</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-secondary">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">📋</span> Required Documents
                </h4>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>• Academic Certificates (PDF)</p>
                  <p>• National ID Copy</p>
                  <p>• Passport Photos</p>
                  <p>• Application Fee Receipt</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-accent">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">💰</span> Registration Fee
                </h4>
                <div className="text-gray-600 text-sm">
                  <p className="font-medium text-primary mb-2">KES 3,900 (non-refundable)</p>
                  <p className="text-xs">Payment methods accepted:</p>
                  <p className="text-xs">• M-Pesa • Bank Transfer • Cash</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">📞</span> Need Help?
                </h4>
                <div className="text-gray-600 text-sm space-y-1">
                  <p className="font-medium">Admissions Office</p>
                  <p>Phone: <a href="tel:+254700123456" className="text-primary hover:underline">+254 700 123 456</a></p>
                  <p>Email: <a href="mailto:admissions@kongoni.ac.ke" className="text-primary hover:underline">admissions@kongoni.ac.ke</a></p>
                  <p className="text-xs">Office Hours: 8AM - 5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}