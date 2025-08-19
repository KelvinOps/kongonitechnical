import { notFound } from "next/navigation";
import { departments } from "@/data/departments";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default async function DepartmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const department = departments.find((dept) => dept.id === id);

  if (!department) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Department Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {department.name}
        </h1>

        {/* Background Information Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Background Information</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {department.backgroundInfo || department.description}
          </p>
        </div>

        {/* HOD Profile Section with Social Media */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Head of Department</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{department.hodName}</h3>
              <p className="text-gray-600 mb-4">{department.hodTitle || "Head of Department"}</p>
              <p className="text-gray-700">{department.hodBio || "Leading the department with excellence and dedication to student success."}</p>
            </div>
          </div>
          
          <div className="lg:w-80 flex flex-col items-center">
            <Image
              src={department.hodImage}
              alt={`Head of Department - ${department.hodName}`}
              width={192}
              height={192}
              className="w-48 h-48 object-cover rounded-full shadow-lg mb-4"
            />
            <div className="flex space-x-4">
              <a href={department.hodSocial?.facebook || "#"} className="text-blue-600 hover:text-blue-800 transition-colors">
                <Facebook size={24} />
              </a>
              <a href={department.hodSocial?.twitter || "#"} className="text-blue-400 hover:text-blue-600 transition-colors">
                <Twitter size={24} />
              </a>
              <a href={department.hodSocial?.linkedin || "#"} className="text-blue-700 hover:text-blue-900 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${department.hodSocial?.email || ""}`} className="text-gray-600 hover:text-gray-800 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              {department.vision || "To be a leading department in providing quality education and training that meets industry standards and prepares students for successful careers."}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              {department.mission || "To provide comprehensive education and practical training that empowers students with the knowledge and skills needed to excel in their chosen fields."}
            </p>
          </div>
        </div>

        {/* Staff Breakdown Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Teaching Staff</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {(department.teachingStaff || department.trainers || []).map((staff, i) => (
                <li key={i} className="text-gray-800">{staff}</li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Non-Teaching Staff</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {(department.nonTeachingStaff || ["Administrative Assistant", "Lab Technician", "Equipment Manager"]).map((staff, i) => (
                <li key={i} className="text-gray-800">{staff}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Objectives & Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Objectives</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {(department.objectives || [
                "Provide quality education and training",
                "Develop industry-relevant skills",
                "Foster innovation and creativity",
                "Prepare students for employment"
              ]).map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Goals</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {(department.goals || [
                "Maintain high academic standards",
                "Strengthen industry partnerships",
                "Enhance practical training facilities",
                "Increase graduate employment rates"
              ]).map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trainee Activities Gallery */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Trainee Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(department.activityImages || []).map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Activity ${i + 1}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded shadow-md hover:shadow-lg transition-shadow"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}