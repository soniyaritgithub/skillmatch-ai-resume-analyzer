import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

import {
  Target,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react";



export default function TailorResume() {
  const [jobDescription, setJobDescription] = useState("");

  const [analysis, setAnalysis] = useState({
  matchScore: 0,
  missingKeywords: [],
});

const demoData = [
  {
    matchScore: 92,
    missingKeywords: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "AWS",
      "Redis",
    ],
  },
  {
    matchScore: 88,
    missingKeywords: [
      "Spring Boot",
      "REST API",
      "Microservices",
      "JUnit",
      "Kafka",
    ],
  },
  {
    matchScore: 84,
    missingKeywords: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JWT",
    ],
  },
  {
    matchScore: 79,
    missingKeywords: [
      "Python",
      "Django",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    matchScore: 95,
    missingKeywords: [
      "Splunk",
      "SIEM",
      "Incident Response",
      "Threat Hunting",
      "SOC",
    ],
  },
];

const [isAnalyzing, setIsAnalyzing] = useState(false);

const [progress, setProgress] = useState(0);

const [analysisComplete, setAnalysisComplete] = useState(false);

const timerRef = useRef(null);

const handleJobDescription = (e) => {

  const value = e.target.value;

  setJobDescription(value);

  if (timerRef.current) {
    clearInterval(timerRef.current);
  }

  if (!value.trim()) {
    setIsAnalyzing(false);
    setProgress(0);
    setAnalysisComplete(false);
    return;
  }

  setIsAnalyzing(true);
  setAnalysisComplete(false);
  setProgress(0);

  let percent = 0;

  timerRef.current = setInterval(() => {

    percent += 5;

    setProgress(percent);

    if (percent >= 100) {

      clearInterval(timerRef.current);

setIsAnalyzing(false);

setTimeout(() => {
  const randomData =
    demoData[
      Math.floor(Math.random() * demoData.length)
    ];

setTimeout(() => {

  setAnalysis(randomData);

  setAnalysisComplete(true);

},400);
}, 400);

    }

  }, 80);

};

  return (
    <section
  className="
  bg-slate-50
  py-20
  overflow-hidden
  w-full
  "
>

      <div
className="
max-w-7xl
mx-auto
w-full
px-4
sm:px-6
lg:px-8
overflow-hidden
"
>
        {/* Heading */}

        <div className="text-center mb-16">

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
            JOB MATCH
          </span>

          <h2
            className="
            mt-6
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            text-gray-900
            "
          >
            Tailor Your Resume
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
            Compare your resume with a job description
            and improve ATS performance.
          </p>

        </div>

        {/* Main Grid */}

        <div
          className="
          grid
grid-cols-1
lg:grid-cols-2
gap-8
xl:gap-12
items-start
w-full
          "
        >

          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
            bg-white
            rounded-3xl
            p-5
            md:p-8
            shadow-lg
            w-full
overflow-hidden
min-w-0
            "
          >

            <h3 className="font-bold text-xl">
              Job Description
            </h3>

          <textarea

value={jobDescription}

onChange={handleJobDescription}

placeholder="Paste Job Description here..."

className="

w-full

max-w-full

min-h-[220px]

rounded-2xl

border

border-gray-200

p-5

resize-none

outline-none

focus:ring-2

focus:ring-emerald-500

transition-all

duration-300

text-sm

sm:text-base

"

></textarea>

<AnimatePresence>

{jobDescription && (

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:20
}}

transition={{
duration:.35
}}

className="
mt-6
w-full
overflow-hidden
rounded-2xl
bg-slate-900
text-white
p-5
"

>

<h3

className="

text-lg

font-semibold

"

>

Live JD Analysis

</h3>
{isAnalyzing && (

<div className="mt-5">

<div

className="

flex

items-center

gap-3

"

>

<div

className="

flex

gap-1

"

>

<motion.span

animate={{

y:[0,-4,0]

}}

transition={{

repeat:Infinity,

duration:.5

}}

className="

w-2

h-2

rounded-full

bg-emerald-400

"

/>

<motion.span

animate={{

y:[0,-4,0]

}}

transition={{

repeat:Infinity,

duration:.5,

delay:.2

}}

className="

w-2

h-2

rounded-full

bg-emerald-400

"

/>

<motion.span

animate={{

y:[0,-4,0]

}}

transition={{

repeat:Infinity,

duration:.5,

delay:.4

}}

className="

w-2

h-2

rounded-full

bg-emerald-400

"

/>

</div>

<span>

Analyzing Job Description...

</span>

</div>

</div>

)}

<div className="mt-5">

<div

className="

h-3

rounded-full

bg-slate-700

overflow-hidden

"

>

<motion.div
style={{
width:`${progress}%`
}}

transition={{

duration:.2

}}

className="

h-full

bg-emerald-500

"

/>

</div>

<p

className="

mt-2

text-right

"

>

{progress}%

</p>

</div>
<AnimatePresence mode="wait">

{analysisComplete && (

<motion.div

initial={{

scale:.95,

opacity:0

}}

animate={{

scale:1,

opacity:1

}}

transition={{

duration:.35

}}

className="

mt-6

space-y-3

"

>

<div>

✅ Skills Extracted

</div>

<div>

✅ Keywords Detected

</div>

<div>

✅ ATS Match Calculated

</div>

</motion.div>

)}

</AnimatePresence>
</motion.div>

)}

</AnimatePresence>

            {/* Match Score */}

            <motion.div
  layout="position"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.35 }}
  className="
    mt-8
    rounded-2xl
    bg-emerald-50
    p-5
    shadow-sm
  "
>
  <div className="flex items-center justify-between">
    <h3 className="font-semibold text-base sm:text-lg">
      Match Score
    </h3>

    <motion.span
      key={analysis.matchScore}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{
  type: "spring",
  stiffness: 180,
  damping: 18,
}}
      className="
        text-xl
        sm:text-2xl
        font-bold
        text-emerald-600
      "
    >
      {analysis.matchScore}%
    </motion.span>
  </div>

  <div className="mt-4 h-3 rounded-full bg-emerald-100 overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{
        width: `${analysis.matchScore}%`,
      }}
      transition={{
        duration: 1,
      }}
      className="h-full bg-emerald-500"
    />
  </div>
</motion.div>

            {/* Missing Keywords */}

            <motion.div
  layout="position"
  AnimatePresence mode="wait"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  className="mt-8"
>
  <h3 className="font-semibold text-lg">
    Missing Keywords
  </h3>

  <div
className="
mt-4
flex
flex-wrap
items-center
gap-3
overflow-hidden
"
>
    {analysis.missingKeywords.map(
      (skill, index) => (
        <motion.span
          key={skill}
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: index * 0.08,
          }}
         whileHover={{
scale:1.03
}}
          className="
            rounded-full
            bg-red-100
            px-4
            py-2
            text-sm
            font-medium
            text-red-600
            whitespace-nowrap
          "
        >
          {skill}
        </motion.span>
      )
    )}
  </div>
</motion.div>
          </motion.div>

          {/* Right Dashboard */}

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
w-full
min-w-0
overflow-hidden
"
          >

            {/* Dashboard Cards */}

            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4 
              "
            >

              <div className="bg-slate-800 p-5 rounded-2xl">

                <TrendingUp className="text-emerald-400" />

                <h4 className="mt-3 font-semibold">
                  ATS Score
                </h4>

                <p className="text-slate-400 mt-2">
                  84%
                </p>

              </div>

              <div className="bg-slate-800 p-5 rounded-2xl">

                <Target className="text-blue-400" />

                <h4 className="mt-3 font-semibold">
                  Job Match
                </h4>

                <p className="text-slate-400 mt-2">
                  87%
                </p>

              </div>

              <div className="bg-slate-800 p-5 rounded-2xl">

                <CheckCircle className="text-emerald-400" />

                <h4 className="mt-3 font-semibold">
                  Optimized
                </h4>

                <p className="text-slate-400 mt-2">
                  Yes
                </p>

              </div>

              <div className="bg-slate-800 p-5 rounded-2xl">

                <AlertCircle className="text-yellow-400" />

                <h4 className="mt-3 font-semibold">
                  Missing Skills
                </h4>

                <p className="text-slate-400 mt-2">
                  4 Found
                </p>

              </div>

            </div>

            {/* AI Recommendations */}

            <div
              className="
              mt-8
              bg-slate-800
              rounded-2xl
p-5
sm:p-6
w-full
overflow-hidden
              "
            >

              <h3
className="
text-lg
sm:text-xl
font-semibold
leading-snug
break-words
"
>
AI Recommendation
</h3>

              <ul className="mt-4 space-y-3
break-words
text-sm
sm:text-base
leading-7">

                <li>
                  ✓ Add SIEM experience
                </li>

                <li>
                  ✓ Mention Splunk projects
                </li>

                <li>
                  ✓ Include Incident Response skills
                </li>

                <li>
                  ✓ Add measurable achievements
                </li>

              </ul>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}