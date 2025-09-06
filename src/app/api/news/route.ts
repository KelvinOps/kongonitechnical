// app/api/news/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

// Complete mock news data - synchronized with main news route
const mockNews = [
  
  {
    id: "18",
    title: "September 2025 Intake Students Report for New Academic Year",
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
    eventDate: "2025-09-02",
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
    createdAt: "2024-08-15T10:00:00Z",
    updatedAt: "2024-08-15T10:00:00Z",
    author: "Sports Department",
    category: "Achievements",
    eventDate: "2024-08-15",
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
    createdAt: "2024-06-05T14:00:00Z",
    updatedAt: "2024-06-05T14:00:00Z",
    author: "Building Department",
    category: "Events",
    eventDate: "2024-06-05",
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
    createdAt: "2024-08-10T14:30:00Z",
    updatedAt: "2024-08-10T14:30:00Z",
    author: "Student Affairs",
    category: "Student Life",
    eventDate: "2024-08-10",
    location: "Main Campus Auditorium",
    tags: ["counselling", "wellness", "mental-health", "career-guidance", "student-support"]
  },
  // Additional news articles to complete the dataset
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
    createdAt: "2024-06-15T09:00:00Z",
    updatedAt: "2024-06-15T09:00:00Z",
    author: "Automotive Department",
    category: "Facilities",
    eventDate: "2024-06-15",
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
  },
  {
    id: "6",
    title: "Partnership with Local Industries Enhances Graduate Employment",
    excerpt: "New partnerships with leading companies provide direct employment pathways for our graduates.",
    content: `
      <p>Kongoni Technical & Vocational Training College has signed partnerships with over 20 local industries to enhance graduate employment opportunities.</p>
      
      <p>Partnership benefits include:</p>
      <ul>
        <li>Guaranteed internship placements for final-year students</li>
        <li>Industry-specific training programs</li>
        <li>Direct recruitment opportunities</li>
        <li>Guest lecturers from partner companies</li>
        <li>Equipment donations and facility upgrades</li>
      </ul>
      
      <p>These partnerships ensure our graduates have direct pathways to employment upon completion of their studies.</p>
    `,
    imageUrl: "/images/newsevents/partnerships/partnership1.jpg",
    images: [
      "/images/newsevents/partnerships/partnership1.jpg",
      "/images/newsevents/partnerships/partnership2.jpg"
    ],
    featured: true,
    createdAt: "2024-04-10T10:00:00Z",
    updatedAt: "2024-04-10T10:00:00Z",
    author: "Administration",
    category: "Partnerships",
    eventDate: "2024-04-10",
    location: "Boardroom",
    tags: ["partnerships", "employment", "industry", "graduates", "internships"]
  },
  {
    id: "7",
    title: "Environmental Conservation Day Promotes Green Initiatives",
    excerpt: "College-wide environmental conservation activities promote sustainability and environmental awareness.",
    content: `
      <p>Our annual Environmental Conservation Day brought together students, staff, and community members for environmental protection activities.</p>
      
      <p>Activities included:</p>
      <ul>
        <li>Tree planting around campus grounds</li>
        <li>Waste segregation and recycling workshops</li>
        <li>Solar energy demonstration projects</li>
        <li>Water conservation awareness campaigns</li>
        <li>Organic farming demonstrations</li>
      </ul>
      
      <p>Over 300 trees were planted, and sustainable practices were promoted across all college departments.</p>
    `,
    imageUrl: "/images/newsevents/environment/environment1.jpg",
    images: [
      "/images/newsevents/environment/environment1.jpg",
      "/images/newsevents/environment/environment2.jpg",
      "/images/newsevents/environment/environment3.jpg"
    ],
    featured: false,
    createdAt: "2024-03-22T08:00:00Z",
    updatedAt: "2024-03-22T08:00:00Z",
    author: "Environmental Club",
    category: "Sustainability",
    eventDate: "2024-03-22",
    location: "College Campus",
    tags: ["environment", "sustainability", "conservation", "trees", "green"]
  },
  {
    id: "8",
    title: "Cultural Week Celebrates Diversity and Talent",
    excerpt: "Annual cultural week showcases the rich diversity of our student community through performances and exhibitions.",
    content: `
      <p>The annual Cultural Week celebrated the diverse backgrounds of our student community with performances, exhibitions, and cultural exchanges.</p>
      
      <p>Event highlights:</p>
      <ul>
        <li>Traditional dance performances from various communities</li>
        <li>Cultural food festivals featuring local cuisines</li>
        <li>Art exhibitions by Fashion & Design students</li>
        <li>Music concerts featuring student bands</li>
        <li>Poetry and storytelling sessions</li>
        <li>Traditional craft demonstrations</li>
      </ul>
      
      <p>The week-long celebration promoted cultural understanding and unity among our diverse student population.</p>
    `,
    imageUrl: "/images/hero/cultural1.jpg",
    images: [
      "/images/hero/cultural1.jpg",
      "/images/hero/cultural2.jpg",
      "/images/hero/cultural3.jpg",
      "/images/hero/cultural4.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=cultural_week_highlights",
    videoThumbnail: "/images/hero/cultural1.jpg",
    featured: true,
    createdAt: "2024-02-14T15:00:00Z",
    updatedAt: "2024-02-14T15:00:00Z",
    author: "Student Affairs",
    category: "Events",
    eventDate: "2024-02-14",
    location: "Main Campus",
    tags: ["culture", "diversity", "performances", "arts", "community"]
  },
  {
    id: "9",
    title: "Skills Competition Showcases Student Excellence",
    excerpt: "Inter-departmental skills competition demonstrates the high level of technical competency achieved by our students.",
    content: `
      <p>The annual inter-departmental skills competition showcased the technical excellence of students across all programs.</p>
      
      <p>Competition categories included:</p>
      <ul>
        <li>Carpentry furniture making contest</li>
        <li>Electrical wiring speed challenges</li>
        <li>Automotive diagnostic competitions</li>
        <li>ICT programming challenges</li>
        <li>Culinary arts cook-offs</li>
        <li>Fashion design showcases</li>
      </ul>
      
      <p>Winners received certificates, trophies, and monetary prizes, with top performers advancing to regional competitions.</p>
    `,
    imageUrl: "/images/newsevents/competition/skills1.jpg",
    images: [
      "/images/newsevents/competition/skills1.jpg",
      "/images/newsevents/competition/skills2.jpg",
      "/images/newsevents/competition/skills3.jpg"
    ],
    featured: false,
    createdAt: "2024-01-18T12:00:00Z",
    updatedAt: "2024-01-18T12:00:00Z",
    author: "Academic Office",
    category: "Achievements",
    eventDate: "2024-01-18",
    location: "Various Workshops",
    tags: ["competition", "skills", "excellence", "students", "technical"]
  },
  {
    id: "10",
    title: "Alumni Success Stories Inspire Current Students",
    excerpt: "Former graduates return to share their career journeys and inspire the next generation of skilled professionals.",
    content: `
      <p>Our annual Alumni Day featured inspiring success stories from graduates who have excelled in their respective fields.</p>
      
      <p>Featured alumni included:</p>
      <ul>
        <li>John Mwangi (Class of 2018) - Now owns a successful electrical contracting company</li>
        <li>Grace Wanjiku (Class of 2019) - Software developer at a leading tech company</li>
        <li>Peter Kiprotich (Class of 2017) - Master craftsman and furniture workshop owner</li>
        <li>Mary Achieng (Class of 2020) - Head chef at a five-star hotel</li>
      </ul>
      
      <p>These success stories demonstrate the career potential and opportunities available to our current students through dedicated study and practical application.</p>
    `,
    imageUrl: "/images/newsevents/alumni/alumni1.jpg",
    images: [
      "/images/newsevents/alumni/alumni1.jpg",
      "/images/newsevents/alumni/alumni2.jpg",
      "/images/newsevents/alumni/alumni3.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=alumni_success_stories",
    videoThumbnail: "/images/newsevents/alumni/alumni1.jpg",
    featured: true,
    createdAt: "2023-12-10T14:00:00Z",
    updatedAt: "2023-12-10T14:00:00Z",
    author: "Alumni Relations",
    category: "Alumni",
    eventDate: "2023-12-10",
    location: "Main Auditorium",
    tags: ["alumni", "success", "inspiration", "careers", "graduates"]
  },
  {
    id: "11",
    title: "Digital Learning Platform Launched for Distance Education",
    excerpt: "New online learning management system enables flexible and accessible education for all students.",
    content: `
      <p>Kongoni Technical & Vocational Training College has launched a comprehensive digital learning platform to support both on-campus and distance learning.</p>
      
      <p>Platform features include:</p>
      <ul>
        <li>Interactive online course modules</li>
        <li>Virtual laboratory simulations</li>
        <li>Video lectures and tutorials</li>
        <li>Online assessment and grading systems</li>
        <li>Student-instructor communication tools</li>
        <li>Mobile app for learning on-the-go</li>
      </ul>
      
      <p>This digital transformation ensures continuity of education and provides flexible learning options for working students.</p>
    `,
    imageUrl: "/images/newsevents/digital/digital1.jpg",
    images: [
      "/images/newsevents/digital/digital1.jpg",
      "/images/newsevents/digital/digital2.jpg"
    ],
    featured: false,
    createdAt: "2023-11-20T09:30:00Z",
    updatedAt: "2023-11-20T09:30:00Z",
    author: "ICT Department",
    category: "Technology",
    eventDate: "2023-11-20",
    location: "ICT Center",
    tags: ["digital", "online-learning", "technology", "education", "platform"]
  },
  {
    id: "12",
    title: "Community Outreach Program Serves Local Villages",
    excerpt: "Students and staff participate in community service projects, sharing skills and knowledge with local communities.",
    content: `
      <p>Our quarterly community outreach program brought students and staff to nearby villages for skills sharing and community service.</p>
      
      <p>Services provided included:</p>
      <ul>
        <li>Free electrical installations for community centers</li>
        <li>Water system repairs and maintenance</li>
        <li>Computer literacy training for youth</li>
        <li>Tailoring workshops for women groups</li>
        <li>Basic automotive maintenance training</li>
        <li>Health and safety awareness sessions</li>
      </ul>
      
      <p>These outreach programs strengthen community bonds and provide practical application opportunities for our students.</p>
    `,
    imageUrl: "/images/newsevents/outreach/outreach1.jpg",
    images: [
      "/images/newsevents/outreach/outreach1.jpg",
      "/images/newsevents/outreach/outreach2.jpg",
      "/images/newsevents/outreach/outreach3.jpg"
    ],
    featured: false,
    createdAt: "2023-10-15T11:00:00Z",
    updatedAt: "2023-10-15T11:00:00Z",
    author: "Community Relations",
    category: "Community",
    eventDate: "2023-10-15",
    location: "Local Villages",
    tags: ["community", "outreach", "service", "skills", "villages"]
  },
  {
    id: "13",
    title: "Innovation Hub Opens to Foster Entrepreneurship",
    excerpt: "New innovation hub provides resources and mentorship for student entrepreneurs and inventors.",
    content: `
      <p>The newly opened Innovation Hub serves as a center for creativity, entrepreneurship, and technological innovation within our college.</p>
      
      <p>Hub facilities include:</p>
      <ul>
        <li>3D printing and prototyping equipment</li>
        <li>Co-working spaces for student entrepreneurs</li>
        <li>Meeting rooms for business planning</li>
        <li>Mentorship programs with industry experts</li>
        <li>Access to funding and investment opportunities</li>
        <li>Patent and intellectual property guidance</li>
      </ul>
      
      <p>The Innovation Hub is expected to foster a new generation of tech-savvy entrepreneurs and inventors.</p>
    `,
    imageUrl: "/images/newsevents/innovation/innovation1.jpg",
    images: [
      "/images/newsevents/innovation/innovation1.jpg",
      "/images/newsevents/innovation/innovation2.jpg"
    ],
    featured: true,
    createdAt: "2023-09-08T13:00:00Z",
    updatedAt: "2023-09-08T13:00:00Z",
    author: "Innovation Center",
    category: "Innovation",
    eventDate: "2023-09-08",
    location: "Innovation Hub",
    tags: ["innovation", "entrepreneurship", "technology", "startups", "mentorship"]
  },
  {
    id: "14",
    title: "International Exchange Program Launches",
    excerpt: "New partnership enables student and faculty exchanges with technical colleges in Germany and Canada.",
    content: `
      <p>Kongoni Technical & Vocational Training College has launched an international exchange program with partner institutions in Germany and Canada.</p>
      
      <p>Program benefits include:</p>
      <ul>
        <li>Semester-long study abroad opportunities</li>
        <li>International internship placements</li>
        <li>Faculty exchange and training programs</li>
        <li>Shared curriculum development projects</li>
        <li>Cultural immersion experiences</li>
        <li>Language learning opportunities</li>
      </ul>
      
      <p>The first cohort of 10 students will travel to Germany in January 2024 for a semester of advanced technical training.</p>
    `,
    imageUrl: "/images/newsevents/international/exchange1.jpg",
    images: [
      "/images/newsevents/international/exchange1.jpg",
      "/images/newsevents/international/exchange2.jpg"
    ],
    featured: true,
    createdAt: "2023-08-25T10:00:00Z",
    updatedAt: "2023-08-25T10:00:00Z",
    author: "International Programs",
    category: "Programs",
    eventDate: "2023-08-25",
    location: "International Office",
    tags: ["international", "exchange", "programs", "germany", "canada", "partnership"]
  },
  {
    id: "15",
    title: "Green Energy Project Powers Campus Sustainably",
    excerpt: "Solar panel installation and biogas plant reduce carbon footprint and promote renewable energy education.",
    content: `
      <p>Our campus has become a model for sustainable energy with the completion of major green energy projects.</p>
      
      <p>Sustainability initiatives include:</p>
      <ul>
        <li>500kW solar panel system covering 60% of campus energy needs</li>
        <li>Biogas plant processing organic waste from cafeteria</li>
        <li>Rainwater harvesting system for irrigation</li>
        <li>Energy-efficient LED lighting throughout campus</li>
        <li>Electric vehicle charging stations</li>
        <li>Student research projects on renewable energy</li>
      </ul>
      
      <p>These projects serve both as cost-saving measures and practical learning laboratories for our students.</p>
    `,
    imageUrl: "/images/newsevents/green/green1.jpg",
    images: [
      "/images/newsevents/green/green1.jpg",
      "/images/newsevents/green/green2.jpg",
      "/images/newsevents/green/green3.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=green_energy_campus",
    videoThumbnail: "/images/newsevents/green/green1.jpg",
    featured: true,
    createdAt: "2023-07-12T08:00:00Z",
    updatedAt: "2023-07-12T08:00:00Z",
    author: "Sustainability Office",
    category: "Sustainability",
    eventDate: "2023-07-12",
    location: "Campus Facilities",
    tags: ["green", "energy", "solar", "sustainability", "renewable", "campus"]
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