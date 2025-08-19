// app/api/news/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

// Mock news data - this should match the data in your main news route
const mockNews = [
  {
    id: "1",
    title: "Kongoni Students Excel at Katti Athletics Games 2024",
    excerpt: "Our athletes brought home multiple medals from the Katti Athletics Games, showcasing exceptional talent in track and field events across various categories.",
    content: `
      <p>Kongoni Technical & Vocational Training College is proud to announce the outstanding performance of our student athletes at the prestigious Katti Athletics Games 2024, held at Afraha National Stadium in Nakuru.</p>
      
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
    imageUrl: "/images/newsevents/athletics/athletics18.jpeg",
    featured: true,
    createdAt: "2024-08-15T10:00:00Z",
    updatedAt: "2024-08-15T10:00:00Z",
    author: "Sports Department",
    category: "Achievements"
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
    imageUrl: "/images/newsevents/guidancecounselling/guidance3.jpeg",
    featured: true,
    createdAt: "2024-08-10T14:30:00Z",
    updatedAt: "2024-08-10T14:30:00Z",
    author: "Student Affairs",
    category: "Student Life"
  },
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
    featured: false,
    createdAt: "2024-08-05T10:00:00Z",
    updatedAt: "2024-08-05T10:00:00Z",
    author: "Cultural Committee",
    category: "Events"
  },
  {
    id: "4",
    title: "New Engineering Lab Opens with Modern Equipment",
    excerpt: "State-of-the-art engineering laboratory equipped with cutting-edge tools and equipment to enhance hands-on learning experience for engineering students.",
    content: `
      <p>Kongoni Technical College proudly unveils its new engineering laboratory, representing a significant investment in technical education infrastructure and student learning outcomes.</p>
      
      <p>The facility features modern equipment including:</p>
      <ul>
        <li>Advanced CAD/CAM workstations with latest software</li>
        <li>CNC machines for precision manufacturing</li>
        <li>3D printing and rapid prototyping equipment</li>
        <li>Materials testing and quality control instruments</li>
        <li>Industrial automation and PLC training modules</li>
        <li>Renewable energy demonstration systems</li>
      </ul>
      
      <p>"This laboratory bridges the gap between theoretical knowledge and industry practice," stated Principal Judith Akaranga. "Our students will graduate with hands-on experience using the same technologies they'll encounter in their careers."</p>
      
      <p>The lab serves all engineering departments and will host specialized workshops, industry training sessions, and research projects. Local industry partners have expressed interest in collaborative projects using the new facilities.</p>
    `,
    imageUrl: "/images/news/engineering-lab.jpg",
    featured: false,
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-01T10:00:00Z",
    author: "Engineering Department",
    category: "Facilities"
  }
  // Add all other news items from the main route here...
];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const newsId = params.id;
    
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