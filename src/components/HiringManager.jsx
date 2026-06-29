import { motion } from "framer-motion";

import {
  ShieldCheck,
  AlertTriangle,
  Users,
  CheckCircle,
} from "lucide-react";

export default function HiringManager() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center mb-16">
          <span
            className="
              bg-blue-100
              text-blue-700
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            HIRING MANAGER CHECK
          </span>

          <h2
            className="
              mt-6
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-gray-900
            "
          >
            How Hiring Managers See Your Resume
          </h2>

          <p
            className="
              mt-4
              text-sm
              sm:text-base
              md:text-lg
              text-gray-600
              max-w-3xl
              mx-auto
            "
          >
            Discover interview risks, credibility signals
            and leadership impact before recruiters do.
          </p>
        </div>

        {/* Main Grid */}

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-10
            lg:gap-16
            items-stretch
          "
        >
          {/* Left Analysis Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-slate-900
              rounded-3xl
              p-5
              sm:p-6
              md:p-8
              text-white
            "
          >
            {/* Interview Risks */}

            <div className="flex gap-4">
              <AlertTriangle
                className="
                  text-yellow-400
                  flex-shrink-0
                "
              />

              <div>
                <h3
                  className="
                    text-lg
                    md:text-xl
                    font-semibold
                  "
                >
                  Interview Risks
                </h3>

                <p
                  className="
                    mt-2
                    text-slate-400
                    text-sm
                    md:text-base
                  "
                >
                  Missing measurable achievements may reduce
                  recruiter confidence.
                </p>
              </div>
            </div>

            {/* Resume Credibility */}

            <div className="mt-8 flex gap-4">
              <ShieldCheck
                className="
                  text-emerald-400
                  flex-shrink-0
                "
              />

              <div>
                <h3
                  className="
                    text-lg
                    md:text-xl
                    font-semibold
                  "
                >
                  Resume Credibility
                </h3>

                <p
                  className="
                    mt-2
                    text-slate-400
                    text-sm
                    md:text-base
                  "
                >
                  Consistent skills and project descriptions
                  improve credibility.
                </p>
              </div>
            </div>

            {/* Leadership Signals */}

            <div className="mt-8 flex gap-4">
              <Users
                className="
                  text-blue-400
                  flex-shrink-0
                "
              />

              <div>
                <h3
                  className="
                    text-lg
                    md:text-xl
                    font-semibold
                  "
                >
                  Leadership Signals
                </h3>

                <p
                  className="
                    mt-2
                    text-slate-400
                    text-sm
                    md:text-base
                  "
                >
                  Showcase initiative, ownership and project impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Dashboard */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-white
              rounded-3xl
              p-5
              sm:p-6
              md:p-8
              border
              shadow-xl
            "
          >
            {/* Analytics Cards */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
              "
            >
              <div className="bg-slate-50 p-5 rounded-2xl">
                <CheckCircle className="text-emerald-500" />

                <h4 className="mt-3 font-semibold">
                  Trust Score
                </h4>

                <p className="mt-2 text-gray-500">
                  91%
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <CheckCircle className="text-blue-500" />

                <h4 className="mt-3 font-semibold">
                  Leadership
                </h4>

                <p className="mt-2 text-gray-500">
                  Strong
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <CheckCircle className="text-purple-500" />

                <h4 className="mt-3 font-semibold">
                  Impact Score
                </h4>

                <p className="mt-2 text-gray-500">
                  88%
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <CheckCircle className="text-yellow-500" />

                <h4 className="mt-3 font-semibold">
                  Interview Ready
                </h4>

                <p className="mt-2 text-gray-500">
                  Yes
                </p>
              </div>
            </div>

            {/* Recommendations */}

            <div
              className="
                mt-8
                bg-slate-50
                rounded-2xl
                p-5
                w-full
overflow-hidden
              "
            >
              <h3 className="text-lg
sm:text-xl
font-semibold
leading-snug
break-words">
                Hiring Manager Recommendations
              </h3>

              <ul
                className="
                  mt-4
                  md:text-base
                  space-y-2
text-sm
sm:text-base
leading-7
break-words
                "
              >
                <li>✓ Add quantified achievements</li>
                <li>✓ Highlight leadership examples</li>
                <li>✓ Improve project impact statements</li>
                <li>✓ Add business outcomes where possible</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}