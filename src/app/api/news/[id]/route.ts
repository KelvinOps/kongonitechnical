// app/api/news/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

// Enhanced mock news data with video support, multiple images, and comprehensive events
const mockNews = [
  {
  id: "28",
  title: "Kongoni Technical College Partners with Modia Driving School to Offer Comprehensive Driving Courses",
  excerpt: "Kongoni Technical & Vocational College announces exciting collaboration with Modia Driving School to provide professional driving certification courses on campus, featuring NTSA-certified training across multiple vehicle classes.",
  content: `
    <p>Kongoni Technical & Vocational Training College is proud to announce a strategic partnership with <strong>Modia Driving School</strong>, bringing professional driving education directly to our campus. This collaboration represents our commitment to expanding practical skills training and providing our students and community with valuable, certified driving qualifications.</p>
    
    <p><strong>🚗 About the Partnership:</strong></p>
    <p>This partnership combines Kongoni Technical College's educational excellence with Modia Driving School's professional driving instruction expertise. Together, we offer comprehensive driving courses designed to meet industry standards and prepare participants for successful careers in transportation and logistics.</p>
    
    <p><strong>🎓 Comprehensive Course Offerings:</strong></p>
    <p>The program offers training across multiple vehicle classes, catering to diverse career paths and personal development goals:</p>
    
    <p><strong>🏍️ CLASS A (Motorcycles):</strong></p>
    <ul>
      <li><strong>A1 Motorcycles</strong> - Basic motorcycle operation and safety</li>
      <li><strong>A2 Light Motorcycles</strong> - Advanced motorcycle handling</li>
    </ul>
    
    <p><strong>🚗 CLASS B (Private Vehicles):</strong></p>
    <ul>
      <li><strong>B2 Saloon - Manual</strong> - Standard passenger vehicle operation</li>
      <li><strong>B3 Professional</strong> - Professional driving standards</li>
    </ul>
    
    <p><strong>🚚 CLASS C (Commercial Trucks):</strong></p>
    <ul>
      <li><strong>C1 Light Commercial Trucks</strong> - Light truck operation</li>
      <li><strong>C Medium Trucks</strong> - Medium commercial vehicles</li>
    </ul>
    
    <p><strong>🚐 CLASS D (Public Service Vehicles):</strong></p>
    <ul>
      <li><strong>D1 Vans - PSV's</strong> - Public service vans</li>
      <li><strong>D2 Mini Buses</strong> - Mini-bus operation</li>
    </ul>
    
    <p><strong>✅ Why Choose Our Driving Program?</strong></p>
    <ul>
      <li><strong>NTSA-Certified Instructors:</strong> All instructors are certified by the National Transport and Safety Authority</li>
      <li><strong>Modern Facilities:</strong> Well-equipped classrooms and training vehicles</li>
      <li><strong>Flexible Scheduling:</strong> Lesson plans designed to accommodate different timetables</li>
      <li><strong>Payment Flexibility:</strong> Installment payment options available</li>
      <li><strong>Comprehensive Training:</strong> Exposure to all major roads and highway conditions</li>
      <li><strong>Campus Convenience:</strong> Training conducted at Kongoni Technical College</li>
      <li><strong>Professional Standards:</strong> Industry-aligned curriculum and assessment</li>
    </ul>
    
    <p><strong>🎯 Program Benefits for Students:</strong></p>
    <ul>
      <li>Enhanced employability with professional driving certification</li>
      <li>Practical skills complementing technical training</li>
      <li>Convenient on-campus training facilities</li>
      <li>Affordable rates with flexible payment plans</li>
      <li>Professional development for various career paths</li>
      <li>NTSA-recognized certification upon completion</li>
    </ul>
    
    <p><strong>🏫 Institutional Vision:</strong></p>
    <p>"This partnership aligns perfectly with our mission to provide comprehensive vocational training," said Principal Judith Akaranga. "By offering driving courses alongside our technical programs, we're creating more opportunities for our students to develop marketable skills and increase their employability."</p>
    
    <p>The collaboration represents Kongoni Technical College's ongoing commitment to expanding its educational offerings and responding to community needs. Driving skills are increasingly valuable in today's job market, and this program ensures our students graduate with additional qualifications.</p>
    
    <p><strong>📊 Training Methodology:</strong></p>
    <ul>
      <li><strong>Theory Classes:</strong> Comprehensive classroom instruction on traffic rules, safety regulations, and driving principles</li>
      <li><strong>Practical Training:</strong> Hands-on driving experience with certified instructors</li>
      <li><strong>Road Safety Education:</strong> Emphasis on defensive driving and road safety awareness</li>
      <li><strong>Assessment Preparation:</strong> Thorough preparation for NTSA driving tests</li>
      <li><strong>Real-World Exposure:</strong> Training on various road types and conditions</li>
    </ul>
    
    <p><strong>👥 Target Audience:</strong></p>
    <ul>
      <li>Kongoni Technical College students seeking additional skills</li>
      <li>College alumni looking to enhance their qualifications</li>
      <li>Community members seeking professional driving certification</li>
      <li>Individuals pursuing careers in transport and logistics</li>
      <li>Business owners needing certified drivers</li>
    </ul>
    
    <p><strong>🚦 Safety First Approach:</strong></p>
    <p>The program emphasizes road safety throughout all training modules. "We believe that good drivers are safe drivers," noted the Modia Driving School Director. "Our curriculum focuses not just on passing the test, but on developing responsible, safety-conscious drivers."</p>
    
    <p><strong>📅 Program Details:</strong></p>
    <ul>
      <li><strong>Registration:</strong> Ongoing - enroll at any time</li>
      <li><strong>Location:</strong> Kongoni Technical & Vocational College Campus</li>
      <li><strong>Duration:</strong> Varies by class type and individual progress</li>
      <li><strong>Certification:</strong> NTSA-recognized upon successful completion</li>
    </ul>
    
    <p><strong>📞 Contact Information:</strong></p>
    <p>For inquiries and registration:</p>
    <ul>
      <li><strong>Phone/WhatsApp:</strong> 0788 070 303</li>
      <li><strong>Phone/WhatsApp:</strong> 0722 794 586</li>
      <li><strong>Phone/WhatsApp:</strong> 0781 930 803</li>
      <li><strong>Phone/WhatsApp:</strong> 0740 325 676</li>
      <li><strong>Visit:</strong> Kongoni Technical College Administration Office</li>
    </ul>
    
    <p><strong>🌟 Community Impact:</strong></p>
    <p>This partnership extends beyond campus boundaries, offering valuable skills to the wider community. By providing accessible driving education, we contribute to:</p>
    <ul>
      <li>Improved road safety through better-trained drivers</li>
      <li>Economic empowerment through employable skills</li>
      <li>Professional development for transportation careers</li>
      <li>Community accessibility to quality driving education</li>
      <li>Support for local businesses needing certified drivers</li>
    </ul>
    
    <p><strong>🔮 Future Development:</strong></p>
    <p>The college plans to expand this partnership with additional courses and specialized training modules based on industry demand. Future developments may include:</p>
    <ul>
      <li>Advanced defensive driving courses</li>
      <li>Specialized vehicle operation training</li>
      <li>Logistics and fleet management modules</li>
      <li>Road safety awareness programs for the community</li>
      <li>Partnerships with transport companies for placement opportunities</li>
    </ul>
    
    <p><strong>🎉 Join Our Driving Program Today!</strong></p>
    <p>Whether you're a current student looking to enhance your skills, an alum seeking additional qualifications, or a community member pursuing driving certification, this program offers the perfect opportunity.</p>
    
    <p>"Drive your future forward with Kongoni Technical College and Modia Driving School. Together, we're steering toward success!"</p>
    
    <p><strong>🚗 ENROLL TODAY! 🚗</strong></p>
    <p>Take the wheel of your future and join our professional driving program. Contact us now to begin your journey toward becoming a certified, professional driver.</p>
    
    <p><em>Kongoni Technical & Vocational Training College: Expanding Skills, Empowering Futures.</em></p>
  `,
  imageUrl: "/images/newsevents/modiadriving/driving1.jpg",
  images: [
    "/images/newsevents/modiadriving/driving1.jpg",
    "/images/newsevents/modiadriving/driving2.jpeg",
    "/images/newsevents/modiadriving/driving3.jpeg",
    "/images/newsevents/modiadriving/driving4.jpg",
    "/images/newsevents/modiadriving/driving5.jpeg"
  ],
  videoUrl: "https://www.youtube.com/watch?v=modia_driving_school_collaboration",
  videoThumbnail: "/images/newsevents/modiadriving/driving1.jpg",
  featured: true,
  createdAt: "2025-12-10T12:00:00Z",
  updatedAt: "2025-12-10T12:00:00Z",
  author: "Administration & External Partnerships",
  category: "Partnerships",
  eventDate: "2025-12-10",
  location: "Kongoni Technical and Vocational College Campus",
  tags: [
    "driving-school",
    "modia-driving",
    "partnership",
    "driving-courses",
    "ntsa-certified",
    "vocational-training",
    "skills-development",
    "road-safety",
    "transport-education",
    "professional-driving",
    "collaboration",
    "community-training",
    "driving-certification",
    "student-opportunities",
    "career-training",
    "logistics-education"
  ]
},
{
  id: "27",
  title: "Celebrating Academic Excellence: Our Staff's Remarkable Achievements",
  excerpt: "Kongoni Technical and Vocational College proudly celebrates our trainers and staff members who have recently achieved significant academic milestones at various universities across Kenya.",
  content: `
    <p>Kongoni Technical and Vocational Training College extends heartfelt congratulations to our dedicated trainers and staff members who have recently achieved remarkable academic milestones. Their pursuit of higher education exemplifies our institution's commitment to lifelong learning and professional development.</p>
    
    <p><strong>🌟 PHD ACHIEVEMENT 🌟</strong></p>
    <p>We celebrate with immense pride as our esteemed <strong>Board of Governors Member</strong> successfully attained her <strong>Doctor of Philosophy (PhD)</strong> from <strong>Jomo Kenyatta University of Agriculture and Technology (JKUAT)</strong>. This monumental achievement represents years of dedication, research, and scholarly excellence that will undoubtedly enrich our institution's governance and strategic direction.</p>
    
    <p><strong>🎓 DEGREE ACCOLADES 🎓</strong></p>
    <p>Congratulations to our dedicated staff members who have attained their degrees from the <strong>Technical University of Kenya</strong>:</p>
    <ul>
      <li><strong>Mr. Andrew Juma</strong></li>
      <li><strong>Mr. Patrick Mwangi</strong></li>
    </ul>
    <p>Their academic accomplishments demonstrate remarkable commitment to balancing professional responsibilities with educational pursuits.</p>
    
    <p><strong>📜 DIPLOMA HONORS 📜</strong></p>
    <p>Heartfelt congratulations to our team from <strong>Kenya School of TVET (KSTVET)</strong> for successfully earning their <strong>Diplomas in Technical Training</strong>. Special recognition to:</p>
    <ul>
      <li>Bryan Wekesa</li>
      <li>Ann Namukhaywa</li>
      <li>Kelvin Bugigi</li>
      <li>Dennis Simiyu</li>
      <li>Ann Waitherero</li>
      <li>...and all other graduates!</li>
    </ul>
    <p>These diplomas enhance our technical training capacity and ensure we deliver the highest quality vocational education.</p>
    
    <p><strong>✨ ADDITIONAL CONGRATULATIONS ✨</strong></p>
    <p>A special round of applause for <strong>Joshua Makacha</strong> on his graduation from <strong>Dedan Kimathi University of Technology</strong>!</p>
    
    <p><strong>Institutional Impact and Vision:</strong></p>
    <p>These academic achievements significantly strengthen our institution's capacity for excellence in technical and vocational education. Each milestone represents not only personal success but also enhanced expertise that directly benefits our trainees and the quality of education we provide.</p>
    
    <p>"We are immensely proud of our staff members' academic accomplishments," said Principal Judith Akaranga. "Their dedication to continuous learning sets a powerful example for our trainees and elevates the standards of our entire institution. At Kongoni Technical College, we believe that learning is a lifelong journey, and our staff exemplify this principle."</p>
    
    <p>The college recognizes that investing in staff development yields direct benefits for our trainees. Enhanced knowledge, updated teaching methodologies, and exposure to current industry trends ensure that our curriculum remains relevant and competitive.</p>
    
    <p><strong>Celebrating the Culture of Excellence:</strong></p>
    <ul>
      <li>These achievements reinforce our institution's culture of academic excellence</li>
      <li>Enhanced expertise translates to improved teaching quality and trainee outcomes</li>
      <li>Higher qualifications strengthen our institutional credibility and partnerships</li>
      <li>Staff development aligns with national goals for TVET sector advancement</li>
      <li>Personal growth contributes to overall institutional growth and reputation</li>
    </ul>
    
    <p><strong>Benefits to Our Trainees:</strong></p>
    <ul>
      <li>Access to instructors with current and relevant academic qualifications</li>
      <li>Exposure to latest teaching methodologies and industry practices</li>
      <li>Enhanced mentorship from academically accomplished staff</li>
      <li>Improved learning outcomes through updated knowledge and skills</li>
      <li>Inspiration to pursue their own academic and professional development</li>
    </ul>
    
    <p><strong>Future Commitments:</strong></p>
    <p>Kongoni Technical and Vocational College remains committed to supporting staff development through:</p>
    <ul>
      <li>Continuing to encourage and facilitate staff academic advancement</li>
      <li>Providing flexible scheduling to accommodate study commitments</li>
      <li>Recognizing and celebrating academic achievements within our community</li>
      <li>Creating opportunities for knowledge sharing from advanced studies</li>
      <li>Maintaining partnerships with universities for staff development</li>
    </ul>
    
    <p>"Our staff's academic achievements represent the heartbeat of our institution's progress," noted the Deputy Principal for Academics. "Each certificate, diploma, and degree earned by our team members adds another layer of excellence to the education we provide. We celebrate not just the qualifications obtained, but the journey of growth and the enhanced capacity they bring to our institution."</p>
    
    <p><strong>Community Celebration:</strong></p>
    <p>The entire Kongoni Technical College community joins in celebrating these remarkable achievements. From the administration to fellow staff members and trainees, we collectively acknowledge the hard work, sacrifice, and dedication that each of these accomplishments represents.</p>
    
    <p>We encourage our staff to continue pursuing academic and professional growth, knowing that their development directly contributes to our institutional mission of providing quality technical and vocational education.</p>
    
    <p><strong>Looking Forward:</strong></p>
    <p>As we celebrate these achievements, we look forward to even greater accomplishments in the future. The foundation laid by these academic milestones will inspire others within our community to pursue their educational goals, creating a virtuous cycle of continuous improvement and excellence.</p>
    
    <p>The college administration extends its full support to all staff members currently pursuing further studies and encourages those considering academic advancement to take the next step in their educational journey.</p>
    
    <p><strong>🎉 CONGRATULATIONS ONCE AGAIN! 🎉</strong></p>
    <p>To all our staff members who have achieved these academic milestones: Your success is our success. Your growth is our growth. Your achievement is our pride.</p>
    
    <p>May these qualifications open new doors of opportunity, enhance your professional practice, and inspire generations of trainees to pursue their own educational dreams.</p>
    
    <p><em>Kongoni Technical and Vocational Training College: Where excellence in education begins with excellence in educators.</em></p>
  `,
  imageUrl: "/images/newsevents/staffachievements/achievement1.jpg",
  images: [
    "/images/newsevents/staffachievements/achievement1.jpg",
    "/images/newsevents/staffachievements/achievement2.png",
    "/images/newsevents/staffachievements/achievement3.jpg"
  ],
  videoUrl: "https://www.youtube.com/watch?v=eNWfPxcv_nY",
  videoThumbnail: "/images/newsevents/staffachievements/achievement1.jpg",
  featured: true,
  createdAt: "2025-12-10T10:00:00Z", // Today's date
  updatedAt: "2025-12-10T10:00:00Z",
  author: "Administration & Human Resources",
  category: "Achievements",
  eventDate: "2025-12-10",
  location: "Kongoni Technical and Vocational College",
  tags: [
    "staff-achievements",
    "academic-excellence",
    "graduation",
    "phd",
    "degrees",
    "diplomas",
    "jkuat",
    "technical-university-of-kenya",
    "kstvet",
    "dedan-kimathi-university",
    "professional-development",
    "lifelong-learning",
    "congratulations",
    "academic-milestones",
    "staff-success"
  ]
},
{
  id: "26",
  title: "Kongoni TVC Cultural Day 2025 - Celebrating Heritage, Unity & Talent",
  excerpt: "Kongoni Technical and Vocational College hosted a spectacular Cultural Day celebration featuring traditional dances, drama, spoken word, cultural fashion parade, local cuisine exhibitions, and vibrant music performances that brought Kenya's rich heritage to life.",
  content: `
    <p>On November 7th, 2025, Kongoni Technical & Vocational Training College transformed its grounds into a vibrant celebration of Kenyan culture during the highly anticipated Cultural Day 2025.</p>
    
    <p>The event brought together trainees, staff, and guests in a spectacular showcase of Kenya's diverse cultural heritage, demonstrating the college's commitment to celebrating unity in diversity while nurturing talent and creativity among trainees.</p>
    
    <p><strong>Event Highlights:</strong></p>
    <ul>
      <li><strong>✨ Traditional Dances</strong> - trainees performed authentic traditional dances from various Kenyan communities, showcasing the rich diversity of our cultural heritage through carefully choreographed routines that captivated the audience.</li>
      <li><strong>🎭 Drama & Spoken Word</strong> - Talented performers delivered powerful dramatic presentations and thought-provoking spoken word poetry that addressed contemporary issues while celebrating cultural identity.</li>
      <li><strong>👗 Cultural Fashion Parade</strong> - A stunning display of traditional attire from different Kenyan communities, with trainees modeling beautifully crafted traditional garments that told stories of heritage and craftsmanship.</li>
      <li><strong>🍲 Local Cuisine Exhibitions</strong> - Food enthusiasts showcased authentic Kenyan dishes and delicacies, offering guests a delicious journey through Kenya's culinary traditions.</li>
      <li><strong>🎶 Music & Performances</strong> - Live musical performances featuring traditional instruments and contemporary interpretations of cultural music kept the energy high throughout the day.</li>
    </ul>
    
    <p><strong>Celebrating Unity in Diversity:</strong></p>
    <p>The Cultural Day served as a powerful reminder of Kenya's beautiful diversity and the strength found in unity. trainees from various backgrounds came together to celebrate each other's cultures, fostering mutual respect, understanding, and appreciation for different traditions.</p>
    
    <p>"This event exemplifies what makes Kongoni Technical College special - our ability to celebrate our differences while building a united community," said Principal Judith Akaranga during the opening ceremony. "Cultural Day is not just about entertainment; it's about understanding, respect, and building bridges between communities."</p>
    
    <p><strong>Student Participation and Talent:</strong></p>
    <ul>
      <li>Trainees actively participated in various performances and exhibitions</li>
      <li>We had different cultural groups represented various Kenyan communities</li>
      <li>Performances on traditional dance performances throughout the day</li>
      <li>Drama and spoken word presentations</li>
      <li>live music performances featuring traditional and fusion genres</li>
    </ul>
    
    <p><strong>Impact and Community Building:</strong></p>
    <p>The Cultural Day created lasting memories and strengthened bonds within the college community. trainees who might not have previously interacted found common ground through cultural exchange, while others gained new appreciation for traditions different from their own.</p>
    
    <p>"Participating in Cultural Day helped me understand and appreciate cultures I knew little about," shared Mary Wanjiru, a Fashion & Design student who participated in the cultural fashion parade. "It's amazing how much we can learn from each other when we take time to celebrate our heritage together."</p>
    
    <p><strong>Organizational Excellence:</strong></p>
    <p>The success of Cultural Day 2025 was made possible through meticulous planning and coordination by the organizing committee, comprising dedicated staff members and student leaders. The event ran smoothly from start to finish, with seamless transitions between performances and activities.</p>
    
    <p>Special recognition goes to:</p>
    <ul>
      <li>The Student Council for coordinating student participation</li>
      <li>Department heads for supporting their trainees' involvement</li>
      <li>The Food & Beverage Department for coordinating the cuisine exhibition</li>
      <li>The Fashion & Design Department for organizing the cultural fashion parade</li>
      <li>All student performers who practiced tirelessly to perfect their presentations</li>
      <li>Staff members who volunteered their time and expertise</li>
    </ul>
    
    <p><strong>Preserving Heritage for Future Generations:</strong></p>
    <p>Cultural Day serves an important educational purpose beyond entertainment. It provides a platform for younger generations to learn about and appreciate traditional practices, ensuring that cultural heritage is preserved and passed on. The event included storytelling sessions where elders from the community shared the historical significance of various cultural practices.</p>
    
    <p>"Events like these are crucial for keeping our traditions alive," noted the Principal . "In our rapidly modernizing world, it's essential that young people remain connected to their cultural roots while embracing progress and innovation."</p>
   
    <p><strong>Media Coverage and Documentation:</strong></p>
    <p>The entire event was professionally documented through photography and videography, with highlights available on the college's YouTube channel. The vibrant images and video footage serve as a lasting record of this memorable celebration and will be used for promotional purposes and future reference.</p>
    
    <p><strong>Professional Media Coverage by Afrikwear Unit Entertainment:</strong></p>
    <p>The college extends special appreciation to <strong>Afrikwear Unit Entertainment</strong>, who provided exceptional professional media coverage throughout the Cultural Day celebration. Their expertise and dedication ensured that every memorable moment was beautifully captured and preserved.</p>
    
    <p>Afrikwear Unit Entertainment's comprehensive coverage included:</p>
    <ul>
      <li><strong>Professional Photography:</strong> High-quality images capturing the vibrant colors, emotions, and cultural expressions throughout the day</li>
      <li><strong>Videography Services:</strong> Complete video documentation of all performances, presentations, and activities</li>
      <li><strong>Live Coverage:</strong> Real-time capturing of spontaneous moments and candid interactions</li>
      <li><strong>Post-Production:</strong> Professional editing and compilation of highlights for the college's promotional materials</li>
      <li><strong>Social Media Content:</strong> Curated content optimized for various digital platforms</li>
    </ul>
    
    <p>"Afrikwear Unit Entertainment went above and beyond in documenting our Cultural Day," noted the event coordinator. "Their professional approach and artistic eye captured not just the events, but the spirit and emotion of the celebration. The quality of their work will allow us to relive these precious moments for years to come."</p>
    
    <p>The comprehensive photo and video gallery created by Afrikwear Unit Entertainment is now available on the college's official YouTube channel and social media platforms, allowing trainees, parents, and the wider community to experience the beauty and diversity of the celebration.</p>
    
    <p>Their dedication to excellence in media production has resulted in a lasting visual legacy of this significant cultural celebration. The professionally captured content serves multiple purposes:</p>
    <ul>
      <li>Promotional materials for future college events and marketing</li>
      <li>Historical documentation of the college's cultural activities</li>
      <li>Portfolio material for participating trainees</li>
      <li>Engagement content for social media and website</li>
      <li>Reference material for planning future Cultural Day events</li>
    </ul>
    
    <p>We sincerely thank <strong>Afrikwear Unit Entertainment</strong> for their professionalism, creativity, and commitment to capturing the essence of our Cultural Day celebration. Their work has helped immortalize the joy, talent, and cultural richness that made this event truly unforgettable.</p>
    
    <p><strong>Looking Forward:</strong></p>
    <p>The overwhelming success of Cultural Day 2025 has set a high standard for future events. The college is committed to making this an annual tradition that continues to grow and evolve, incorporating more cultural expressions and reaching even more participants.</p>
    
    <p>"This is just the beginning," said Dean of Trainees Kevin Masinde. "We're already planning for next year's event, and we have exciting ideas to make it even bigger and better. The enthusiasm shown by trainees and staff has been incredible."</p>
    
    <p>Cultural Day 2025 concluded with a unity ceremony where representatives from all participating cultural groups came together for a symbolic gesture of unity and friendship, reminding everyone that while we celebrate our differences, we are one Kongoni family.</p>
    
    <p><strong>Gratitude and Acknowledgments:</strong></p>
    <p>The college extends heartfelt gratitude to all trainees, staff, organizers, performers, and guests who contributed to making Cultural Day 2025 an unforgettable success. Your energy, creativity, teamwork, and dedication brought Kenya's rich heritage to life and strengthened our unity as a college community.</p>
    
    <p>Special thanks to our sponsors and partners who supported the event, the catering team who ensured everyone was well-fed throughout the day, the sound and lighting crew who created the perfect ambiance, and the security team who ensured everyone's safety.</p>
    
    <p>The memories created on November 7th, 2025, will be cherished for years to come. Until next year's Cultural Day, we carry with us the spirit of unity, the pride of heritage, and the joy of celebration that made this day truly special.</p>
    
    <p><strong>🎉 Thank you for celebrating with us! 🎉</strong></p>
  `,
  imageUrl: "/images/newsevents/culturalday/cultural10.jpeg",
  images: [
    "/images/newsevents/culturalday/cultural1.jpeg",
    "/images/newsevents/culturalday/cultural2.jpeg",
    "/images/newsevents/culturalday/cultural3.jpeg",
    "/images/newsevents/culturalday/cultural4.jpeg",
    "/images/newsevents/culturalday/cultural5.jpeg",
    "/images/newsevents/culturalday/cultural6.jpeg",
    "/images/newsevents/culturalday/cultural7.jpeg",
    "/images/newsevents/culturalday/cultural8.jpeg",
    "/images/newsevents/culturalday/cultural9.jpeg",
    "/images/newsevents/culturalday/cultural10.jpeg"
  ],
  videoUrl: "https://www.youtube.com/watch?v=duMxys0H_yY", 
  videoThumbnail: "/images/newsevents/culturalday/cultural10.jpeg",
  featured: true,
  createdAt: "2025-11-07T16:00:00Z",
  updatedAt: "2025-11-07T16:00:00Z",
  author: "Student Affairs Department",
  category: "Events",
  eventDate: "2025-11-07",
  location: "Kongoni Technical and Vocational College Grounds",
  tags: [
    "cultural-day",
    "heritage",
    "traditional-dances",
    "drama",
    "spoken-word",
    "fashion-parade",
    "local-cuisine",
    "music",
    "performances",
    "unity-in-diversity",
    "kenyan-culture",
    "student-talent",
    "celebration",
    "community-event",
    "afrikwear-unit-entertainment"
  ]
},
  {
    id: "25",
    title: "Dual TVET Workshop - Round 2 Dualization Training for Rift Valley Region",
    excerpt: "Trainers from Kongoni Technical and Vocational College joined other TVET institutions for a comprehensive 2-day workshop on Dual TVET and Dualization at Starbucks Hotel, Eldoret, facilitated by GIZ/GFA and Kenya School of TVET.",
    content: `
      <p>On 23rd and 24th October 2025, a team representing Kongoni Technical and Vocational College joined trainers from other TVET institutions across the Rift Valley Region for a transformative 2-Day Workshop on Round 2 Dual TVET and Dualization, held at Starbucks Hotel, Eldoret.</p>
      
      <p>The workshop was facilitated through collaborative efforts between GIZ/GFA and Kenya School of TVET, as part of the ongoing effort to ensure smooth implementation of dual learning, with a key focus on dualization in line with the modularized curriculum.</p>
      
      <p><strong>Day 1 Program Highlights:</strong></p>
      <ul>
        <li><strong>Overview of Dual Program</strong> - Comprehensive introduction to the D-TVET model and its implementation framework</li>
        <li><strong>Steps in Dual Training Implementation</strong> - Detailed roadmap for establishing dual training systems</li>
        <li><strong>Dual TVET Key Documentation</strong> - Planning and delivery documentation requirements</li>
        <li><strong>Interpretation of Modularized CBET Curriculum</strong> - Understanding competency-based education modules</li>
        <li><strong>Modular Implementation Graph Analysis</strong> - Visual representation of curriculum delivery timelines</li>
        <li><strong>Development of Generic Training Plans</strong> - Creating standardized training frameworks</li>
        <li><strong>Presentation of Sample Generic Plans</strong> - Best practices and model examples</li>
        <li><strong>Introduction to Specific Training Plans</strong> - Customizing plans for specific courses</li>
      </ul>
      
      <p><strong>Day 2 Program Highlights:</strong></p>
      <ul>
        <li><strong>Development of Specific Training Plans</strong> - Hands-on creation of unit-specific training plans</li>
        <li><strong>In-Company Training Plan Development</strong> - Structuring workplace-based learning experiences</li>
        <li><strong>Rotational Plan Development</strong> - Designing student rotation schedules between institution and industry</li>
        <li><strong>Use of Mentoring Tools</strong> - Implementing effective mentorship frameworks</li>
        <li><strong>Establishment and Roles of TICC</strong> - Training Institution Coordination Committee setup and responsibilities</li>
        <li><strong>Challenges in Dual Training</strong> - Experience sharing and solutions discussion</li>
      </ul>
      
      <p><strong>Key Workshop Objectives:</strong></p>
      <ul>
        <li>Sensitization on the D-TVET model and its benefits</li>
        <li>Understanding dual training implementation steps</li>
        <li>Mastering documentation requirements for planning and delivery</li>
        <li>Developing practical skills in creating training plans</li>
        <li>Building capacity for effective mentorship and coordination</li>
        <li>Addressing implementation challenges through collaborative problem-solving</li>
      </ul>
      
      <p>The workshop featured interactive sessions with energizers, group work, and practical exercises. Participants actively engaged in developing training plans, sharing experiences, and learning from facilitators from Kenya School of TVET and GIZ consultants.</p>
      
      <p><strong>Impact and Benefits:</strong></p>
      <ul>
        <li>Enhanced understanding of dual training methodology among Kongoni trainers</li>
        <li>Improved capacity to implement modularized CBET curriculum</li>
        <li>Strengthened collaboration with industry partners</li>
        <li>Better preparation for establishing TICC structures</li>
        <li>Practical tools and templates for training plan development</li>
        <li>Network building with trainers from other TVET institutions</li>
      </ul>
      
      <p>"This workshop has equipped our trainers with essential skills and knowledge to effectively implement the dual training model," remarked Deputy Principal for Academics. "The hands-on approach and collaborative learning environment provided invaluable insights that we will immediately apply in our training programs."</p>
      
      <p>The dual TVET model combines theoretical learning at the institution with practical training at industry workplaces, ensuring trainees gain real-world experience and industry-relevant skills. This approach significantly enhances graduate employability and bridges the gap between education and industry needs.</p>
      
      <p>Kongoni Technical and Vocational College remains committed to adopting best practices in technical education, and this workshop represents a significant milestone in our journey toward excellence in dual training delivery.</p>
      
      <p>The knowledge and skills gained from this workshop will be cascaded to all training staff, ensuring consistent implementation of the dual TVET model across all departments at Kongoni Technical and Vocational College.</p>
    `,
    imageUrl: "/images/newsevents/dualtvetworkshop/dualworkshop7.jpeg",
    images: [
      "/images/newsevents/dualtvetworkshop/dualworkshop1.jpeg",
      "/images/newsevents/dualtvetworkshop/dualworkshop2.jpeg",
      "/images/newsevents/dualtvetworkshop/dualworkshop3.jpeg",
      "/images/newsevents/dualtvetworkshop/dualworkshop4.jpeg",
      "/images/newsevents/dualtvetworkshop/dualworkshop5.jpeg",
      "/images/newsevents/dualtvetworkshop/dualworkshop6.jpeg"
    ],
    videoThumbnail: "/images/newsevents/dualtvetworkshop/dualworkshop4.jpeg",
    featured: true,
    createdAt: "2025-10-24T17:00:00Z",
    updatedAt: "2025-10-24T17:00:00Z",
    author: "Academic Affairs Department",
    category: "Training",
    eventDate: "2025-10-24",
    location: "Starbucks Hotel, Eldoret",
    tags: ["dual-tvet", "workshop", "training", "giz", "kstvet", "dualization", "cbet", "modular-curriculum", "capacity-building", "rift-valley", "professional-development", "trainers"]
  },
  {
    id: "24",
    title: "Sports Day 2025 - Athletic Excellence and Team Spirit",
    excerpt: "Kongoni Technical College hosted an electrifying Sports Day featuring football, volleyball, handball, and netball competitions. Eleven Stars crowned football champions with Rising Stars and Green Garden taking second and third positions respectively.",
    content: `
      <p>On October 10th, 2025, Kongoni Technical & Vocational Training College held its annual Sports Day, showcasing exceptional athletic talent and team spirit across multiple sporting disciplines.</p>
      
      <p>The day featured intense competitions in four major sports categories, with trainees demonstrating remarkable skills, determination, and sportsmanship throughout the event.</p>
      
      <p><strong>Sports Featured:</strong></p>
      <ul>
        <li>Football (Men's and Ladies')</li>
        <li>Volleyball</li>
        <li>Handball</li>
        <li>Netball</li>
      </ul>
      
      <p><strong>Men's Football Tournament Results:</strong></p>
      <p>The men's football tournament was highly competitive, featuring 8 talented teams battling for supremacy on the field. After intense matches throughout the day, the champions emerged:</p>
      <ul>
        <li><strong>🥇 Champions: ELEVEN STARS</strong> - Demonstrated exceptional teamwork, strategic gameplay, and technical skills to claim the top position.</li>
        <li><strong>🥈 2nd Runners-Up: RISING STARS</strong> - Lived up to their name with impressive performances, showing great potential and determination.</li>
        <li><strong>🥉 3rd Place: GREEN GARDEN</strong> - Secured third position with commendable performances, displaying strong defensive strategies.</li>
      </ul>
      
      <p><strong>Ladies' Football Competition:</strong></p>
      <ul>
        <li><strong>🥇 Champions: TEAM A</strong> - Emerged victorious with superior gameplay and outstanding performances.</li>
      </ul>
      
      <p><strong>Event Highlights:</strong></p>
      <ul>
        <li>Over 200 student athletes participated across all sports</li>
        <li>8 men's football teams competed in intense tournament format</li>
        <li>2 ladies' football teams showcased women's athletic prowess</li>
        <li>Professional officiating ensuring fair play throughout</li>
      </ul>
      
      <p>"Today's Sports Day exemplifies our commitment to holistic education," remarked Principal Judith Akaranga during the awards ceremony.</p>
      
      <p>The event concluded with an awards ceremony where champions received their trophies amid cheers from fellow trainees.</p>
    `,
    imageUrl: "/images/newsevents/kattigames/kattigames9.jpg",
    images: [
      "/images/newsevents/kattigames/kattigames1.jpg",
      "/images/newsevents/kattigames/kattigames2.jpg",
      "/images/newsevents/kattigames/kattigames3.jpg",
      "/images/newsevents/kattigames/kattigames4.jpg",
      "/images/newsevents/kattigames/kattigamesladies5.jpg",
      "/images/newsevents/kattigames/kattigamesladies6.jpg",
      "/images/newsevents/kattigames/kattigamesladies7.jpg",
      "/images/newsevents/kattigames/kattigamesladies8.jpg",
      "/images/newsevents/kattigames/kattigames9.jpg"
    ],
    videoThumbnail: "/images/newsevents/kattigames/kattigames9.jpg",
    featured: true,
    createdAt: "2025-10-10T16:00:00Z",
    updatedAt: "2025-10-10T16:00:00Z",
    author: "Sports Department",
    category: "Events",
    eventDate: "2025-10-10",
    location: "Matunda SA School",
    tags: ["sports", "football", "volleyball", "handball", "netball", "championship", "athletics", "competition", "sports-day", "team-spirit"]
  },
  {
    id: "23",
    title: "Mazingira Day 2025 - 548 Fruit Trees Planted at Nangili Primary School",
    excerpt: "KTVC joined forces with Equity Bank Moi's Bridge and Scout Society to celebrate Mazingira Day by planting 548 fruit trees at Nangili Comprehensive Primary School under the theme 'Citizen-Centric Tree Growing and Stewardship'.",
    content: `
      <p>On October 10th, 2025, Kongoni Technical & Vocational Training College, in partnership with Equity Bank Moi's Bridge and the KTVC Scout Society, celebrated Mazingira Day with a massive tree planting initiative at Nangili Comprehensive Primary School.</p>
      
      <p>Under the theme "Citizen-Centric Tree Growing and Stewardship" and hashtags #TurudiPrimo and #TukaDonateFruitTrees, the collaborative effort resulted in planting 548 fruit trees.</p>
      
      <p><strong>Complete Breakdown of Trees Planted:</strong></p>
      <ul>
        <li><strong>🥑 Avocados: 68 trees</strong></li>
        <li><strong>🍈 Guavas: 156 trees</strong></li>
        <li><strong>🥭 Grafted Mangoes: 50 trees</strong></li>
        <li><strong>🌰 Macadamia (Njugu Mawe): 21 trees</strong></li>
        <li><strong>🍈 Jackfruit (Fenesi): 56 trees</strong></li>
        <li><strong>🍏 Custard Apple (Mafora): 18 trees</strong></li>
        <li><strong>🫐 Black Plum (Zambarau): 2 trees</strong></li>
        <li><strong>🍑 Loquat (Chinduli): 157 trees</strong></li>
        <li><strong>🔴 Pomegranate (Mkomamanga): 20 trees</strong></li>
      </ul>
      
      <p><strong>Environmental and Community Impact:</strong></p>
      <ul>
        <li>Carbon sequestration and climate change mitigation</li>
        <li>Food security for school children</li>
        <li>Educational value for environmental studies</li>
        <li>Soil conservation and microclimate improvement</li>
      </ul>
      
      <p>Deputy Principal Ezra Orina  emphasized: "Today we plant more than trees - we plant hope, nutrition, and a sustainable future for these children."</p>
    `,
    imageUrl: "/images/newsevents/treeplanting/nangilitree2.jpg",
    images: [
      "/images/newsevents/treeplanting/nangilitree3.jpg",
      "/images/newsevents/treeplanting/nangilitree7.jpg",
      "/images/newsevents/treeplanting/nangilitree49.jpg",
      "/images/newsevents/treeplanting/nangilitree48.jpg",
      "/images/newsevents/treeplanting/nangilitree1.jpg",
      "/images/newsevents/treeplanting/nangilitree4.jpg",
      "/images/newsevents/treeplanting/nangilitreeselect5.jpg",
      "/images/newsevents/treeplanting/nangilitreeselect6.jpg",
      "/images/newsevents/treeplanting/nangilitreeselect7.jpg",
      "/images/newsevents/treeplanting/nangilitreeselect8.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=mazingira_day_2024",
    videoThumbnail: "/images/newsevents/treeplanting/nangilitree7.jpg",
    featured: true,
    createdAt: "2025-10-10T14:00:00Z",
    updatedAt: "2025-10-10T14:00:00Z",
    author: "Environmental Conservation Team",
    category: "Events",
    eventDate: "2025-10-10",
    location: "Nangili Comprehensive Primary School",
    tags: ["mazingira-day", "tree-planting", "environment", "conservation", "equity-bank", "scouts", "community-service", "sustainability", "fruit-trees", "greening", "turudi-primo"]
  },
  {
    id: "22",
    title: "CBET Modular Curriculum Delivery Workshop at Sigalagala National Polytechnic",
    excerpt: "Kongoni Technical College's academic leadership team participated in a comprehensive 5-day workshop on Competency-Based Education and Training (CBET) modular curriculum delivery at Sigalagala National Polytechnic.",
    content: `
      <p>A delegation from Kongoni Technical & Vocational Training College participated in an intensive 5-day workshop on Competency-Based Education and Training (CBET) modular curriculum delivery at Sigalagala National Polytechnic from September 8-12, 2025.</p>
      
      <p>The college was represented by key academic leadership including all Heads of Departments (HODs), the Examinations Officer, and the Deputy Principal for Academics.</p>
      
      <p><strong>Workshop Participants:</strong></p>
      <ul>
        <li>Deputy Principal for Academics - Ms. Lucy Makhokha</li>
        <li>Examinations Officer - Mr. Paul Kyalo</li>
        <li>All Department Heads</li>
      </ul>
      
      <p>The workshop focused on enhancing CBET methodology implementation, emphasizing practical skills acquisition and competency demonstration.</p>
    `,
    imageUrl: "/images/newsevents/sigalagalatraining/modulartraining7.jpg",
    images: [
      "/images/newsevents/sigalagalatraining/modulartraining1.jpg",
      "/images/newsevents/sigalagalatraining/modulartraining2.jpg",
      "/images/newsevents/sigalagalatraining/modulartraining3.jpg",
      "/images/newsevents/sigalagalatraining/modulartraining4.jpg",
      "/images/newsevents/sigalagalatraining/modulartraining5.jpg",
      "/images/newsevents/sigalagalatraining/modulartraining6.jpg",
      "/images/newsevents/sigalagalatraining/modulartraining7.jpg",
      "/images/newsevents/sigalagalatraining/modulartraining8.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=cbet_workshop_highlights",
    videoThumbnail: "/images/newsevents/sigalagalatraining/modulartraining7.jpg",
    featured: true,
    createdAt: "2025-09-12T18:00:00Z",
    updatedAt: "2025-09-12T18:00:00Z",
    author: "Academics Department",
    category: "Training",
    eventDate: "2025-09-12",
    location: "Sigalagala National Polytechnic",
    tags: ["cbet", "curriculum", "training", "academic-staff", "competency-based", "modular-delivery", "professional-development"]
  }
,{
    id: "21",
    title: "Kongoni Technical Hosts CS Oparanya at NYOTA Entrepreneurship Training Completion by Ebullient Professional Agencies",
    excerpt: "Hon. Wycliffe Oparanya, Cabinet Secretary for Co-operatives and MSMEs, was chief guest at the completion ceremony of the 4-day NYOTA entrepreneurship training program that empowered 150 youths with business skills.",
    content: `
      <p>Kongoni Technical & Vocational Training College had the honor of hosting Hon. Wycliffe Oparanya, Cabinet Secretary for Co-operatives and Micro, Small and Medium Enterprises (MSMEs), as chief guest during the completion ceremony of the NYOTA (National Youth Opportunities Training Academy) entrepreneurship training program.</p>
      
      <p>The hosted 4-day intensive training program, held from September 12-15, 2025, successfully empowered 150 young entrepreneurs with essential business skills and knowledge needed to establish and manage successful enterprises.</p>
      
      <p><strong>Training Program Highlights:</strong></p>
      <ul>
        <li>Business plan development and financial planning</li>
        <li>Market research and customer identification</li>
        <li>Digital marketing strategies for small businesses</li>
        <li>Access to government funding and support programs</li>
        <li>Legal requirements for business registration</li>
        <li>Record keeping and basic accounting principles</li>
        <li>Product development and quality control</li>
        <li>Networking and partnership building</li>
      </ul>
      
      <p>During his address, CS Oparanya emphasized the government's commitment to youth empowerment through skills development and entrepreneurship. "The NYOTA initiative represents our dedication to creating opportunities for young Kenyans to become job creators rather than job seekers," he stated.</p>
      
      <p>The Cabinet Secretary praised Kongoni Technical College for its role in implementing government initiatives and providing quality training facilities. "Institutions like Kongoni Technical College are instrumental in achieving our vision of an empowered and economically active youth population," he noted.</p>
      
      <p><strong>Key Program Outcomes:</strong></p>
      <ul>
        <li>150 youths certified in entrepreneurship skills</li>
        <li>85% of participants developed viable business plans</li>
        <li>Formation of 12 youth business groups for collective ventures</li>
        <li>Commitment from 120 participants to start businesses within 6 months</li>
        <li>Establishment of mentorship networks with successful entrepreneurs</li>
        <li>Access to government funding opportunities for qualified participants</li>
      </ul>
      
      <p>Principal Judith Akaranga expressed gratitude to the government for selecting the college as a NYOTA training center. "This partnership demonstrates our capacity to deliver quality training programs that align with national development goals," she said.</p>
      
      <p>The training sessions, conducted daily from 8:00 AM to 4:00 PM, featured a blend of theoretical instruction and practical exercises. Participants engaged in business simulation activities, developed actual business plans, and received mentorship from experienced entrepreneurs.</p>
      
      <p><strong>Government Support Initiatives Highlighted:</strong></p>
      <ul>
        <li>Youth Enterprise Development Fund (YEDF) access procedures</li>
        <li>Uwezo Fund application processes</li>
        <li>Government procurement opportunities for youth-owned businesses</li>
        <li>Tax incentives and exemptions for young entrepreneurs</li>
        <li>Access to industrial parks and business incubation centers</li>
        <li>Export promotion support for scalable businesses</li>
      </ul>
      
      <p>The completion ceremony featured presentations by outstanding participants who showcased innovative business ideas ranging from agribusiness to technology solutions. Several participants received seed funding commitments from local investors present at the event.</p>
      
      <p>CS Oparanya announced plans to expand the NYOTA program to reach more youths across the country, with Kongoni Technical College identified as a model training center for replication in other regions.</p>
      
      <p>"Today marks not the end but the beginning of your entrepreneurial journey," the Cabinet Secretary told the participants. "The skills you have acquired here will enable you to contribute meaningfully to Kenya's economic transformation."</p>
      
      <p>The college established a follow-up support system to track participants' progress and provide ongoing mentorship as they implement their business plans in their respective communities.</p>
    `,
    imageUrl: "/images/newsevents/nyotaexitmeeting/nyotaexit18th-25.jpeg",
    images: [
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-25.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-4.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-2.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-3.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-5.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-14.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-15.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-8.jpeg",
            "/images/newsevents/nyotaexitmeeting/nyotaexit18th-17.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-22.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-24.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-30.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-25.jpeg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=cs_oparanya_nyota_visit",
    videoThumbnail: "/images/newsevents/nyotaexitmeeting/nyotaexit18th-23.jpeg",
    featured: true,
    createdAt: "2025-09-15T16:00:00Z",
    updatedAt: "2025-09-15T16:00:00Z",
    author: "Administration",
    category: "Events",
    eventDate: "2025-09-15",
    location: "College Grounds",
    tags: ["nyota", "entrepreneurship", "cabinet-secretary", "youth-empowerment", "government-initiative", "business-training", "graduation"]
  },
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
    location: "Principals Office",
    tags: ["governance", "board-meeting", "leadership", "transition", "administration", "strategic-planning"]
  },
  {
    id: "20",
    title: "Term Opening Prayer Day - Spiritual Blessing for New Academic Term",
    excerpt: "The college community came together for a special prayer service to seek divine blessing and guidance for the new academic term, fostering unity and spiritual well-being among trainees and staff.",
    content: `
      <p>On September 9th, 2025, Kongoni Technical & Vocational Training College held a special Term Opening Prayer Day, bringing together the entire college community to seek divine blessing and guidance for the new academic term.</p>
      
      <p>The prayer service, held at the main campus grounds, was attended by trainees, faculty, staff, and invited religious leaders from various denominations, reflecting the college's commitment to holistic education that nurtures both academic and spiritual development.</p>
      
      <p><strong>Prayer Service Program:</strong></p>
      <ul>
        <li>Opening worship and praise session</li>
        <li>Welcome address by Principal Judith Akaranga</li>
        <li>Interfaith prayers for academic success and guidance</li>
        <li>Special prayers for trainees, faculty, and staff</li>
        <li>Blessing of academic facilities and laboratories</li>
        <li>Prayers for safety and protection throughout the term</li>
        <li>Community fellowship and refreshments</li>
      </ul>
      
      <p>"As we begin this new academic term, we recognize the importance of spiritual foundation in our educational journey," said Principal Judith Akaranga during her address. "This prayer day reminds us that success comes not only through hard work but also through divine guidance and blessing."</p>
      
      <p>The event featured participation from multiple religious denominations, emphasizing the college's inclusive approach to spiritual matters while respecting diverse faith backgrounds within the college community.</p>
      
      <p><strong>Key Prayer Themes:</strong></p>
      <ul>
        <li>Academic excellence and wisdom for trainees and instructors</li>
        <li>Safety and protection for the college community</li>
        <li>Unity and harmony among diverse backgrounds</li>
        <li>Guidance for institutional leadership and decision-making</li>
        <li>Success in upcoming examinations and assessments</li>
        <li>Prosperity and growth for the institution</li>
        <li>Community outreach and social impact</li>
      </ul>
      
      <p>trainees from various departments participated actively, with many expressing gratitude for the opportunity to begin their academic journey with spiritual grounding. The prayer day also included special intercessions for new trainees beginning their studies.</p>
      
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
    title: "September 2025 Intake trainees Reporting for New Academic Year",
    excerpt: "We warmly welcome the September 2025 intake trainees as they begin their technical and vocational training journey at Kongoni Technical & Vocational Training College.",
    content: `
      <p>Kongoni Technical & Vocational Training College is pleased to welcome the September 2025 intake trainees who are reporting for the commencement of their technical and vocational training programs.</p>
      
      <p>The September intake includes trainees enrolled in various departments:</p>
      <ul>
        <li><strong>Building & Construction:</strong> Masonry, Carpentry, Plumbing, and Electrical Installation</li>
        <li><strong>ICT Department:</strong> Computer Studies, Software Development, and Digital Marketing</li>
        <li><strong>Automotive Department:</strong> Motor Vehicle Mechanics and Auto Electrical</li>
        <li><strong>Business Studies:</strong> Entrepreneurship, Accounting, and Business Management</li>
        <li><strong>Fashion & Design:</strong> Tailoring and Dress Making</li>
        <li><strong>Food & Beverage:</strong> Catering and Food Production</li>
      </ul>
      
      <p>During the orientation week, new trainees will:</p>
      <ul>
        <li>Complete registration and documentation processes</li>
        <li>Receive campus tours and facility orientations</li>
        <li>Meet with academic advisors and department heads</li>
        <li>Attend mandatory health and safety briefings</li>
        <li>Participate in team-building activities</li>
        <li>Receive their student handbooks and timetables</li>
      </ul>
      
      <p>"We are excited to welcome this new cohort of trainees who will contribute to Kenya's skilled workforce," said Principal Judith Akaranga. "Our comprehensive programs will equip them with practical skills and knowledge needed for successful careers."</p>
      
      <p>The college continues to maintain high admission standards while providing accessible technical education opportunities. trainees will benefit from modern facilities, experienced instructors, and strong industry partnerships.</p>
      
      <p>We wish all new trainees success in their academic journey and look forward to seeing their achievements throughout the program.</p>
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
    tags: ["intake", "new-trainees", "orientation", "academic-year"]
  },
  {
    id: "1",
    title: "Kongoni trainees Excel at Katti Athletics Games 2025 - Gold Medal Victory",
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
      
      <p>"This remarkable achievement reflects not only the natural talent of our trainees but also their dedication to training and the excellent coaching support they receive," said Sports Coordinator Mr. David Mutua.</p>
      
      <p>The college's investment in sports facilities and training programs continues to pay dividends, with our athletes consistently performing at national and regional levels. Several of our medalists have been scouted for national team selections for upcoming international competitions.</p>
      
      <p>Special recognition goes to Mary Chepkemoi who broke the games record in the 1500m women's race with a time of 4:12.8, surpassing the previous record by over 3 seconds.</p>
      
      <p>We congratulate all our athletes and look forward to their continued success in upcoming competitions. Special recognition goes to our coaching staff and the entire college community for their unwavering support.</p>
    `,
    imageUrl: "/images/newsevents/athletics/athletics23.jpeg",
    images: [
      "/images/newsevents/athletics/athletics1.jpeg",
      "/images/newsevents/athletics/athletics18.jpeg",
      "/images/newsevents/athletics/athletics23.jpeg",
      "/images/newsevents/athletics/athletics24.jpeg",
      "/images/newsevents/athletics/athletics25.jpeg",
      "/images/newsevents/athletics/athletics26.jpeg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=athletics_highlights_2024",
    videoThumbnail: "/images/newsevents/athletics/athletics23.jpeg",
    featured: true,
    createdAt: "2025-07-15T10:00:00Z",
    updatedAt: "2025-07-15T10:00:00Z",
    author: "Sports Department",
    category: "Achievements",
    eventDate: "2025-08-15",
    location: "Nyayo National Stadium, Nairobi",
    tags: ["athletics", "medals", "competition", "trainees", "gold-medal", "records"]
  },
  {
    id: "2",
    title: "Annual Guidance and Counselling Day Promotes Student Wellness",
    excerpt: "Our comprehensive guidance and counselling program focused on mental health, career guidance, and personal development for holistic student growth.",
    content: `
      <p>Kongoni Technical & Vocational Training College successfully hosted its Annual Guidance and Counselling Day, emphasizing the importance of mental health and personal development in technical education.</p>
      
      <p>The day-long event featured various activities designed to support our trainees' emotional, academic, and career development:</p>
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
      
      <p>The event saw participation from over 800 trainees across all departments, with positive feedback highlighting the practical value of the sessions. Guest speakers included clinical psychologists, career coaches, and successful alumni who shared their experiences and insights.</p>
      
      <p>Key highlights from the day included:</p>
      <ul>
        <li>150+ individual counselling sessions conducted</li>
        <li>20 group workshops with average 15 participants each</li>
        <li>Career guidance sessions for all final-year trainees</li>
        <li>Mental health screening for early intervention</li>
        <li>Formation of 12 peer support groups across departments</li>
      </ul>
      
      <p>The college's commitment to holistic education includes regular counselling services, study groups, and wellness programs throughout the academic year. trainees can access confidential counselling services every weekday at the Student Wellness Center.</p>
      
      <p>"The response from trainees has been overwhelmingly positive," noted Senior Counsellor Dr. Peter Kamau. "Many trainees reported feeling more confident about their academic journey and personal development after participating in the day's activities."</p>
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
    eventDate: "2025-08-10",
    location: "Main Campus Auditorium",
    tags: ["counselling", "wellness", "mental-health", "career-guidance", "student-support"]
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
      
      <p>The visit was highly educational and inspiring for our trainees, providing them with exposure to international perspectives on vocational training and craftsmanship. Mr. Norris shared valuable insights from his experience with technical education programs globally.</p>
      
      <p>The hands-on desk-making session was particularly engaging, with trainees learning advanced techniques and best practices in furniture construction. The completed office desk will serve as a testament to the collaborative spirit and skilled craftsmanship demonstrated during the visit.</p>
      
      <p>The tree planting initiative aligns with the college's commitment to environmental conservation and sustainable practices. The indigenous trees planted will contribute to campus beautification and environmental protection efforts.</p>
      
      <p>Mr. Norris expressed his admiration for the dedication and skill level of our carpentry trainees, noting their potential for international market competitiveness with proper support and equipment enhancement.</p>
      
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
    title: "Drama trainees Achieve Second Position in Regional Competition",
    excerpt: "Congratulations to our talented drama trainees who secured second position in both solo verse and spoken word categories at the regional drama festival.",
    content: `
      <p>We are proud to announce the outstanding achievement of our drama trainees who excelled at the recent regional drama festival, securing second position in two competitive categories.</p>
      
      <p><strong>Competition Results:</strong></p>
      <ul>
        <li><strong>Solo Verse Category:</strong> 2nd Position - Sarah Mwangi (ICT Department)</li>
        <li><strong>Spoken Word Category:</strong> 2nd Position - Michael Ochieng (Business Studies)</li>
      </ul>
      
      <p>This remarkable performance showcases the dedication and talent of our trainees, as well as the quality of training they receive in our performing arts program. The trainees competed against numerous institutions from across the region, making their achievement even more significant.</p>
      
      <p>The drama program at Kongoni Technical College continues to nurture creative expression alongside technical skills, proving that well-rounded education produces exceptional graduates. Our trainees demonstrated exceptional creativity, stage presence, and mastery of their craft.</p>
      
      <p>"These trainees have worked tirelessly to perfect their performances," said Drama Instructor Ms. Faith Wanjiru. "Their success reflects not only their individual talents but also their commitment to excellence in all aspects of their education."</p>
      
      <p>The college celebrates this achievement as part of our commitment to developing trainees' creative and communicative abilities, which are essential skills in today's competitive job market.</p>
      
      <p>Both trainees will now advance to the national drama competition scheduled for November 2024. The college community looks forward to supporting them as they represent us at the national level.</p>
      
      <p>Congratulations to all our drama trainees and their dedicated instructors for this well-deserved recognition!</p>
    `,
    imageUrl: "/images/hero/pic.jpg",
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
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Await the params Promise - this is required in Next.js 15
    const params = await context.params;
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