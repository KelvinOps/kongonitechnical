/*src/data/departments.ts  */

export interface DepartmentDetails {
  id: string;
  name: string;
  description: string;
  backgroundInfo?: string;
  hodImage: string;
  hodName: string;
  hodTitle?: string;
  hodBio?: string;
  hodSocial?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
  vision?: string;
  mission: string;
  teachingStaff?: string[];
  nonTeachingStaff?: string[];
  trainers: string[];
  objectives: string[];
  goals: string[];
  activityImages: string[];
}

export const departments: DepartmentDetails[] = [
  {
    id: "ict",
    name: "Computing & Informatics Department",
    description: "Empowering students with modern computing and digital skills.",
    backgroundInfo: "The Computing & Informatics Department is at the forefront of technology education, providing comprehensive training in modern computing, software development, networking, and digital innovation. Our department combines theoretical knowledge with practical hands-on experience to prepare students for the rapidly evolving digital economy.",
    hodImage: "/images/hod/nelsonthuku.png",
    hodName: "Nelson Thuku",
    hodTitle: "Head of Department - Computing & Informatics",
    hodBio: "Nelson Thuku is an experienced IT professional and educator. He specializes in software development, network administration, and emerging technologies, bringing real-world industry experience to academic excellence.",
    hodSocial: {
      facebook: "https://facebook.com/nelsonthuku",
      twitter: "https://twitter.com/nelsonthuku",
      linkedin: "https://linkedin.com/in/nelsonthuku",
      email: "nelsonthuku1@gmail.com"
    },
    vision: "To be a leading center of excellence in computing education, producing innovative IT professionals who drive technological advancement and digital transformation in our community.",
    mission: "To produce competent ICT professionals for the digital economy.",
    teachingStaff: ["Kevin Masinde", "Juliet Akinyi", "Timothy Lukewanga", "Anne Namukhaywa", "Polycub Mutsotso"],
    nonTeachingStaff: ["Kelvin Bugigi- ICT Technician"],
    trainers: ["Kevin Masinde", "Juliet Akinyi", "Timothy Lukewanga", "Anne Namukhaywa", "Polycub Mutsotso"],
    objectives: [
      "Equip students with practical IT skills",
      "Promote innovation in software development",
      "Ensure proficiency in networking and cybersecurity",
    ],
    goals: [
      "100% student certification in key technologies",
      "Industry partnerships for internships",
      "Launch student-led tech startups",
    ],
    activityImages: [
      "/images/departments/ict/ict1.jpg",
      "/images/departments/ict/ict2.jpg",
      "/images/departments/ict/ict3.jpg",
    ],
  },
  {
    id: "business",
    name: "Business Department",
    description: "Developing future leaders in commerce and entrepreneurship.",
    backgroundInfo: "The Business Department has been a cornerstone of our institution for over two decades, providing comprehensive business education that combines academic rigor with practical application. We focus on developing ethical business leaders and innovative entrepreneurs who can thrive in the competitive global marketplace.",
    hodImage: "/images/hod/dorothy.jpg",
    hodName: "Dorothy Ludisi",
    hodTitle: "Head of Department - Business Studies",
    hodBio: "Dorothy is a seasoned business professional and educator with extensive experience in business management, entrepreneurship, and financial planning. She brings a wealth of practical knowledge from her years in corporate leadership and business consulting.",
    hodSocial: {
      facebook: "https://facebook.com/dorothybusiness",
      twitter: "https://twitter.com/dorothybiz",
      linkedin: "https://linkedin.com/in/dorothybusiness",
      email: "dorothy@institution.edu"
    },
    vision: "To be a premier institution for business education, producing ethical leaders and innovative entrepreneurs who contribute to sustainable economic development.",
    mission: "To nurture innovative business minds for a competitive global market.",
    teachingStaff: ["Mr Emmanuel Chacha", "Mr Hillary Lubale","Ms Faith Kanyiri","Ms Mildred Adhiambo","Mr Mike Kipkoech", "Ms Jenifa Eshilingi", "Ms Beldine Atieno Oguna","Ms Fransisca Nafula","Ms Dorris Wekesa" ],
    nonTeachingStaff: [],
    trainers: ["Mr Emmanuel Chacha", "Mr Hillary Lubale","Ms Faith Kanyiri","Ms Mildred Adhiambo","Mr Mike Kipkoech", "Ms Jenifa Eshilingi", "Ms Beldine Atieno Oguna","Ms Fransisca Nafula","Ms Dorris Wekesa" ],
    objectives: [
      "Instill strong business ethics and leadership skills",
      "Train students in financial literacy and management",
      "Encourage entrepreneurial thinking",
    ],
    goals: [
      "Establish student-run enterprises",
      "Achieve high pass rates in accounting and marketing units",
      "Partner with local businesses for mentorship",
    ],
    activityImages: [
      "/images/departments/business/business1.jpg",
      "/images/departments/business/business2.jpg",
      "/images/departments/business/business3.jpg",
    ],
  },
  {
    id: "civil",
    name: "Building & Civil Engineering Department",
    description: "Training in structural design, construction, and surveying.",
    backgroundInfo: "The Building & Civil Engineering Department has been instrumental in shaping Kenya's construction industry by providing hands-on training in structural design, construction management, and surveying. Our graduates are equipped with the skills needed to build sustainable infrastructure and contribute to national development.",
    hodImage: "/images/hod/civil.jpg",
    hodName: "Nathan Kibet",
    hodTitle: "Head of Department - Civil Engineering",
    hodBio: "Nathan Kibet is a licensed trainer with experience in construction, infrastructure development, and project management. He has overseen major construction projects and brings valuable industry insights to our academic programs.",
    hodSocial: {
      facebook: "https://facebook.com/nathankibet",
      twitter: "https://twitter.com/nathankibet",
      linkedin: "https://linkedin.com/in/nathankibet",
      email: "nathan.kibet@institution.edu"
    },
    vision: "To be a leading center for civil engineering education, producing skilled professionals who build sustainable and resilient infrastructure for future generations.",
    mission: "To build a generation of engineers who shape resilient infrastructure.",
    teachingStaff: ["Mr Juma Andrew Khisa", "Mr Joseph Wanjala","Mr Paul Kimanzi","Mr Patrick Mwangi","Mr Stephen melly","Ms Charity Lagat","Ms Faith Moraa","Mr Kevin Magonya","Ms Joylyne Korir","Mr Reuben Khaemba","Mr Ismael Sabwa","Mr Michael Ondego"],
    nonTeachingStaff: ["Mr Michael Ondego - Technician"],
    trainers: ["Mr Juma Andrew Khisa", "Mr Joseph Wanjala","Mr Paul Kimanzi","Mr Patrick Mwangi","Mr Stephen melly","Ms Charity Lagat","Ms Faith Moraa","Mr Kevin Magonya","Ms Joylyne Korir","Mr Reuben Khaemba","Mr Ismael Sabwa","Mr Michael Ondego"],
    objectives: [
      "Provide hands-on experience in construction technologies",
      "Teach sustainable building practices",
      "Develop surveying and CAD skills",
    ],
    goals: [
      "Complete real-world construction projects",
      "Integrate green building principles",
      "Achieve excellence in structural analysis",
    ],
    activityImages: [
      "/images/departments/building/civil1.jpg",
      "/images/departments/building/civil2.jpg",
      "/images/departments/building/civil3.jpg",
    ],
  },
  {
    id: "electrical",
    name: "Electrical & Electronics Engineering Department",
    description: "Hands-on experience in electrical systems and installations.",
    backgroundInfo: "The Electrical & Electronics Engineering Department provides comprehensive training in electrical systems, power generation, electronics design, and automation technologies. Our department is equipped with modern laboratories and industry-standard equipment to ensure students receive practical, relevant education.",
    hodImage: "/images/hod/evansmaruti.jpg",
    hodName: "Mr Evans Maruti",
    hodTitle: "Head of Department - Electrical Engineering",
    hodBio: "Mr. Evans Maruti is a certified electrical engineer with extensive experience in power systems, automation, and renewable energy. He has worked with leading electrical companies and brings cutting-edge industry knowledge to our students.",
    hodSocial: {
      facebook: "https://facebook.com/evansmaruti",
      twitter: "https://twitter.com/evansmaruti",
      linkedin: "https://linkedin.com/in/evansmaruti",
      email: "evans.maruti@institution.edu"
    },
    vision: "To be a center of excellence in electrical engineering education, producing competent professionals who power technological advancement and sustainable energy solutions.",
    mission: "To power the future through skilled electrical professionals.",
    teachingStaff: ["Mr Elly Kipchumba","Mr Lewis Barasa","Mr James Mukoya","Mr Martin Wekesa","Mr Laban Ruto","Mr Maurice Kimnyago","Mr Joshua Makacha","Mr Caleb Chitai","Ms Pamela Mutua","Mr Thomas Maululwa"],
    nonTeachingStaff: [],
    trainers: ["Mr Elly Kipchumba","Mr Lewis Barasa","Mr James Mukoya","Mr Martin Wekesa","Mr Laban Ruto","Mr Maurice Kimnyago","Mr Joshua Makacha","Mr Caleb Chitai","Ms Pamela Mutua","Mr Thomas Maululwa"],
    objectives: [
      "Train students in electrical wiring and safety",
      "Introduce automation and control systems",
      "Promote innovation in electronics design",
    ],
    goals: [
      "Certify students in electrical installation standards",
      "Develop prototypes for smart devices",
      "Collaborate with energy firms for field exposure",
    ],
    activityImages: [
      "/images/departments/electrical/electrical1.jpg",
      "/images/departments/electrical/electrical2.jpg",
      "/images/departments/electrical/electrical3.jpg",
    ],
  },
  {
    id: "automotive",
    name: "Mechanical & Automotive Engineering Department",
    description: "Mastering vehicle diagnostics, repair, and maintenance.",
    backgroundInfo: "The Mechanical & Automotive Engineering Department is dedicated to training skilled technicians and engineers in vehicle diagnostics, repair, and maintenance. With the automotive industry rapidly evolving towards electric and hybrid vehicles, our department stays current with emerging technologies.",
    hodImage: "/images/hod/wekesabryan.jpg",
    hodName: "Mr Bryan Wekesa",
    hodTitle: "Head of Department - Automotive Engineering",
    hodBio: "Mr. Bryan Wekesa is a master automotive technician and engineer with  experience in vehicle diagnostics, engine repair, and automotive technology. He holds multiple industry certifications and specializes in both traditional and electric vehicle systems.",
    hodSocial: {
      facebook: "https://facebook.com/bryanwekesa",
      twitter: "https://twitter.com/bryanwekesa",
      linkedin: "https://linkedin.com/in/bryanwekesa",
      email: "bryan.wekesa@institution.edu"
    },
    vision: "To be a premier automotive training center, producing skilled professionals who drive innovation in vehicle technology and sustainable mobility solutions.",
    mission: "To drive innovation in automotive engineering and mobility.",
    teachingStaff: ["Mrs Suchi Mercylane-Automotive","Mr Litten Kichamu-Welding"],
    nonTeachingStaff: [],
    trainers: ["Mrs Suchi Mercylane-Automotive","Mr Litten Kichamu-Welding"],
    objectives: [
      "Teach engine diagnostics and repair techniques",
      "Promote safety and efficiency in vehicle systems",
      "Introduce hybrid and electric vehicle technologies",
    ],
    goals: [
      "Maintain a fully functional student garage",
      "Host inter-college mechanical competitions",
      "Achieve excellence in automotive certification exams",
    ],
    activityImages: [
      "/images/departments/automotive/automotive1.jpg",
      "/images/departments/automotive/automotive3.jpg",
      "/images/departments/automotive/automotive4.jpg",
    ],
  },
  {
    id: "fashion",
    name: "Fashion Design and Cosmetics Department",
    description: "Creative training in fashion design, garment construction, and beauty enhancement techniques.",
    backgroundInfo: "The Fashion Design and Cosmetics Department nurtures creative talent and entrepreneurship in the fashion and beauty industry. Our comprehensive programs cover fashion design, pattern making, garment construction, professional makeup, and beauty therapy, preparing students for successful careers in creative industries.",
    hodImage: "/images/hod/fashion.jpg",
    hodName: "Careen Nambaka",
    hodTitle: "Head of Department - Fashion & Cosmetics",
    hodBio: "Careen Nambaka is a renowned fashion designer and beauty expert with experience in the fashion industry. She has worked with leading fashion brands and has her own successful fashion line, bringing real-world expertise to our students.",
    hodSocial: {
      facebook: "https://facebook.com/careennambaka",
      twitter: "https://twitter.com/careennambaka",
      linkedin: "https://linkedin.com/in/careennambaka",
      email: "careen.nambaka@institution.edu"
    },
    vision: "To be a leading center for fashion and beauty education, producing creative professionals who set trends and build successful enterprises in the fashion and cosmetics industry.",
    mission: "To nurture creative talent and build successful careers in fashion and beauty.",
    teachingStaff: ["Ms Roseline Night","Mrs Tabitha Indiori","Ms Mirriam Wasike","Ms Everlyine Milure","Ms Aswani Dorcus"],
    nonTeachingStaff: [],
    trainers: ["Ms Roseline Night","Mrs Tabitha Indiori","Ms Mirriam Wasike","Ms Everlyine Milure","Ms Aswani Dorcus"],
    objectives: [
      "Develop creativity in fashion design and pattern making",
      "Train students in professional makeup and beauty techniques",
      "Promote entrepreneurship in fashion and beauty industry",
    ],
    goals: [
      "Launch student fashion shows and beauty exhibitions",
      "Establish partnerships with fashion and beauty brands",
      "Achieve excellence in national fashion competitions",
    ],
    activityImages: [
      "/images/departments/fashion/fashion1.jpg",
      "/images/departments/fashion/fashion2.jpg",
      "/images/departments/fashion/fashion3.jpg",
    ],
  },
  {
    id: "hospitality-tourism",
    name: "Hospitality and Tourism Department",
    description: "Comprehensive training in hotel management, tourism operations, and customer service excellence.",
    backgroundInfo: "The Hospitality and Tourism Department prepares students for careers in Kenya's vibrant tourism and hospitality industry. Our programs combine theoretical knowledge with practical training in hotel operations, tourism marketing, event management, and customer service excellence.",
    hodImage: "/images/hod/faithkadeiza.jpg",
    hodName: "Faith Kadeiza",
    hodTitle: "Head of Department - Hospitality & Tourism",
    hodBio: "Faith Kadeiza is a hospitality management professional with experience in hotel operations, tourism marketing, and customer service management. She has worked with leading hotels and tourism companies, bringing industry best practices to our academic programs.",
    hodSocial: {
      facebook: "https://facebook.com/faithkadeiza",
      twitter: "https://twitter.com/faithkadeiza",
      linkedin: "https://linkedin.com/in/faithkadeiza",
      email: "faith.kadeiza@institution.edu"
    },
    vision: "To be a premier institution for hospitality and tourism education, producing service-oriented professionals who enhance Kenya's reputation as a leading tourism destination.",
    mission: "To develop hospitality professionals who deliver world-class service in tourism and hotel industries.",
    teachingStaff: ["Ms Isabel Mideva"],
    nonTeachingStaff: [],
    trainers: ["Ms Isabel Mideva"],
    objectives: [
      "Train students in hotel operations and management",
      "Develop tourism marketing and guiding skills",
      "Instill exceptional customer service standards",
    ],
    goals: [
      "Run a student-managed hotel simulation",
      "Partner with leading hotels and tourism companies",
      "Achieve top ratings in hospitality service assessments",
    ],
    activityImages: [
      "/images/departments/hospitality/hospitality6.jpg",
      "/images/departments/hospitality/hospitality3.jpg",
      "/images/departments/hospitality/hospitality8.jpg",
    ],
  },
  {
    id: "agriculture",
    name: "Agriculture Department",
    description: "Innovative farming techniques and agribusiness education.",
    backgroundInfo: "The Agriculture Department focuses on sustainable farming practices, modern agricultural technologies, and agribusiness development. Our programs are designed to address food security challenges while promoting profitable agricultural enterprises and environmental conservation.",
    hodImage: "/images/hod/agriculture.jpg",
    hodName: "Mr Joseph Atula",
    hodTitle: "Head of Department - Agriculture",
    hodBio: "Mr. Joseph Atula is an agricultural expert with experience in crop production, livestock management, and agribusiness development. He has worked with various agricultural research institutions and development organizations, bringing practical knowledge to our students.",
    hodSocial: {
      facebook: "https://facebook.com/josephatula",
      twitter: "https://twitter.com/josephatula",
      linkedin: "https://linkedin.com/in/josephatula",
      email: "joseph.atula@institution.edu"
    },
    vision: "To be a center of excellence in agricultural education, producing innovative farmers and agribusiness entrepreneurs who contribute to food security and rural development.",
    mission: "To cultivate knowledge for food security and rural development.",
    teachingStaff: ["Mr Erick Kusimba","Mr Cyrus Lagat","Ms irene Chemtai"],
    nonTeachingStaff: [],
    trainers: ["Mr Erick Kusimba","Mr Cyrus Lagat","Ms irene Chemtai"],
    objectives: [
      "Teach sustainable crop and livestock production",
      "Promote agribusiness and value addition",
      "Introduce smart farming technologies",
    ],
    goals: [
      "Establish demonstration farms",
      "Launch agribusiness incubators",
      "Partner with agricultural research institutes",
    ],
    activityImages: [
      "/images/departments/agriculture/agriculture1.jpg",
      "/images/departments/agriculture/agriculture2.jpg",
      "/images/departments/agriculture/agriculture3.jpg",
    ],
  },
];