import { motion } from "framer-motion";

import {
Brain,
Sparkles,
Check,
ShieldCheck,
Zap,
Star,
Building2,
} from "lucide-react";

export default function PricingDropdown({

mobile=false,

navigate,

onClose,

}) {

  return (

    <motion.div
role="menu"

tabIndex={-1}
      initial={{
        opacity: 0,
        y: 15,
        scale: .97,
      }}

      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}

      exit={{
        opacity: 0,
        y: 15,
        scale: .97,
      }}

      transition={{
        duration: .25,
      }}

      className={`
${mobile
? "relative left-0 top-0 mt-0 translate-x-0"
: "absolute left-1/2 top-full mt-5 -translate-x-1/2"
}

${mobile?"w-full":"w-[95vw]"}
max-w-[340px]

sm:max-w-[380px]

md:max-w-[400px]

lg:max-w-[430px]

xl:max-w-[460px]

rounded-3xl

overflow-hidden

border

border-white/30

bg-white/75

backdrop-blur-2xl

shadow-[0_25px_70px_rgba(0,0,0,.12)]

z-[1000]
`}
    >

      {/* Animated Border */}

      <div
      className="
      relative
      p-[1px]

      bg-gradient-to-r

      from-cyan-400

      via-violet-500

      to-emerald-400

      "
      >

        <div
        className="
        rounded-[22px]

        bg-white/90

        backdrop-blur-xl

        overflow-hidden

        "
        >

          {/* Header */}

          <div
          className="
          relative

          overflow-hidden

          bg-gradient-to-r

          from-violet-600

          via-cyan-500

          to-emerald-500

          p-5 sm:p-6 lg:p-7

          text-white
          "
          >
{/* Animated Background Glow */}

<motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.25, 0.45, 0.25],
  }}
  transition={{
    repeat: Infinity,
    duration: 6,
    ease: "easeInOut",
  }}
  className="
    absolute
    -top-16
    -left-16
    w-40
    h-40
    rounded-full
    bg-white/20
    blur-3xl
  "
/>

<motion.div
  animate={{
    scale: [1.1, 0.9, 1.1],
    opacity: [0.15, 0.35, 0.15],
  }}
  transition={{
    repeat: Infinity,
    duration: 7,
    ease: "easeInOut",
  }}
  className="
    absolute
    -bottom-20
    -right-20
    w-52
    h-52
    rounded-full
    bg-cyan-300/20
    blur-3xl
  "
/>
            {/* Brain */}

            <motion.div

              animate={{
                rotate: [0,10,-10,0],
              }}

              transition={{
                repeat: Infinity,
                duration: 4,
              }}

            >

              <Brain className="w-10 h-10"/>

            </motion.div>

            <h2
            className="
            mt-4

            text-xl

sm:text-2xl

lg:text-3xl

            text-lg

sm:text-xl

font-bold
            "
            >
              Pricing Plans
            </h2>

            <p
            className="
            mt-2

            text-xs

sm:text-sm

lg:text-base

            text-white/90
            "
            >
              AI-powered resume tools for every career stage.
            </p>

            {/* Floating Sparkle */}

            <motion.div

              animate={{
                y:[0,-8,0],
                rotate:[0,8,0],
              }}

              transition={{
                repeat:Infinity,
                duration:3,
              }}

              className="
              absolute

              right-6

              top-6
              "
            >

              <Sparkles className="w-6 h-6"/>

            </motion.div>
{[...Array(6)].map((_, i) => (
  <motion.span
    key={i}
    className="
      absolute
      w-1.5
      h-1.5
      rounded-full
      bg-white/70
    "
    style={{
      left: `${15 + i * 12}%`,
      top: `${20 + (i % 2) * 25}%`,
    }}
    animate={{
      y: [0, -8, 0],
      opacity: [0.4, 1, 0.4],
    }}
    transition={{
      duration: 2 + i * 0.2,
      repeat: Infinity,
    }}
  />
))}
          </div>

          {/* Body */}

         {/* Pricing Cards */}

<div
className="
p-4

sm:p-5

lg:p-6
space-y-4
bg-white
"
>

{/* FREE */}

<motion.div

whileHover={{
y:-6,
scale:1.02,
boxShadow:"0 20px 45px rgba(6,182,212,.20)"
}}

transition={{
duration:.25
}}

className="
relative

overflow-hidden

rounded-2xl

border

border-gray-200

bg-white

p-4

sm:p-5

lg:p-6

transition-all

duration-300

hover:border-cyan-500

before:absolute

before:inset-0

before:rounded-2xl

before:bg-gradient-to-r

before:from-transparent

before:via-white/30

before:to-transparent

before:opacity-0

before:transition-all

before:duration-500

hover:before:opacity-100
"
>

<div className="flex items-center justify-between">

<div>

<h3 className="text-base

sm:text-lg

lg:text-xl font-bold">

🟢 Free

</h3>

<p className="text-sm text-gray-500">

Perfect for Beginners

</p>

</div>

<span
className="
rounded-full
bg-emerald-100
px-3
py-1
text-xs
font-semibold
text-emerald-600
"
>

Free

</span>

</div>

<ul
className="
mt-4
space-y-2
text-xs

sm:text-sm
text-gray-600
"
>

<li className="flex items-center gap-2">

<Check className="w-4 h-4 text-emerald-500"/>

3 Resume Scans / Day

</li>

<li className="flex items-center gap-2">

<Check className="w-4 h-4 text-emerald-500"/>

ATS Score

</li>

<li className="flex items-center gap-2">

<Check className="w-4 h-4 text-emerald-500"/>

Basic Suggestions

</li>

</ul>

</motion.div>

{/* PRO */}

<motion.div

whileHover={{
y:-8,
scale:1.03,
boxShadow:"0 25px 55px rgba(139,92,246,.25)"
}}

transition={{
duration:.25
}}

className="
relative

overflow-hidden

rounded-2xl

border-2

border-violet-500

bg-gradient-to-br

from-violet-50

to-white

p-4

sm:p-5

lg:p-6

before:absolute

before:inset-0

before:bg-gradient-to-r

before:from-transparent

before:via-white/30

before:to-transparent

before:opacity-0

before:transition-all

before:duration-500

hover:before:opacity-100
"
>
<motion.span
  animate={{
    scale: [1, 1.08, 1],
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
  }}
  className="
    absolute
    -top-2
    -right-2
    rounded-full
    bg-gradient-to-r
    from-pink-500
    to-violet-600
    text-white
    px-3
    py-1
    text-xs
    font-bold
    shadow-lg
    hover:border-violet-500

hover:shadow-violet-300
  "
>
  ⭐ Most Popular
</motion.span>

<div className="flex items-center justify-between">

<div>

<h3 className="text-base

sm:text-lg

lg:text-xl ">

🟣 Pro

</h3>

<p className="text-sm text-gray-500">

Best for Job Seekers

</p>

</div>

<span
className="
rounded-full

bg-violet-100

px-3

py-1

text-xs

font-semibold

text-violet-600
"
>

₹499/mo

</span>

</div>

<ul
className="
mt-4

space-y-2

text-xs

sm:text-sm

text-gray-600
"
>

<li>✔ Unlimited Resume Scans</li>

<li>✔ AI Resume Optimizer</li>

<li>✔ Job Match Analysis</li>

<li>✔ PDF Reports</li>

<li>✔ Cover Letter Generator</li>

</ul>

</motion.div>

{/* ENTERPRISE */}

<motion.div

whileHover={{
y:-6,
scale:1.02,
boxShadow:"0 20px 45px rgba(6,182,212,.20)"
}}

transition={{
duration:.25
}}

className="
relative

overflow-hidden

rounded-2xl

border

border-gray-200

bg-white

p-4

sm:p-5

lg:p-6

transition-all

duration-300

hover:border-cyan-500

before:absolute

before:inset-0

before:bg-gradient-to-r

before:from-transparent

before:via-white/30

before:to-transparent

before:opacity-0

before:transition-all

before:duration-500

hover:before:opacity-100
"
>

<div className="flex items-center justify-between">

<div>

<h3 className="text-base

sm:text-lg

lg:text-xl font-bold">

⚡ Enterprise

</h3>

<p className="text-sm text-gray-500">

For Companies

</p>

</div>

<span
className="
rounded-full

bg-cyan-100

px-3

py-1

text-xs

font-semibold

text-cyan-600
"
>

Custom

</span>

</div>

<ul
className="
mt-4

space-y-2

text-xs

sm:text-sm

text-gray-600
"
>

<li>✔ Team Dashboard</li>

<li>✔ API Access</li>

<li>✔ Priority Support</li>

<li>✔ Unlimited Users</li>

</ul>

</motion.div>
<div
  className="
    my-5
    h-px
    bg-gradient-to-r
    from-transparent
    via-gray-300
    to-transparent
  "
/>
<motion.button
tabIndex={0}
whileHover={{
scale:1.03
}}

whileTap={{
scale:.97
}}

className="
relative

overflow-hidden

w-full

mt-5

rounded-2xl

py-3.5

sm:py-4

lg:py-5

font-semibold

text-white

bg-gradient-to-r

from-violet-600

via-cyan-500

to-emerald-500

shadow-lg

transition-all

duration-300

hover:shadow-[0_20px_45px_rgba(99,102,241,.35)]
"

>
<motion.div

animate={{
x:[-80,320]
}}

transition={{
repeat:Infinity,
duration:2,
ease:"linear"
}}

className="
absolute

top-0

left-0

h-full

w-14

bg-white/20

blur-xl

rotate-12
"
/>
<motion.button
tabIndex={0}
whileTap={{

scale:.97

}}

onClick={()=>{

onClose?.();

}}

className="

w-full

"

>

🚀 View Pricing

</motion.button>

</motion.button>
<div
className="
mt-5

grid

grid-cols-3

gap-2

sm:gap-3

text-center
"
>

<div>

<p className="text-lg

sm:text-xl

font-bold text-emerald-500">

50K+

</p>

<p className="text-xs text-gray-500">

AI Resumes

</p>

</div>

<div>

<p className="text-lg

sm:text-xl

font-bold text-violet-500">

4.9★

</p>

<p className="text-xs text-gray-500">

Customer Rating

</p>

</div>

<div>

<p className="text-lg

sm:text-xl

font-bold text-cyan-500">

99%

</p>

<p className="text-xs text-gray-500">

ATS Accuracy

</p>

</div>

</div>

</div>

        </div>

      </div>

    </motion.div>

  );

}