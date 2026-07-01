import Image from "next/image";

export default function PrincipalNote() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="relative">
                  <Image
                    src="/images/principal.png"
                    alt="Principal Ms. Judith Akaranga"
                    width={256}
                    height={256}
                    className="w-64 h-64 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <i className="fas fa-quote-right text-white text-xl"></i>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Principal&apos;s Message
                  </h2>
                  <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
                    <p>
                      &quot;Welcome to Kongoni Technical and Vocational College,
                      where we transform aspirations into achievements. For over
                      6 years our institution has been at the forefront of
                      technical education, preparing students for successful
                      careers in today&apos;s dynamic economy.&quot;
                    </p>
                    <p>
                      &quot;We believe in hands-on learning, industry relevance,
                      and personal development. Our graduates don&apos;t just
                      find jobs – they become leaders and innovators in their
                      fields. Join us and be part of a community that values
                      excellence, integrity, and continuous growth.&quot;
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="font-semibold text-gray-800 text-xl">
                      Ms. Judith Akaranga
                    </p>
                    <p className="text-primary font-medium">Principal</p>
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
