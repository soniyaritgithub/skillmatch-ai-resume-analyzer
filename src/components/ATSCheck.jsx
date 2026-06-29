import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  User,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ATSCheck() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center mb-16 max-w-full
px-4
sm:px-6">
          <span
            className="
              bg-emerald-100
              text-emerald-700
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            ATS ANALYSIS
          </span>

          <h2
            className="
              mt-6
              md:text-5xl
              text-gray-900
              text-2xl
sm:text-3xl
lg:text-5xl
font-bold
leading-tight
break-words
            "
          >
            ATS Understanding Check
          </h2>

          <p
            className="
              mt-4
              text-sm
              sm:text-base
              md:text-lg
              text-gray-600
              max-w-2xl
              mx-auto
            "
          >
            Understand how ATS systems analyze your resume.
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
          "
        >
          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-white
              border
              rounded-3xl
              p-5
              md:p-8
              shadow-lg
            "
          >
            {/* Resume Header */}

            <div className="flex items-center gap-4 w-full
space-y-4
break-words">
              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-emerald-100
                  flex
                  items-center
                  justify-center
                "
              >
                <User className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  John Doe
                </h3>

                <p className="text-gray-500">
                  Cyber Security Analyst
                </p>
              </div>
            </div>

            {/* Contact Info */}

            <div className="mt-4 space-y-3 w-full">
  <div className="flex items-center gap-3">
  <Mail className="w-5 h-5 flex-shrink-0" />

     <span
      className="
        flex-1
        min-w-0
        text-xs
        sm:text-sm
        md:text-base
        break-all
      "
    >
      john@example.com
    </span>
              </div>

               <div className="flex items-center gap-3">
                 <Phone className="w-5 h-5 flex-shrink-0" />
                 <span
      className="
        text-xs
        sm:text-sm
        md:text-base
      "
    >
      +91 9876543210
    </span>
              </div>
            </div>

            {/* Skills */}

            <div className="mt-8">
              <h4 className="font-semibold mb-4">
                Skills
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "Networking",
                  "Cyber Security",
                  "Linux",
                  "SQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      bg-emerald-100
                      text-emerald-700
                      px-3
                      py-2
                      rounded-full
                      text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-slate-900
              rounded-3xl
              p-5
              md:p-8
              text-white
            "
          >
            {/* Analysis Grid */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
              "
            >
              <div
                className="
                  bg-slate-800
                  p-5
                  rounded-2xl
                "
              >
                <CheckCircle className="text-emerald-400" />

                <h4 className="mt-3 font-semibold">
                  Keywords Match
                </h4>

                <p className="text-slate-400 mt-2">
                  92% Matched
                </p>
              </div>

              <div
                className="
                  bg-slate-800
                  p-5
                  rounded-2xl
                "
              >
                <CheckCircle className="text-emerald-400" />

                <h4 className="mt-3 font-semibold">
                  Skills Match
                </h4>

                <p className="text-slate-400 mt-2">
                  88% Matched
                </p>
              </div>

              <div
                className="
                  bg-slate-800
                  p-5
                  rounded-2xl
                "
              >
                <CheckCircle className="text-emerald-400" />

                <h4 className="mt-3 font-semibold">
                  Contact Validation
                </h4>

                <p className="text-slate-400 mt-2">
                  Valid
                </p>
              </div>

              <div
                className="
                  bg-slate-800
                  p-5
                  rounded-2xl
                "
              >
                <CheckCircle className="text-emerald-400" />

                <h4 className="mt-3 font-semibold">
                  ATS Compatibility
                </h4>

                <p className="text-slate-400 mt-2">
                  Excellent
                </p>
              </div>
            </div>

            {/* AI Suggestions */}

            <div
              className="
                mt-8
                bg-slate-800
                rounded-2xl
                p-5
              "
            >
              <h4 className="font-semibold">
                AI Suggestions
              </h4>

              <ul className="mt-4 space-y-3">
                <li>
                  <AlertCircle
                    className="
                      inline
                      mr-2
                      text-yellow-400
                    "
                    size={16}
                  />
                  Add more cybersecurity keywords
                </li>

                <li>
                  <AlertCircle
                    className="
                      inline
                      mr-2
                      text-yellow-400
                    "
                    size={16}
                  />
                  Improve project descriptions
                </li>

                <li>
                  <AlertCircle
                    className="
                      inline
                      mr-2
                      text-yellow-400
                    "
                    size={16}
                  />
                  Add measurable achievements
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}