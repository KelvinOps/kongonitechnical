// app/api/news/route.ts
import { NextRequest, NextResponse } from "next/server";

// Enhanced mock news data with new events requested
const mockNews = [
  {
    id: "18",
    title: "September 2024 Intake Students Report for New Academic Year",
    excerpt: "We warmly welcome the September 2024 intake students as they begin their technical and vocational training journey at Kongoni Technical & Vocational Training College.",
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
      "/images/campus/campus1.jpg"
    ],
    featured: true,
    createdAt: "2024-09-02T08:00:00Z",
    updatedAt: "2024-09-02T08:00:00Z",
    author: "Administration",
    category: "Student Life",
    eventDate: "2024-09-02",
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
        <li><strong>Solo Verse Category:</strong> 2nd Position</li>
        <li><strong>Spoken Word Category:</strong> 2nd Position</li>
      </ul>
      
      <p>This remarkable performance showcases the dedication and talent of our students, as well as the quality of training they receive in our performing arts program. The students competed against numerous institutions from across the region, making their achievement even more significant.</p>
      
      <p>The drama program at Kongoni Technical College continues to nurture creative expression alongside technical skills, proving that well-rounded education produces exceptional graduates. Our students demonstrated exceptional creativity, stage presence, and mastery of their craft.</p>
      
      <p>"These students have worked tirelessly to perfect their performances," said Drama Instructor Ms. Faith Wanjiru. "Their success reflects not only their individual talents but also their commitment to excellence in all aspects of their education."</p>
      
      <p>The college celebrates this achievement as part of our commitment to developing students' creative and communicative abilities, which are essential skills in today's competitive job market.</p>
      
      <p>Congratulations to all our drama students and their dedicated instructors for this well-deserved recognition!</p>
    `,
    imageUrl: "/images/hero/cultural5.jpg",
    images: [
      "/images/hero/cultural1.jpg",
      "/images/hero/cultural2.jpg", 
      "/images/hero/cultural3.jpg",
      "/images/hero/cultural4.jpg",
      "/images/hero/cultural5.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample_drama_video",
    videoThumbnail: "/images/hero/cultural5.jpg",
    featured: true,
    createdAt: "2024-08-20T16:30:00Z",
    updatedAt: "2024-08-20T16:30:00Z",
    author: "Performing Arts Department",
    category: "Achievements",
    eventDate: "2024-08-20", 
    location: "Regional Drama Festival Venue",
    tags: ["drama", "competition", "performance", "arts", "achievement"]
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
            <li>Mary Chepkemoi - 1500m Women's Race</li>
            <li>James Kiprotich - Men's Shot Put</li>
            <li>Women's 4x400m Relay Team</li>
          </ul>
        </li>
        <li><strong>Silver Medals (5):</strong> 100m Sprint, High Jump, Javelin, Long Jump, and Men's 800m</li>
        <li><strong>Bronze Medals (4):</strong> Various track and field events</li>
      </ul>
      
      <p>"This remarkable achievement reflects not only the natural talent of our students but also their dedication to training and the excellent coaching support they receive," said Sports Coordinator Mr. David Mutua.</p>
      
      <p>The college's investment in sports facilities and training programs continues to pay dividends, with our athletes consistently performing at national and regional levels. Several of our medalists have been scouted for national team selections.</p>
      
      <p>We congratulate all our athletes and look forward to their continued success in upcoming competitions. Special recognition goes to our coaching staff and the entire college community for their unwavering support.</p>
    `,
    imageUrl: "/images/newsevents/athletics/athletics23.jpeg",
    images: [
      "/images/newsevents/athletics/athletics1.jpeg",
      "/images/newsevents/athletics/athletics2.jpeg",
      "/images/newsevents/athletics/athletics3.jpeg",
      "/images/newsevents/athletics/athletics18.jpeg",
      "/images/newsevents/athletics/athletics23.jpeg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoThumbnail: "/images/newsevents/athletics/athletics23.jpeg",
    featured: true,
    createdAt: "2024-08-15T10:00:00Z",
    updatedAt: "2024-08-15T10:00:00Z",
    author: "Sports Department",
    category: "Achievements",
    eventDate: "2024-08-15",
    location: "Nyayo National Stadium, Nairobi",
    tags: ["athletics", "medals", "competition", "students", "gold-medal"]
  },
  {
    id: "16",
    title: "Visit by Mr Chris Norris - American Friends of Kenya Founder",
    excerpt: "The Carpentry section was privileged to host Mr Chris Norris, core founder of Kongoni Library/Networks (American Friends of Kenya) for an engaging day of tree planting and skill sharing.",
    content: `
      <p>Good afternoon governors. The Carpentry section in building department was privileged to host Mr Chris Norris, core founder of Kongoni Library/Networks (American Friends of Kenya) on Saturday June 5th.</p>
      
      <p>Among the activities of the day were:</p>
      <ol>
        <li><strong>Tree planting</strong> - Contributing to our environmental conservation efforts</li>
        <li><strong>Visit to the Carpentry store</strong> - Viewing and discussing the various tools and equipment</li>
        <li><strong>7-hour interaction with trainees</strong> - An intensive workshop in the Carpentry section where participants shared different carpentry skills and collaboratively made an office desk to completion</li>
      </ol>
      
      <p>The visit was highly educational and inspiring for our students, providing them with exposure to international perspectives on vocational training and craftsmanship. Mr. Norris shared valuable insights from his experience with technical education programs globally.</p>
      
      <p>The hands-on desk-making session was particularly engaging, with students learning advanced techniques and best practices in furniture construction. The completed office desk will serve as a testament to the collaborative spirit and skilled craftsmanship demonstrated during the visit.</p>
      
      <p>We look forward to his return with goodies as promised and continuing this valuable partnership that bridges international cooperation with local technical education.</p>
    `,
    imageUrl: "/images/departments/building/carpentry1.jpg",
    images: [
      "/images/departments/building/carpentry1.jpg",
      "/images/departments/building/carpentry2.jpg",
      "/images/departments/building/carpentry3.jpg",
      "/images/departments/building/building1.jpg",
      "/images/departments/building/building2.jpg"
    ],
    featured: true,
    createdAt: "2024-06-05T14:00:00Z",
    updatedAt: "2024-06-05T14:00:00Z",
    author: "Building Department",
    category: "Events",
    eventDate: "2024-06-05",
    location: "Carpentry Workshop, Building Department",
    tags: ["carpentry", "international", "collaboration", "tree-planting", "skills"]
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
      </ul>
      
      <p>"Student wellness is fundamental to academic success," explained Head of Student Affairs, Ms. Grace Wanjiku. "Through our guidance and counselling program, we ensure that every student has the support they need to thrive both academically and personally."</p>
      
      <p>The event saw participation from over 800 students across all departments, with positive feedback highlighting the practical value of the sessions. Guest speakers included clinical psychologists, career coaches, and successful alumni who shared their experiences and insights.</p>
      
      <p>The college's commitment to holistic education includes regular counselling services, study groups, and wellness programs throughout the academic year. Students can access confidential counselling services every weekday at the Student Wellness Center.</p>
    `,
    imageUrl: "/images/newsevents/guidancecounselling/guidance4.jpeg",
    images: [
      "/images/newsevents/guidancecounselling/guidance1.jpeg",
      "/images/newsevents/guidancecounselling/guidance2.jpeg",
      "/images/newsevents/guidancecounselling/guidance3.jpeg",
      "/images/newsevents/guidancecounselling/guidance4.jpeg"
    ],
    featured: true,
    createdAt: "2024-08-10T14:30:00Z",
    updatedAt: "2024-08-10T14:30:00Z",
    author: "Student Affairs",
    category: "Student Life",
    eventDate: "2024-08-10",
    location: "Main Campus Auditorium",
    tags: ["counselling", "wellness", "mental-health", "career-guidance"]
  },
  // ... rest of existing news items
  {
    id: "3",
    title: "Kongoni Technical & Vocational College Cultural Day Celebration",
    excerpt: "A vibrant celebration of Kenya's diverse cultures featuring traditional dances, music, food, and art from students representing different ethnic communities.",
    content: `
      <p>The annual Cultural Day at Kongoni Technical & Vocational Training College was a spectacular celebration of Kenya's rich cultural diversity, bringing together students from different ethnic backgrounds to showcase their heritage.</p>
      
      <p>The event featured an impressive array of cultural presentations:</p>
      <ul>
        <li>Traditional dances from over 15 Kenyan communities</li>
        <li>Cultural music performances with traditional instruments</li>
        <li>Art and craft exhibitions showcasing local artistry</li>
        <li>Fashion show featuring traditional attire from different regions</li>
        <li>Culinary showcase with authentic dishes from various cultures</li>
        <li>Poetry and storytelling sessions in local languages</li>
      </ul>
      
      <p>"Cultural Day is more than entertainment; it's about fostering unity, understanding, and respect among our diverse student body," said Dean of Students, Mr. Robert Kimani. "It helps students appreciate the beauty of our multicultural society."</p>
      
      <p>The highlight of the day was the grand cultural parade where students dressed in traditional attire from their respective communities, creating a colorful display of Kenya's cultural richness. The event also featured educational booths where students learned about different cultural practices and traditions.</p>
      
      <p>This annual tradition continues to strengthen the bonds between students while preserving and celebrating Kenya's cultural heritage within our technical education environment.</p>
    `,
    imageUrl: "/images/hero/cultural5.jpg",
    images: [
      "/images/hero/cultural1.jpg",
      "/images/hero/cultural2.jpg",
      "/images/hero/cultural3.jpg",
      "/images/hero/cultural4.jpg",
      "/images/hero/cultural5.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample_cultural_video",
    videoThumbnail: "/images/hero/cultural5.jpg",
    featured: false,
    createdAt: "2024-08-05T10:00:00Z",
    updatedAt: "2024-08-05T10:00:00Z",
    author: "Cultural Committee",
    category: "Events",
    eventDate: "2024-08-05",
    location: "Main Campus Grounds",
    tags: ["culture", "diversity", "celebration", "traditions"]
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const category = searchParams.get('category');
    const limit = searchParams.get('limit');
    const search = searchParams.get('search');
    const tags = searchParams.get('tags');

    let filteredNews = [...mockNews];

    // Filter by featured if requested
    if (featured === 'true') {
      filteredNews = filteredNews.filter(news => news.featured);
    }

    // Filter by category if requested
    if (category && category !== 'all') {
      filteredNews = filteredNews.filter(news => 
        news.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by tags if requested
    if (tags) {
      filteredNews = filteredNews.filter(news => 
        news.tags?.some(tag => tag.toLowerCase().includes(tags.toLowerCase()))
      );
    }

    // Filter by search term if requested
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredNews = filteredNews.filter(news => 
        news.title.toLowerCase().includes(searchTerm) ||
        news.excerpt.toLowerCase().includes(searchTerm) ||
        news.content.toLowerCase().includes(searchTerm) ||
        news.author.toLowerCase().includes(searchTerm) ||
        news.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Sort by creation date (newest first)
    filteredNews.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    // Limit results if requested
    if (limit) {
      const limitNum = parseInt(limit);
      if (!isNaN(limitNum) && limitNum > 0) {
        filteredNews = filteredNews.slice(0, limitNum);
      }
    }

    return NextResponse.json(filteredNews, { status: 200 });

  } catch (error) {
    console.error("News API error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to fetch news" 
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Here you would typically:
    // 1. Validate the request body
    // 2. Check authentication/authorization
    // 3. Save to database
    
    const newNews = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(newNews, { status: 201 });

  } catch (error) {
    console.error("Create news error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to create news article" 
      },
      { status: 500 }
    );
  }
}