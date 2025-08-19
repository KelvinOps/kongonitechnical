// src/app/api/courses/route.ts
import { NextResponse } from "next/server";

const allCourses = [
  // DIPLOMA COURSES (Level 6) - Featured ones for homepage
  {
    id: "d1",
    title: "Diploma in Information Communication Technology",
    description: "Advanced ICT training covering programming, networking, database management, and system administration for modern digital careers.",
    duration: "3 years",
    type: "diploma",
    level: "Level 6",
    featured: true
  },
  {
    id: "d2", 
    title: "Diploma in Electrical Engineering",
    description: "Comprehensive electrical engineering program covering power systems, electronics, control systems, and electrical installations.",
    duration: "3 years",
    type: "diploma",
    level: "Level 6",
    featured: true
  },
  {
    id: "d3",
    title: "Diploma in Civil Engineering", 
    description: "Practical civil engineering training in construction, structural design, surveying, and project management for infrastructure development.",
    duration: "3 years",
    type: "diploma",
    level: "Level 6",
    featured: true
  },
  {
    id: "d4",
    title: "Diploma in Agriculture Extension",
    description: "Agricultural development and extension services training focusing on sustainable farming practices and rural community development.",
    duration: "3 years", 
    type: "diploma",
    level: "Level 6",
    featured: true
  },
  {
    id: "d5",
    title: "Diploma in Beauty Therapy",
    description: "Professional beauty therapy and cosmetology training covering skincare, makeup artistry, spa treatments, and salon management.",
    duration: "2 years",
    type: "diploma",
    level: "Level 6",
    featured: true
  },
  {
    id: "d6",
    title: "Diploma in Survey",
    description: "Professional land surveying training including geodetic surveys, cartography, GIS applications, and land measurement techniques.",
    duration: "3 years",
    type: "diploma",
    level: "Level 6",
    featured: true
  },
  // Additional diploma courses (not featured on homepage)
  {
    id: "d7",
    title: "Diploma in Community Development and Social Work",
    description: "Social work training focusing on community development, counseling, project management, and social intervention strategies.",
    duration: "3 years",
    type: "diploma",
    level: "Level 6",
    featured: false
  },
  {
    id: "d8",
    title: "Diploma in Office Administration",
    description: "Advanced office management training covering business communication, project coordination, and administrative leadership.",
    duration: "2 years",
    type: "diploma",
    level: "Level 6",
    featured: false
  },
  {
    id: "d9",
    title: "Diploma in Fashion Design",
    description: "Advanced fashion design training covering haute couture, fashion business, textile technology, and design innovation.",
    duration: "3 years",
    type: "diploma",
    level: "Level 6",
    featured: false
  },
  {
    id: "d10",
    title: "Diploma in Accountancy",
    description: "Comprehensive accounting training covering financial accounting, auditing, taxation, and business finance management.",
    duration: "3 years",
    type: "diploma",
    level: "Level 6",
    featured: false
  },
  {
    id: "d11",
    title: "Diploma in Human Resource Management",
    description: "Human resource management training covering recruitment, employee relations, training development, and organizational behavior.",
    duration: "2 years",
    type: "diploma",
    level: "Level 6",
    featured: false
  },
  {
    id: "d12",
    title: "Diploma in Supply Chain Management",
    description: "Supply chain and logistics management covering procurement, inventory management, distribution, and operations optimization.",
    duration: "2 years",
    type: "diploma",
    level: "Level 6",
    featured: false
  },
  {
    id: "d13",
    title: "Diploma in Building Technology",
    description: "Construction technology and building management covering construction methods, project management, and building systems.",
    duration: "3 years",
    type: "diploma",
    level: "Level 6",
    featured: false
  },
  {
    id: "d14",
    title: "Diploma in Quantity Survey",
    description: "Quantity surveying and cost management training covering construction economics, project estimation, and contract administration.",
    duration: "3 years",
    type: "diploma",
    level: "Level 6",
    featured: false
  },
  {
    id: "d15",
    title: "Diploma in Electrical and Electronics Engineering (Power Option)",
    description: "Specialized electrical engineering focusing on power systems, renewable energy, and electrical power distribution.",
    duration: "3 years",
    type: "diploma",
    level: "Level 6",
    featured: false
  },
  {
    id: "d16",
    title: "Diploma in Welding Fabrication",
    description: "Advanced welding and fabrication training covering various welding techniques, metallurgy, and structural fabrication.",
    duration: "2 years",
    type: "diploma",
    level: "Level 6",
    featured: false
  },
  {
    id: "d17",
    title: "Diploma in Secretarial Studies",
    description: "Professional secretarial training covering office administration, business communication, and executive support services.",
    duration: "2 years",
    type: "diploma",
    level: "Level 6",
    featured: false
  },

  // CERTIFICATE COURSES (Level 5) - Featured ones for homepage
  {
    id: "c1",
    title: "Certificate in Information Communication Technology",
    description: "Essential ICT skills including computer applications, basic programming, web design, and digital literacy for entry-level positions.",
    duration: "2 years",
    type: "certificate",
    level: "Level 5",
    featured: true
  },
  {
    id: "c2",
    title: "Certificate in Plumbing", 
    description: "Hands-on plumbing training covering pipe installation, repair techniques, water systems, and basic construction plumbing skills.",
    duration: "2 years",
    type: "certificate",
    level: "Level 5",
    featured: true
  },
  {
    id: "c3",
    title: "Certificate in Automotive Technician",
    description: "Motor vehicle maintenance and repair training including engine diagnostics, electrical systems, and mechanical troubleshooting.",
    duration: "2 years",
    type: "certificate",
    level: "Level 5",
    featured: true
  },
  {
    id: "c4",
    title: "Certificate in Office Administration",
    description: "Administrative skills training covering office management, communication, record keeping, and basic accounting for business support roles.",
    duration: "2 years", 
    type: "certificate",
    level: "Level 5",
    featured: true
  },
  {
    id: "c5",
    title: "Certificate in Fashion Design",
    description: "Creative fashion design training including pattern making, garment construction, textile knowledge, and fashion illustration.",
    duration: "2 years",
    type: "certificate",
    level: "Level 5",
    featured: true
  },
  {
    id: "c6",
    title: "Certificate in Agriculture",
    description: "Basic agricultural training covering crop production, animal husbandry, soil management, and sustainable farming practices.",
    duration: "2 years",
    type: "certificate",
    level: "Level 5",
    featured: true
  },
  // Additional certificate courses (Level 4 & 5)
  {
    id: "c7",
    title: "Certificate in Electrical and Electronics",
    description: "Electrical installation and maintenance training covering wiring, circuit analysis, and electronic component repair.",
    duration: "2 years",
    type: "certificate",
    level: "Level 4",
    featured: false
  },
  {
    id: "c8",
    title: "Certificate in Building Technology",
    description: "Construction technology covering building materials, structural basics, site supervision, and construction safety.",
    duration: "2 years",
    type: "certificate",
    level: "Level 4",
    featured: false
  },
  {
    id: "c9",
    title: "Certificate in Community Development and Social Work",
    description: "Community development training focusing on social intervention, project management, and community mobilization.",
    duration: "2 years",
    type: "certificate",
    level: "Level 5",
    featured: false
  },
  {
    id: "c10",
    title: "Certificate in Supply Chain Management",
    description: "Supply chain fundamentals covering procurement, inventory management, and logistics coordination.",
    duration: "2 years",
    type: "certificate",
    level: "Level 5",
    featured: false
  },
  {
    id: "c11",
    title: "Certificate in Secretarial Studies",
    description: "Secretarial skills training covering office procedures, business communication, and administrative support.",
    duration: "2 years",
    type: "certificate",
    level: "Level 4",
    featured: false
  },
  {
    id: "c12",
    title: "Certificate in Land Survey",
    description: "Basic surveying techniques covering land measurement, mapping, and survey equipment operation.",
    duration: "2 years",
    type: "certificate",
    level: "Level 4",
    featured: false
  },
  {
    id: "c13",
    title: "Certificate in Beauty Therapy",
    description: "Beauty therapy training covering skincare, facial treatments, body therapies, and salon management.",
    duration: "2 years",
    type: "certificate",
    level: "Level 5",
    featured: false
  },
  {
    id: "c14",
    title: "Certificate in Hairdressing",
    description: "Professional hairdressing training covering cutting, styling, coloring, and hair treatment techniques.",
    duration: "2 years",
    type: "certificate",
    level: "Level 5",
    featured: false
  },
  {
    id: "c15",
    title: "Certificate in Electrical Operator",
    description: "Electrical operations training covering power systems operation, electrical safety, and maintenance procedures.",
    duration: "2 years",
    type: "certificate",
    level: "Level 5",
    featured: false
  },
  {
    id: "c16",
    title: "Certificate in Human Resource Management",
    description: "Human resource fundamentals covering recruitment, employee relations, and basic HR administration.",
    duration: "2 years",
    type: "certificate",
    level: "Level 5",
    featured: false
  },
  {
    id: "c17",
    title: "Certificate in Welding Fabrication",
    description: "Welding skills training covering arc welding, gas welding, and basic fabrication techniques.",
    duration: "1 year",
    type: "certificate",
    level: "Level 4",
    featured: false
  },
  {
    id: "c18",
    title: "Certificate in Hair Dressing and Beauty",
    description: "Combined hairdressing and beauty training covering styling, treatments, and aesthetic services.",
    duration: "2 years",
    type: "certificate",
    level: "Level 4",
    featured: false
  },
  {
    id: "c19",
    title: "Certificate in Fashion Design and Clothing",
    description: "Fashion design and garment construction covering pattern making, sewing, and clothing production.",
    duration: "2 years",
    type: "certificate",
    level: "Level 4",
    featured: false
  },

  // ARTISAN COURSES (Level 3-4) - Featured ones for homepage
  {
    id: "a1",
    title: "Artisan in Electrical Installation",
    description: "Basic electrical installation training covering residential wiring, electrical safety, and basic electrical maintenance.",
    duration: "1 year",
    type: "artisan",
    level: "Level 3",
    featured: true
  },
  {
    id: "a2",
    title: "Artisan in ICT Technician",
    description: "ICT support training covering computer repair, network setup, and basic technical support services.",
    duration: "1 year",
    type: "artisan",
    level: "Level 4",
    featured: true
  },
  {
    id: "a3",
    title: "Artisan in Automotive Technology",
    description: "Basic automotive repair covering engine maintenance, vehicle diagnostics, and mechanical troubleshooting.",
    duration: "1 year",
    type: "artisan",
    level: "Level 4",
    featured: true
  },
  {
    id: "a4",
    title: "Artisan in Welding Fabrication",
    description: "Basic welding skills covering arc welding, cutting techniques, and simple fabrication work.",
    duration: "1 year",
    type: "artisan",
    level: "Level 3",
    featured: true
  },
  {
    id: "a5",
    title: "Artisan in Masonry",
    description: "Masonry and stonework training covering bricklaying, concrete work, and basic construction techniques.",
    duration: "1 year",
    type: "artisan",
    level: "Level 3",
    featured: true
  },
  {
    id: "a6",
    title: "Artisan in Plumbing",
    description: "Basic plumbing skills covering pipe installation, repair work, and water system maintenance.",
    duration: "1 year",
    type: "artisan",
    level: "Level 3",
    featured: true
  },
  // Additional artisan courses (not featured on homepage)
  {
    id: "a7",
    title: "Artisan in Social Work and Community Development",
    description: "Community support training covering basic counseling, community mobilization, and social intervention.",
    duration: "1 year",
    type: "artisan",
    level: "Level 4",
    featured: false
  },
  {
    id: "a8",
    title: "Artisan in Hairdressing",
    description: "Basic hairdressing skills covering cutting, styling, and hair care techniques.",
    duration: "1 year",
    type: "artisan",
    level: "Level 4",
    featured: false
  },
  {
    id: "a9",
    title: "Artisan in Beauty Therapy",
    description: "Basic beauty therapy covering skincare, makeup application, and basic aesthetic treatments.",
    duration: "1 year",
    type: "artisan",
    level: "Level 4",
    featured: false
  },
  {
    id: "a10",
    title: "Artisan in Food Production",
    description: "Food preparation and production covering cooking techniques, food safety, and kitchen management.",
    duration: "1 year",
    type: "artisan",
    level: "Level 4",
    featured: false
  },
  {
    id: "a11",
    title: "Artisan in Automotive Mechanic",
    description: "Basic automotive maintenance covering routine servicing, tire change, and simple repairs.",
    duration: "1 year",
    type: "artisan",
    level: "Level 3",
    featured: false
  },
  {
    id: "a12",
    title: "Artisan in Fashion Design",
    description: "Basic fashion design covering pattern making, sewing techniques, and garment construction.",
    duration: "1 year",
    type: "artisan",
    level: "Level 4",
    featured: false
  },
  {
    id: "a13",
    title: "Artisan in Fashion Design (Dress making)",
    description: "Basic dressmaking skills covering simple garment construction and alteration techniques.",
    duration: "1 year",
    type: "artisan",
    level: "Level 3",
    featured: false
  },
  {
    id: "a14",
    title: "Artisan in Agriculture",
    description: "Basic agricultural practices covering crop cultivation, animal care, and farm maintenance.",
    duration: "1 year",
    type: "artisan",
    level: "Level 3",
    featured: false
  },
  {
    id: "a15",
    title: "Artisan in Store Keeping",
    description: "Inventory management training covering stock control, record keeping, and warehouse operations.",
    duration: "3 months",
    type: "artisan",
    level: "Level 3",
    featured: false
  },
  {
    id: "a16",
    title: "Artisan in Garment Making",
    description: "Garment production training covering cutting, sewing, and finishing techniques.",
    duration: "1 year",
    type: "artisan",
    level: "Level 3",
    featured: false
  },
  {
    id: "a17",
    title: "Artisan in Horticulture",
    description: "Horticultural practices covering plant cultivation, garden management, and greenhouse operations.",
    duration: "1 year",
    type: "artisan",
    level: "Level 3",
    featured: false
  },

  // SHORT COURSES - Quick skills training
  {
    id: "s1",
    title: "Sustainable Agriculture for Rural Development",
    description: "Sustainable farming practices for rural development and environmental conservation.",
    duration: "6 months",
    type: "short_course",
    level: "Level 5",
    featured: false
  },
  {
    id: "s2",
    title: "Food and Beverage Service ",
    description: "Basic food service and beverage preparation for hospitality industry entry-level positions.",
    duration: "6 months",
    type: "short_course",
    level: "Level 3",
    featured: false
  },
  {
    id: "s3",
    title: "Food and Beverage Service ",
    description: "Intermediate food service covering restaurant operations and customer service.",
    duration: "6 months",
    type: "short_course",
    level: "Level 4",
    featured: false
  },
  {
    id: "s4",
    title: "Food and Beverage Service ",
    description: "Advanced food service management covering menu planning and restaurant management.",
    duration: "6 months",
    type: "short_course",
    level: "Level 5",
    featured: false
  },
  {
    id: "s5",
    title: "Food and Beverage Service ",
    description: "Professional food service management covering hospitality business operations.",
    duration: "1 year",
    type: "short_course",
    level: "Level 6",
    featured: false
  },
  {
    id: "s6",
    title: "Office Assistant ",
    description: "Office support skills covering administrative tasks and business communication.",
    duration: "6 months",
    type: "short_course",
    level: "Level 4",
    featured: false
  },
  {
    id: "s7",
    title: "Digital Marketing Essentials",
    description: "Modern digital marketing techniques including social media, SEO, and online advertising.",
    duration: "3 months",
    type: "short_course",
    level: "Level 4",
    featured: false
  },
  {
    id: "s8",
    title: "Basic Computer Skills",
    description: "Essential computer skills including MS Office, internet usage, and email communication.",
    duration: "2 months",
    type: "short_course",
    level: "Level 3",
    featured: false
  },

  // NITA COURSES - National Industrial Training Authority certified
  {
    id: "n1",
    title: "Computer Operator NITA Grade III",
    description: "NITA certified Computer Operator course covering computer packages and basic IT operations.",
    duration: "6 months",
    type: "nita_course",
    level: "Grade III",
    featured: false
  },
  {
    id: "n2",
    title: "Computer Operator NITA Grade II",
    description: "NITA certified intermediate Computer Operator course with advanced computer applications.",
    duration: "6 months",
    type: "nita_course",
    level: "Grade II",
    featured: false
  },
  {
    id: "n3",
    title: "Computer Operator NITA Grade I",
    description: "NITA certified advanced Computer Operator course with system administration skills.",
    duration: "6 months",
    type: "nita_course",
    level: "Grade I",
    featured: false
  },
  {
    id: "n4",
    title: "Electrical Wireman NITA Grade III",
    description: "NITA certified electrical wiring course covering basic residential and commercial electrical work.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade III",
    featured: false
  },
  {
    id: "n5",
    title: "Electrical Wireman NITA Grade II",
    description: "NITA certified intermediate electrical wiring with advanced installation techniques.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade II",
    featured: false
  },
  {
    id: "n6",
    title: "Electrical Wireman NITA Grade I",
    description: "NITA certified advanced electrical wiring with industrial and commercial expertise.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade I",
    featured: false
  },
  {
    id: "n7",
    title: "Dressmaking/Tailoring NITA Grade III",
    description: "NITA certified basic dressmaking course covering garment construction and basic tailoring.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade III",
    featured: false
  },
  {
    id: "n8",
    title: "Dressmaking/Tailoring NITA Grade II",
    description: "NITA certified intermediate dressmaking with advanced pattern making and fitting.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade II",
    featured: false
  },
  {
    id: "n9",
    title: "Dressmaking/Tailoring NITA Grade I",
    description: "NITA certified advanced dressmaking with haute couture and business management skills.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade I",
    featured: false
  },
  {
    id: "n10",
    title: "Plumbing NITA Grade III",
    description: "NITA certified basic plumbing course covering pipe installation and basic plumbing systems.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade III",
    featured: false
  },
  {
    id: "n11",
    title: "Plumbing NITA Grade II",
    description: "NITA certified intermediate plumbing with advanced system installation and maintenance.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade II",
    featured: false
  },
  {
    id: "n12",
    title: "Plumbing NITA Grade I",
    description: "NITA certified advanced plumbing with commercial and industrial system expertise.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade I",
    featured: false
  },
  {
    id: "n13",
    title: "Masonry NITA Grade III",
    description: "NITA certified basic masonry covering bricklaying and basic construction techniques.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade III",
    featured: false
  },
  {
    id: "n14",
    title: "Masonry NITA Grade II",
    description: "NITA certified intermediate masonry with advanced construction and finishing techniques.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade II",
    featured: false
  },
  {
    id: "n15",
    title: "Masonry NITA Grade I",
    description: "NITA certified advanced masonry with specialized construction and supervisory skills.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade I",
    featured: false
  },
  {
    id: "n16",
    title: "Arc Welding NITA Grade III",
    description: "NITA certified basic arc welding course covering fundamental welding techniques.",
    duration: "6 months",
    type: "nita_course",
    level: "Grade III",
    featured: false
  },
  {
    id: "n17",
    title: "Arc Welding NITA Grade II",
    description: "NITA certified intermediate arc welding with advanced joining techniques.",
    duration: "6 months",
    type: "nita_course",
    level: "Grade II",
    featured: false
  },
  {
    id: "n18",
    title: "Arc Welding NITA Grade I",
    description: "NITA certified advanced arc welding with specialized industrial welding skills.",
    duration: "6 months",
    type: "nita_course",
    level: "Grade I",
    featured: false
  },
  {
    id: "n19",
    title: "Hair Dressing NITA Grade III",
    description: "NITA certified basic hairdressing course covering cutting, styling, and basic treatments.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade III",
    featured: false
  },
  {
    id: "n20",
    title: "Hair Dressing NITA Grade II",
    description: "NITA certified intermediate hairdressing with advanced styling and chemical treatments.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade II",
    featured: false
  },
  {
    id: "n21",
    title: "Hair Dressing NITA Grade I",
    description: "NITA certified advanced hairdressing with salon management and specialized techniques.",
    duration: "1 year",
    type: "nita_course",
    level: "Grade I",
    featured: false
  },

  // DRIVING COURSES
  {
    id: "dr1",
    title: "Driving School B-Light",
    description: "Light vehicle driving lessons covering traffic rules, vehicle operation, and road safety for Class B license.",
    duration: "1 month",
    type: "driving_course",
    level: "Basic",
    featured: false
  },
  {
    id: "dr2",
    title: "Defensive Driving Course",
    description: "Advanced driving techniques focusing on safety, accident prevention, and emergency response.",
    duration: "2 weeks",
    type: "driving_course",
    level: "Advanced",
    featured: false
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const featured = searchParams.get("featured");
  const limit = searchParams.get("limit");

  // If no type specified, return all courses
  let filtered = allCourses;

  // Filter by type if specified
  if (type && ["diploma", "certificate", "artisan", "short_course", "nita_course", "driving_course"].includes(type)) {
    filtered = filtered.filter(course => course.type === type);
  }
  
  // If featured=true is requested, only return featured courses (for homepage)
  if (featured === "true") {
    filtered = filtered.filter(course => course.featured === true);
  }

  // Apply limit if specified (useful for homepage display)
  if (limit) {
    const limitNum = parseInt(limit);
    if (!isNaN(limitNum) && limitNum > 0) {
      filtered = filtered.slice(0, limitNum);
    }
  }

  return NextResponse.json(filtered);
}