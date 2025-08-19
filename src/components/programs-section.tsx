import { 
  Award, 
  Users, 
  Wrench, 
  GraduationCap, 
  Briefcase, 
  Clock 
} from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      icon: Award,
      title: "Accredited Programs",
      description: "Nationally recognized diploma and certificate programs that meet industry standards and employer requirements.",
      bgColor: "bg-primary"
    },
    {
      icon: Users,
      title: "Industry Partnerships",
      description: "Strong connections with leading employers ensuring internship opportunities and job placement for graduates.",
      bgColor: "bg-blue-500"
    },
    {
      icon: Wrench,
      title: "Modern Equipment",
      description: "State-of-the-art laboratories and workshops equipped with the latest technology and industry-standard tools.",
      bgColor: "bg-green-500"
    },
    {
      icon: GraduationCap,
      title: "Experienced Faculty",
      description: "Learn from qualified instructors with extensive industry experience and academic credentials.",
      bgColor: "bg-purple-500"
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description: "Comprehensive career guidance, job placement assistance, and ongoing professional development support.",
      bgColor: "bg-secondary"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Day and evening classes available to accommodate working professionals and different learning preferences.",
      bgColor: "bg-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Kongoni Technical?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advantages that make us the premier choice for technical and vocational education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className={`w-16 h-16 ${program.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}