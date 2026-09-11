import Image from "next/image";

export default function PrincipalNote() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-primary/5 via-gray-50 to-gray-50 overflow-hidden">
      {/* soft color blobs for depth, purely decorative */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* gradient accent bar */}
            <div className="h-2 bg-gradient-to-r from-primary via-primary to-secondary" />

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
                <div className="lg:col-span-1">
                  <div className="h-full rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col items-center justify-center text-center px-6 py-10">
                    <div className="relative w-fit mx-auto">
                      <div className="absolute -inset-3 bg-gradient-to-br from-primary/40 to-secondary/50 rounded-full blur-lg" aria-hidden="true" />
                      <Image
                        src="/images/admin/STEDI BONIFACE.png"
                        alt="Principal Stedi L. Bonface"
                        width={320}
                        height={320}
                        className="relative w-72 h-72 rounded-full object-cover shadow-2xl ring-[6px] ring-white"
                      />
                      <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                        <svg
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-6 h-6"
                          aria-hidden="true"
                        >
                          <path d="M9.5 6C6.5 6 4 8.5 4 12.5 4 16 6.3 18.5 9.3 18.5c1.4 0 2.5-.9 2.5-2.2 0-1.2-.9-2.1-2.1-2.1-.3 0-.5 0-.6.1.3-2.2 1.9-3.9 3.9-4.7l-1-2.4C10.5 7.9 9.8 6.9 9.5 6zm10 0c-3 0-5.5 2.5-5.5 6.5 0 3.5 2.3 6 5.3 6 1.4 0 2.5-.9 2.5-2.2 0-1.2-.9-2.1-2.1-2.1-.3 0-.5 0-.6.1.3-2.2 1.9-3.9 3.9-4.7l-1-2.4C20.5 7.9 19.8 6.9 19.5 6z" />
                        </svg>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="font-semibold text-gray-800 text-xl">
                        Stedi L. Bonface
                      </p>
                      <p className="text-primary font-medium text-sm mt-1"><b>
                        Principal, Kongoni Technical &amp; Vocational College</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 flex items-center">
                  <div className="text-center lg:text-left w-full">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                      <span className="w-8 h-1 rounded-full bg-primary" aria-hidden="true" />
                      <h2 className="text-3xl font-bold text-gray-800">
                        Principal&apos;s Message
                      </h2>
                    </div>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl pl-6 pr-4 py-5 space-y-4 text-lg leading-relaxed text-gray-600 text-left">
                      <p>
                        Stepping into Kongoni Technical and Vocational
                        College, I see a community built on resilience,
                        creativity, and a shared vision for excellence. It is
                        a privilege to join hands with you as we chart the
                        next chapter of growth and innovation.
                      </p>
                      <p>
                        At Kongoni, we do more than train, we inspire. Every
                        workshop, every classroom, and every project is a
                        space where ideas take shape, skills are sharpened,
                        and futures are defined. Our mission is to nurture
                        professionals who are not only competent in their
                        fields but also courageous enough to lead change in
                        society.
                      </p>
                      <p>
                        As Principal, I am committed to strengthening our
                        culture of integrity, teamwork, and continuous
                        learning. Together, we will embrace emerging
                        technologies, expand industry collaborations, and
                        create opportunities that empower our trainees to
                        thrive in a rapidly evolving world.
                      </p>
                      <p>
                        Let us move forward with confidence, united by
                        purpose, and driven by the belief that Kongoni TVC is
                        not just a college, it is a launchpad for dreams,
                        innovation, and lifelong success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}