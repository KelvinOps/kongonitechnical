// app/api/news/route.ts
import { NextRequest, NextResponse } from "next/server";

// Complete mock news data - synchronized with main news route
const mockNews = [
{
  id: "41",
  title: "Kongoni TVC Athletes Shine at KATTI Western Region Athletics & Indoor Games 2026 — Qualify for Nationals at Nyayo",
  excerpt: "Kongoni TVC athletes delivered a commanding performance at the KATTI Western Region Athletics & Indoor Games 2026 Championships held at Eregi TTC, claiming six medals across track and field disciplines — including Gold in the 4x400M Relay — and earning qualification to the National Athletics Championships at Nyayo National Stadium.",
  content: `
    <p>Kongoni Technical and Vocational College athletes have once again demonstrated their exceptional sporting talent, delivering a remarkable performance at the <strong>KATTI Western Region Athletics &amp; Indoor Games 2026 Championships</strong> held at <strong>Eregi Teachers Training College</strong> — and securing qualification to the <strong>National Athletics Championships at Nyayo National Stadium, Nairobi</strong>.</p>

    <p>The championships brought together athletes from technical and vocational institutions across the Western Region, with Kongoni TVC competitors rising to the occasion and claiming honours across six disciplines — continuing the college's proud tradition of sporting excellence.</p>

    <p><strong>🏅 Medal Tally — KATTI Western Region 2026:</strong></p>
    <ol>
      <li><strong>Triple Jump (Men)</strong> — 🥉 Bronze</li>
      <li><strong>Shotput (Men)</strong> — 🥉 Bronze</li>
      <li><strong>400M (Men)</strong> — 🥉 Bronze</li>
      <li><strong>400M Hurdles (Men)</strong> — 🥈 Silver</li>
      <li><strong>4x100M Relay / Short Relay (Men)</strong> — 🥈 Silver</li>
      <li><strong>4x400M Relay / Long Relay (Men)</strong> — 🥇 <strong>Gold | Western Region Champions!</strong></li>
    </ol>

    <p>Every medal tells a story of sweat, discipline, and belief — and the <strong>4x400M Relay gold</strong> was the crown jewel of a dominant championship showing, crowning Kongoni TVC as <strong>Western Region Champions</strong> in that event.</p>

    <p><strong>🏃 A Display of Discipline and Dedication:</strong></p>
    <p>The athletes' performances are the result of months of rigorous training, early mornings on the track, and unwavering commitment — balanced alongside the demands of their technical and vocational coursework. Their success is a testament to the discipline and determination that defines the Kongoni TVC spirit.</p>

    <p><strong>👏 Congratulations to Coaches and Athletes:</strong></p>
    <p>The college extends heartfelt congratulations to every athlete who competed and to the dedicated coaching staff whose guidance and preparation made these results possible. Behind every medal is a coach who believed, pushed, and prepared — and Kongoni TVC's coaches delivered.</p>

    <p><strong>🎉 A Hero's Welcome — Celebratory Procession on Campus:</strong></p>
    <p>The return of the victorious athletes to campus was met with an electrifying reception. Fellow trainees, trainers, and college management lined the campus to welcome back the champions with cheers, songs, and celebration. In a spontaneous display of college pride, a jubilant procession wound through the campus grounds — echoing the spirited marches that have become a hallmark of Kongoni TVC's culture of celebrating excellence together.</p>

    <p>Winners were hoisted on shoulders and surrounded by cheering crowds as the campus erupted in collective joy — a reminder that at Kongoni TVC, every achievement belongs to the whole community.</p>

    <p>Principal Ms. Judith Akaranga personally congratulated the athletes: "We are incredibly proud of every one of our athletes who competed at the regional championships. Your performances have brought honour to this institution and inspired your fellow trainees. We are behind you all the way to Nyayo."</p>

    <p><strong>🌟 Road to Nationals — Nyayo National Stadium:</strong></p>
    <p>All qualifying athletes will now represent Kongoni TVC at the <strong>National Athletics Championships at Nyayo National Stadium, Nairobi</strong> — carrying the college's colours and the hopes of the entire campus community as they compete against the best athletes from technical and vocational institutions across Kenya.</p>

    <p>The college is committed to providing full support — in training, logistics, and encouragement — to ensure our national qualifiers perform at their absolute best on the biggest stage.</p>

    <p><strong>From Eregi TTC to Nyayo Stadium — Kongoni TVC is ready! 🏆🎽</strong></p>

    <p><em>#KongoniTVC #KATTIAthletics2026 #RegionalChampions #WesternRegionChampions #NyayoNationals2026 #TrackAndField #Athletics #KongoniPride #TVETKenya #SportingExcellence #CelebrationMarch</em></p>
  `,
  imageUrl: "/images/newsevents/regionalathletics2026/athletics_main.png",
  images: [
    "/images/newsevents/regionalathletics2026/athletics_main.png",
    "/images/newsevents/regionalathletics2026/athletics2.jpg",
    "/images/newsevents/regionalathletics2026/athletics3.jpg",
    "/images/newsevents/regionalathletics2026/athletics4.jpg",
    "/images/newsevents/regionalathletics2026/athletics5.jpg",
    "/images/newsevents/regionalathletics2026/athletics6.jpg",
    "/images/newsevents/regionalathletics2026/celebration1.jpeg",
    "/images/newsevents/regionalathletics2026/celebration2.jpeg",
    "/images/newsevents/regionalathletics2026/celebration3.jpg"
  ],
    videoUrl: "",
  videoThumbnail: "/images/newsevents/regionalathletics2026/athletics_main.png",
  videos: [
    {
      url: "https://www.youtube.com/watch?v=8oSY6pelwTc&feature=youtu.be",
      title: "🎤 Kongoni TVC Athletes Shine at KATTI Western Region Athletics & Indoor Games 2026 ",
      thumbnail: "/images/newsevents/regionalathletics2026/athletics_main.png"
    }
  ],
  featured: true,
  createdAt: "2026-06-04T16:00:00Z",
  updatedAt: "2026-06-07T16:00:00Z",
  author: "Sports Department",
  category: "Achievements",
  eventDate: "2026-06-07",
  location: "Eregi Teachers Training College, Western Kenya",
  tags: [
    "athletics",
    "katti",
    "regional-championship",
    "national-qualifiers",
    "track-and-field",
    "sports",
    "medals",
    "gold-medal",
    "western-region-champions",
    "4x400m-relay",
    "nyayo-nationals",
    "2026",
    "achievement",
    "competition",
    "celebration",
    "celebratory-march",
    "college-pride",
    "tvet-kenya"
  ]
},
{
  id: "40",
  title: "Trainee Spotlight — Student Interviews Capture the Heart of Kongoni TVC",
  excerpt: "In a series of candid on-campus interviews, Kongoni TVC trainees shared their personal journeys, motivations, and aspirations — offering an inspiring window into the lived experiences of the college's diverse student community.",
  content: `
    <p>Kongoni Technical and Vocational College recently held a series of <strong>Trainee Spotlight Interviews</strong> — candid, on-campus conversations with trainees from across all departments, giving voice to the personal stories, ambitions, and reflections that make up the rich fabric of college life.</p>

    <p>The interviews, conducted by the Student Affairs Department in collaboration with the college media team, were designed to celebrate the diversity of the Kongoni TVC community, amplify trainee voices, and inspire both current and prospective students with authentic peer stories.</p>

    <p><strong>🎤 What Trainees Shared:</strong></p>
    <p>The interviews covered a wide range of themes and life experiences, including:</p>
    <ul>
      <li><strong>Personal journeys</strong> — Why they chose their course and what path led them to Kongoni TVC</li>
      <li><strong>Challenges and resilience</strong> — The obstacles they have faced and how the college community has supported them</li>
      <li><strong>Skills and growth</strong> — The practical skills and confidence they have gained through their training</li>
      <li><strong>Future aspirations</strong> — Their dreams for careers, entrepreneurship, and contributing to their communities</li>
      <li><strong>College life</strong> — Memorable moments, friendships, and the experiences that have shaped their time at Kongoni TVC</li>
      <li><strong>Messages to others</strong> — Words of encouragement for young people considering vocational education</li>
    </ul>

    <p><strong>🌟 Voices from the Interview Series:</strong></p>
    <p>Trainees from departments including Beauty Therapy, Civil &amp; Building Engineering, ICT, Automotive, Fashion &amp; Design, Food &amp; Beverage, and Business Studies took part — each bringing a unique perspective shaped by their background, course, and personal story.</p>

    <p>Many interviewees spoke movingly about how TVET had transformed their sense of purpose and possibility. Others highlighted the supportive community of trainers and fellow trainees as a defining feature of their experience at Kongoni TVC.</p>

    <p><strong>📹 Watch the Interviews:</strong></p>
    <p>Full interview videos are available on the college's official YouTube channel, offering prospective trainees, parents, and the wider community an authentic, unscripted look into life at Kongoni Technical and Vocational College.</p>

    <p><strong>💬 Principal's Note:</strong></p>
    <p>Principal Ms. Judith Akaranga commended the initiative: "These interviews remind us why we do what we do. Every trainee here has a story worth telling — of courage, determination, and hope. We are proud to provide a platform where those stories can be heard."</p>

    <p><em>#KongoniTVC #TraineeSpotlight #StudentInterviews #TVETKenya #RealStories #VocationalEducation #StudentVoices</em></p>
  `,
  imageUrl: "/images/newsevents/studentinterviews2026/interview_main.jpeg",
  images: [
    "/images/newsevents/studentinterviews2026/interview_main.jpeg",
    "/images/newsevents/studentinterviews2026/interview2.jpeg"
  ],
  videoUrl: "",
  videoThumbnail: "/images/newsevents/studentinterviews2026/interview_main.jpeg",
  videos: [
    {
      url: "",
      title: "🎤 Trainee Spotlight — Student Interviews 2026",
      thumbnail: "/images/newsevents/studentinterviews2026/interview_main.jpeg"
    }
  ],
  featured: true,
  createdAt: "2026-06-08T10:00:00Z",
  updatedAt: "2026-06-08T10:00:00Z",
  author: "Student Affairs Department",
  category: "Student Life",
  eventDate: "2026-06-08",
  location: "Kongoni Technical and Vocational College Campus",
  tags: [
    "student-interviews",
    "trainee-spotlight",
    "student-life",
    "student-voices",
    "2026",
    "community",
    "vocational-education",
    "tvet-kenya",
    "personal-stories",
    "inspiration"
  ]
},
  {
    id: "39",
    title: "Madaraka Day 2026 — Celebrating Kenya's Journey to Self-Governance",
    excerpt:
      "Kongoni Technical and Vocational College joins the nation in marking Madaraka Day 2026, celebrating 63 years since Kenya attained self-governance on 1st June 1963 — a day of pride, reflection, and renewed national purpose.",
    content: `
    <p>On <strong>1st June 2026</strong>, Kongoni Technical and Vocational College joins the entire nation in commemorating <strong>Madaraka Day</strong> — the 63rd anniversary of Kenya attaining internal self-governance in 1963, a pivotal milestone on the road to full independence.</p>

    <p>Madaraka Day is a moment for every Kenyan to reflect on the sacrifices of those who fought for freedom, celebrate the progress our nation has made, and recommit to the ideals of unity, hard work, and shared prosperity that define the Kenyan spirit.</p>

    <p><strong>🇰🇪 A Message from the College:</strong></p>
    <p>To our entire Kongoni TVC family — trainees, trainers, staff, and the wider community — we celebrate this national holiday with gratitude and pride. Kenya's journey from colonialism to self-governance is a story of courage, resilience, and collective determination. As a technical and vocational institution, we see ourselves as contributors to that ongoing story — equipping young Kenyans with the skills and confidence to build the nation our freedom fighters dreamed of.</p>

    <p><strong>🌍 The Meaning of Madaraka:</strong></p>
    <ul>
      <li>A reminder of the sacrifices made by Kenya's founding generation</li>
      <li>A celebration of national unity across all communities and backgrounds</li>
      <li>A call to responsibility — <em>madaraka</em> means responsibility and self-rule</li>
      <li>An inspiration to serve Kenya through excellence, integrity, and hard work</li>
      <li>A reaffirmation of our shared identity as one Kenyan people</li>
    </ul>

    <p><strong>💡 Madaraka and the TVET Mission:</strong></p>
    <p>Technical and vocational education is one of Kenya's most powerful tools for realising the promise of self-governance. Every trainee who graduates with a marketable skill, every trainer who passes on their expertise, and every institution that opens its doors to a young Kenyan is participating in the fulfilment of the Madaraka dream.</p>

    <p>Kongoni TVC is proud to be part of this national mission — transforming lives through skills, creating opportunity through education, and contributing to a Kenya where every citizen can thrive.</p>

    <p><strong>Madaraka Day Mubarak! 🇰🇪✨</strong></p>

    <p><em>— The Principal, Management, Staff, and Trainees of Kongoni Technical and Vocational College</em></p>

    <p><em>#MadarakaDay2026 #KongoniTVC #JamhuriYaKenya #TVETKenya #SelfGovernance #NationalPride</em></p>
  `,
    imageUrl: "/images/newsevents/madaraka2026/madaraka_main.png",
    images: ["/images/newsevents/madaraka2026/madaraka_main.png"],
    featured: true,
    createdAt: "2026-06-01T06:00:00Z",
    updatedAt: "2026-06-01T06:00:00Z",
    author: "College Administration",
    category: "Announcements",
    eventDate: "2026-06-01",
    location: "Kongoni Technical and Vocational College",
    tags: [
      "madaraka-day",
      "national-holiday",
      "kenya",
      "self-governance",
      "independence",
      "2026",
      "national-pride",
      "community",
      "announcement",
    ],
  },
  {
    id: "38",
    title: "Eid ul-Adha Mubarak — Wishing Our Community Joy, Peace & Blessings",
    excerpt:
      "Kongoni Technical and Vocational College extends warm Eid ul-Adha Mubarak greetings to all Muslim members of our college family and the wider community, wishing them a blessed Festival of Sacrifice filled with gratitude, compassion, and togetherness.",
    content: `
    <p>Kongoni Technical and Vocational College warmly extends heartfelt <strong>Eid ul-Adha Mubarak — عيد الأضحى مبارك</strong> greetings to all Muslim trainees, staff, and the broader community as they celebrate this blessed occasion.</p>

    <p>Eid ul-Adha, the <em>Festival of Sacrifice</em>, commemorates the unwavering faith and devotion of Prophet Ibrahim (AS) and marks the culmination of the sacred Hajj pilgrimage. It is a time of profound reflection, gratitude, generosity, and communal unity.</p>

    <p><strong>🌙 A Message from the College:</strong></p>
    <p>On this auspicious day, the entire Kongoni Technical and Vocational College family joins our Muslim brothers and sisters in celebrating the spirit of sacrifice, devotion, and compassion that Eid ul-Adha embodies.</p>

    <p>May the blessings of this holy occasion:</p>
    <ul>
      <li>Bring peace, joy, and happiness to your homes and hearts</li>
      <li>Strengthen the bonds of family, friendship, and community</li>
      <li>Inspire acts of generosity, charity, and service to others</li>
      <li>Fill your lives with prosperity, good health, and divine guidance</li>
      <li>Bring harmony and unity to our diverse college community</li>
    </ul>

    <p>As we mark this special occasion, we are reminded of the values that unite us as a college community — sacrifice, perseverance, generosity, and compassion — qualities that define not only this blessed festival but the spirit of Kongoni TVC itself.</p>

    <p>We wish all celebrating a blessed Eid ul-Adha filled with joy, spiritual fulfilment, and cherished moments with loved ones.</p>

    <p><strong>Eid Mubarak! 🌙✨</strong></p>

    <p><em>— The Principal, Management, Staff, and Trainees of Kongoni Technical and Vocational College</em></p>

    <p><em>#EidulAdha #EidMubarak #KongoniTVC #FestivalOfSacrifice #Unity #Compassion #Generosity</em></p>
  `,
    imageUrl: "/images/newsevents/eid2026/Finale.png",
    images: ["/images/newsevents/eid2026/Finale.png"],
    featured: true,
    createdAt: "2026-05-26T06:00:00Z",
    updatedAt: "2026-05-26T06:00:00Z",
    author: "College Administration",
    category: "Announcements",
    eventDate: "2026-05-27",
    location: "Kongoni Technical and Vocational College",
    tags: [
      "eid-ul-adha",
      "eid-mubarak",
      "festival-of-sacrifice",
      "islamic-holiday",
      "community",
      "celebration",
      "unity",
      "compassion",
      "generosity",
      "2026",
      "announcement",
    ],
  },
  {
    id: "37",
    title: "Victorious March Through College — Trainees & Trainers Celebrate Western TVET Fair Triumph",
    excerpt:
      "In a jubilant display of pride and community spirit, Kongoni TVC trainees and trainers marched through the college environs in a celebratory procession, singing and cheering to honour the institution's historic victories at the 2026 Western TVET Fair.",
    content: `
    <p>The Kongoni Technical and Vocational College grounds came alive with joyful noise, colour, and pride as trainees and trainers came together for a spirited <strong>Celebratory March</strong> to honour the institution's remarkable achievements at the <strong>2026 Western Region TVET Fair</strong>.</p>

    <p>The march wound through the college environs — from the main hall, through the departmental blocks, across the workshop areas, and around the college grounds — with participants singing victory songs, chanting praises, and celebrating as one unified community.</p>

    <p><strong>🎉 A College United in Celebration:</strong></p>
    <p>The procession drew trainees from every department and trainers from across all faculties, creating an electrifying atmosphere of collective pride. The march was more than a celebration of trophies — it was a testament to the spirit, discipline, and excellence that defines Kongoni TVC.</p>

    <p>Banners, flags, and department colours were proudly displayed as the procession moved through campus. Winners from the <strong>Beauty Therapy</strong> and <strong>Civil & Building Engineering</strong> teams were hoisted in celebration, surrounded by their fellow trainees and cheering staff.</p>

    <p><strong>🏆 What We're Celebrating:</strong></p>
    <ul>
      <li><strong>1st Place — Beauty Therapy Skills</strong>: Champions across all TVET institutions in the Western Region</li>
      <li><strong>2nd Place — Civil & Building Engineering Project Innovation</strong>: Silver medallists in a fiercely competitive engineering category</li>
      <li>Both winning teams qualify to represent the Western Region at the <strong>National TVET Fair in Wote, Kenya</strong></li>
    </ul>

    <p><strong>🎶 Songs of Victory:</strong></p>
    <p>The marching procession was accompanied by spontaneous songs of praise, traditional chants, and collective cheers that echoed across the college grounds. The celebratory energy was infectious, drawing bystanders and community members to witness the joyful procession.</p>

    <p>Principal Ms. Judith Akaranga joined the march alongside the college management team, walking in solidarity with the trainees and trainers in what participants described as a deeply moving and memorable moment for the institution.</p>

    <p><strong>🌟 A Message of Pride:</strong></p>
    <p>"This march is not just for the winners — it is for every trainee who worked hard, every trainer who mentored, and every support staff member who contributed to this institution's success," said the Principal during the celebrations. "We march as one because we are one Kongoni family."</p>

    <p>The victorious march served as a powerful symbol of institutional identity, community pride, and the shared belief that excellence is not an individual achievement but a collective triumph.</p>

    <p>As our champions now prepare for the National TVET Fair in Wote, this march marks the beginning of a new chapter — carrying the hopes and colours of Kongoni TVC to the national stage.</p>

    <p><em>Onwards to Nationals! 🏆🎉</em></p>

    <p><em>#KongoniTVC #VictoriousMarch #WesternTVETFair2026 #NationalsHere #KongoniPride #CelebratoryMarch #TVET</em></p>
  `,
    imageUrl: "/images/newsevents/celebrationmarch2026/march_main.jpg",
    images: [
      "/images/newsevents/celebrationmarch2026/march_main.jpg",
      "/images/newsevents/celebrationmarch2026/march2.jpg",
      "/images/newsevents/celebrationmarch2026/march3.jpg",
      "/images/newsevents/celebrationmarch2026/march4.jpg",
      "/images/newsevents/celebrationmarch2026/march5.jpg",
      "/images/newsevents/celebrationmarch2026/march6.jpg",
      "/images/newsevents/celebrationmarch2026/march7.jpg",
      "/images/newsevents/celebrationmarch2026/march8.jpg",
      "/images/newsevents/celebrationmarch2026/march9.jpg",
      "/images/newsevents/celebrationmarch2026/march10.jpg",
      "/images/newsevents/celebrationmarch2026/march11.jpg",
      "/images/newsevents/celebrationmarch2026/march12.jpg",
    ],
    featured: true,
    createdAt: "2026-05-18T14:00:00Z",
    updatedAt: "2026-05-18T14:00:00Z",
    author: "Student Affairs Department",
    category: "Events",
    eventDate: "2026-05-18",
    location: "Kongoni Technical and Vocational College Grounds",
    tags: [
      "celebratory-march",
      "victory",
      "western-tvet-fair",
      "2026",
      "beauty-therapy",
      "civil-engineering",
      "national-qualifiers",
      "college-pride",
      "community",
      "celebrations",
      "wote-nationals",
      "tvet-kenya",
    ],
  },
  {
    id: "36",
    title: "Kongoni TVC Shines at 2026 Western Region TVET Fair — 1st Place Beauty Therapy & 2nd Place Civil Engineering",
    excerpt:
      "Kongoni Technical and Vocational College delivered an outstanding performance at the 2026 Western Region TVET Fair (14–16 May), clinching 1st place in Beauty Therapy Skills and 2nd place in Civil & Building Engineering Project Innovation — with both teams now advancing to the National TVET Fair in Wote, Kenya.",
    content: `
    <p>Kongoni Technical and Vocational College has once again demonstrated the exceptional calibre of its trainees and trainers at the prestigious <strong>2026 Western Region TVET Fair</strong>, competing against polytechnics and TVET institutions from across the western region from <strong>14th to 16th May 2026</strong>.</p>

    <p>After three days of intensive skills competitions, project presentations, and rigorous judging, Kongoni TVC emerged among the region's top performers — securing medals in two highly competitive categories and earning qualification to the <strong>National TVET Fair in Wote, Kenya</strong>.</p>

    <p><strong>🏆 Award-Winning Results:</strong></p>

    <p><strong>🥇 1st Place — Beauty Therapy Skills</strong></p>
    <p>Kongoni TVC's Beauty Therapy team delivered a masterclass performance, showcasing technical precision, creativity, and professional standards that surpassed all competing institutions across the entire western region. Their work was lauded by judges for its exceptional skill execution, attention to detail, and client-centred approach — a true demonstration of world-class vocational excellence.</p>

    <p><strong>🥈 2nd Place — Civil & Building Engineering Project Innovation</strong></p>
    <p>The Civil and Building Engineering team presented an innovative project that impressed judges and fellow competitors alike. Their creative engineering solution, technical rigour, and professional presentation earned them a well-deserved silver position in a fiercely contested category — a remarkable achievement that reflects the depth of talent within the department.</p>

    <p><strong>🌟 Both Teams Advance to the National TVET Fair, Wote!</strong></p>
    <p>Both the Beauty Therapy and Civil & Building Engineering teams will now carry the Kongoni TVC banner to the <strong>National TVET Fair in Wote, Kenya</strong>, representing the Western Region on the biggest stage in the TVET calendar. The college community extends its full support and encouragement as they prepare for the national showdown.</p>

    <p><strong>Voices of Pride:</strong></p>
    <p>Principal Ms. Judith Akaranga expressed immense pride in the teams' performances: "These achievements are the result of months of hard work, dedication, and an unwavering commitment to excellence. We are extraordinarily proud of every participant — winners and participants alike — for representing our institution with distinction and professionalism."</p>

    <p>"To our champions heading to Wote — we believe in you. Go and show the nation what Kongoni TVC is made of," she added.</p>

    <p><strong>🙏 Thank You to All Participants:</strong></p>
    <p>The college extends heartfelt gratitude and congratulations to <strong>every trainee and trainer who participated</strong> in the 2026 Western Region TVET Fair. Your courage, preparation, and passion made Kongoni TVC proud across every category. Every entry, every presentation, and every skill demonstration was a contribution to the institution's growing legacy of excellence.</p>

    <p>Special recognition goes to the departmental trainers, mentors, and support staff who guided, coached, and prepared the teams — your dedication is the foundation of this success.</p>

    <p><strong>🔮 Road to Nationals:</strong></p>
    <p>Preparations for the National TVET Fair in Wote are already underway. The college is committed to providing every resource and support needed to ensure our qualifiers perform at their absolute best on the national stage.</p>

    <p><em>#KongoniTVC #WesternTVETFair2026 #BeautyTherapy #CivilEngineering #NationalQualifiers #Wote2026 #TVETExcellence #WesternChampions</em></p>
  `,
    imageUrl: "/images/newsevents/tvetfair2026/tvetfair_main.jpg",
    images: [
      "/images/newsevents/tvetfair2026/tvetfair_main.jpg",
      "/images/newsevents/tvetfair2026/tvetfair_beauty1.jpg",
      "/images/newsevents/tvetfair2026/tvetfair_beauty2.jpg",
      "/images/newsevents/tvetfair2026/tvetfair_civil1.jpg",
      "/images/newsevents/tvetfair2026/tvetfair_civil2.jpg",
      "/images/newsevents/tvetfair2026/tvetfair_awards.jpg",
      "/images/newsevents/tvetfair2026/tvetfair_awards1.jpg",
      "/images/newsevents/tvetfair2026/tvetfair_team.jpg",
      "/images/newsevents/tvetfair2026/tvetfair_team1.jpg",
      "/images/newsevents/tvetfair2026/tvetfair_electrical.jpg",
      "/images/newsevents/tvetfair2026/tvetfair_mechanical.jpg",
    ],
    featured: true,
    createdAt: "2026-05-16T18:00:00Z",
    updatedAt: "2026-05-16T18:00:00Z",
    author: "Academic & Student Affairs Department",
    category: "Achievements",
    eventDate: "2026-05-16",
    location: "Western Region TVET Fair, Western Kenya",
    tags: [
      "western-tvet-fair",
      "2026",
      "beauty-therapy",
      "civil-engineering",
      "1st-place",
      "2nd-place",
      "national-qualifiers",
      "wote",
      "achievement",
      "competition",
      "skills-competition",
      "western-region",
      "tvet-kenya",
      "awards",
      "excellence",
    ],
  },
  {
    id: "35",
    title: "Internal College Exhibition 2026 — Departments Showcase Innovation Ahead of Western TVET Fair",
    excerpt:
      "On Tuesday 12th May 2026, Kongoni TVC held an Internal College Exhibition where individual departments presented the impressive items, projects, and skills they had prepared to represent the institution at the upcoming KATTI Western TVET Fair 2026.",
    content: `
    <p>On <strong>Tuesday, 12th May 2026</strong>, the Kongoni Technical and Vocational College grounds buzzed with excitement and creative energy during the <strong>Internal College Exhibition 2026</strong> — an in-house showcase designed to preview and finalise the entries that departments would be presenting at the <strong>KATTI Western TVET Fair 2026</strong>.</p>

    <p>The internal exhibition served as a critical dress rehearsal, allowing departmental teams to present their prepared projects, skills demonstrations, and innovations before an internal panel of judges, trainers, and fellow trainees — receiving feedback and affirmation ahead of the regional competition stage.</p>

    <p><strong>🏛️ Departments That Showcased:</strong></p>
    <p>Every department rose to the occasion, presenting items that reflected months of preparation, creativity, and technical excellence. Highlights included:</p>

    <ul>
      <li><strong>Beauty Therapy Department:</strong> Delivered a polished skills showcase demonstrating professional therapy techniques, creative hair and beauty artistry, and client-service excellence — drawing some of the loudest applause of the day.</li>
      <li><strong>Civil & Building Engineering Department:</strong> Unveiled an innovative engineering project that drew considerable interest from the internal judges, showcasing both technical precision and creative problem-solving in the built environment.</li>
      <li><strong>ICT Department:</strong> Demonstrated cutting-edge digital solutions, software projects, and tech innovations tailored for real-world applications.</li>
      <li><strong>Automotive Department:</strong> Presented diagnostic and mechanical solutions alongside impressive technical projects reflecting current industry standards.</li>
      <li><strong>Fashion & Design Department:</strong> Showcased original garment collections, design concepts, and fashion artistry that impressed with their creativity and craftsmanship.</li>
      <li><strong>Food & Beverage Department:</strong> Displayed culinary innovation through beautifully prepared dishes, beverage concepts, and hospitality presentations.</li>
      <li><strong>Business Studies Department:</strong> Presented entrepreneurship projects, business models, and market innovation concepts aligned with current economic trends.</li>
    </ul>

    <p><strong>🌟 A Platform for Peer Recognition:</strong></p>
    <p>The internal exhibition was not only a preparation platform — it was a celebration of the talent already present within the college. Trainees cheered each other on, trainers offered constructive guidance, and the administration conducted structured evaluations to ensure every entry was competition-ready.</p>

    <p>Principal Ms. Judith Akaranga commended all participating departments: "What I witnessed today gives me great confidence ahead of the Western TVET Fair. Every department has put in remarkable work, and the standard of entries is genuinely impressive. I am proud of each and every one of you."</p>

    <p><strong>🎯 Road to the Western TVET Fair:</strong></p>
    <p>Following the internal exhibition, final selections and refinements were made to ensure that Kongoni TVC's entries at the Western TVET Fair would be polished, professional, and competitive at the highest regional level.</p>

    <p>The internal exhibition proved to be an invaluable stepping stone — building confidence, sharpening presentations, and cementing the institution's collective readiness for the regional stage.</p>

    <p><em>#KongoniTVC #InternalExhibition2026 #WesternTVETFair #StudentInnovation #DepartmentShowcase #TVETExcellence</em></p>
  `,
    imageUrl: "/images/newsevents/internalexhibition2026/exhibition_main.jpg",
    images: [
      "/images/newsevents/internalexhibition2026/exhibition_main.jpg",
      "/images/newsevents/internalexhibition2026/exhibition_beauty.jpg",
      "/images/newsevents/internalexhibition2026/exhibition_civil.jpg",
      "/images/newsevents/internalexhibition2026/exhibition_ict.jpg",
      "/images/newsevents/internalexhibition2026/exhibition_automotive.jpg",
      "/images/newsevents/internalexhibition2026/exhibition_food.jpg",
      "/images/newsevents/internalexhibition2026/exhibition_electrical.jpg",
    ],
    featured: true,
    createdAt: "2026-05-12T17:00:00Z",
    updatedAt: "2026-05-12T17:00:00Z",
    author: "Academic Affairs Department",
    category: "Events",
    eventDate: "2026-05-12",
    location: "Kongoni Technical and Vocational College Grounds",
    tags: [
      "internal-exhibition",
      "2026",
      "tvet-fair",
      "departments",
      "innovation",
      "skills-showcase",
      "beauty-therapy",
      "civil-engineering",
      "ict",
      "automotive",
      "fashion-design",
      "food-beverage",
      "business-studies",
      "western-region",
      "preparation",
      "student-talent",
    ],
  },
  {
    id: "34",
    title: "Term Opening Prayer Day — Seeking Divine Guidance for the May–August 2026 Term",
    excerpt:
      "On Friday 8th May 2026, the Kongoni TVC community gathered in faith and unity for the Term Opening Prayer Day, invoking divine blessing, wisdom, and protection over trainees, trainers, and staff as the new academic term begins.",
    content: `
    <p>On <strong>Friday, 8th May 2026</strong>, Kongoni Technical and Vocational College paused to gather in prayer and reflection as the institution observed the <strong>Term Opening Prayer Day</strong> for the <strong>May–August 2026 Academic Term</strong>.</p>

    <p>In keeping with the college's cherished tradition of anchoring each new term in faith, the prayer day brought together trainees, trainers, and staff in a spirit of unity, gratitude, and hopeful anticipation for the term ahead.</p>

    <p><strong>🙏 A Morning of Faith and Fellowship:</strong></p>
    <p>The prayer gathering, held at the main campus grounds, was marked by warmth, reverence, and communal participation. Representatives from multiple faith traditions led prayers and devotional reflections, affirming the college's inclusive, interfaith approach to spiritual life.</p>

    <p>The service opened with songs of praise that filled the campus with an atmosphere of worship and joy. Religious leaders from the local community joined the college community, offering words of encouragement, blessing, and divine guidance for the term ahead.</p>

    <p><strong>📖 Key Themes and Prayers:</strong></p>
    <ul>
      <li>Prayers for <strong>academic excellence and wisdom</strong> for all trainees undertaking their studies</li>
      <li>Petitions for <strong>safety and protection</strong> across the college community throughout the term</li>
      <li>Intercessions for <strong>trainers and staff</strong> — for energy, patience, and effectiveness in their work</li>
      <li>Blessings over all <strong>workshops, laboratories, and learning spaces</strong></li>
      <li>Prayers for the <strong>new intake trainees</strong> beginning their journeys at Kongoni TVC</li>
      <li>Gratitude for <strong>the recent victories</strong> at the Western TVET Fair and the opportunities ahead</li>
      <li>Prayers for <strong>national competition success</strong> as qualifying teams prepare for Wote</li>
      <li>Intercessions for <strong>peace, unity, and harmony</strong> within the college community and the nation</li>
    </ul>

    <p><strong>💬 Principal's Address:</strong></p>
    <p>Principal Ms. Judith Akaranga welcomed the college community and set the tone for the term with words of encouragement and faith: "We begin every term in prayer because we recognise that our efforts and achievements are only possible through divine grace. As we step into this new term with ambition and purpose, let us do so with hearts that are grateful, focused, and open to guidance from above."</p>

    <p>She called on all trainees to approach their studies with diligence and integrity, reminding them that excellence is a form of stewardship — making the most of the opportunities placed before them.</p>

    <p><strong>🌟 A United Community:</strong></p>
    <p>The prayer day concluded with a moment of collective blessing over the term, with participants joining hands symbolically before dispersing with renewed energy and purpose. Many trainees expressed how meaningful the gathering was — particularly new intake trainees who found the prayer day a warm, inclusive welcome into the Kongoni TVC family.</p>

    <p>The college remains committed to nurturing not only the minds and hands of its trainees but also their hearts — ensuring that holistic development remains at the core of the Kongoni TVC experience.</p>

    <p><em>#KongoniTVC #PrayerDay #MayTerm2026 #HolisticEducation #TermOpening #FaithAndExcellence</em></p>
  `,
    imageUrl: "/images/newsevents/prayerday2026/prayerday_main.jpg",
    images: [
      "/images/newsevents/prayerday2026/prayerday_main.jpg",
      "/images/newsevents/prayerday2026/prayerday2.jpg",
      "/images/newsevents/prayerday2026/prayerday3.jpg",
      "/images/newsevents/prayerday2026/prayerday4.jpg",
      "/images/newsevents/prayerday2026/prayerday5.jpg",
    ],
    featured: true,
    createdAt: "2026-05-08T11:00:00Z",
    updatedAt: "2026-05-08T11:00:00Z",
    author: "Student Affairs Department",
    category: "Student Life",
    eventDate: "2026-05-08",
    location: "Kongoni Technical and Vocational College Main Grounds",
    tags: [
      "prayer-day",
      "term-opening",
      "2026",
      "may-term",
      "spirituality",
      "interfaith",
      "community",
      "blessing",
      "holistic-education",
      "student-life",
      "faith",
      "new-term",
    ],
  },
  {
    id: "33",
    title: "May–August 2026 Intake — Trainees Report in Great Numbers for New Academic Term",
    excerpt:
      "On 5th May 2026, Kongoni Technical and Vocational College welcomed a large and enthusiastic cohort of returning and new trainees to the May–August 2026 term, with the college grounds bustling with energy as registration and orientation got underway.",
    content: `
    <p>The <strong>5th of May 2026</strong> marked an exciting new beginning for Kongoni Technical and Vocational College as trainees arrived in impressive numbers to report for the commencement of the <strong>May–August 2026 Academic Term</strong>.</p>

    <p>The college grounds came alive with the energy of hundreds of trainees — some returning with renewed purpose after the term break, others stepping onto campus for the very first time — all converging to begin what promises to be a vibrant and productive term.</p>

    <p><strong>📋 A Smooth and Organised Reporting Day:</strong></p>
    <p>The reporting process was efficiently managed by college staff, with dedicated registration stations set up across the campus to handle the high turnout. Trainees moved through documentation verification, fee processing, accommodation assignment, and departmental induction in an orderly and welcoming atmosphere.</p>

    <p>The strong turnout reflects both the growing reputation of Kongoni TVC as a premier technical and vocational institution in the region and the increasing demand for quality TVET education across Western Kenya.</p>

    <p><strong>🏫 Departments Welcoming New and Returning Trainees:</strong></p>
    <ul>
      <li><strong>Building & Construction</strong> — Masonry, Carpentry, Plumbing, and Electrical Installation</li>
      <li><strong>ICT Department</strong> — Computer Studies, Software Development, and Digital Solutions</li>
      <li><strong>Automotive Department</strong> — Motor Vehicle Mechanics and Auto Electrical</li>
      <li><strong>Business Studies</strong> — Entrepreneurship, Accounting, and Business Management</li>
      <li><strong>Beauty Therapy</strong> — Professional Beauty, Hair, and Spa Therapy</li>
      <li><strong>Fashion & Design</strong> — Tailoring, Dress Making, and Creative Design</li>
      <li><strong>Food & Beverage</strong> — Catering, Hospitality, and Food Production</li>
    </ul>

    <p><strong>🌟 A Warm Welcome from the Administration:</strong></p>
    <p>Principal Ms. Judith Akaranga personally welcomed trainees at the reporting event, reinforcing the college's commitment to providing a supportive, world-class learning environment. Addressing the gathering, she said:</p>

    <p><em>"Welcome back and welcome for the first time to Kongoni TVC. You have chosen well — this is a place where talent is nurtured, hard work is celebrated, and futures are built. We are excited to have you here, and we are committed to ensuring this term is your best yet."</em></p>

    <p>She encouraged new trainees to settle in quickly, engage fully with their departments, and take advantage of all the opportunities the college has to offer — from academics and workshops to clubs, sports, and co-curricular activities.</p>

    <p><strong>🔮 What Awaits in the May–August 2026 Term:</strong></p>
    <p>The term ahead is packed with exciting academic milestones, competitions, and community activities, including:</p>
    <ul>
      <li>Continuation of the CBET modular curriculum across all departments</li>
      <li>National TVET Fair participation for qualifying teams in Wote</li>
      <li>Sports, drama, and cultural activities</li>
      <li>Industry attachment and workplace learning opportunities</li>
      <li>Entrepreneurship and innovation programmes</li>
    </ul>

    <p>The college looks forward to a term full of growth, achievement, and unforgettable experiences. To every trainee who reported on 5th May — <strong>welcome to a new chapter.</strong></p>

    <p><em>#KongoniTVC #MayIntake2026 #NewTerm #TraineesReporting #TVETKenya #WelcomeHome</em></p>
  `,
    imageUrl: "/images/newsevents/reporting2026may/reporting_main.jpg",
    images: [
      "/images/newsevents/reporting2026may/reporting_main.jpg",
      "/images/newsevents/reporting2026may/reporting2.jpg",
      "/images/newsevents/reporting2026may/reporting3.jpg",
      "/images/newsevents/reporting2026may/reporting4.jpg",
      "/images/newsevents/reporting2026may/reporting5.jpg",
    ],
    featured: true,
    createdAt: "2026-05-05T09:00:00Z",
    updatedAt: "2026-05-05T09:00:00Z",
    author: "Administration",
    category: "Student Life",
    eventDate: "2026-05-05",
    location: "Kongoni Technical and Vocational College Grounds",
    tags: [
      "trainees-reporting",
      "may-2026",
      "new-term",
      "intake",
      "orientation",
      "may-august-term",
      "student-life",
      "new-intake",
      "returning-trainees",
      "tvet-kenya",
      "college-opening",
      "2026",
    ],
  },
  {
    id: "31",
    title: "Kongoni Technical Shines as National Champions at the 2026 Kenya National Drama and Film Festival",
    excerpt:
      "Kongoni Technical and Vocational College (Kongoni TVC) has etched its name in the annals of excellence after an outstanding performance at the 2026 Kenya National Drama and Film Festival held in Nyeri County — emerging as national champions in the Advertisement Category on their very first attempt.",
    content: `
    <p>Kongoni Technical and Vocational College (Kongoni TVC) has etched its name in the annals of excellence after an outstanding performance at the <strong>2026 Kenya National Drama and Film Festivals</strong> held in Nyeri County. The prestigious event, hosted at <strong>Nyeri National Polytechnic</strong> and <strong>Kagumo Teachers Training College</strong> from <strong>April 6th to 15th</strong>, brought together top-performing institutions from across the country.</p>
    <p>Kongoni Technical emerged as the <strong>national champions in the advertisement category</strong> — a remarkable achievement that has been widely celebrated within and beyond the institution. Their winning piece creatively addressed a relatable and practical issue: demonstrating how students can conveniently pay examination fees using their mobile phones, instead of enduring long, time-consuming queues. The advert resonated strongly with audiences and adjudicators alike for its relevance, clarity, and innovative delivery.</p>
    <p>What makes this triumph even more extraordinary is the fact that <strong>this was the institution's first time ever competing in the advertisement category</strong>. National champions. First attempt. That milestone alone speaks volumes about the calibre of talent nurtured at Kongoni TVC.</p>
    <p><strong>🏆 Voices of Pride</strong></p>
    <p>Speaking after the victory, <strong>Co-Patron Mr. David Madaga</strong> emphasised the magnitude of the achievement, noting that winning at the national level is no small feat given the stiff competition from seasoned performers across the country. He credited the triumph to the learners' dedication, creativity, and the collective effort of the entire team.</p>
    <p><strong>Patron Ms. Doris Wekesa</strong> echoed similar sentiments, pointing out that becoming national champions on a debut reflects the extraordinary hard work, discipline, and commitment invested by both students and trainers. The success story of Kongoni TVC, she noted, stands as an inspiration to other institutions aspiring to excel in co-curricular activities.</p>
    <p><strong>Principal Ms. Judith Akaranga</strong> lauded the team for what she described as a "splendid performance." She reaffirmed the college's commitment to nurturing holistic learners — focusing not only on academic excellence but on developing talents and life skills beyond the classroom. She expressed gratitude to God for the victory and optimism for even greater achievements in future festivals.</p>
    <p><strong>🎬 Watch the Winning Performance</strong></p>
    <p>Relive the magic of the award-winning advertisement on the college's official YouTube channel. Watch the Live TV production and the Advertisement that brought Kongoni TVC to the national spotlight.</p>
    <p><strong>🔮 A New Chapter Begins</strong></p>
    <p>This landmark win marks a new chapter for Kongoni TVC, positioning it as a rising force in the national drama and film arena. With such a strong debut, the institution looks ahead with confidence and determination — ready to build on this success in upcoming competitions.</p>
    <p><em>Courtesy of Equity Bank — "Your success, our commitment."</em></p>
    <p><em>Creative Minds. Powerful Stories. Bright Futures.</em></p>
    <p><em>#KongoniTVC #NationalChampions #KNDFF2026 #AdvertisementCategory #EmergingWinners #EquityBank #TVETKenya</em></p>
  `,
    imageUrl: "/images/newsevents/drama2026national/AdvertWin.jpeg",
    images: [
      "/images/newsevents/drama2026national/AdvertWin.jpeg",
      "/images/newsevents/drama2026national/nationaldrama_advert.png",
      "/images/newsevents/drama2026national/nationaldrama_advert1.png",
      "/images/newsevents/drama2026national/nationaldrama_livetv.png",
    ],
    videoUrl: "https://www.youtube.com/watch?v=3GdhGQ5QUio",
    videoThumbnail: "/images/newsevents/drama2026national/nationaldrama_advert.png",
    videos: [
      {
        url: "https://www.youtube.com/watch?v=3GdhGQ5QUio",
        title: "🏆 Advertisement — National Winning Entry",
        thumbnail: "/images/newsevents/drama2026national/nationaldrama_advert.png",
      },
      {
        url: "https://www.youtube.com/watch?v=nHvpt8KMo-E",
        title: "📺 Live TV Production",
        thumbnail: "/images/newsevents/drama2026national/nationaldrama_livetv.png",
      },
    ],
    featured: true,
    createdAt: "2026-04-16T10:00:00Z",
    updatedAt: "2026-04-16T10:00:00Z",
    author: "Student Affairs Department",
    category: "Achievements",
    eventDate: "2026-04-15",
    location: "Nyeri National Polytechnic & Kagumo Teachers Training College, Nyeri County",
    tags: [
      "drama",
      "national-champions",
      "kndff2026",
      "advertisement-category",
      "emerging-winners",
      "equity-bank",
      "live-tv",
      "film-festival",
      "2026",
      "nyeri",
      "performing-arts",
      "student-talent",
      "achievement",
      "tvet-kenya",
      "national-competition",
      "first-attempt",
    ],
  },
  {
    id: "30",
    title: "Drama Club Excels at the 2026 Regional KATTI Drama Festivals - Multiple Awards at Bungoma National Polytechnic",
    excerpt:
      "Kongoni Technical and Vocational College's drama club delivered a captivating performance at the 2026 Regional KATTI Drama Festivals held at Bungoma National Polytechnic, scooping multiple awards across solo verse, spoken word, film, and cultural creative dance categories.",
    content: `
    <p>In a remarkable display of creativity, discipline, and artistic excellence, our institution emerged as one of the standout performers at the <strong>2026 Regional KATTI Drama Festivals</strong>, held at <strong>Bungoma National Polytechnic</strong>. The event brought together talented participants from various institutions across the region, providing a vibrant platform for showcasing theatrical brilliance, cultural expression, and storytelling mastery.</p>

    <p>Our drama team captivated audiences and adjudicators alike with a powerful, well-coordinated performance centered on <strong>environmental conservation</strong>, <strong>national cohesion</strong>, <strong>making good life choices</strong>, and <strong>embracing technology in the artificial intelligence era</strong>. These performances ranged from solo verse, narrative, stand-up comedy, modern dance, spoken word, choral verse, film presentations, and culminated in a spectacular cultural creative dance.</p>

    <p>The performers demonstrated exceptional stage presence, confidence, and teamwork. Their costumes — carefully designed to reinforce thematic elements — added visual appeal and depth to the performance. The creative use of props, lighting, and stage design further enhanced the storytelling, creating an immersive and memorable experience for the audience.</p>

    <p>What truly set the team apart was their ability to seamlessly integrate drama, dance, and mime into a cohesive performance. Each scene transitioned smoothly into the next, maintaining audience engagement while delivering both entertainment and education. The performers' dedication, evident through their synchronization and emotional expression, reflected the countless hours of rehearsal and commitment invested in the production.</p>

    <p><strong>🥇 Awards & Recognition</strong></p>
    <p>The institution scooped multiple accolades at the festival, with winning items including:</p>
    <ul>
      <li><strong>Solo Verse</strong> — An outstanding performance that earned 2nd Runner‑Up!</li>
      <li><strong>Spoken Word</strong> — Proudly honoured with the 1st Runner‑Up award!</li>
      <li><strong>Film Categories</strong> — Winning two separate awards for creativity and impact.</li>
      <li><strong>Cultural Creative Dance</strong> — Bagged an award for the best item on environmental conservation.</li>
    </ul>

    <p>The adjudicators commended the institution for its originality, clarity of theme, and effective communication of message. Special recognition was given to the group's creativity in interpreting contemporary issues through cultural and artistic lenses.</p>

    <p><strong>🌟 Voices of Pride</strong></p>
    <p>"This achievement is a testament to the institution's commitment to nurturing talent and promoting the arts as a vital component of holistic education," noted Mr David Madaga. "The support of trainers, directors, and the administration played a crucial role in the team's success — this belongs to all of us."</p>

    <p>Principal Judith Akaranga extended heartfelt congratulations to every member of the drama club, celebrating not only the awards won but the courage, creativity, and professionalism that the trainees brought to the festival stage.</p>

    <p><strong>🎬 Watch the Highlights</strong></p>
    <p>Relive the magic of the 2026 KATTI Drama Festival by watching the full performance highlights on the college's official YouTube channel.</p>

    <p><strong>🔮 Looking Ahead</strong></p>
    <p>As we celebrate this milestone, the institution remains committed to pushing creative boundaries and inspiring future performers to use art as a powerful tool for impact and transformation. We look forward to future festivals with optimism and pride.</p>

    <p><em>#KongoniTechnical #KATTIDrama2026 #DramaFestival #BungomaNationalPolytechnic #ArtsAndCulture</em></p>
  `,
    imageUrl: "/images/newsevents/drama2026/CCD_.png",
    images: [
      "/images/newsevents/drama2026/drama2026_1.png",
      "/images/newsevents/drama2026/drama2026_2.png",
      "/images/newsevents/drama2026/drama2026_3.png",
      "/images/newsevents/drama2026/CCD_.png",
      "/images/newsevents/drama2026/CORALVERSE.png",
      "/images/newsevents/drama2026/MODERNDANCE.png",
      "/images/newsevents/drama2026/STANDUPCOMEDY.png",
      "/images/newsevents/drama2026/SOLOVERSE.png",
    ],
    videoUrl: "https://www.youtube.com/watch?v=Cln1l8H34bc",
    videoThumbnail: "/images/newsevents/drama2026/drama2026_1.png",
    featured: true,
    createdAt: "2026-03-30T10:00:00Z",
    updatedAt: "2026-03-30T10:00:00Z",
    author: "Student Affairs Department",
    category: "Achievements",
    eventDate: "2026-03-08",
    location: "Bungoma National Polytechnic",
    tags: [
      "drama",
      "katti",
      "drama-festival",
      "2026",
      "bungoma",
      "solo-verse",
      "spoken-word",
      "modern-dance",
      "narrative",
      "stand-up-comedy",
      "choral-verse",
      "film",
      "cultural-dance",
      "awards",
      "achievement",
      "performing-arts",
      "student-talent",
      "environmental-conservation",
      "regional-competition",
    ],
  },
  {
    id: "29",
    title: "Kongoni Technical College Annual Athletic Sports Day - Unity, Teamwork & Physical Excellence",
    excerpt:
      "Trainees from different departments came together for the annual athletic sports day, showcasing talent across multiple disciplines, with top performers qualifying to represent the institution at regional level and beyond.",
    content: `
    <p>Kongoni Technical and Training Institute has successfully concluded its annual athletic sports activities, bringing together trainees from across all departments for a day of fierce but friendly competition, camaraderie, and sporting excellence.</p>

    <p>The event was designed to promote unity, teamwork, and physical fitness among trainees — values the college recognizes as integral to holistic education alongside technical and vocational training.</p>

    <p><strong>🏃 A Day of Competition and Achievement:</strong></p>
    <p>Trainees from every department stepped up to compete across a wide range of athletic disciplines, displaying remarkable talent, determination, and sportsmanship throughout the day. The competitions were spirited and closely contested, with participants giving their all in pursuit of glory for themselves and their departments.</p>

    <p>Standout performers from multiple disciplines have qualified to represent Kongoni Technical and Training Institute at the regional level and beyond — a testament to the depth of athletic talent within the institution.</p>

    <p><strong>🎯 Event Objectives:</strong></p>
    <ul>
      <li><strong>Promote Unity:</strong> Bringing trainees from all departments together in a shared celebration of sport</li>
      <li><strong>Foster Teamwork:</strong> Encouraging collaborative spirit and mutual support among participants</li>
      <li><strong>Physical Fitness:</strong> Reinforcing the importance of an active and healthy lifestyle</li>
      <li><strong>Talent Identification:</strong> Spotting athletes with potential for regional and national competition</li>
      <li><strong>Holistic Development:</strong> Complementing academic and technical training with physical and social development</li>
    </ul>

    <p><strong>🏅 Notable Attendees:</strong></p>
    <ul>
      <li><strong>Members of Athletics Kenya</strong> — Representatives from the national athletics governing body attended to observe and identify promising talent</li>
      <li><strong>Principal Judith Akaranga</strong> — The college principal graced the event, underscoring the administration's commitment to student well-being and holistic development</li>
      <li><strong>College Lecturers and Management</strong> — Staff members turned out in strong numbers to cheer on and support the competing trainees</li>
      <li><strong>Radio Ustawi</strong> — The event received full media coverage from Radio Ustawi, who were present throughout the day capturing every moment of sporting action</li>
    </ul>

    <p><strong>📻 Media Coverage:</strong></p>
    <p>Radio Ustawi's presence ensured that the excitement and achievements of the day reached a wider audience, shining a spotlight on the athletic talent at Kongoni Technical and Training Institute and amplifying the college's vibrant student life.</p>

    <p><strong>🌟 Looking Ahead:</strong></p>
    <p>The athletes who have qualified for regional competition will now carry the Kongoni Technical and Training Institute flag forward, representing the institution with pride. The college's management expressed full support for the qualifying trainees as they prepare for the next stage of competition.</p>

    <p>"Events like our annual sports day are a reminder that education is about more than the classroom," said Principal Judith Akaranga. "Sport builds character, discipline, and resilience — qualities that will serve our trainees throughout their careers and lives."</p>

    <p>The institution congratulates every trainee who participated in making this year's sports day a memorable and inspiring occasion.</p>

    <p><em>#KongoniTechnical #Sports #RadioUstawi</em></p>
  `,
    imageUrl: "/images/Sports Day2026/sportdday (17).JPG",
    images: [
      "/images/Sports Day2026/sportdday (10).JPG",
      "/images/Sports Day2026/sportdday (2).JPG",
      "/images/Sports Day2026/sportdday (3).JPG",
      "/images/Sports Day2026/sportdday (4).JPG",
      "/images/Sports Day2026/sportdday (5).JPG",
      "/images/Sports Day2026/sportdday (6).JPG",
      "/images/Sports Day2026/sportdday (7).JPG",
      "/images/Sports Day2026/sportdday (8).JPG",
      "/images/Sports Day2026/sportdday (9).JPG",
      "/images/Sports Day2026/sportdday (1).JPG",
      "/images/Sports Day2026/sportdday (11).JPG",
      "/images/Sports Day2026/sportdday (12).JPG",
      "/images/Sports Day2026/sportdday (13).JPG",
      "/images/Sports Day2026/sportdday (14).JPG",
      "/images/Sports Day2026/sportdday (15).JPG",
      "/images/Sports Day2026/sportdday (16).JPG",
    ],
    videoThumbnail: "/images/newsevents/athletics/athletics23.jpeg",
    featured: true,
    createdAt: "2026-03-13T10:00:00Z",
    updatedAt: "2026-03-13T10:00:00Z",
    author: "Sports Department",
    category: "Events",
    eventDate: "2026-03-13",
    location: "Kongoni Technical and Training Institute Grounds",
    tags: [
      "athletics",
      "sports",
      "teamwork",
      "unity",
      "fitness",
      "radio-ustawi",
      "athletics-kenya",
      "competition",
      "annual-sports",
      "student-life",
      "regional-qualifiers",
      "holistic-development",
    ],
  },
  {
    id: "28",
    title: "Kongoni Technical College Partners with Modia Driving School to Offer Comprehensive Driving Courses",
    excerpt:
      "Kongoni Technical & Vocational College announces exciting collaboration with Modia Driving School to provide professional driving certification courses on campus, featuring NTSA-certified training across multiple vehicle classes.",
    content: `
    <p>Kongoni Technical & Vocational Training College is proud to announce a strategic partnership with <strong>Modia Driving School</strong>, bringing professional driving education directly to our campus. This collaboration represents our commitment to expanding practical skills training and providing our students and community with valuable, certified driving qualifications.</p>
    <p><strong>🚗 About the Partnership:</strong></p>
    <p>This partnership combines Kongoni Technical College's educational excellence with Modia Driving School's professional driving instruction expertise. Together, we offer comprehensive driving courses designed to meet industry standards and prepare participants for successful careers in transportation and logistics.</p>
    <p><strong>📞 Contact Information:</strong></p>
    <ul>
      <li><strong>Phone/WhatsApp:</strong> 0788 070 303</li>
      <li><strong>Phone/WhatsApp:</strong> 0722 794 586</li>
      <li><strong>Phone/WhatsApp:</strong> 0781 930 803</li>
      <li><strong>Phone/WhatsApp:</strong> 0740 325 676</li>
    </ul>
    <p><em>Kongoni Technical & Vocational Training College: Expanding Skills, Empowering Futures.</em></p>
  `,
    imageUrl: "/images/newsevents/modiadriving/driving1.jpg",
    images: [
      "/images/newsevents/modiadriving/driving1.jpg",
      "/images/newsevents/modiadriving/driving2.jpeg",
      "/images/newsevents/modiadriving/driving3.jpeg",
      "/images/newsevents/modiadriving/driving4.jpg",
      "/images/newsevents/modiadriving/driving5.jpeg",
    ],
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
    ],
  },
  {
    id: "27",
    title: "Celebrating Academic Excellence: Our Staff's Remarkable Achievements",
    excerpt:
      "Kongoni Technical and Vocational College proudly celebrates our trainers and staff members who have recently achieved significant academic milestones at various universities across Kenya.",
    content: `
    <p>Kongoni Technical and Vocational Training College extends heartfelt congratulations to our dedicated trainers and staff members who have recently achieved remarkable academic milestones. Their pursuit of higher education exemplifies our institution's commitment to lifelong learning and professional development.</p>
    <p><strong>🌟 PHD ACHIEVEMENT 🌟</strong></p>
    <p>We celebrate with immense pride as our esteemed <strong>Board of Governors Member</strong> successfully attained her <strong>Doctor of Philosophy (PhD)</strong> from <strong>Jomo Kenyatta University of Agriculture and Technology (JKUAT)</strong>.</p>
    <p><strong>🎓 DEGREE ACCOLADES 🎓</strong></p>
    <p>Congratulations to <strong>Mr. Andrew Juma</strong> and <strong>Mr. Patrick Mwangi</strong> from the <strong>Technical University of Kenya</strong>.</p>
    <p><strong>📜 DIPLOMA HONORS 📜</strong></p>
    <p>Heartfelt congratulations to Bryan Wekesa, Ann Namukhaywa, Kelvin Bugigi, Dennis Simiyu, Ann Waitherero from <strong>Kenya School of TVET (KSTVET)</strong> and <strong>Joshua Makacha</strong> from <strong>Dedan Kimathi University of Technology</strong>.</p>
    <p><em>Kongoni Technical and Vocational Training College: Where excellence in education begins with excellence in educators.</em></p>
  `,
    imageUrl: "/images/newsevents/staffachievements/achievement1.jpg",
    images: [
      "/images/newsevents/staffachievements/achievement1.jpg",
      "/images/newsevents/staffachievements/achievement2.jpg",
      "/images/newsevents/staffachievements/achievement3.jpg",
      "/images/newsevents/staffachievements/achievement4.jpg",
      "/images/newsevents/staffachievements/achievement5.jpg",
    ],
    featured: true,
    createdAt: "2025-12-10T10:00:00Z",
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
      "professional-development",
    ],
  },
  {
    id: "26",
    title: "Kongoni TVC Cultural Day 2025 - Celebrating Heritage, Unity & Talent",
    excerpt:
      "Kongoni Technical and Vocational College hosted a spectacular Cultural Day celebration featuring traditional dances, drama, spoken word, cultural fashion parade, local cuisine exhibitions, and vibrant music performances.",
    content: `
    <p>On November 7th, 2025, Kongoni Technical & Vocational Training College transformed its grounds into a vibrant celebration of Kenyan culture during the highly anticipated Cultural Day 2025.</p>
    <p>The event brought together trainees, staff, and guests in a spectacular showcase of Kenya's diverse cultural heritage, demonstrating the college's commitment to celebrating unity in diversity while nurturing talent and creativity among trainees.</p>
    <p>Special thanks to <strong>Afrikwear Unit Entertainment</strong> for their exceptional professional media coverage throughout the Cultural Day celebration.</p>
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
      "/images/newsevents/culturalday/cultural10.jpeg",
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
      "unity-in-diversity",
      "kenyan-culture",
    ],
  },
  {
    id: "25",
    title: "Dual TVET Workshop - Round 2 Dualization Training for Rift Valley Region",
    excerpt:
      "Trainers from Kongoni Technical and Vocational College joined other TVET institutions for a comprehensive 2-day workshop on Dual TVET and Dualization at Starbucks Hotel, Eldoret.",
    content: `
      <p>On 23rd and 24th October 2025, a team representing Kongoni Technical and Vocational College joined trainers from other TVET institutions across the Rift Valley Region for a transformative 2-Day Workshop on Round 2 Dual TVET and Dualization, held at Starbucks Hotel, Eldoret.</p>
      <p>The workshop was facilitated through collaborative efforts between GIZ/GFA and Kenya School of TVET, as part of the ongoing effort to ensure smooth implementation of dual learning.</p>
      <p>Kongoni Technical and Vocational College remains committed to adopting best practices in technical education, and this workshop represents a significant milestone in our journey toward excellence in dual training delivery.</p>
    `,
    imageUrl: "/images/newsevents/dualtvetworkshop/dualworkshop7.jpeg",
    images: [
      "/images/newsevents/dualtvetworkshop/dualworkshop1.jpeg",
      "/images/newsevents/dualtvetworkshop/dualworkshop2.jpeg",
      "/images/newsevents/dualtvetworkshop/dualworkshop3.jpeg",
      "/images/newsevents/dualtvetworkshop/dualworkshop4.jpeg",
      "/images/newsevents/dualtvetworkshop/dualworkshop5.jpeg",
      "/images/newsevents/dualtvetworkshop/dualworkshop6.jpeg",
    ],
    featured: true,
    createdAt: "2025-10-24T17:00:00Z",
    updatedAt: "2025-10-24T17:00:00Z",
    author: "Academic Affairs Department",
    category: "Training",
    eventDate: "2025-10-24",
    location: "Starbucks Hotel, Eldoret",
    tags: [
      "dual-tvet",
      "workshop",
      "training",
      "giz",
      "kstvet",
      "dualization",
      "cbet",
      "modular-curriculum",
      "capacity-building",
      "rift-valley",
    ],
  },
  {
    id: "24",
    title: "Sports Day 2025 - Athletic Excellence and Team Spirit",
    excerpt:
      "Kongoni Technical College hosted an electrifying Sports Day featuring football, volleyball, handball, and netball competitions. Eleven Stars crowned football champions.",
    content: `
      <p>On October 10th, 2025, Kongoni Technical & Vocational Training College held its annual Sports Day, showcasing exceptional athletic talent and team spirit across multiple sporting disciplines.</p>
      <p><strong>Men's Football Tournament Results:</strong></p>
      <ul>
        <li><strong>🥇 Champions: ELEVEN STARS</strong></li>
        <li><strong>🥈 2nd Runners-Up: RISING STARS</strong></li>
        <li><strong>🥉 3rd Place: GREEN GARDEN</strong></li>
      </ul>
      <p>"Today's Sports Day exemplifies our commitment to holistic education," remarked Principal Judith Akaranga during the awards ceremony.</p>
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
      "/images/newsevents/kattigames/kattigames9.jpg",
    ],
    featured: true,
    createdAt: "2025-10-10T16:00:00Z",
    updatedAt: "2025-10-10T16:00:00Z",
    author: "Sports Department",
    category: "Events",
    eventDate: "2025-10-10",
    location: "Matunda SA School",
    tags: ["sports", "football", "volleyball", "handball", "netball", "championship", "athletics", "competition", "sports-day"],
  },
  {
    id: "23",
    title: "Mazingira Day 2025 - 548 Fruit Trees Planted at Nangili Primary School",
    excerpt:
      "KTVC joined forces with Equity Bank Moi's Bridge and Scout Society to celebrate Mazingira Day by planting 548 fruit trees at Nangili Comprehensive Primary School.",
    content: `
      <p>On October 10th, 2025, Kongoni Technical & Vocational Training College, in partnership with Equity Bank Moi's Bridge and the KTVC Scout Society, celebrated Mazingira Day with a massive tree planting initiative at Nangili Comprehensive Primary School.</p>
      <p>Under the theme "Citizen-Centric Tree Growing and Stewardship", the collaborative effort resulted in planting 548 fruit trees including avocados, guavas, grafted mangoes, macadamia, jackfruit, custard apple, black plum, loquat, and pomegranate.</p>
      <p>Deputy Principal Ezra Orina emphasized: "Today we plant more than trees - we plant hope, nutrition, and a sustainable future for these children."</p>
    `,
    imageUrl: "/images/newsevents/treeplanting/nangilitree2.jpg",
    images: [
      "/images/newsevents/treeplanting/nangilitree3.jpg",
      "/images/newsevents/treeplanting/nangilitree7.jpg",
      "/images/newsevents/treeplanting/nangilitree49.jpg",
      "/images/newsevents/treeplanting/nangilitree48.jpg",
      "/images/newsevents/treeplanting/nangilitree1.jpg",
      "/images/newsevents/treeplanting/nangilitree4.jpg",
    ],
    featured: true,
    createdAt: "2025-10-10T14:00:00Z",
    updatedAt: "2025-10-10T14:00:00Z",
    author: "Environmental Conservation Team",
    category: "Events",
    eventDate: "2025-10-10",
    location: "Nangili Comprehensive Primary School",
    tags: [
      "mazingira-day",
      "tree-planting",
      "environment",
      "conservation",
      "equity-bank",
      "scouts",
      "community-service",
      "sustainability",
      "fruit-trees",
    ],
  },
  {
    id: "22",
    title: "CBET Modular Curriculum Delivery Workshop at Sigalagala National Polytechnic",
    excerpt:
      "Kongoni Technical College's academic leadership team participated in a comprehensive 5-day workshop on Competency-Based Education and Training (CBET) modular curriculum delivery.",
    content: `
      <p>A delegation from Kongoni Technical & Vocational Training College participated in an intensive 5-day workshop on CBET modular curriculum delivery at Sigalagala National Polytechnic from September 8-12, 2025.</p>
      <p>The college was represented by key academic leadership including all Heads of Departments (HODs), the Examinations Officer, and the Deputy Principal for Academics.</p>
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
      "/images/newsevents/sigalagalatraining/modulartraining8.jpg",
    ],
    featured: true,
    createdAt: "2025-09-12T18:00:00Z",
    updatedAt: "2025-09-12T18:00:00Z",
    author: "Academics Department",
    category: "Training",
    eventDate: "2025-09-12",
    location: "Sigalagala National Polytechnic",
    tags: ["cbet", "curriculum", "training", "academic-staff", "competency-based", "modular-delivery", "professional-development"],
  },
  {
    id: "21",
    title: "Kongoni Technical Hosts CS Oparanya at NYOTA Entrepreneurship Training Completion",
    excerpt:
      "Hon. Wycliffe Oparanya, Cabinet Secretary for Co-operatives and MSMEs, was chief guest at the completion ceremony of the 4-day NYOTA entrepreneurship training program that empowered 150 youths.",
    content: `
      <p>Kongoni Technical & Vocational Training College had the honor of hosting Hon. Wycliffe Oparanya, Cabinet Secretary for Co-operatives and MSMEs, as chief guest during the completion ceremony of the NYOTA entrepreneurship training program.</p>
      <p>The hosted 4-day intensive training program successfully empowered 150 young entrepreneurs with essential business skills needed to establish and manage successful enterprises.</p>
      <p>CS Oparanya announced plans to expand the NYOTA program to reach more youths across the country, with Kongoni Technical College identified as a model training center for replication in other regions.</p>
    `,
    imageUrl: "/images/newsevents/nyotaexitmeeting/nyotaexit18th-25scaled.jpeg",
    images: [
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-25scaled.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-4.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-2.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-3.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-5.jpeg",
      "/images/newsevents/nyotaexitmeeting/nyotaexit18th-14.jpeg",
    ],
    videoUrl: "https://www.youtube.com/watch?v=tSrJ788t99U",
    videoThumbnail: "/images/newsevents/nyotaexitmeeting/nyotaexit18th-23.jpeg",
    featured: true,
    createdAt: "2025-09-15T16:00:00Z",
    updatedAt: "2025-09-15T16:00:00Z",
    author: "Administration",
    category: "Events",
    eventDate: "2025-09-15",
    location: "College Grounds",
    tags: ["nyota", "entrepreneurship", "cabinet-secretary", "youth-empowerment", "government-initiative", "business-training"],
  },
  {
    id: "20",
    title: "Term Opening Prayer Day - Spiritual Blessing for New Academic Term",
    excerpt: "The college community came together for a special prayer service to seek divine blessing and guidance for the new academic term.",
    content: `
    <p>On September 9th, 2025, Kongoni Technical & Vocational Training College held a special Term Opening Prayer Day, bringing together the entire college community to seek divine blessing and guidance for the new academic term.</p>
    <p>The prayer service featured participation from multiple religious denominations, emphasizing the college's inclusive approach to spiritual matters while respecting diverse faith backgrounds within the college community.</p>
  `,
    imageUrl: "/images/newsevents/prayerday/prayerday1.jpeg",
    images: [
      "/images/newsevents/prayerday/prayerday1.jpeg",
      "/images/newsevents/prayerday/prayerday2.jpeg",
      "/images/newsevents/prayerday/prayerday3.jpeg",
    ],
    featured: true,
    createdAt: "2025-09-09T10:00:00Z",
    updatedAt: "2025-09-09T10:00:00Z",
    author: "Student Affairs",
    category: "Student Life",
    eventDate: "2025-09-09",
    location: "Main Campus Grounds",
    tags: ["prayer", "spirituality", "term-opening", "community", "blessing", "interfaith", "student-life"],
  },
  {
    id: "19",
    title: "3rd Board of Governors Inauguration - Transition to New Leadership Structure",
    excerpt: "Historic transition as Kongoni Technical & Vocational Training College transitions from Board of Management to the new Board of Governance structure.",
    content: `
    <p>On September 5th, 2025, Kongoni Technical & Vocational Training College held its historic 3rd Board of Governance meeting, marking a significant transition in the institution's leadership structure from the previous Board of Management to the newly established Board of Governance.</p>
    <p>This governance transition positions Kongoni Technical & Vocational Training College for continued growth and excellence in technical education delivery.</p>
  `,
    imageUrl: "/images/admin/board/bog2.jpg",
    images: ["/images/admin/board/bog1.jpeg", "/images/admin/board/bog2.jpeg"],
    featured: true,
    createdAt: "2025-09-05T14:30:00Z",
    updatedAt: "2025-09-05T14:30:00Z",
    author: "Administration",
    category: "Events",
    eventDate: "2025-09-05",
    location: "College Boardroom",
    tags: ["governance", "board-meeting", "leadership", "transition", "administration", "strategic-planning"],
  },
  {
    id: "18",
    title: "September 2025 Intake Trainees Reporting for New Academic Year",
    excerpt:
      "We warmly welcome the September 2025 intake trainees as they begin their technical and vocational training journey at Kongoni Technical & Vocational Training College.",
    content: `
      <p>Kongoni Technical & Vocational Training College is pleased to welcome the September 2025 intake trainees who are reporting for the commencement of their technical and vocational training programs.</p>
      <p>"We are excited to welcome this new cohort of trainees who will contribute to Kenya's skilled workforce," said Principal Judith Akaranga.</p>
    `,
    imageUrl: "/images/newsevents/traineesreporting/reporting2.jpeg",
    images: [
      "/images/newsevents/traineesreporting/reporting1.jpeg",
      "/images/newsevents/traineesreporting/reporting2.jpeg",
      "/images/newsevents/traineesreporting/reporting3.jpeg",
      "/images/newsevents/traineesreporting/reporting4.jpeg",
    ],
    featured: true,
    createdAt: "2025-09-02T08:00:00Z",
    updatedAt: "2025-09-02T08:00:00Z",
    author: "Administration",
    category: "Student Life",
    eventDate: "2025-09-02",
    location: "Main Campus",
    tags: ["intake", "new-trainees", "orientation", "academic-year"],
  },
  {
    id: "17",
    title: "Drama Trainees Achieve Second Position in Regional Competition",
    excerpt:
      "Congratulations to our talented drama trainees who secured second position in both solo verse and spoken word categories at the regional drama festival.",
    content: `
      <p>We are proud to announce the outstanding achievement of our drama trainees who excelled at the recent regional drama festival, securing second position in two competitive categories.</p>
      <p>Both trainees will now advance to the national drama competition. The college community looks forward to supporting them as they represent us at the national level.</p>
    `,
    imageUrl: "/images/hero/cultural5.jpg",
    images: [
      "/images/hero/cultural1.jpg",
      "/images/hero/cultural2.jpg",
      "/images/hero/cultural3.jpg",
      "/images/hero/cultural4.jpg",
      "/images/hero/cultural5.jpg",
    ],
    featured: true,
    createdAt: "2025-08-20T16:30:00Z",
    updatedAt: "2025-08-20T16:30:00Z",
    author: "Performing Arts Department",
    category: "Achievements",
    eventDate: "2025-08-20",
    location: "Regional Drama Festival Venue",
    tags: ["drama", "competition", "performance", "arts", "achievement", "regional"],
  },
  {
    id: "16",
    title: "Visit by Mr Chris Norris - American Friends of Kenya Founder",
    excerpt:
      "The Carpentry section was privileged to host Mr Chris Norris, core founder of Kongoni Library/Networks (American Friends of Kenya) for an engaging day of tree planting and skill sharing.",
    content: `
    <p>The Carpentry section in building department was privileged to host Mr Chris Norris, core founder of Kongoni Library/Networks (American Friends of Kenya) on Saturday June 5th.</p>
    <p>The visit featured tree planting, a visit to the carpentry store, and a 7-hour interaction with trainees that included collaborative desk-making and skills exchange. Mr. Norris expressed admiration for the dedication of Kongoni's carpentry trainees.</p>
  `,
    imageUrl: "/images/newsevents/founder/founder15.jpeg",
    images: [
      "/images/newsevents/founder/founder1.jpeg",
      "/images/newsevents/founder/founder2.jpeg",
      "/images/newsevents/founder/founder3.jpeg",
      "/images/newsevents/founder/founder4.jpeg",
      "/images/newsevents/founder/founder5.jpeg",
      "/images/newsevents/founder/founder6.jpeg",
    ],
    featured: true,
    createdAt: "2025-06-05T14:00:00Z",
    updatedAt: "2025-06-05T14:00:00Z",
    author: "Building Department",
    category: "Events",
    eventDate: "2025-06-05",
    location: "Carpentry Workshop, Building Department",
    tags: ["carpentry", "international", "collaboration", "tree-planting", "skills", "partnership"],
  },
  {
    id: "1",
    title: "Kongoni Trainees Excel at Katti Athletics Games 2024 - Gold Medal Victory",
    excerpt:
      "Our athletes brought home multiple medals from the Katti Athletics Games, showcasing exceptional talent in track and field events across various categories.",
    content: `
      <p>Kongoni Technical & Vocational Training College is proud to announce the outstanding performance of our student athletes at the prestigious Katti Athletics Games 2024.</p>
      <p>Our dedicated team of 25 student athletes competed against over 200 institutions from across East Africa, bringing home an impressive medal haul including 3 gold medals, 5 silver medals, and 4 bronze medals.</p>
      <p>Special recognition goes to Mary Chepkemoi who broke the games record in the 1500m women's race with a time of 4:12.8.</p>
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
    ],
    featured: true,
    createdAt: "2025-08-15T10:00:00Z",
    updatedAt: "2025-08-15T10:00:00Z",
    author: "Sports Department",
    category: "Achievements",
    eventDate: "2025-08-15",
    location: "Nyayo National Stadium, Nairobi",
    tags: ["athletics", "medals", "competition", "trainees", "gold-medal", "records"],
  },
  {
    id: "2",
    title: "Annual Guidance and Counselling Day Promotes Student Wellness",
    excerpt:
      "Our comprehensive guidance and counselling program focused on mental health, career guidance, and personal development for holistic student growth.",
    content: `
      <p>Kongoni Technical & Vocational Training College successfully hosted its Annual Guidance and Counselling Day, emphasizing the importance of mental health and personal development in technical education.</p>
      <p>The event saw participation from over 800 trainees across all departments, with positive feedback highlighting the practical value of the sessions.</p>
    `,
    imageUrl: "/images/newsevents/guidancecounselling/guidance4.jpeg",
    images: [
      "/images/newsevents/guidancecounselling/guidance1.jpeg",
      "/images/newsevents/guidancecounselling/guidance2.jpeg",
      "/images/newsevents/guidancecounselling/guidance3.jpeg",
      "/images/newsevents/guidancecounselling/guidance4.jpeg",
    ],
    featured: true,
    createdAt: "2025-08-10T14:30:00Z",
    updatedAt: "2025-08-10T14:30:00Z",
    author: "Student Affairs",
    category: "Student Life",
    eventDate: "2025-08-10",
    location: "Main Campus Auditorium",
    tags: ["counselling", "wellness", "mental-health", "career-guidance", "student-support"],
  },
  {
    id: "3",
    title: "New ICT Laboratory Equipment Installation Complete",
    excerpt: "State-of-the-art computer laboratory with 50 modern workstations enhances practical learning for ICT trainees.",
    content: `
      <p>Kongoni Technical & Vocational Training College has successfully completed the installation of cutting-edge equipment in our expanded ICT laboratory facility featuring 50 modern desktop computers, high-speed internet, smart boards, and specialized software.</p>
    `,
    imageUrl: "/images/departments/ict/ict1.jpg",
    images: [
      "/images/departments/ict/ict1.jpg",
      "/images/departments/ict/ict2.jpg",
      "/images/departments/ict/ict3.jpg",
      "/images/departments/ict/ict4.jpg",
    ],
    featured: false,
    createdAt: "2024-07-20T11:00:00Z",
    updatedAt: "2024-07-20T11:00:00Z",
    author: "ICT Department",
    category: "Facilities",
    eventDate: "2024-07-20",
    location: "ICT Laboratory Block",
    tags: ["technology", "laboratory", "equipment", "ict", "infrastructure"],
  },
  {
    id: "4",
    title: "Automotive Workshop Receives Major Equipment Upgrade",
    excerpt: "New diagnostic equipment and vehicle lifts enhance hands-on training for automotive trainees.",
    content: `
      <p>Our automotive department has received a significant upgrade with new equipment worth over 2 million Kenyan Shillings, including electronic diagnostic scanners, hydraulic vehicle lifts, engine analyzers, brake testing equipment, and wheel alignment machines.</p>
    `,
    imageUrl: "/images/departments/automotive/automotive1.jpg",
    images: [
      "/images/departments/automotive/automotive1.jpg",
      "/images/departments/automotive/automotive2.jpg",
      "/images/departments/automotive/automotive3.jpg",
    ],
    featured: false,
    createdAt: "2025-06-15T09:00:00Z",
    updatedAt: "2025-06-15T09:00:00Z",
    author: "Automotive Department",
    category: "Facilities",
    eventDate: "2025-06-15",
    location: "Automotive Workshop",
    tags: ["automotive", "equipment", "workshop", "upgrade", "training"],
  },
  {
    id: "5",
    title: "Student Entrepreneurship Week Showcases Innovation",
    excerpt: "Trainees display their business ideas and innovations during the annual entrepreneurship week celebration.",
    content: `
      <p>The annual Student Entrepreneurship Week showcased the innovative spirit of our trainees across all departments. Over 50 student businesses were showcased, demonstrating the entrepreneurial potential within our college community.</p>
    `,
    imageUrl: "/images/newsevents/entrepreneurship/entrepreneur1.jpg",
    images: [
      "/images/newsevents/entrepreneurship/entrepreneur1.jpg",
      "/images/newsevents/entrepreneurship/entrepreneur2.jpg",
      "/images/newsevents/entrepreneurship/entrepreneur3.jpg",
    ],
    featured: true,
    createdAt: "2024-05-25T13:00:00Z",
    updatedAt: "2024-05-25T13:00:00Z",
    author: "Business Department",
    category: "Events",
    eventDate: "2024-05-25",
    location: "Main Campus Hall",
    tags: ["entrepreneurship", "innovation", "business", "trainees", "competition"],
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit");
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const search = searchParams.get("search");

    let filteredNews = [...mockNews];

    if (category && category !== "all") {
      filteredNews = filteredNews.filter(
        (news) => news.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (featured === "true") {
      filteredNews = filteredNews.filter((news) => news.featured);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredNews = filteredNews.filter(
        (news) =>
          news.title.toLowerCase().includes(searchLower) ||
          news.excerpt.toLowerCase().includes(searchLower) ||
          news.content.toLowerCase().includes(searchLower) ||
          news.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    filteredNews.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    if (limit) {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum) && limitNum > 0) {
        filteredNews = filteredNews.slice(0, limitNum);
      }
    }

    return NextResponse.json(filteredNews, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("News API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch news articles",
      },
      { status: 500 }
    );
  }
}