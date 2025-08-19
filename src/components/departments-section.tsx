'use client';

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Department } from "@shared/schema";

const fallbackDepartments: Department[] = [
  {
    id: "business",
    name: "Business Department",
    description: "Developing future leaders in commerce and entrepreneurship.",
    imageUrl: "/images/departments/business.jpg",
  },
  {
    id: "ict",
    name: "Computing & Informatics Department",
    description: "Empowering students with modern computing and digital skills.",
    imageUrl: "/images/departments/ict.jpg",
  },
  {
    id: "civil",
    name: "Building & Civil Engineering Department",
    description: "Training in structural design, construction, and surveying.",
    imageUrl: "/images/departments/building.jpg",
  },
  {
    id: "electrical",
    name: "Electrical & Electronics Engineering Department",
    description: "Hands-on experience in electrical systems and installations.",
    imageUrl: "/images/departments/electrical.jpg",
  },
  {
    id: "automotive",
    name: "Automotive & Mechanical Engineering Department",
    description: "Mastering vehicle diagnostics, repair, and maintenance.",
    imageUrl: "/images/departments/automotive.jpg",
  },
  {
    id: "hospitality",
    name: "Food & Beverage Department",
    description: "Professional training in culinary arts and hospitality service.",
    imageUrl: "/images/departments/hospitality.jpg",
  },
  {
    id: "agriculture",
    name: "Agriculture Department",
    description: "Innovative farming techniques and agribusiness education.",
    imageUrl: "/images/departments/agriculture.jpg",
  },
];

export default function DepartmentsSection() {
  const { data: departments, isLoading, error } = useQuery<Department[]>({
    queryKey: ["/api/departments"],
    // No need for queryFn since it's configured globally in queryClient
  });

  const departmentList = departments ?? fallbackDepartments;

  if (error) {
    console.warn("Error loading departments:", error);
  }

  if (isLoading) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Skeleton className="h-8 w-48 mx-auto mb-3" />
            <Skeleton className="h-5 w-80 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="w-full h-36" />
                <CardContent className="p-4">
                  <Skeleton className="h-5 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="departments" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Our Departments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of academic departments, each designed to provide specialized training and expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {departmentList.map((department) => (
            <Link key={department.id} href={`/departments/${department.id}`} className="block">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={department.imageUrl}
                    alt={`${department.name} Department`}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-3">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 leading-tight">
                    {department.name}
                  </h3>
                  <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">
                    {department.description}
                  </p>
                  <span className="text-primary font-medium text-xs mt-2 inline-block hover:underline">
                    Learn More →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}