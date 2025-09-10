// app/api/news/route.ts
import { NextRequest, NextResponse } from "next/server";

// Complete mock news data - synchronized with main news route
const mockNews = [
  // Insert them at the beginning of the array for newest-first ordering

{
  id: "19",
  title: "3rd Board of Governors Inauguration - Transition to New Leadership Structure",
  excerpt: "Historic transition as Kongoni Technical & Vocational Training College transitions from Board of Management to the new Board of Governance structure, marking a significant milestone in institutional development.",
  content: `
    <p>On September 5th, 2025, Kongoni Technical & Vocational Training College held its historic 3rd Board of Governance meeting, marking a significant transition in the institution's leadership structure.</p>
    
    <p>This meeting represented the formal transition from the previous Board of Management to the newly established Board of Governance, reflecting the college's commitment to enhanced institutional governance and strategic oversight.</p>
    
    <p><strong>Key Highlights of the Meeting:</strong></p>
    <ul>
      <li>Formal handover from the outgoing Board of Management</li>
      <li>Introduction and orientation of new Board of Governance members</li>
      <li>Review of institutional strategic plans and performance indicators</li>
      <li>Discussion of governance framework and operational policies</li>
      <li>Budget review and financial oversight responsibilities</li>
      <li>Academic quality assurance and program development priorities</li>
      <li>Infrastructure development and modernization plans</li>
      <li>Student welfare and community engagement initiatives</li>
    </ul>
    
    <p>The new Board of Governance brings together experienced professionals from various sectors including education, industry, government, and community leadership, ensuring comprehensive oversight and strategic guidance for the institution.</p>
    
    <p>"This transition represents our commitment to excellence in governance and our dedication to providing world-class technical and vocational education," said the Board Chairperson during the meeting.</p>
    
    <p>The Board of Governance will provide enhanced strategic oversight, ensuring the college continues to meet evolving industry needs while maintaining high educational standards. This governance structure aligns with best practices in technical and vocational education management.</p>
    
    <p><strong>Areas of Focus for the New Board:</strong></p>
    <ul>
      <li>Strategic planning and institutional development</li>
      <li>Quality assurance and academic standards</li>
      <li>Financial sustainability and resource mobilization</li>
      <li>Industry partnerships and graduate employability</li>
      <li>Innovation in technical education delivery</li>
      <li>Community engagement and social responsibility</li>
    </ul>
    
    <p>The college community looks forward to the enhanced leadership and strategic direction that the new Board of Governance will provide as we continue to build on our reputation as a leading technical and vocational training institution.</p>
    
    <p>This governance transition positions Kongoni Technical & Vocational Training College for continued growth and excellence in technical education delivery.</p>
  `,
    imageUrl: "/images/admin/board/bog2.jpg",
    images: [
      "/images/admin/board/bog1.jpeg",
      "/images/admin/board/bog2.jpeg"
    ],
  videoUrl: "https://www.youtube.com/watch?v=board_governance_meeting",
  videoThumbnail: "/images/admin/admin1.jpeg",
  featured: true,
  createdAt: "2025-09-05T14:30:00Z",
  updatedAt: "2025-09-05T14:30:00Z",
  author: "Administration",
  category: "Events",
  eventDate: "2025-09-05",
  location: "College Boardroom",
  tags: ["governance", "board-meeting", "leadership", "transition", "administration", "strategic-planning"]
},
{
  id: "20",
  title: "Term Opening Prayer Day - Spiritual Blessing for New Academic Term",
  excerpt: "The college community came together for a special prayer service to seek divine blessing and guidance for the new academic term, fostering unity and spiritual well-being among students and staff.",
  content: `
    <p>On September 9th, 2025, Kongoni Technical & Vocational Training College held a special Term Opening Prayer Day, bringing together the entire college community to seek divine blessing and guidance for the new academic term.</p>
    
    <p>The prayer service, held at the main campus grounds, was attended by students, faculty, staff, and invited religious leaders from various denominations, reflecting the college's commitment to holistic education that nurtures both academic and spiritual development.</p>
    
    <p><strong>Prayer Service Program:</strong></p>
    <ul>
      <li>Opening worship and praise session</li>
      <li>Welcome address by Principal Judith Akaranga</li>
      <li>Interfaith prayers for academic success and guidance</li>
      <li>Special prayers for students, faculty, and staff</li>
      <li>Blessing of academic facilities and laboratories</li>
      <li>Prayers for safety and protection throughout the term</li>
      <li>Community fellowship and refreshments</li>
    </ul>
    
    <p>"As we begin this new academic term, we recognize the importance of spiritual foundation in our educational journey," said Principal Judith Akaranga during her address. "This prayer day reminds us that success comes not only through hard work but also through divine guidance and blessing."</p>
    
    <p>The event featured participation from multiple religious denominations, emphasizing the college's inclusive approach to spiritual matters while respecting diverse faith backgrounds within the college community.</p>
    
    <p><strong>Key Prayer Themes:</strong></p>
    <ul>
      <li>Academic excellence and wisdom for students and instructors</li>
      <li>Safety and protection for the college community</li>
      <li>Unity and harmony among diverse backgrounds</li>
      <li>Guidance for institutional leadership and decision-making</li>
      <li>Success in upcoming examinations and assessments</li>
      <li>Prosperity and growth for the institution</li>
      <li>Community outreach and social impact</li>
    </ul>
    
    <p>Students from various departments participated actively, with many expressing gratitude for the opportunity to begin their academic journey with spiritual grounding. The prayer day also included special intercessions for new students beginning their studies.</p>
    
    <p>"This prayer day helps create a positive atmosphere for learning and reminds us that we are part of a caring community," said Mary Wanjiku, a Business Studies student.</p>
    
    <p>The college's commitment to spiritual well-being complements its focus on academic and technical excellence, recognizing that holistic education addresses all aspects of human development.</p>
    
    <p>Religious leaders from the local community praised the college's initiative, noting how such gatherings strengthen community bonds and provide moral foundation for educational pursuits.</p>
    
    <p>The Term Opening Prayer Day concluded with a blessing ceremony for all academic activities, setting a positive and hopeful tone for the term ahead.</p>
  `,
  imageUrl: "/images/newsevents/prayerday/prayerday1.jpeg",
  images: [
    "/images/newsevents/prayerday/prayerday1.jpeg",
    "/images/newsevents/prayerday/prayerday2.jpeg",
    "/images/newsevents/prayerday/prayerday3.jpeg"
  ],
  videoUrl: "https://www.youtube.com/watch?v=prayer_day_highlights",
  videoThumbnail: "/images/newsevents/prayer/prayer1.jpg",
  featured: true,
  createdAt: "2025-09-09T10:00:00Z",
  updatedAt: "2025-09-09T10:00:00Z",
  author: "Student Affairs",
  category: "Student Life",
  eventDate: "2025-09-09",
  location: "Main Campus Grounds",
  tags: ["prayer", "spirituality", "term-opening", "community", "blessing", "interfaith", "student-life"]
},
  {
    id: "18",
    title: "September 2025 Intake Students Reporting for New Academic Year",
    excerpt: "We warmly welcome the September 2025 intake students as they begin their technical and vocational training journey at Kongoni Technical & Vocational Training College.",
    content: `
      <p>Kongoni Technical & Vocational Training College is pleased to welcome the September 2025 intake students who are reporting for the commencement of their technical and vocational training programs.</p>
      
      <p>The September intake includes students enrolled in various departments:</p>
      <ul>
        <li><strong>Building & Construction:</strong> Masonry, Carpentry, Plumbing, and Electrical Installation</li>
        <li><strong>ICT Department:</strong> Computer Studies, Software Development, and Digital Marketing</li>
        <li><strong>Automotive Department:</strong> Motor Vehicle Mechanics and Auto Electrical</li>
        <li><strong>Business Studies:</strong> Entrepreneurship, Accounting, and Business Management</li>
        <li><strong>Fashion & Design:</strong> Tailoring and Dress Making</li>
        <li><strong>Food & Beverage:</strong> Catering and Food Production</li>
      </ul>
      
      <p>During the orientation week, new students will:</p>
      <ul>
        <li>Complete registration and documentation processes</li>
        <li>Receive campus tours and facility orientations</li>
        <li>Meet with academic advisors and department heads</li>
        <li>Attend mandatory health and safety briefings</li>
        <li>Participate in team-building activities</li>
        <li>Receive their student handbooks and timetables</li>
      </ul>
      
      <p>"We are excited to welcome this new cohort of students who will contribute to Kenya's skilled workforce," said Principal Judith Akaranga. "Our comprehensive programs will equip them with practical skills and knowledge needed for successful careers."</p>
      
      <p>The college continues to maintain high admission standards while providing accessible technical education opportunities. Students will benefit from modern facilities, experienced instructors, and strong industry partnerships.</p>
      
      <p>We wish all new students success in their academic journey and look forward to seeing their achievements throughout the program.</p>
    `,
    imageUrl:  "/images/newsevents/studentsreporting/reporting2.jpeg",
    images: [
   "/images/newsevents/studentsreporting/reporting1.jpeg",
      "/images/newsevents/studentsreporting/reporting2.jpeg",
    "/images/newsevents/studentsreporting/reporting3.jpeg",
        "/images/newsevents/studentsreporting/reporting4.jpeg",
      "/images/newsevents/studentsreporting/reporting1.jpeg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=orientation_welcome",
    videoThumbnail: "/images/admin/admin1.jpeg",
    featured: true,
    createdAt: "2025-09-02T08:00:00Z", // Fixed: Changed from 2025 to 2024
    updatedAt: "2025-09-02T08:00:00Z", // Fixed: Changed from 2025 to 2024
    author: "Administration",
    category: "Student Life",
    eventDate: "2025-09-02", // Fixed: Changed from 2025 to 2024
    location: "Main Campus",
    tags: ["intake", "new-students", "orientation", "academic-year"]
  },
  {
    id: "17", 
    title: "Drama Students Achieve Second Position in Regional Competition",
    excerpt: "Congratulations to our talented drama students who secured second position in both solo verse and spoken word categories at the regional drama festival.",
    content: `
      <p>We are proud to announce the outstanding achievement of our drama students who excelled at the recent regional drama festival, securing second position in two competitive categories.</p>
      
      <p><strong>Competition Results:</strong></p>
      <ul>
        <li><strong>Solo Verse Category:</strong> 2nd Position - Sarah Mwangi (ICT Department)</li>
        <li><strong>Spoken Word Category:</strong> 2nd Position - Michael Ochieng (Business Studies)</li>
      </ul>
      
      <p>This remarkable performance showcases the dedication and talent of our students, as well as the quality of training they receive in our performing arts program. The students competed against numerous institutions from across the region, making their achievement even more significant.</p>
      
      <p>The drama program at Kongoni Technical College continues to nurture creative expression alongside technical skills, proving that well-rounded education produces exceptional graduates. Our students demonstrated exceptional creativity, stage presence, and mastery of their craft.</p>
      
      <p>"These students have worked tirelessly to perfect their performances," said Drama Instructor Ms. Faith Wanjiru. "Their success reflects not only their individual talents but also their commitment to excellence in all aspects of their education."</p>
      
      <p>The college celebrates this achievement as part of our commitment to developing students' creative and communicative abilities, which are essential skills in today's competitive job market.</p>
      
      <p>Both students will now advance to the national drama competition scheduled for November 2024. The college community looks forward to supporting them as they represent us at the national level.</p>
      
      <p>Congratulations to all our drama students and their dedicated instructors for this well-deserved recognition!</p>
    `,
    imageUrl: "/images/hero/cultural5.jpg",
    images: [
      "/images/hero/cultural1.jpg",
      "/images/hero/cultural2.jpg", 
      "/images/hero/cultural3.jpg",
      "/images/hero/cultural4.jpg",
      "/images/hero/cultural5.jpg",
      "/images/newsevents/drama/drama1.jpg",
      "/images/newsevents/drama/drama2.jpg",
      "/images/newsevents/drama/drama3.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=drama_competition_highlights",
    videoThumbnail: "/images/hero/cultural5.jpg",
    featured: true,
    createdAt: "2025-08-20T16:30:00Z",
    updatedAt: "2025-08-20T16:30:00Z",
    author: "Performing Arts Department",
    category: "Achievements",
    eventDate: "2025-08-20", 
    location: "Regional Drama Festival Venue",
    tags: ["drama", "competition", "performance", "arts", "achievement", "regional"]
  },
  {
    id: "1",
    title: "Kongoni Students Excel at Katti Athletics Games 2024 - Gold Medal Victory",
    excerpt: "Our athletes brought home multiple medals from the Katti Athletics Games, showcasing exceptional talent in track and field events across various categories.",
    content: `
      <p>Kongoni Technical & Vocational Training College is proud to announce the outstanding performance of our student athletes at the prestigious Katti Athletics Games 2024, held at Nyayo National Stadium in Nairobi.</p>
      
      <p>Our dedicated team of 25 student athletes competed against over 200 institutions from across East Africa, bringing home an impressive medal haul:</p>
      <ul>
        <li><strong>Gold Medals (3):</strong> 
          <ul>
            <li>Mary Chepkemoi (Building Dept.) - 1500m Women's Race</li>
            <li>James Kiprotich (Automotive Dept.) - Men's Shot Put</li>
            <li>Women's 4x400m Relay Team (Mixed Departments)</li>
          </ul>
        </li>
        <li><strong>Silver Medals (5):</strong> 100m Sprint, High Jump, Javelin, Long Jump, and Men's 800m</li>
        <li><strong>Bronze Medals (4):</strong> Various track and field events including discus and pole vault</li>
      </ul>
      
      <p>"This remarkable achievement reflects not only the natural talent of our students but also their dedication to training and the excellent coaching support they receive," said Sports Coordinator Mr. David Mutua.</p>
      
      <p>The college's investment in sports facilities and training programs continues to pay dividends, with our athletes consistently performing at national and regional levels. Several of our medalists have been scouted for national team selections for upcoming international competitions.</p>
      
      <p>Special recognition goes to Mary Chepkemoi who broke the games record in the 1500m women's race with a time of 4:12.8, surpassing the previous record by over 3 seconds.</p>
      
      <p>We congratulate all our athletes and look forward to their continued success in upcoming competitions. Special recognition goes to our coaching staff and the entire college community for their unwavering support.</p>
    `,
    imageUrl: "/images/newsevents/athletics/athletics23.jpeg",
    images: [
      "/images/newsevents/athletics/athletics1.jpeg",
      "/images/newsevents/athletics/athletics2.jpeg",
      "/images/newsevents/athletics/athletics3.jpeg",
      "/images/newsevents/athletics/athletics18.jpeg",
      "/images/newsevents/athletics/athletics23.jpeg",
      "/images/newsevents/athletics/athletics24.jpeg",
      "/images/newsevents/athletics/athletics25.jpeg",
      "/images/newsevents/athletics/athletics26.jpeg",
      "/images/newsevents/athletics/athletics27.jpeg",
      "/images/newsevents/athletics/athletics28.jpeg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=athletics_highlights_2024",
    videoThumbnail: "/images/newsevents/athletics/athletics23.jpeg",
    featured: true,
    createdAt: "2025-08-15T10:00:00Z",
    updatedAt: "2025-08-15T10:00:00Z",
    author: "Sports Department",
    category: "Achievements",
    eventDate: "2025-08-15",
    location: "Nyayo National Stadium, Nairobi",
    tags: ["athletics", "medals", "competition", "students", "gold-medal", "records"]
  },
  {
    id: "16",
    title: "Visit by Mr Chris Norris - American Friends of Kenya Founder",
    excerpt: "The Carpentry section was privileged to host Mr Chris Norris, core founder of Kongoni Library/Networks (American Friends of Kenya) for an engaging day of tree planting and skill sharing.",
    content: `
      <p>The Carpentry section in building department was privileged to host Mr Chris Norris, core founder of Kongoni Library/Networks (American Friends of Kenya) on Saturday June 5th.</p>
      
      <p>Among the activities of the day were:</p>
      <ol>
        <li><strong>Tree planting</strong> - Contributing to our environmental conservation efforts with 50 indigenous tree saplings</li>
        <li><strong>Visit to the Carpentry store</strong> - Viewing and discussing the various tools and equipment</li>
        <li><strong>7-hour interaction with trainees</strong> - An intensive workshop in the Carpentry section where participants shared different carpentry skills and collaboratively made an office desk to completion</li>
        <li><strong>Skills exchange session</strong> - Mr. Norris shared international carpentry techniques and standards</li>
        <li><strong>Equipment donation discussion</strong> - Planning for future equipment support from American Friends of Kenya</li>
      </ol>
      
      <p>The visit was highly educational and inspiring for our students, providing them with exposure to international perspectives on vocational training and craftsmanship. Mr. Norris shared valuable insights from his experience with technical education programs globally.</p>
      
      <p>The hands-on desk-making session was particularly engaging, with students learning advanced techniques and best practices in furniture construction. The completed office desk will serve as a testament to the collaborative spirit and skilled craftsmanship demonstrated during the visit.</p>
      
      <p>The tree planting initiative aligns with the college's commitment to environmental conservation and sustainable practices. The indigenous trees planted will contribute to campus beautification and environmental protection efforts.</p>
      
      <p>Mr. Norris expressed his admiration for the dedication and skill level of our carpentry students, noting their potential for international market competitiveness with proper support and equipment enhancement.</p>
      
      <p>We look forward to his return with promised equipment donations and continuing this valuable partnership that bridges international cooperation with local technical education.</p>
    `,
    imageUrl: "/images/newsevents/founder/founder15.jpeg",
    images: [
      "/images/newsevents/founder/founder1.jpeg",
      "/images/newsevents/founder/founder2.jpeg",
      "/images/newsevents/founder/founder3.jpeg",
      "/images/newsevents/founder/founder4.jpeg",
      "/images/newsevents/founder/founder5.jpeg",
      "/images/newsevents/founder/founder6.jpeg",
      "/images/newsevents/founder/founder7.jpeg",
      "/images/newsevents/founder/founder8.jpeg"
    ],
    featured: true,
    createdAt: "2025-06-05T14:00:00Z",
    updatedAt: "2025-06-05T14:00:00Z",
    author: "Building Department",
    category: "Events",
    eventDate: "2025-06-05",
    location: "Carpentry Workshop, Building Department",
    tags: ["carpentry", "international", "collaboration", "tree-planting", "skills", "partnership"]
  },
  {
    id: "2",
    title: "Annual Guidance and Counselling Day Promotes Student Wellness",
    excerpt: "Our comprehensive guidance and counselling program focused on mental health, career guidance, and personal development for holistic student growth.",
    content: `
      <p>Kongoni Technical & Vocational Training College successfully hosted its Annual Guidance and Counselling Day, emphasizing the importance of mental health and personal development in technical education.</p>
      
      <p>The day-long event featured various activities designed to support our students' emotional, academic, and career development:</p>
      <ul>
        <li>Individual counselling sessions with professional counsellors</li>
        <li>Group therapy workshops on stress management and study skills</li>
        <li>Career guidance seminars by industry professionals</li>
        <li>Mental health awareness presentations</li>
        <li>Peer support group formations</li>
        <li>Life skills workshops covering financial literacy and personal relationships</li>
        <li>Mindfulness and meditation sessions</li>
        <li>Study techniques and time management workshops</li>
      </ul>
      
      <p>"Student wellness is fundamental to academic success," explained Head of Student Affairs, Ms. Grace Wanjiku. "Through our guidance and counselling program, we ensure that every student has the support they need to thrive both academically and personally."</p>
      
      <p>The event saw participation from over 800 students across all departments, with positive feedback highlighting the practical value of the sessions. Guest speakers included clinical psychologists, career coaches, and successful alumni who shared their experiences and insights.</p>
      
      <p>Key highlights from the day included:</p>
      <ul>
        <li>150+ individual counselling sessions conducted</li>
        <li>20 group workshops with average 15 participants each</li>
        <li>Career guidance sessions for all final-year students</li>
        <li>Mental health screening for early intervention</li>
        <li>Formation of 12 peer support groups across departments</li>
      </ul>
      
      <p>The college's commitment to holistic education includes regular counselling services, study groups, and wellness programs throughout the academic year. Students can access confidential counselling services every weekday at the Student Wellness Center.</p>
      
      <p>"The response from students has been overwhelmingly positive," noted Senior Counsellor Dr. Peter Kamau. "Many students reported feeling more confident about their academic journey and personal development after participating in the day's activities."</p>
    `,
    imageUrl: "/images/newsevents/guidancecounselling/guidance4.jpeg",
    images: [
      "/images/newsevents/guidancecounselling/guidance1.jpeg",
      "/images/newsevents/guidancecounselling/guidance2.jpeg",
      "/images/newsevents/guidancecounselling/guidance3.jpeg",
      "/images/newsevents/guidancecounselling/guidance4.jpeg",
      "/images/newsevents/wellness/wellness1.jpg",
      "/images/newsevents/wellness/wellness2.jpg",
      "/images/newsevents/counselling/session1.jpg",
      "/images/newsevents/counselling/session2.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=student_wellness_highlights",
    videoThumbnail: "/images/newsevents/guidancecounselling/guidance4.jpeg",
    featured: true,
    createdAt: "2025-08-10T14:30:00Z",
    updatedAt: "2025-08-10T14:30:00Z",
    author: "Student Affairs",
    category: "Student Life",
    eventDate: "2025-08-10",
    location: "Main Campus Auditorium",
    tags: ["counselling", "wellness", "mental-health", "career-guidance", "student-support"]
  },

  {
    id: "3",
    title: "New ICT Laboratory Equipment Installation Complete",
    excerpt: "State-of-the-art computer laboratory with 50 modern workstations enhances practical learning for ICT students.",
    content: `
      <p>Kongoni Technical & Vocational Training College has successfully completed the installation of cutting-edge equipment in our expanded ICT laboratory facility.</p>
      
      <p>The new laboratory features:</p>
      <ul>
        <li>50 modern desktop computers with latest processors</li>
        <li>High-speed internet connectivity throughout</li>
        <li>Interactive smart boards for enhanced presentations</li>
        <li>Specialized software for programming and design</li>
        <li>Network infrastructure supporting advanced networking courses</li>
        <li>Air conditioning and ergonomic furniture</li>
      </ul>
      
      <p>This investment represents our commitment to providing students with industry-standard facilities that prepare them for the modern workplace.</p>
    `,
    imageUrl: "/images/departments/ict/ict1.jpg",
    images: [
      "/images/departments/ict/ict1.jpg",
      "/images/departments/ict/ict2.jpg",
      "/images/departments/ict/ict3.jpg",
      "/images/departments/ict/ict4.jpg"
    ],
    featured: false,
    createdAt: "2024-07-20T11:00:00Z",
    updatedAt: "2024-07-20T11:00:00Z",
    author: "ICT Department",
    category: "Facilities",
    eventDate: "2024-07-20",
    location: "ICT Laboratory Block",
    tags: ["technology", "laboratory", "equipment", "ict", "infrastructure"]
  },
  {
    id: "4",
    title: "Automotive Workshop Receives Major Equipment Upgrade",
    excerpt: "New diagnostic equipment and vehicle lifts enhance hands-on training for automotive students.",
    content: `
      <p>Our automotive department has received a significant upgrade with new equipment worth over 2 million Kenyan Shillings.</p>
      
      <p>New equipment includes:</p>
      <ul>
        <li>Electronic diagnostic scanners for modern vehicles</li>
        <li>Hydraulic vehicle lifts for undercarriage work</li>
        <li>Engine analyzer systems</li>
        <li>Brake testing equipment</li>
        <li>Wheel alignment machines</li>
      </ul>
      
      <p>This upgrade ensures our students learn on equipment they'll encounter in modern automotive workshops.</p>
    `,
    imageUrl: "/images/departments/automotive/automotive1.jpg",
    images: [
      "/images/departments/automotive/automotive1.jpg",
      "/images/departments/automotive/automotive2.jpg",
      "/images/departments/automotive/automotive3.jpg"
    ],
    featured: false,
    createdAt: "2025-06-15T09:00:00Z",
    updatedAt: "2025-06-15T09:00:00Z",
    author: "Automotive Department",
    category: "Facilities",
    eventDate: "2025-06-15",
    location: "Automotive Workshop",
    tags: ["automotive", "equipment", "workshop", "upgrade", "training"]
  },
  {
    id: "5",
    title: "Student Entrepreneurship Week Showcases Innovation",
    excerpt: "Students display their business ideas and innovations during the annual entrepreneurship week celebration.",
    content: `
      <p>The annual Student Entrepreneurship Week showcased the innovative spirit of our students across all departments.</p>
      
      <p>Highlights included:</p>
      <ul>
        <li>Business plan competitions with cash prizes</li>
        <li>Innovation exhibitions featuring student projects</li>
        <li>Mentorship sessions with successful entrepreneurs</li>
        <li>Networking opportunities with potential investors</li>
        <li>Workshops on business registration and funding</li>
      </ul>
      
      <p>Over 50 student businesses were showcased, demonstrating the entrepreneurial potential within our college community.</p>
    `,
    imageUrl: "/images/newsevents/entrepreneurship/entrepreneur1.jpg",
    images: [
      "/images/newsevents/entrepreneurship/entrepreneur1.jpg",
      "/images/newsevents/entrepreneurship/entrepreneur2.jpg",
      "/images/newsevents/entrepreneurship/entrepreneur3.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=entrepreneurship_week",
    videoThumbnail: "/images/newsevents/entrepreneurship/entrepreneur1.jpg",
    featured: true,
    createdAt: "2024-05-25T13:00:00Z",
    updatedAt: "2024-05-25T13:00:00Z",
    author: "Business Department",
    category: "Events",
    eventDate: "2024-05-25",
    location: "Main Campus Hall",
    tags: ["entrepreneurship", "innovation", "business", "students", "competition"]
  }
];

export async function GET(request: NextRequest) {
  try {
    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit");
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const search = searchParams.get("search");

    // Start with all news
    let filteredNews = [...mockNews];

    // Apply filters
    if (category && category !== "all") {
      filteredNews = filteredNews.filter(
        news => news.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (featured === "true") {
      filteredNews = filteredNews.filter(news => news.featured);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredNews = filteredNews.filter(
        news =>
          news.title.toLowerCase().includes(searchLower) ||
          news.excerpt.toLowerCase().includes(searchLower) ||
          news.content.toLowerCase().includes(searchLower) ||
          news.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Sort by creation date (newest first)
    filteredNews.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    // Apply limit if specified
    if (limit) {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum) && limitNum > 0) {
        filteredNews = filteredNews.slice(0, limitNum);
      }
    }

    return NextResponse.json(filteredNews, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      }
    });

  } catch (error) {
    console.error("News API error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to fetch news articles" 
      },
      { status: 500 }
    );
  }
}