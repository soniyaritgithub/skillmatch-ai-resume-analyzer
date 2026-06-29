import { motion } from "framer-motion";

import {
  ShieldCheck,
  FileText,
  AlertTriangle,
  Layout,
  Target,
  Scale,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "ATS Essentials",
    desc: "Checks ATS compatibility and parsing rate.",
  },
  {
    icon: FileText,
    title: "Content Quality",
    desc: "Analyzes grammar, readability and impact.",
  },
  {
    icon: AlertTriangle,
    title: "Recruiter Red Flags",
    desc: "Detects issues recruiters dislike.",
  },
  {
    icon: Layout,
    title: "Resume Sections",
    desc: "Validates resume structure and formatting.",
  },
  {
    icon: Target,
    title: "Job Tailoring",
    desc: "Measures alignment with job descriptions.",
  },
  {
    icon: Scale,
    title: "Bias & Discrimination",
    desc: "Flags risky language and bias indicators.",
  },
  {
    icon: TrendingUp,
    title: "Seniority & Impact",
    desc: "Evaluates achievements and career growth.",
  },
];

export default function ATSFeatures() {
  return (
    <section className="bg-[#0F172A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center mb-16">
          <span
            className="
              bg-emerald-500/20
              text-emerald-400
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            AI FEATURES
          </span>

          <h2
            className="
              mt-6
              text-white
              font-bold
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            AI Resume Checker Features
          </h2>

          <p
            className="
              mt-4
              text-slate-400
              text-sm
              sm:text-base
              md:text-lg
              max-w-2xl
              mx-auto
            "
          >
            Advanced ATS analysis, recruiter insights and
            AI-powered recommendations.
          </p>
        </div>

        {/* Cards Grid */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-6
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-3xl
                  p-6
                  transition-all
                  duration-300
                  hover:border-emerald-500
                  hover:shadow-xl
                "
              >
                {/* Icon */}

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-emerald-500/20
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon className="text-emerald-400" />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-5
                    text-white
                    font-semibold
                    text-lg
                    md:text-xl
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-3
                    text-slate-400
                    text-sm
                    md:text-base
                    leading-relaxed
                  "
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}