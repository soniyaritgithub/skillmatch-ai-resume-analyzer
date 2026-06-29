import { motion } from "framer-motion";

import {
  Building2,
  GraduationCap,
  Briefcase,
  Sparkles,
} from "lucide-react";

export default function OrganizationsDropdown({
  mobile = false,
  navigate,
  onClose,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 15,
        scale: 0.97,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
      ${
        mobile
          ? "relative left-0 top-0 mt-0"
          : "absolute left-1/2 top-full -translate-x-1/2 mt-5"
      }

      w-[calc(100vw-2rem)]

max-w-[340px]

sm:max-w-[380px]

md:max-w-[420px]

lg:max-w-[460px]

xl:max-w-[500px]

      rounded-3xl

      overflow-hidden

      border

      border-white/30

     bg-white/85

      backdrop-blur-3xl

     shadow-[0_35px_90px_rgba(0,0,0,.15)]

      z-[1000]
      `}
    >

      {/* Header */}
      <div
  className="
  relative
  overflow-hidden

  bg-gradient-to-r

  from-indigo-700
  via-blue-600
  to-orange-500

  p-4

sm:p-6

lg:p-7

  text-white
  "
>

  {/* Morphing Glow */}

  <motion.div

    animate={{
      scale:[1,1.2,1],
      opacity:[.25,.45,.25]
    }}

    transition={{
      repeat:Infinity,
      duration:6
    }}

    className="
    absolute
    -top-16
    -left-16

    w-44
    h-44

    rounded-full

    bg-white/20

    blur-3xl
    "

  />

  <motion.div

    animate={{
      scale:[1.1,.9,1.1],
      opacity:[.15,.35,.15]
    }}

    transition={{
      repeat:Infinity,
      duration:7
    }}

    className="
    absolute
    -bottom-16
    -right-16

    w-52
    h-52

    rounded-full

    bg-orange-300/20

    blur-3xl
    "

  />
  <div
className="
relative
z-10
"
>

<motion.div

animate={{
rotate:[0,10,-10,0]
}}

transition={{
repeat:Infinity,
duration:4
}}

>

<motion.div

whileHover={{

rotate:15,

scale:1.1

}}

>

<Building2 className="w-8

h-8

sm:w-10

sm:h-10"/>

</motion.div>

</motion.div>

<h2
className="
mt-4

text-xl

sm:text-2xl

lg:text-3xl

font-bold
"
>

Organizations

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

Hiring solutions for universities, recruiters and enterprises.

</p>

</div>
<motion.div

animate={{
y:[0,-8,0],
rotate:[0,10,0]
}}

transition={{
repeat:Infinity,
duration:3
}}

className="
absolute

right-6

top-6
"

>

<Sparkles className="w-6 h-6"/>

</motion.div>
{[...Array(8)].map((_,i)=>(

<motion.span

key={i}

className="
absolute

w-2
h-2

rounded-full

bg-white/60
"

style={{

left:`${12+i*10}%`,

top:`${15+(i%2)*22}%`

}}

animate={{

opacity:[.3,1,.3],

scale:[1,1.4,1]

}}

transition={{

repeat:Infinity,

duration:2+i*.3

}}

>

</motion.span>

))}
</div>

      {/* Cards */}
      <div
className="
p-4
sm:p-5
space-y-4
bg-white
"
><motion.div

whileHover={{
y:-8,
scale:1.03,
boxShadow:"0 28px 60px rgba(79,70,229,.25)"
}}

transition={{
duration:.25
}}

className="
relative

overflow-hidden

rounded-2xl

border

border-indigo-100

bg-gradient-to-r

from-indigo-50

to-white

p-4

sm:p-5

cursor-pointer

hover:border-indigo-400

transition-all

duration-300
"

>

<div
className="
flex
items-start
justify-between
gap-3
"
>

<div
className="
flex
items-start
gap-3
flex-1
min-w-0
"
>

<div
className="
w-12
h-12

rounded-xl

bg-indigo-100

flex

items-center

justify-center
"
>

<GraduationCap className="w-6 h-6 text-indigo-600"/>

</div>

<div>

<h3
className="
font-bold

text-base

sm:text-lg

truncate
"
>

Universities

</h3>

<p
className="
text-xs

sm:text-sm

text-gray-500

break-words
"
>

Campus Hiring

</p>

</div>

</div>

<span
className="
px-2.5

sm:px-3

py-1

shrink-0

whitespace-nowrap

rounded-full

bg-indigo-100

text-indigo-600

text-xs

font-semibold
"
>

120+

</span>

</div>

<p
className="
mt-3

text-xs

sm:text-sm

leading-6

text-gray-600
"
>

Connect students with recruiters using AI-powered placement tools.

</p>

</motion.div>
<motion.div

whileHover={{
y:-6,
scale:1.02,
boxShadow:"0 20px 45px rgba(249,115,22,.20)"
}}

transition={{
duration:.25
}}

className="
relative

overflow-hidden

rounded-2xl

border

border-orange-100

bg-gradient-to-r

from-orange-50

to-white

p-4

sm:p-5

cursor-pointer

hover:border-orange-400

transition-all

duration-300
"

>

<div
className="
flex
items-start
justify-between
gap-3
"
>

<div
className="
flex
items-start
gap-3
flex-1
min-w-0
"
>

<div
className="
w-12
h-12

rounded-xl

bg-orange-100

flex

items-center

justify-center
"
>

<Briefcase className="w-6 h-6 text-orange-600"/>

</div>

<div>

<h3
className="
font-bold

text-base

sm:text-lg

truncate
"
>

Recruiters

</h3>

<p
className="
text-xs

sm:text-sm

text-gray-500

break-words
"
>

AI Hiring

</p>

</div>

</div>

<span
className="
px-2.5

sm:px-3

py-1

shrink-0

whitespace-nowrap

rounded-full

bg-orange-100

text-orange-600

text-xs

font-semibold
"
>

250+

</span>

</div>

<p
className="
mt-3

text-xs

sm:text-sm

leading-6

text-gray-600
"
>

Screen resumes faster with ATS scoring and AI candidate matching.

</p>

</motion.div>
<motion.div

whileHover={{
y:-6,
scale:1.02,
boxShadow:"0 20px 45px rgba(16,185,129,.20)"
}}

transition={{
duration:.25
}}

className="
relative

overflow-hidden

rounded-2xl

border

border-emerald-100

bg-gradient-to-r

from-emerald-50

to-white

p-4

sm:p-5

cursor-pointer

hover:border-emerald-400

transition-all

duration-300
"

>

<div
className="
flex
items-start
justify-between
gap-3
"
>

<div
className="
flex
items-start
gap-3
flex-1
min-w-0
"
>

<div
className="
w-12
h-12

rounded-xl

bg-emerald-100

flex

items-center

justify-center
"
>

<Building2 className="w-6 h-6 text-emerald-600"/>

</div>

<div>

<h3
className="
font-bold

text-base

sm:text-lg

truncate
"
>

Enterprise

</h3>

<p
className="
text-xs

sm:text-sm

text-gray-500

break-words
"
>

Company Solutions

</p>

</div>

</div>

<span
className="
px-2.5

sm:px-3

py-1

shrink-0

whitespace-nowrap
rounded-full

bg-emerald-100

text-emerald-600

text-xs

font-semibold
"
>

AI

</span>

</div>

<p
className="
mt-3

text-xs

sm:text-sm

leading-6

text-gray-600
"
>

Manage hiring pipelines, analytics, and enterprise recruitment in one place.

</p>

</motion.div></div>

      {/* CTA */}
      {/* Divider */}

<div
className="
my-4

h-px

bg-gradient-to-r

from-transparent

via-slate-300

to-transparent
"
/>
<motion.button

whileHover={{
scale:1.03
}}

whileTap={{
scale:.97
}}

onClick={()=>{

onClose?.();

}}

className="
relative

overflow-hidden

w-full

rounded-2xl

py-3

sm:py-4

sm:py-4

font-semibold

text-white

bg-gradient-to-r

from-indigo-700

via-blue-600

to-orange-500

shadow-lg

transition-all

duration-300

hover:shadow-[0_20px_45px_rgba(79,70,229,.35)]
"

>

<motion.div

animate={{
x:[-120,350]
}}

transition={{
repeat:Infinity,
duration:2.4,
ease:"linear"
}}

className="
absolute

left-0

top-0

h-full

w-16

bg-white/20

blur-xl

rotate-12
"
/>

<div
className="
flex
items-center
justify-center
gap-2
"
>

<Building2 className="w-5 h-5"/>

Partner With Us

</div>

</motion.button>
<div
className="
mt-5

grid

grid-cols-3

gap-2

sm:gap-4

text-center
"
><div>

<h3
className="
text-xl

font-bold

text-indigo-600
"
>

520+

</h3>

<p
className="
text-xs

text-gray-500
"
>

Organizations

</p>

</div>

<div>

<h3
className="
text-xl

font-bold

text-orange-500
"
>

15K+

</h3>

<p
className="
text-xs

text-gray-500
"
>

Students

</p>

</div>

<div>

<h3
className="
text-xl

font-bold

text-emerald-600
"
>

99.8%

</h3>

<p
className="
text-xs

text-gray-500
"
>

Success

</p>

</div>
</div>
<div
className="
mt-5

rounded-2xl

bg-gradient-to-r

from-slate-50

via-white

to-slate-50

border

border-slate-200

p-4

text-center
"
>

<p
className="
text-sm

font-medium

text-gray-700
"
>

Trusted by Leading

<span
className="
font-bold

text-indigo-600
"
>

  520+

</span>

Universities, HR Teams & Enterprise Companies

</p>

</div>

    </motion.div>
  );
}