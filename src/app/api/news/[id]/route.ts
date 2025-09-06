// app/api/news/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

// Enhanced mock news data with video support, multiple images, and comprehensive events
const mockNews = [
  {
    id: "19",
    title: "December 2024 Graduation Ceremony - Celebrating Excellence",
    excerpt: "Over 800 students from various technical and vocational programs will graduate in our biggest ceremony yet, marking significant achievements in skills development.",
    content: `
      <p>Kongoni Technical & Vocational Training College is proud to announce the December 2024 Graduation Ceremony, our largest graduation event to date with over 800 graduating students from all departments.</p>
      
      <p><strong>Graduation Statistics:</strong></p>
      <ul>
        <li><strong>Building & Construction:</strong> 180 graduates (Masonry: 45, Carpentry: 52, Plumbing: 38, Electrical: 45)</li>
        <li><strong>ICT Department:</strong> 165 graduates (Computer Studies: 85, Software Development: 45, Digital Marketing: 35)</li>
        <li><strong>Automotive Department:</strong> 125 graduates (Motor Vehicle Mechanics: 85, Auto Electrical: 40)</li>
        <li><strong>Business Studies:</strong> 145 graduates (Entrepreneurship: 60, Accounting: 50, Business Management: 35)</li>
        <li><strong>Fashion & Design:</strong> 95 graduates (Tailoring: 65, Dress Making: 30)</li>
        <li><strong>Food & Beverage:</strong> 90 graduates (Catering: 55, Food Production: 35)</li>
      </ul>
      
      <p>The ceremony will feature keynote addresses from industry leaders, including Cabinet Secretary for Education and representatives from major employers who have consistently recruited our graduates.</p>
      
      <p>"This graduation represents not just individual achievement, but our collective success in producing skilled professionals ready to contribute to Kenya's economic development," said Principal Judith Akaranga.</p>
      
      <p>Notable achievements include 15 students graduating with distinction, 45 students already secured employment before graduation, and 25 students launching their own businesses using skills acquired at the college.</p>
      
      <p>The ceremony will be held at the Main Campus grounds with live streaming available for families unable to attend in person.</p>
    `,
    imageUrl: "/images/newsevents/graduation/graduation1.jpg",
    images: [
      "/images/newsevents/graduation/graduation1.jpg",
      "/images/newsevents/graduation/graduation2.jpg",
      "/images/newsevents/graduation/graduation3.jpg",
      "/images/newsevents/graduation/graduation4.jpg",
      "/images/admin/admin1.jpeg",
      "/images/admin/admin2.jpeg",
      "/images/campus/campus1.jpg",
      "/images/campus/campus2.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=graduation_highlights",
    videoThumbnail: "/images/newsevents/graduation/graduation1.jpg",
    featured: true,
    createdAt: "2024-12-01T09:00:00Z",
    updatedAt: "2024-12-01T09:00:00Z",
    author: "Administration",
    category: "Events",
    eventDate: "2024-12-15",
    location: "Main Campus Grounds",
    tags: ["graduation", "ceremony", "achievement", "celebration", "employment"]
  },
  {
    id: "18",
    title: "September 2025 Intake Students Report for New Academic Year",
    excerpt: "We warmly welcome the September 2025 intake students as they begin their technical and vocational training journey at Kongoni Technical & Vocational Training College.",
    content: `
      <p>Kongoni Technical & Vocational Training College is pleased to welcome the September 2024 intake students who are reporting for the commencement of their technical and vocational training programs.</p>
      
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
    imageUrl: "/images/admin/admin1.jpeg",
    images: [
      "/images/admin/admin1.jpeg",
      "/images/admin/admin2.jpeg",
      "/images/admin/admin3.jpeg",
      "/images/admin/admin4.jpeg",
      "/images/campus/campus1.jpg",
      "/images/campus/campus2.jpg",
      "/images/newsevents/orientation/orientation1.jpg",
      "/images/newsevents/orientation/orientation2.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=orientation_welcome",
    videoThumbnail: "/images/admin/admin1.jpeg",
    featured: true,
    createdAt: "2025-09-02T08:00:00Z",
    updatedAt: "2025-09-02T08:00:00Z",
    author: "Administration",
    category: "Student Life",
    eventDate: "2024-09-02",
    location: "Main Campus",
    tags: ["intake", "new-students", "orientation", "academic-year"]
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
    createdAt: "2025-07-15T10:00:00Z",
    updatedAt: "2025-07-15T10:00:00Z",
    author: "Sports Department",
    category: "Achievements",
    eventDate: "2024-08-15",
    location: "Nyayo National Stadium, Nairobi",
    tags: ["athletics", "medals", "competition", "students", "gold-medal", "records"]
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
    createdAt: "2025-05-10T14:30:00Z",
    updatedAt: "2025-05-10T14:30:00Z",
    author: "Student Affairs",
    category: "Student Life",
    eventDate: "2024-08-10",
    location: "Main Campus Auditorium",
    tags: ["counselling", "wellness", "mental-health", "career-guidance", "student-support"]
  },
  // Include all other news items from the main route...
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
    imageUrl: "/images/departments/building/carpentry1.jpg",
    images: [
      "/images/departments/building/carpentry1.jpg",
      "/images/departments/building/carpentry2.jpg",
      "/images/departments/building/carpentry3.jpg",
      "/images/departments/building/building1.jpg",
      "/images/departments/building/building2.jpg",
      "/images/newsevents/tree-planting/tree1.jpg",
      "/images/newsevents/tree-planting/tree2.jpg",
      "/images/newsevents/international/visit1.jpg"
    ],
    featured: true,
    createdAt: "2025-06-05T14:00:00Z",
    updatedAt: "2025-06-05T14:00:00Z",
    author: "Building Department",
    category: "Events",
    eventDate: "2024-06-05",
    location: "Carpentry Workshop, Building Department",
    tags: ["carpentry", "international", "collaboration", "tree-planting", "skills", "partnership"]
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
    createdAt: "2024-08-20T16:30:00Z",
    updatedAt: "2024-08-20T16:30:00Z",
    author: "Performing Arts Department",
    category: "Achievements",
    eventDate: "2024-08-20", 
    location: "Regional Drama Festival Venue",
    tags: ["drama", "competition", "performance", "arts", "achievement", "regional"]
  }
];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: newsId } = await params;
    
    // Find the news article by ID
    const newsArticle = mockNews.find(news => news.id === newsId);
    
    if (!newsArticle) {
      return NextResponse.json(
        { 
          success: false, 
          message: "News article not found" 
        },
        { status: 404 }
      );
    }

    return NextResponse.json(newsArticle, { status: 200 });

  } catch (error) {
    console.error("Single news API error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to fetch news article" 
      },
      { status: 500 }
    );
  }
}