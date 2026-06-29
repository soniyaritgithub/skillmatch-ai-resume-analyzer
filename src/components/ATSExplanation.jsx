import { CheckCircle } from "lucide-react";

export default function ATSExplanation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            md:gap-12
            lg:gap-16
            items-center
          "
        >
          {/* LEFT SIDE */}

          <div className="w-full overflow-hidden">
            <img
              src="/images/ats-illustration.png"
              alt="ATS Illustration"
              className="
                w-full
                h-[250px]
                sm:h-[300px]
                md:h-[400px]
                lg:h-[500px]
                object-cover
                rounded-3xl
                shadow-xl
              "
            />
          </div>

          {/* RIGHT SIDE */}

          <div>
            <span
              className="
                inline-block
                bg-blue-100
                text-blue-700
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
              "
            >
              ATS SCORE
            </span>

            <h2
              className="
                mt-6
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
                font-bold
                text-gray-900
                leading-tight
              "
            >
              How ATS Score Works
            </h2>

            <p
              className="
                mt-5
                text-gray-600
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                leading-relaxed
              "
            >
              Our AI-powered ATS checker scans your resume
              exactly like modern Applicant Tracking Systems.
            </p>

            {/* Feature 1 */}

            <div className="mt-8 flex gap-4">
              <CheckCircle
                size={30}
                className="text-emerald-500 flex-shrink-0"
              />

              <div>
                <h3 className="font-semibold text-lg md:text-xl">
                  Content Interpretation
                </h3>

                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Analyzes keywords, experience and formatting to
                  determine ATS compatibility.
                </p>
              </div>
            </div>

            {/* Feature 2 */}

            <div className="mt-6 flex gap-4">
              <CheckCircle
                size={30}
                className="text-emerald-500 flex-shrink-0"
              />

              <div>
                <h3 className="font-semibold text-lg md:text-xl">
                  Content Quality
                </h3>

                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Evaluates grammar, readability, action verbs and
                  professional impact.
                </p>
              </div>
            </div>

            {/* Feature 3 */}

            <div className="mt-6 flex gap-4">
              <CheckCircle
                size={30}
                className="text-emerald-500 flex-shrink-0"
              />

              <div>
                <h3 className="font-semibold text-lg md:text-xl">
                  Recruiter Visibility
                </h3>

                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Predicts how recruiters will view and rank your
                  resume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}