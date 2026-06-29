"use client";


import {
Upload,
FileText,
Brain,
Bot,
ShieldCheck,
Cloud,
Sparkles
} from "lucide-react";
import api from "../services/api";
import LoadingSpinner from "./LoadingSpinner";
import toast from "react-hot-toast";
import { downloadReport } from "../utils/pdf/downloadReport";
import { motion } from "framer-motion";
import { useState, useRef } from "react";



export default function Hero() {
  const [file, setFile] = useState(null);
  const [mouse,setMouse]=useState({

x:0,

y:0

});
  const [loading, setLoading] = useState(false);

const [analysis, setAnalysis] = useState(null);

const [error, setError] = useState("");

const reportRef = useRef(null);

const [dragActive, setDragActive] = useState(false);

const allowedTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const validateFile = (selectedFile) => {
  if (!allowedTypes.includes(selectedFile.type)) {
    setError("Only PDF, DOC and DOCX files are allowed.");
    return false;
  }

  const maxSize = 5 * 1024 * 1024;

  if (selectedFile.size > maxSize) {
    setError("Maximum file size is 5 MB.");
    return false;
  }

  return true;
};


const handleAnalyze = async () => {
  if (!file) {
    toast.error("Please select a resume.");
    return;
  }

  try {
    setLoading(true);
    setError("");
    setAnalysis(null);

    const formData = new FormData();
    formData.append("resume", file);

    const { data } = await api.post(
      "/analyze",
      formData
    );

    if (!data?.success) {
      throw new Error(
        data?.message || "Analysis failed."
      );
    }

    // Future Gemini + Current Default Response
    const analysisData =
      data.analysis ||
      data.data ||
      null;

    if (!analysisData) {
      throw new Error(
        "No analysis received from server."
      );
    }

    setAnalysis(analysisData);

    console.log("ATS Analysis");
    console.log(analysisData);

    toast.success(
      "ATS analysis completed successfully."
    );

    setTimeout(() => {
      reportRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);

  } catch (err) {

    console.error(err);

    let message =
      "Something went wrong.";

    if (err.code === "ECONNABORTED") {
      message =
        "Request timeout. Please try again.";
    }
    else if (err.response?.data?.message) {
      message =
        err.response.data.message;
    }
    else if (err.request) {
      message =
        "Cannot connect to server.";
    }
    else if (err.message) {
      message =
        err.message;
    }

    setError(message);

    toast.error(message);

  } finally {
    setLoading(false);
  }
};

const handleDrag = (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (e.type === "dragenter" || e.type === "dragover") {
    setDragActive(true);
  }

  if (e.type === "dragleave") {
    setDragActive(false);
  }
};

const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();

  setDragActive(false);

  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    const selected = e.dataTransfer.files[0];

    if (!selected) return;

    if (validateFile(selected)) {
      setError("");
      setFile(selected);
      toast.success("Resume uploaded successfully");
    }
  }
};

  return (
    <>
  {loading && <LoadingSpinner />}
    <section

className="
relative
overflow-hidden
pt-10

sm:pt-12

md:pt-16

lg:pt-20
lg:pt-28
bg-gradient-to-br
from-emerald-50
via-white
to-blue-50

"

onMouseMove={(e)=>{

const rect=e.currentTarget.getBoundingClientRect();

setMouse({

x:e.clientX-rect.left,

y:e.clientY-rect.top

});

}}

>
      {/* AI Glow 1 */}

<motion.div
  initial={{ opacity: 0, x: 40 }}

  animate={{
    y: [0, -12, 0],
    opacity: 1,
    x: 0,
  }}

  transition={{
    x: {
      duration: 0.6,
    },

    opacity: {
      duration: 0.6,
    },

    y: {
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
    },
  }}

  viewport={{
    once: true,
  }}
className="
absolute
top-[-180px]
left-[-180px]

w-[320px]
h-[320px]

sm:w-[420px]
sm:h-[420px]

lg:w-[520px]
lg:h-[520px]

rounded-full
bg-emerald-400/20
blur-[140px]
pointer-events-none
z-0
"
/>

{/* AI Glow 2 */}

<motion.div
  initial={{ opacity: 0, x: 40 }}

  animate={{
    y: [0, -12, 0],
    opacity: 1,
    x: 0,
  }}

  transition={{
    x: {
      duration: 0.6,
    },

    opacity: {
      duration: 0.6,
    },

    y: {
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
    },
  }}

  viewport={{
    once: true,
  }}
className="
absolute
bottom-[-150px]
right-[-150px]

w-[300px]
h-[300px]

sm:w-[420px]
sm:h-[420px]

lg:w-[600px]
lg:h-[600px]

rounded-full
bg-cyan-400/20
blur-[150px]
pointer-events-none
z-0
"
/>

<motion.div
animate={{
y:[0,-12,0],
rotate:[0,5,0]
}}

transition={{
repeat:Infinity,
duration:5
}}

className="
absolute
top-32
right-20
z-10
hidden
lg:block
"
>

<Brain
className="
w-10
h-10
text-emerald-500
"
/>

</motion.div>

<motion.div
animate={{
y:[0,-15,0]
}}

transition={{
repeat:Infinity,
duration:6
}}

className="
absolute
bottom-28
left-20
z-10
"
>

<Bot
className="
w-10
h-10
text-cyan-500
"
/>

</motion.div>
<motion.div
animate={{
y:[0,-10,0]
}}

transition={{
repeat:Infinity,
duration:4
}}

className="
absolute
top-60
left-1/2
z-10
"
>

<ShieldCheck
className="
w-10
h-10
text-emerald-400
"
/>

</motion.div>
<motion.div
animate={{
y:[0,-8,0]
}}

transition={{
repeat:Infinity,
duration:7
}}

className="
absolute
top-40
left-10
z-10
hidden
lg:block
"
>

<Cloud
className="
w-10
h-10
text-blue-400
"
/>

</motion.div>
<div
className="
absolute
inset-0
opacity-[0.07]
pointer-events-none
z-0
"
style={{
backgroundImage:`
linear-gradient(#10b98122 1px,transparent 1px),
linear-gradient(90deg,#10b98122 1px,transparent 1px)
`,
backgroundSize:"42px 42px"
}}
/>

<div
  className="
    absolute
    inset-0
    pointer-events-none
    z-0
  "
  style={{
    background: `
      radial-gradient(
        450px circle at
        ${mouse.x}px
        ${mouse.y}px,
        rgba(16,185,129,.18),
        transparent 70%
      )
    `,
  }}
/>

      <div
className="
relative
z-10
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
"
>
      <div
className="
min-h-[calc(100vh-72px)]

flex
flex-col
lg:flex-row

items-center
justify-between

gap-6
md:gap-8
lg:gap-12

pt-2

sm:pt-4

lg:pt-8

pb-8
md:pb-10
lg:pb-12
"
>
          {/* LEFT SIDE */}

          <div
className="
w-full
lg:w-1/2

lg:-mt-10
xl:-mt-14
"
>
            <span
              className="
                inline-block
                bg-emerald-100
                text-emerald-700
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
              "
            >
              <div
className="
inline-flex
items-center
justify-center
rounded-full
p-3
bg-emerald-100/50
backdrop-blur-xl
"
>

<div
className="
flex
items-center
justify-center
gap-2
rounded-full
bg-white
px-6
py-3
shadow-md
"
>

<Sparkles className="w-5 h-5 text-emerald-600" />

<span>AI Resume Checker</span>

</div>

</div>
            </span>

           <motion.h1
           initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}
              className="
                mt-6
                font-bold
                text-gray-900
                leading-tight
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
                
              "
            >
              Match Your Resume
              <br />
              With AI
           </motion.h1>

           <motion.p

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:.2,
duration:.8
}}
              className="
                mt-6
                text-gray-600
                leading-relaxed
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
              "
            >
              Upload your resume and receive an AI-powered ATS score,
skill matching, recruiter insights, keyword analysis,
and personalized improvement suggestions.
           </motion.p>

            {/* Upload Box */}

<motion.div

initial={{
opacity:0,
scale:.96
}}

animate={{
opacity:1,
scale:1
}}

transition={{
delay:.3,
duration:.5
}}

id="upload"
  className="
    mt-10
    bg-white/75

backdrop-blur-xl
border-white/40

shadow-xl
    rounded-3xl
    border
    p-4
    sm:p-6
    md:p-8
    w-full
    max-w-md
    mx-auto
    scroll-mt-24
    relative
overflow-hidden
bg-gradient-to-br
from-white
via-emerald-50
to-cyan-50
  "
>
  <div
onDragEnter={handleDrag}
onDragOver={handleDrag}
onDragLeave={handleDrag}
onDrop={handleDrop}
className={`
border-2
border-dashed
rounded-3xl
p-4
sm:p-6
md:p-8
w-full
overflow-hidden
text-center
transition-all

${
dragActive
? "border-emerald-600 bg-emerald-50"
: "border-emerald-300"
}
`}
>
    <Upload
      className="
        mx-auto
        text-emerald-500
        w-10 h-10
        sm:w-12 sm:h-12
        md:w-14 md:h-14
      "
    />

    <h3
      className="
        mt-4
        text-base
        sm:text-lg
        md:text-xl
        font-semibold
      "
    >
      Upload Resume
    </h3>

    <p
      className="
        text-gray-500
        mt-2
        text-sm
        sm:text-base
      "
    >
      PDF, DOC, DOCX
    </p>

    <input
      type="file"
      id="resumeUpload"
      accept=".pdf,.doc,.docx"
      className="hidden"
     onChange={(e) => {
  const selected = e.target.files?.[0];

  if (!selected) return;

  if (validateFile(selected)) {
    setError("");
    setFile(selected);
    toast.success("Resume uploaded successfully");
  }
}}
    />

    <label
      htmlFor="resumeUpload"
      className="
        mt-6
        w-full
        block
        py-3
        text-center
        text-sm
        sm:text-base
        font-semibold
        rounded-xl
        bg-gradient-to-r

from-emerald-500

to-cyan-500

hover:scale-105

hover:shadow-xl

transition-all

duration-300
        text-white
        cursor-pointer
        hover:bg-emerald-600
      
      "
    >
      Select Resume
    </label>

    {file && (
      <p
        className="
          mt-4
          text-sm
          sm:text-base
          text-emerald-600
          break-all
        "
      >
        {file.name}
      </p>
    )}

    {/* Analyze Button */}

    <button
      onClick={handleAnalyze}
      disabled={loading}
      className="
        mt-5
        w-full
        rounded-xl
        bg-blue-600
        py-3
        text-white
        font-semibold
        hover:bg-blue-700
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
    >
      {loading ? "Analyzing..." : "Analyze Resume"}
    </button>

    {/* Loading Spinner */}

    {loading && (
      <div className="mt-4 flex justify-center">
        <LoadingSpinner />
      </div>
    )}

    {/* Error Message */}

    {error && (
      <p className="mt-4 text-center text-sm text-red-500">
        {error}
      </p>
    )}
  </div>
</motion.div>
          </div>

          {/* RIGHT SIDE */}

          <div ref={reportRef} className="w-full lg:w-1/2 flex justify-center">
            <div
              className="
                bg-white/80
backdrop-blur-xl
border
border-white/40
rounded-3xl

shadow-[0_40px_80px_rgba(16,185,129,.12)]

p-4
sm:p-6
lg:p-8
              "
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
  <h3 className="font-bold text-xl">
    ATS Score
  </h3>

  <div className="
flex
items-center
justify-between
gap-2
flex-wrap
">
   <button
  onClick={() => downloadReport(analysis, file)}
  disabled={!analysis}
  className="
    bg-blue-600
    hover:bg-blue-700
    text-white
    font-semibold
    text-sm
    px-5
    py-2.5
    rounded-xl
    shadow-md
    transition-all
    duration-300
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
>
  Download Report
</button>

    <span className="text-emerald-500 text-lg
  sm:text-xl
  md:text-2xl
  lg:text-3xl
  xl:text-4xl
  font-bold
  break-words
  leading-none">
      {analysis ? `${analysis.atsScore}%` : "92%"}
    </span>
  </div>
</div>

              {/* Progress */}

<div className="mt-4 h-4 bg-gray-200 rounded-full">
  <div
    style={{
      width: analysis
        ? `${analysis.atsScore}%`
        : "92%",
    }}
    className="
h-4
bg-emerald-500
rounded-full
transition-all
duration-700
ease-in-out
"
  />
</div>

              {/* Cards */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <motion.div

whileHover={{
y:-8,
scale:1.03
}}

transition={{
duration:.3
}}

className="
bg-white/70

backdrop-blur-xl

rounded-2xl

border

border-white/50

shadow-lg

p-4
"
>
                  <FileText />

                  <h4 className="font-semibold mt-2">
                    {analysis ? `${analysis.keywords}%` : "Excellent"}
                  </h4>

                  <p className="text-green-600">
                    Excellent
                  </p>
               </motion.div>

                <motion.div

whileHover={{
y:-8,
scale:1.03
}}

transition={{
duration:.3
}}

className="
bg-white/70

backdrop-blur-xl

rounded-2xl

border

border-white/50

shadow-lg

p-4
"
>
                  <FileText />

                  <h4 className="font-semibold mt-2">
                    {analysis ? `${analysis.grammar}%` : "Good"}
                  </h4>

                  <p className="text-green-600">
                    {
analysis
? `${analysis.grammar}%`
: "Good"
}
                  </p>
                </motion.div>

                <motion.div

whileHover={{
y:-8,
scale:1.03
}}

transition={{
duration:.3
}}

className="
bg-white/70

backdrop-blur-xl

rounded-2xl

border

border-white/50

shadow-lg

p-4
"
>
                  <FileText />

                  <h4 className="font-semibold mt-2">
                    Skills Match
                  </h4>

                  <p className="text-green-600">
                    {analysis ? `${analysis.skills}%` : "88%"}
                  </p>
                 </motion.div>

                <motion.div

whileHover={{
y:-8,
scale:1.03
}}

transition={{
duration:.3
}}

className="
bg-white/70

backdrop-blur-xl

rounded-2xl

border

border-white/50

shadow-lg

p-4
"
>
                  <FileText />

                  <h4 className="font-semibold mt-2">
                    ATS Ready
                  </h4>

                  <p className="text-green-600">
                    {analysis ? "Yes" : "Yes"}
                  </p>
               </motion.div>
              </div>

             {/* Missing Keywords */}

{analysis && (
  <div className="mt-8">
    <h3 className="font-bold text-lg text-gray-800">
      Missing Keywords
    </h3>

    <div className="mt-4 flex flex-wrap gap-3">
      {analysis.missingKeywords.map((item, index) => (
        <span
          key={index}
          className="
            px-4
            py-2
            rounded-full
            bg-red-100
            text-red-600
            text-sm
            font-medium
          "
        >
          {item}
        </span>
      ))}
    </div>
  </div>
)}

{/* AI Suggestions */}

{analysis && (
  <div className="mt-8">
    <h3 className="font-bold text-lg text-gray-800">
      AI Suggestions
    </h3>

    <ul className="mt-4 space-y-3">
      {analysis.suggestions.map((item, index) => (
        <li
          key={index}
          className="
            bg-emerald-50
            border
            border-emerald-200
            rounded-xl
            p-4
            text-sm
            md:text-base
            text-gray-700
          "
        >
          ✓ {item}
        </li>
      ))}
    </ul>
  </div>
)}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}