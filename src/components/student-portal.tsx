// components/student-portal.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { FileIcon } from "lucide-react";
import { useState } from "react";
import { DEPARTMENTS, OTHER_PROGRAMMES } from "@/lib/academic-data";
import { KENYA_COUNTIES } from "@/lib/kenya-locations";

// Schema matching backend expectations
const applicationSchema = z.object({
  // Section A - Personal Details
  surname: z.string().min(1, { message: "Surname is required" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  otherNames: z.string().optional(),
  idPassportNumber: z.string().min(1, { message: "ID/Passport number is required" }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
  maritalStatus: z.string().min(1, { message: "Marital status is required" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  postalAddress: z.string().min(1, { message: "Postal address is required" }),
  postalCode: z.string().optional(),
  town: z.string().min(1, { message: "Town is required" }),
  county: z.string().min(1, { message: "County is required" }),
  subCounty: z.string().min(1, { message: "Sub-County is required" }),
  ward: z.string().optional(),
  location: z.string().optional(),
  subLocation: z.string().optional(),
  village: z.string().optional(),
  nemisCode: z.string().optional(),
  kraPin: z.string().optional(),
  mobileNumber: z.string().min(1, { message: "Mobile number is required" }),
  emailAddress: z.string().email({ message: "Valid email is required" }),
  nationality: z.string().min(1, { message: "Nationality is required" }),
  disability: z.boolean().default(false),
  disabilityDetails: z.string().optional(),
  
  // Section B - Academic Qualifications
  kcseSchool: z.string().optional(),
  kcseIndex: z.string().optional(),
  kcseYear: z.string().optional(),
  kcseMeanGrade: z.string().optional(),
  kcpeSchool: z.string().optional(),
  kcpeIndex: z.string().optional(),
  kcpeYear: z.string().optional(),
  kcpeMeanGrade: z.string().optional(),
  collegeAttended: z.string().optional(),
  collegeYear: z.string().optional(),
  collegeMeanGrade: z.string().optional(),
  
  // Section C - Sponsor/Guardian Details
  sponsorFullName: z.string().optional(),
  sponsorIdPassport: z.string().optional(),
  sponsorPostalAddress: z.string().optional(),
  sponsorTown: z.string().optional(),
  relationshipToApplicant: z.string().optional(),
  sponsorEmail: z.string().optional(),
  sponsorMobile: z.string().optional(),
  sponsorOccupation: z.string().optional(),
  
  // Section D - Course Details
  courseNameFull: z.string().min(1, { message: "Course name is required" }),
  intake: z.string().min(1, { message: "Intake is required" }),
  programmeDuration: z.string().optional(),
  examiningBody: z.string().optional(),
  level: z.string().min(1, { message: "Level is required" }),
  applicationType: z.string().min(1, { message: "Application type is required" }),
  
  // Agreement
  agreesToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms and Conditions",
  }),
});

type Application = z.infer<typeof applicationSchema>;

// Document upload state interface
interface DocumentFiles {
  idCopy: File | null;
  birthCertificate: File | null;
  kcpeCertificate: File | null;
  kcseCertificate: File | null;
  passportPhoto: File | null;
}

export default function StudentPortal() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [documentFiles, setDocumentFiles] = useState<DocumentFiles>({
    idCopy: null,
    birthCertificate: null,
    kcpeCertificate: null,
    kcseCertificate: null,
    passportPhoto: null,
  });

  // State for cascading location selects
  const [selectedCounty, setSelectedCounty] = useState<string>("");
  const [selectedSubCounty, setSelectedSubCounty] = useState<string>("");
  
  // State for department-based course filtering
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");

  const form = useForm<Application>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      surname: "",
      firstName: "",
      otherNames: "",
      idPassportNumber: "",
      dateOfBirth: "",
      maritalStatus: "",
      gender: "",
      postalAddress: "",
      postalCode: "",
      town: "",
      county: "",
      subCounty: "",
      ward: "",
      location: "",
      subLocation: "",
      village: "",
      nemisCode: "",
      kraPin: "",
      mobileNumber: "",
      emailAddress: "",
      nationality: "Kenyan",
      disability: false,
      disabilityDetails: "",
      kcseSchool: "",
      kcseIndex: "",
      kcseYear: "",
      kcseMeanGrade: "",
      kcpeSchool: "",
      kcpeIndex: "",
      kcpeYear: "",
      kcpeMeanGrade: "",
      collegeAttended: "",
      collegeYear: "",
      collegeMeanGrade: "",
      sponsorFullName: "",
      sponsorIdPassport: "",
      sponsorPostalAddress: "",
      sponsorTown: "",
      relationshipToApplicant: "",
      sponsorEmail: "",
      sponsorMobile: "",
      sponsorOccupation: "",
      courseNameFull: "",
      intake: "",
      programmeDuration: "",
      examiningBody: "",
      level: "",
      applicationType: "",
      agreesToTerms: false,
    },
  });

  // Get all courses from all departments plus other programmes
  const allCourses = [
    ...DEPARTMENTS.flatMap(dept => dept.courses),
    ...OTHER_PROGRAMMES
  ].sort((a, b) => a.name.localeCompare(b.name));
  
  // Get filtered courses based on selected department
  const getFilteredCourses = () => {
    if (!selectedDepartment) {
      return allCourses;
    }
    
    if (selectedDepartment === "Other Programmes") {
      return OTHER_PROGRAMMES;
    }
    
    const department = DEPARTMENTS.find(dept => dept.name === selectedDepartment);
    return department ? department.courses : [];
  };

  // Get sub-counties based on selected county
  const getSubCounties = () => {
    const county = KENYA_COUNTIES.find(c => c.name === selectedCounty);
    return county?.subCounties || [];
  };

  // Get wards based on selected sub-county
  const getWards = () => {
    const county = KENYA_COUNTIES.find(c => c.name === selectedCounty);
    const subCounty = county?.subCounties.find(sc => sc.name === selectedSubCounty);
    return subCounty?.wards || [];
  };

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
      passportPhoto: null,
    });
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      (input as HTMLInputElement).value = '';
    });
  };

  const applicationMutation = useMutation({
    mutationFn: async (data: Application) => {
      const formData = new FormData();
      
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value));
      });

      if (documentFiles.idCopy) formData.append('idCopy', documentFiles.idCopy);
      if (documentFiles.birthCertificate) formData.append('birthCertificate', documentFiles.birthCertificate);
      if (documentFiles.kcpeCertificate) formData.append('kcpeCertificate', documentFiles.kcpeCertificate);
      if (documentFiles.kcseCertificate) formData.append('kcseCertificate', documentFiles.kcseCertificate);
      if (documentFiles.passportPhoto) formData.append('passportPhoto', documentFiles.passportPhoto);

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
      setSelectedCounty("");
      setSelectedSubCounty("");
      setSelectedDepartment("");
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

  const onSubmit = (data: Application) => {
    if (!documentFiles.idCopy || !documentFiles.birthCertificate || 
        !documentFiles.kcpeCertificate || !documentFiles.kcseCertificate) {
      toast({
        title: "Missing Documents",
        description: "Please upload all required documents (ID, Birth Certificate, KCPE, and KCSE certificates)",
        variant: "destructive",
      });
      return;
    }
    
    applicationMutation.mutate(data);
  };

  return (
 <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center mb-6">
        <div className="w-12 h-1 bg-blue-600 rounded-full mr-4"></div>
        <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
          Online Course Application
        </h2>
        <div className="w-12 h-1 bg-blue-600 rounded-full ml-4"></div>
      </div>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Complete your application form below to begin your educational journey with us
      </p>
    </div>

        <div className="max-w-6xl mx-auto bg-gray-50 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                {/* SECTION A: PERSONAL DETAILS */}
                <Card className="border-2 border-gray-200 shadow-sm">
                  <CardContent className="pt-6 bg-white">
                    <div className="bg-blue-600 -mx-6 -mt-6 px-6 py-4 mb-6">
                      <h3 className="text-2xl font-bold text-white">
                        SECTION A: PERSONAL DETAILS
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="surname"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Surname *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Surname" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">First Name *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="First Name" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="otherNames"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Other Names</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Other Names" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="idPassportNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">ID/Passport No *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="ID/Passport Number" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="dateOfBirth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Date of Birth *</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Gender *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="border-gray-300 text-gray-900">
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="z-50 bg-white">
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="Male">Male</SelectItem>
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="Female">Female</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="maritalStatus"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Marital Status *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="border-gray-300 text-gray-900">
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="z-50 bg-white">
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="Single">Single</SelectItem>
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="Married">Married</SelectItem>
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="Divorced">Divorced</SelectItem>
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="Widowed">Widowed</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="nationality"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Nationality *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Nationality" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="disability"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="cursor-pointer text-gray-900 font-medium">Do you have any disability?</FormLabel>
                          </FormItem>
                        )}
                      />

                      {form.watch("disability") && (
                        <FormField
                          control={form.control}
                          name="disabilityDetails"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Disability Details</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Please specify" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="postalAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Postal Address *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="P.O. Box" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="postalCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Postal Code</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Postal Code" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="town"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Town *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Town" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="county"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">County *</FormLabel>
                              <Select 
                                onValueChange={(value) => {
                                  field.onChange(value);
                                  setSelectedCounty(value);
                                  setSelectedSubCounty("");
                                  form.setValue("subCounty", "");
                                  form.setValue("ward", "");
                                }} 
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="border-gray-300 text-gray-900">
                                    <SelectValue placeholder="Select County" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="z-50 bg-white max-h-[200px] overflow-y-auto">
                                  {KENYA_COUNTIES.map(county => (
                                    <SelectItem 
                                      key={county.code} 
                                      className="hover:bg-blue-50 text-gray-900" 
                                      value={county.name}
                                    >
                                      {county.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subCounty"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Sub-County *</FormLabel>
                              <Select 
                                onValueChange={(value) => {
                                  field.onChange(value);
                                  setSelectedSubCounty(value);
                                  form.setValue("ward", "");
                                }} 
                                value={field.value}
                                disabled={!selectedCounty}
                              >
                                <FormControl>
                                  <SelectTrigger className="border-gray-300 text-gray-900">
                                    <SelectValue placeholder={selectedCounty ? "Select Sub-County" : "Select County first"} />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="z-50 bg-white max-h-[200px] overflow-y-auto">
                                  {getSubCounties().map(subCounty => (
                                    <SelectItem 
                                      key={subCounty.name} 
                                      className="hover:bg-blue-50 text-gray-900" 
                                      value={subCounty.name}
                                    >
                                      {subCounty.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <FormField
                          control={form.control}
                          name="ward"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Ward</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                value={field.value}
                                disabled={!selectedSubCounty}
                              >
                                <FormControl>
                                  <SelectTrigger className="border-gray-300 text-gray-900">
                                    <SelectValue placeholder={selectedSubCounty ? "Select Ward" : "Select Sub-County first"} />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="z-50 bg-white max-h-[200px] overflow-y-auto">
                                  {getWards().map(ward => (
                                    <SelectItem 
                                      key={ward} 
                                      className="hover:bg-blue-50 text-gray-900" 
                                      value={ward}
                                    >
                                      {ward}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Location</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Location" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subLocation"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Sub-Location</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Sub-Location" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="village"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Village</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Village" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="mobileNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Mobile Number *</FormLabel>
                              <FormControl>
                                <Input type="tel" {...field} placeholder="0700000000" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="emailAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" {...field} placeholder="email@example.com" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="nemisCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">NEMIS Code</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="NEMIS Code" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="kraPin"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">KRA PIN</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="KRA PIN" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

 {/* SECTION B: ACADEMIC QUALIFICATIONS */}
<Card className="border-2 border-gray-200 shadow-sm">
  <CardContent className="pt-6 bg-white">
    <div className="bg-blue-600 -mx-6 -mt-6 px-6 py-4 mb-6">
      <h3 className="text-2xl font-bold text-white">
        SECTION B: ACADEMIC QUALIFICATIONS
      </h3>
    </div>
    
    <div className="space-y-6">
      {/* KCSE */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <h4 className="font-semibold text-lg mb-4 text-gray-900">KCSE Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="kcseSchool"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-semibold">School Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="School Name" className="border-gray-300 text-gray-900" />
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
                <FormLabel className="text-gray-900 font-semibold">Index Number</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Index Number" className="border-gray-300 text-gray-900"  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="kcseYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-semibold">Year</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Year" className="border-gray-300 text-gray-900" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="kcseMeanGrade"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-semibold">Mean Grade</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., B+" className="border-gray-300 text-gray-900" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* KCPE */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <h4 className="font-semibold text-lg mb-4 text-gray-900">KCPE Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="kcpeSchool"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-semibold">School Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="School Name" className="border-gray-300 text-gray-900"  />
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
                <FormLabel className="text-gray-900 font-semibold">Index Number</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Index Number" className="border-gray-300 text-gray-900" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="kcpeYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-semibold">Year</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Year" className="border-gray-300 text-gray-900" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="kcpeMeanGrade"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-semibold">Mean Grade/Marks</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., 350" className="border-gray-300 text-gray-900" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* College (Optional) */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <h4 className="font-semibold text-lg mb-4 text-gray-900">College Details (Optional)</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="collegeAttended"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-semibold">College Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="College Name" className="border-gray-300 text-gray-900"  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="collegeYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-semibold">Year</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Year" className="border-gray-300 text-gray-900"  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="collegeMeanGrade"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-semibold">Grade/Marks</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Grade/Marks" className="border-gray-300 text-gray-900" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  </CardContent>
</Card>

                {/* SECTION C: SPONSOR/GUARDIAN DETAILS */}
                <Card className="border-2 border-gray-200 shadow-sm">
                  <CardContent className="pt-6 bg-white">
                    <div className="bg-blue-600 -mx-6 -mt-6 px-6 py-4 mb-6">
                      <h3 className="text-2xl font-bold text-white">
                        SECTION C: SPONSOR/GUARDIAN DETAILS (Optional)
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="sponsorFullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Full Name</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Sponsor/Guardian Full Name" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="sponsorIdPassport"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">ID/Passport No</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="ID/Passport Number" className="border-gray-300 text-gray-900"/>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="relationshipToApplicant"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold">Relationship to Applicant</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="e.g., Father, Mother, Guardian" className="border-gray-300 text-gray-900"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="sponsorPostalAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Postal Address</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="P.O. Box" className="border-gray-300 text-gray-900"/>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="sponsorTown"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Town</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Town" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="sponsorMobile"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Mobile Number</FormLabel>
                              <FormControl>
                                <Input type="tel" {...field} placeholder="0700000000" className="border-gray-300 text-gray-900"/>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="sponsorEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Email</FormLabel>
                              <FormControl>
                                <Input type="email" {...field} placeholder="email@gmail.com" className="border-gray-300 text-gray-900"/>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="sponsorOccupation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold">Occupation</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Occupation" className="border-gray-300 text-gray-900"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* SECTION D: COURSE DETAILS */}
                <Card className="border-2 border-gray-200 shadow-sm">
                  <CardContent className="pt-6 bg-white">
                    <div className="bg-blue-600 -mx-6 -mt-6 px-6 py-4 mb-6">
                      <h3 className="text-2xl font-bold text-white">
                        SECTION D: COURSE DETAILS
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      {/* Department Selection */}
                      <div className="border-b pb-4">
                        <label className="block text-sm font-medium text-gray-900 mb-6">
                          Department *
                        </label>
                        <Select 
                          value={selectedDepartment} 
                          onValueChange={(value) => {
                            setSelectedDepartment(value);
                            // Clear course selection when department changes
                            form.setValue("courseNameFull", "");
                          }}
                        >
                          <SelectTrigger className="w-full border-gray-300 text-gray-900">
                            <SelectValue placeholder="Select department first" />
                          </SelectTrigger>
                          <SelectContent className="z-50 bg-white max-h-[200px] overflow-y-auto">
                            {DEPARTMENTS.map(dept => (
                              <SelectItem 
                                key={dept.id} 
                                className="hover:bg-blue-50 text-gray-900" 
                                value={dept.name}
                              >
                                {dept.name}
                              </SelectItem>
                            ))}
                            <SelectItem 
                              className="hover:bg-blue-50 text-gray-900" 
                              value="Other Programmes"
                            >
                              Other Programmes
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <FormField
                        control={form.control}
                        name="courseNameFull"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold">Course Name *</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              value={field.value}
                              disabled={!selectedDepartment}
                            >
                              <FormControl>
                                <SelectTrigger className="border-gray-300 text-gray-900">
                                  <SelectValue placeholder={selectedDepartment ? "Select course" : "Select department first"} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="z-50 bg-white max-h-[200px] overflow-y-auto">
                                {getFilteredCourses().map(course => (
                                  <SelectItem 
                                    key={course.name} 
                                    className="hover:bg-blue-50 text-gray-900" 
                                    value={course.name}
                                  >
                                    {course.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="level"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Level *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="border-gray-300 text-gray-900">
                                    <SelectValue placeholder="Select level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="z-50 bg-white">
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="Diploma">Diploma</SelectItem>
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="Certificate">Certificate</SelectItem>
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="Artisan">Artisan</SelectItem>
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="Short Course">Short Course</SelectItem>
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="NITA">NITA</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="intake"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Intake *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="border-gray-300 text-gray-900">
                                    <SelectValue placeholder="Select intake" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="z-50 bg-white">
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="January 2025">January 2025</SelectItem>
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="May 2025">May 2025</SelectItem>
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="September 2025">September 2025</SelectItem>
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="January 2026">January 2026</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="applicationType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Application Type *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="border-gray-300 text-gray-900">
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="z-50 bg-white">
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="Full-Time">Full-Time</SelectItem>
                                  <SelectItem className="hover:bg-blue-50 text-gray-900" value="Part-Time">Part-Time</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="programmeDuration"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-900 font-semibold">Programme Duration</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="e.g., 2 years, 6 months" className="border-gray-300 text-gray-900" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="examiningBody"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold">Examining Body</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-gray-300 text-gray-900">
                                  <SelectValue placeholder="Select examining body" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="z-50 bg-white">
                                <SelectItem className="hover:bg-blue-50 text-gray-900" value="CDACC">CDACC</SelectItem>
                                <SelectItem className="hover:bg-blue-50 text-gray-900" value="KNEC">KNEC</SelectItem>
                                <SelectItem className="hover:bg-blue-50 text-gray-900" value="NITA">NITA</SelectItem>
                                <SelectItem className="hover:bg-blue-50 text-gray-900" value="KASNEB">KASNEB</SelectItem>
                                <SelectItem className="hover:bg-blue-50 text-gray-900" value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* DOCUMENT UPLOAD SECTION */}
                <Card className="border-2 border-gray-200 shadow-sm">
                  <CardContent className="pt-6 bg-white">
                    <div className="bg-blue-600 -mx-6 -mt-6 px-6 py-4 mb-6">
                      <h3 className="text-2xl font-bold text-white">
                        Document Upload
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                          <label className="block mb-2 font-semibold text-gray-900">
                            <FileIcon className="inline w-4 h-4 mr-2" />
                            National ID/Passport Copy *
                          </label>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => handleFileChange('idCopy', e.target.files?.[0] || null)}
                            className="w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                          {documentFiles.idCopy && (
                            <p className="text-sm text-green-600 mt-2">✓ {documentFiles.idCopy.name}</p>
                          )}
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                          <label className="block mb-2 font-semibold text-gray-900">
                            <FileIcon className="inline w-4 h-4 mr-2" />
                            Birth Certificate *
                          </label>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => handleFileChange('birthCertificate', e.target.files?.[0] || null)}
                            className="w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                          {documentFiles.birthCertificate && (
                            <p className="text-sm text-green-600 mt-2">✓ {documentFiles.birthCertificate.name}</p>
                          )}
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                          <label className="block mb-2 font-semibold text-gray-900">
                            <FileIcon className="inline w-4 h-4 mr-2" />
                            KCPE Certificate *
                          </label>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => handleFileChange('kcpeCertificate', e.target.files?.[0] || null)}
                            className="w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                          {documentFiles.kcpeCertificate && (
                            <p className="text-sm text-green-600 mt-2">✓ {documentFiles.kcpeCertificate.name}</p>
                          )}
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                          <label className="block mb-2 font-semibold text-gray-900">
                            <FileIcon className="inline w-4 h-4 mr-2" />
                            KCSE Certificate *
                          </label>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => handleFileChange('kcseCertificate', e.target.files?.[0] || null)}
                            className="w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                          {documentFiles.kcseCertificate && (
                            <p className="text-sm text-green-600 mt-2">✓ {documentFiles.kcseCertificate.name}</p>
                          )}
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:col-span-2">
                          <label className="block mb-2 font-semibold text-gray-900">
                            <FileIcon className="inline w-4 h-4 mr-2" />
                            Passport Photo (Optional)
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange('passportPhoto', e.target.files?.[0] || null)}
                            className="w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                          {documentFiles.passportPhoto && (
                            <p className="text-sm text-green-600 mt-2">✓ {documentFiles.passportPhoto.name}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* TERMS AND CONDITIONS */}
                <Card className="border-2 border-gray-200 shadow-sm">
                  <CardContent className="pt-6 bg-white">
                    <div className="bg-blue-600 -mx-6 -mt-6 px-6 py-4 mb-6">
                      <h3 className="text-2xl font-bold text-white">
                        Declaration
                      </h3>
                    </div>
                    
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
                            <FormLabel className="cursor-pointer font-semibold text-gray-900">
                              I agree to the Terms and Conditions *
                            </FormLabel>
                            <p className="text-sm text-gray-700">
                              I declare that the information provided in this application is true and correct to the best of my knowledge. 
                              I understand that providing false information may result in the rejection of my application or termination of my studies.
                            </p>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* SUBMIT BUTTON */}
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