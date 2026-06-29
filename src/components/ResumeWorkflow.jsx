import { motion } from "framer-motion";

import {
  FileText,
  FilePlus,
  Briefcase,
  MessageSquare,
  Search,
  ArrowRight,
} from "lucide-react";

export default function ResumeWorkflow() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-20">

          <span
            className="
            inline-block
            bg-emerald-500/20
            text-emerald-400
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
            "
          >
            RESUME WORKFLOW
          </span>

          <h2
            className="
            mt-6
            text-white
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            "
          >
            Build Better Resumes Faster
          </h2>

          <p
            className="
            mt-5
            text-slate-400
            text-sm
            sm:text-base
            md:text-lg
            max-w-3xl
            mx-auto
            "
          >
            Everything you need to create, optimize and
            track your resume in one place.
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
          items-center
          "
        >

          {/* Left Promotion Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
            bg-slate-900
            rounded-3xl
            p-6
            sm:p-8
            lg:p-10
            border
            border-slate-800
            "
          >

            <h3
              className="
              text-white
              text-2xl
              md:text-3xl
              font-bold
              "
            >
              Use The Best Resume Builder
            </h3>

            <p
              className="
              mt-5
              text-slate-400
              text-sm
              sm:text-base
              md:text-lg
              "
            >
              Create ATS-friendly resumes with modern templates,
              AI suggestions and recruiter-approved layouts.
            </p>

            {/* CTA Buttons */}

            <div
              className="
              mt-8
              flex
              flex-col
              sm:flex-row
              gap-4
              "
            >

              <button
                className="
                bg-emerald-500
                hover:bg-emerald-600
                text-white
                px-6
                py-3
                rounded-xl
                font-medium
                transition-all
                "
              >
                Start Building
              </button>

              <button
                className="
                border
                border-slate-700
                text-white
                px-6
                py-3
                rounded-xl
                font-medium
                "
              >
                View Templates
              </button>

            </div>

           {/* Dashboard Preview */}

<div
  className="
    mt-10
    bg-slate-800
    rounded-2xl
    p-5
    w-full
    max-w-full
    overflow-hidden
  "
>
  {/* Resume Score Header */}

  <div
    className="
      w-full
      rounded-2xl
      flex
      items-center
      justify-between
      gap-2
      flex-wrap
    "
  >
    <h3
      className="
        text-lg
        sm:text-xl
        font-semibold
        text-slate-300
        break-words
      "
    >
      Resume Score
    </h3>

    <span
      className="
        text-2xl
        sm:text-3xl
        font-bold
        text-emerald-400
        whitespace-nowrap
      "
    >
      {/* Future Dynamic */}
      {/* {analysis?.atsScore ?? 0}% */}

      92%
    </span>
  </div>

  {/* Progress Bar */}

  <div
    className="
      mt-4
      h-3
      bg-slate-700
      rounded-full
      overflow-hidden
    "
  >
    <div
      className="
        h-full
        bg-emerald-500
        rounded-full
        transition-all
        duration-500
      "
      style={{
        width: "92%",
        // Future Dynamic:
        // width: `${analysis?.atsScore ?? 0}%`,
      }}
    />
  </div>
</div>

          </motion.div>

          {/* Right Workflow Cards */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
              "
            >

              {/* Resume Builder */}

              <div
                className="
                bg-slate-900
                p-5
                rounded-2xl
                border
                border-slate-800
                hover:border-emerald-500
                transition-all
                "
              >
                <FileText className="text-emerald-400" />

                <h4 className="mt-4 text-white font-semibold">
                  Resume Builder
                </h4>

                <p className="mt-2 text-slate-400 text-sm">
                  Create professional resumes quickly.
                </p>
              </div>

              {/* Cover Letter */}

              <div
                className="
                bg-slate-900
                p-5
                rounded-2xl
                border
                border-slate-800
                hover:border-emerald-500
                transition-all
                "
              >
                <FilePlus className="text-emerald-400" />

                <h4 className="mt-4 text-white font-semibold">
                  Cover Letter
                </h4>

                <p className="mt-2 text-slate-400 text-sm">
                  Generate ATS-friendly cover letters.
                </p>
              </div>

              {/* Job Tracker */}

              <div
                className="
                bg-slate-900
                p-5
                rounded-2xl
                border
                border-slate-800
                hover:border-emerald-500
                transition-all
                "
              >
                <Briefcase className="text-emerald-400" />

                <h4 className="mt-4 text-white font-semibold">
                  Job Tracker
                </h4>

                <p className="mt-2 text-slate-400 text-sm">
                  Manage and track applications easily.
                </p>
              </div>

              {/* Interview Help */}

              <div
                className="
                bg-slate-900
                p-5
                rounded-2xl
                border
                border-slate-800
                hover:border-emerald-500
                transition-all
                "
              >
                <MessageSquare className="text-emerald-400" />

                <h4 className="mt-4 text-white font-semibold">
                  Interview Help
                </h4>

                <p className="mt-2 text-slate-400 text-sm">
                  Practice interview questions with AI.
                </p>
              </div>

              {/* AI Job Search */}

              <div
                className="
                bg-slate-900
                p-5
                rounded-2xl
                border
                border-slate-800
                hover:border-emerald-500
                transition-all
                "
              >
                <Search className="text-emerald-400" />

                <h4 className="mt-4 text-white font-semibold">
                  AI Job Search
                </h4>

                <p className="mt-2 text-slate-400 text-sm">
                  Find relevant jobs instantly.
                </p>
              </div>

              {/* Import Resume */}

              <div
                className="
                bg-slate-900
                p-5
                rounded-2xl
                border
                border-slate-800
                hover:border-emerald-500
                transition-all
                "
              >
                <ArrowRight className="text-emerald-400" />

                <h4 className="mt-4 text-white font-semibold">
                  Import Resume
                </h4>

                <p className="mt-2 text-slate-400 text-sm">
                  Upload and improve your existing resume.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}