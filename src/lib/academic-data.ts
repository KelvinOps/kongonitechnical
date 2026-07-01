// lib/academic-data.ts

export interface Course {
  name: string;
  level: string;
}

export interface Department {
  id: string;
  name: string;
  courses: Course[];
}

export const DEPARTMENTS: Department[] = [
  {
    id: "ict",
    name: "Information Communication Technology (ICT)",
    courses: [
      { name: "Certificate in Information Communication Technology L5", level: "Certificate" },
      { name: "Diploma in Information Communication Technology L6", level: "Diploma" },
      { name: "Artisan in ICT Technician L4", level: "Artisan" },
      { name: "Computer Packages", level: "Short Course" },
      { name: "Computer Operation NITA Grade III", level: "NITA" },
    ],
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    courses: [
      { name: "Certificate in Automotive Technician L5", level: "Certificate" },
      { name: "Diploma Automotive Technician L6", level: "Diploma" },
      { name: "Artisan in Automotive Mechanic L3", level: "Artisan" },
      { name: "Artisan in Automotive Technology L4", level: "Artisan" },
    ],
  },
  {
    id: "building-civil",
    name: "Building and Civil Engineering",
    courses: [
      { name: "Certificate Building Technician L5", level: "Certificate" },
      { name: "Certificate in Building Technology", level: "Certificate" },
      { name: "Diploma in Civil Engineering L6", level: "Diploma" },
      { name: "Diploma in Building Technology", level: "Diploma" },
      { name: "Certificate in Plumbing L5", level: "Certificate" },
      { name: "Plumbing L3, L4", level: "Artisan" },
      { name: "Plumbing NITA Grade III", level: "NITA" },
      { name: "Plumbing Grade III", level: "NITA" },
      { name: "Masonry L3, L4", level: "Artisan" },
      { name: "Artisan in Masonry", level: "Artisan" },
      { name: "Certificate in Land Survey L5", level: "Certificate" },
      { name: "Diploma in Land Survey L6", level: "Diploma" },
      { name: "Diploma in Survey", level: "Diploma" },
      { name: "Diploma in Quantity Survey L6", level: "Diploma" },
      { name: "Certificate in Welding & Fabrication L5", level: "Certificate" },
      { name: "Certificate in Welding Fabrication", level: "Certificate" },
      { name: "Artisan in Welding & Fabrication L3, L4", level: "Artisan" },
      { name: "Artisan in Welding and Fabrication L3", level: "Artisan" },
      { name: "Artisan in Welding Fabrication", level: "Artisan" },
      { name: "Diploma in Welding Fabrication", level: "Diploma" },
    ],
  },
  {
    id: "electrical",
    name: "Electrical and Electronic Engineering",
    courses: [
      { name: "Certificate in Electrical Operator L5", level: "Certificate" },
      { name: "Certificate in Electrical and Electronics", level: "Certificate" },
      { name: "Diploma in Electrical Engineering L6", level: "Diploma" },
      { name: "Diploma in Electrical and Electronics Engineering (Power Option)", level: "Diploma" },
      { name: "Artisan in Electrical Installation L3, L4", level: "Artisan" },
      { name: "Electrical Wireman NITA Grade III", level: "NITA" },
      { name: "Artisan in Electrical Installation", level: "Artisan" },
    ],
  },
  {
    id: "fashion-cosmetology",
    name: "Fashion Design & Cosmetology",
    courses: [
      { name: "Certificate in Fashion Design L5", level: "Certificate" },
      { name: "Certificate in Fashion Design and Clothing", level: "Certificate" },
      { name: "Diploma in Fashion Design L6", level: "Diploma" },
      { name: "Diploma in Fashion Design and Clothing", level: "Diploma" },
      { name: "Artisan in Fashion Design (Dressmaking) L3", level: "Artisan" },
      { name: "Artisan in Fashion Design L4", level: "Artisan" },
      { name: "Dressmaking NITA Grade III", level: "NITA" },
      { name: "Artisan in Garment Making", level: "Artisan" },
      { name: "Cosmetology L3, L4, L5", level: "Certificate" },
      { name: "Certificate in Hairdressing L5", level: "Certificate" },
      { name: "Certificate in Hair Dressing and Beauty", level: "Certificate" },
      { name: "Hairdressing L6", level: "Diploma" },
      { name: "Hairdressing NITA Grade III", level: "NITA" },
      { name: "Artisan in Hairdressing L3, L4", level: "Artisan" },
      { name: "Artisan in Hair Dressing and Beauty", level: "Artisan" },
      { name: "Certificate in Beauty Therapy L5", level: "Certificate" },
      { name: "Diploma in Beauty Therapy L6", level: "Diploma" },
      { name: "Artisan in Beauty Therapy L3, L4", level: "Artisan" },
    ],
  },
  {
    id: "hospitality-tourism",
    name: "Hospitality and Tourism",
    courses: [
      { name: "Food and Beverage L3, L4, L5, L6", level: "Various" },
      { name: "Certificate in Food Production L5", level: "Certificate" },
      { name: "Diploma in Food Production L6", level: "Diploma" },
      { name: "Artisan in Food Production L4", level: "Artisan" },
      { name: "Diploma in Baking Technology L6", level: "Diploma" },
    ],
  },
  {
    id: "agriculture",
    name: "Agriculture",
    courses: [
      { name: "Sustainable Agriculture for Rural Development Level 5", level: "Certificate" },
      { name: "Diploma in Agriculture Extension L6", level: "Diploma" },
      { name: "Diploma in Agriculture", level: "Diploma" },
      { name: "Horticulture Production Level 5", level: "Certificate" },
      { name: "Certificate in Agriculture", level: "Certificate" },
      { name: "Artisan in Agriculture", level: "Artisan" },
      { name: "Artisan in Horticulture L3", level: "Artisan" },
    ],
  },
  {
    id: "business",
    name: "Business",
    courses: [
      { name: "Certificate in Office Administration L5", level: "Certificate" },
      { name: "Diploma in Office Administration Level 6", level: "Diploma" },
      { name: "Diploma in Accountancy L6", level: "Diploma" },
      { name: "Diploma in Accountancy", level: "Diploma" },
      { name: "Accounting Technician", level: "Certificate" },
      { name: "Certificate in Community Development and Social Work L5", level: "Certificate" },
      { name: "Certificate in Community Development and Social Work", level: "Certificate" },
      { name: "Diploma in Community Development and Social Work L6", level: "Diploma" },
      { name: "Artisan in Social Work and Community Development L4", level: "Artisan" },
      { name: "Certificate in Human Resource Management L5", level: "Certificate" },
      { name: "Certificate in Human Resource Management (Human Resource Management)", level: "Certificate" },
      { name: "Diploma in Human Resource Management L6", level: "Diploma" },
      { name: "Certificate in Supply Chain Management", level: "Certificate" },
      { name: "Diploma in Supply Chain Management", level: "Diploma" },
      { name: "Certificate in Secretarial Studies", level: "Certificate" },
      { name: "Diploma in Secretarial Studies", level: "Diploma" },
      { name: "Office Assistant Level 4", level: "Artisan" },
      { name: "Artisan in Store Keeping", level: "Artisan" },
    ],
  },
];

export const OTHER_PROGRAMMES = [
  { name: "Driving School B-Light", level: "Short Course" },
  { name: "Computer Packages", level: "Short Course" },
];