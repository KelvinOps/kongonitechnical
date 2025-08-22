/*app/api/departments/route.ts  */

import { NextResponse } from "next/server";

const departments = [
  {
    id: "business",
    name: "Business Department",
    description: "Developing future leaders in commerce and entrepreneurship.",
    imageUrl: "/images/departments/business/business.jpg",
  },
  {
    id: "ict",
    name: "Computing & Informatics Department",
    description: "Empowering students with modern computing and digital skills.",
    imageUrl: "/images/departments/ict/ict.jpg",
  },
  {
    id: "civil",
    name: "Building & Civil Engineering Department",
    description: "Training in structural design, construction, and surveying.",
    imageUrl: "/images/departments/building/building.jpg",
  },
  {
    id: "electrical",
    name: "Electrical & Electronics Engineering Department",
    description: "Hands-on experience in electrical systems and installations.",
    imageUrl: "/images/departments/electrical/electrical.jpg",
  },
  {
    id: "automotive",
    name: "Automotive & Mechanical Engineering Department",
    description: "Mastering vehicle diagnostics, repair, and maintenance.",
    imageUrl: "/images/departments/automotive/automotive.jpg",
  },
  {
    id: "fashion",
    name: "Fashion Design and Cosmetics Department",
    description: "Creative training in fashion design, garment construction, and beauty techniques.",
    imageUrl: "/images/departments/fashion/fashion.jpg",
  },
  {
    id: "hospitality-tourism",
    name: "Hospitality and Tourism Department",
    description: "Comprehensive training in hotel management, tourism operations, and customer service.",
    imageUrl: "/images/departments/hospitality/hospitality.jpg",
  },
  {
    id: "agriculture",
    name: "Agriculture Department",
    description: "Innovative farming techniques and agribusiness education.",
    imageUrl: "/images/departments/agriculture/agriculture.jpg",
  },
];

export async function GET() {
  return NextResponse.json(departments);
}