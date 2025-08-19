{/* Registration Information */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-8 rounded-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Official Registration</h2>
                <p className="text-lg opacity-90">Accredited by TVETA</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">TVETA Registration</h3>
                  <p className="text-lg">Registration Certificate Number:</p>
                  <p className="text-xl font-mono bg-white/20 px-4 py-2 rounded mt-2">TVETA/ASS/7/3440K (2)</p>
                  <p className="text-sm opacity-80 mt-2">Registered: November 2019</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">Centre of Excellence</h3>
                  <p className="text-lg">Specialization:</p>
                  <p className="text-xl font-semibold bg-white/20 px-4 py-2 rounded mt-2">Building and Civil Engineering (BCE)</p>
                  <p className="text-sm opacity-80 mt-2">Government Recognized</p>
                </div>
              </div>
            </div>
          </section>
          
import type { Metadata } from "next";
import Image from "next/image";

// Metadata for SEO
export const metadata: Metadata = {
  title: "About Us | Kongoni Technical Locational Training College",
  description: "Learn about Kongoni Technical Locational Training College - over 20 years of excellence in technical education, empowering students with practical skills and industry-relevant training.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Kongoni Technical & Vocational College
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 mb-4">
            A Government Sponsored Institution under the Ministry of Education
          </p>
          <div className="text-lg opacity-80">
            <p>Along Eldoret-Kitale Road, P.O.Box 45 - 30205 Matunda</p>
            <p>Contact: 0721-320-423 | Email: kongonitvc@gmail.com</p>
            <p>Website: www.kongonitvc.ac.ke</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Introduction Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our Institution</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kongoni TVC is a Government Sponsored Institution under the Ministry of Education. It was established with the core mandate of equipping youths with skills needed to secure employment in today's market. The institution opened its doors to the first batch of students in October 2019.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The institution is well equipped to offer courses ranging from ICT, Business to Engineering courses at certificate and diploma level. It's a Centre of Excellence in Building and Civil Engineering.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kongoni Technical and Vocational College is located in Likuyani Sub-County of Kakamega County next to Likuyani Sub County Headquarters along Kitale-Eldoret Road. It is situated in serene environment, which is conducive for learning and personal development. We strive to produce job creators rather than job seekers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a college, we are committed to offering market driven skills to learners to ensure that they enter the market ready to offer services. We deliver quality CBET education to learners through inspired innovation, creativity, reliability and responsiveness with utmost goal of customer satisfaction.
              </p>
            </div>
          </section>

          {/* Our History Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our History</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  The idea to start the college was mooted by the political and community leadership in 2016. This was in line with the government policy of establishing a technical training college in every constituency. The political leadership then availed funds to purchase approximately 5 acres of land.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The first block that was constructed in 2016 and completed in 2020 houses the offices, lecture rooms and workshops.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The college was registered by the Technical and Vocational Education and Training Authority (TVETA) in November 2019 under Registration Certificate number TVETA/ASS/7/3440K (2). It is a centre of excellence in Building and Civil Engineering (BCE).
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The first batch of 62 trainees was enrolled in the Building and Civil Engineering, Information Communication Technology (ICT) and Business Studies Departments.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The number of staff at the time of the first intake stood at 12, of which 6 were PSC trainers and 6 were support staff.
                </p>
              </div>
            </div>
          </section>

          {/* Objectives and Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Objectives & Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Objectives */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Our Objectives</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Achieve and maintain a level of quality training which enhances the institution's reputation with customers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Ensure compliance with the Education Act and other relevant statutory and regulatory requirements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Endeavour to always maximize customer satisfaction with services provided by Kongoni TVC.</span>
                  </li>
                </ul>
              </div>

              {/* Core Values */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Our Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-users text-white text-sm"></i>
                    </div>
                    <span className="text-gray-600 font-medium">Teamwork</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-balance-scale text-white text-sm"></i>
                    </div>
                    <span className="text-gray-600 font-medium">Equity</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-star text-white text-sm"></i>
                    </div>
                    <span className="text-gray-600 font-medium">Professionalism</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-eye text-white text-sm"></i>
                    </div>
                    <span className="text-gray-600 font-medium">Transparency & Accountability</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-heart text-white text-sm"></i>
                    </div>
                    <span className="text-gray-600 font-medium">Integrity</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Main Departments */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Main Departments</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-briefcase text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Business Studies</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-laptop text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Information Communication Technology</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-hard-hat text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Building & Civil Engineering</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-bolt text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Electrical</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-car text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Automotive Engineering</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-info rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-utensils text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Food & Beverage</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-seedling text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Agriculture</h3>
              </div>
            </div>
          </section>

          {/* Key Statistics */}
          <section className="mb-16 bg-white py-12 px-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <p className="text-gray-600">Years of Excellence</p>
                <p className="text-sm text-gray-500">(Since 2019)</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <p className="text-gray-600">Graduates</p>
                <p className="text-sm text-gray-500">(Growing Strong)</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">7</div>
                <p className="text-gray-600">Main Departments</p>
                <p className="text-sm text-gray-500">(Multiple Programs)</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">5</div>
                <p className="text-gray-600">Acres Campus</p>
                <p className="text-sm text-gray-500">(Serene Environment)</p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">State of Art Training Equipment</h3>
                <p className="text-gray-600 leading-relaxed">
                  KTVC proudly holds the stature of one of the country's most equipped colleges in terms of modern training equipment and experienced staff.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Dual Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dual system of training where trainees are trained 50% at college and 50% at the industry.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Discipline and Ethics Among Trainees</h3>
                <p className="text-gray-600 leading-relaxed">
                  Equity in education, a well-rounded approach to training, and a focus on discipline and ethics are hallmarks in skill transfer at KTVC.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-primary to-secondary text-white py-12 px-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful graduates who started their careers at Kongoni Technical College
            </p>
            <div className="space-x-4">
              <a 
                href="/programs" 
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Programs
              </a>
              <a 
                href="/contact" 
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}