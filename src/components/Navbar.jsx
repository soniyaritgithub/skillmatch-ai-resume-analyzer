import {
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import {
  Brain,
  ChevronDown,
  FileText,
  Menu,
  SearchCheck,
  Sparkles,
  Target,
  Wand2,
  X
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import OrganizationsDropdown from "./OrganizationsDropdown";
import PricingDropdown from "./PricingDropdown";
import ToolsMegaMenu from "./ToolsMegaMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
const [resumeOpen, setResumeOpen] =
useState(false);

const [mobileResumeOpen, setMobileResumeOpen] = useState(false);

const [toolsOpen, setToolsOpen] = useState(false);

const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

const [pricingOpen, setPricingOpen] = useState(false);

const [mobilePricingOpen, setMobilePricingOpen] = useState(false);
const [organizationsOpen,setOrganizationsOpen]=useState(false);

const [mobileOrganizationsOpen,setMobileOrganizationsOpen]=useState(false);
const pricingRef = useRef(null);
useEffect(() => {

function handleClickOutside(event) {

if (

pricingRef.current &&

!pricingRef.current.contains(event.target)

) {

setPricingOpen(false);

setMobilePricingOpen(false);

}

}

document.addEventListener(

"mousedown",

handleClickOutside

);

return () => {

document.removeEventListener(

"mousedown",

handleClickOutside

);

};

}, []);
useEffect(() => {

function handleEscape(event) {

if (event.key === "Escape") {

setPricingOpen(false);

setMobilePricingOpen(false);

}

}

document.addEventListener(

"keydown",

handleEscape

);

return () => {

document.removeEventListener(

"keydown",

handleEscape

);

};

}, []);
  return (
   <nav
  className="
    sticky
    top-0
    z-[999]
    overflow-visible
    bg-white/90
    backdrop-blur-xl
    border-b
    border-gray-200
  "
>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <div className="flex items-center gap-2 min-w-0">

            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500 flex-shrink-0"></div>

            <h1
              className="
                text-lg
                sm:text-xl
                md:text-2xl
                font-bold
                text-gray-900
                truncate
                cursor-pointer
              "
              onClick={() => navigate("/")}
            >
              SkillMatch AI
            </h1>

          </div>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">

            <div
  className="relative"
  onMouseEnter={() => setResumeOpen(true)}
  onMouseLeave={() => setResumeOpen(false)}
>
  <button
    className="
      flex
      items-center
      gap-1
      font-medium
      text-gray-700
      hover:text-emerald-600
      transition
    "
  >
    Resume

    <motion.div
      animate={{
        rotate: resumeOpen ? 180 : 0,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <ChevronDown className="w-4 h-4" />
    </motion.div>
  </button>

<AnimatePresence>
  {resumeOpen && (
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
      className="
        absolute
        left-0
        top-full
        mt-5
        w-[320px]
sm:w-full
max-w-md
mx-auto
md:w-[390px]
        rounded-3xl
        bg-white/80
        backdrop-blur-2xl
        border
        border-white/40
        shadow-[0_30px_80px_rgba(0,0,0,.12)]
        overflow-hidden
        z-[1000]
      "
    ><div
className="
relative
bg-gradient-to-r
from-emerald-500
to-cyan-500
text-white
p-4
sm:p-5
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
<Brain className="w-8 h-8"/>
</motion.div>

<div className="mt-3">

<h3 className="font-bold text-lg">
AI Resume Tools
</h3>

<p className="text-sm opacity-90">
Powered by Gemini AI
</p>

</div>

<motion.div
animate={{
y:[0,-5,0],
rotate:[0,8,0]
}}
transition={{
repeat:Infinity,
duration:3
}}
className="absolute right-5 top-5"
>

<Sparkles className="w-5 h-5"/>

</motion.div>

</div><div className="p-4">

{[
{
icon:<SearchCheck className="w-5 h-5"/>,
title:"ATS Resume Checker",
badge:"92%"
},

{
icon:<Wand2 className="w-5 h-5"/>,
title:"Resume Optimizer",
badge:"+35%"
},

{
icon:<Target className="w-5 h-5"/>,
title:"Job Match",
badge:"95%"
},

{
icon:<FileText className="w-5 h-5"/>,
title:"Cover Letter",
badge:"AI"
}

].map((item,index)=>(

<motion.div

key={index}

whileHover={{
  x: 6,
  scale: 1.02,
  boxShadow: "0 12px 30px rgba(16,185,129,.18)",
}}

whileTap={{
  scale: .98
}}

transition={{
  duration: .25
}}

className="
flex
items-center
justify-between
rounded-2xl
p-4
cursor-pointer
transition-all
duration-300
"

>

<div className="flex items-center gap-3">

<div className="text-emerald-500">

<motion.div

whileHover={{
rotate:12,
scale:1.15
}}

transition={{
duration:.25
}}

className="text-emerald-500"

>

{item.icon}

</motion.div>

</div>

<div>

<p className="font-semibold">

{item.title}

</p>

<p className="text-xs text-gray-500">

AI Powered

</p>

</div>

</div>

<span
className="
px-3
py-1
rounded-full
bg-emerald-100
text-emerald-600
text-xs
font-semibold
"
>

{item.badge}

</span>

</motion.div>

))}

</div>
<div
className="
border-t
bg-gray-50
p-4
"
>
<div className="grid grid-cols-3 gap-2 p-4">

<div className="text-center">

<p className="font-bold text-emerald-600">

92%

</p>

<p className="text-xs text-gray-500">

ATS

</p>

</div>

<div className="text-center">

<p className="font-bold text-cyan-600">

95%

</p>

<p className="text-xs text-gray-500">

Match

</p>

</div>

<div className="text-center">

<p className="font-bold text-purple-600">

AI

</p>

<p className="text-xs text-gray-500">

Powered

</p>

</div>

</div>

<button

onClick={()=>{
navigate("/");
setResumeOpen(false);

setTimeout(()=>{

document
.getElementById("upload")
?.scrollIntoView({

behavior:"smooth"

});

},200);

}}

className="
w-full
rounded-xl
bg-gradient-to-r
from-emerald-500
via-emerald-400
to-cyan-500
hover:scale-[1.03]
hover:shadow-[0_15px_40px_rgba(16,185,129,.35)]

transition-all
duration-300
text-white
font-semibold
py-3
"
>

Try AI Resume Analyzer

</button>

</div>
    </motion.div>
  )}
</AnimatePresence>
  
</div>

<div

ref={pricingRef}

className="relative"

onMouseEnter={() => setToolsOpen(true)}

onMouseLeave={() => setToolsOpen(false)}

>

<button

className="
flex
items-center
gap-1

font-medium

text-gray-700

hover:text-violet-600

transition-all

duration-300
"

>

Tools

<motion.div

animate={{

rotate:toolsOpen?180:0

}}

transition={{

duration:.25

}}

>

<ChevronDown className="w-4 h-4"/>

</motion.div>

</button>

<AnimatePresence>

{

toolsOpen && (

<motion.div

initial={{

opacity:0,

y:15,

scale:.96

}}

animate={{

opacity:1,

y:0,

scale:1

}}

exit={{

opacity:0,

y:15,

scale:.96

}}

transition={{

duration:.25

}}

className="

absolute

left-0

top-full

mt-5

z-[1000]

"

>

<ToolsMegaMenu
navigate={navigate}
/>

</motion.div>

)

}

</AnimatePresence>

</div>

           <div

className="relative"

onMouseEnter={()=>setOrganizationsOpen(true)}

onMouseLeave={()=>setOrganizationsOpen(false)}

>

<button

className="
flex
items-center
gap-1
font-medium
text-gray-700
hover:text-cyan-600
transition-all
duration-300
"

>

Organizations

<motion.div

animate={{
rotate:organizationsOpen?180:0
}}

transition={{
duration:.25
}}

>

<ChevronDown className="w-4 h-4"/>

</motion.div>

</button>

<AnimatePresence>

{

organizationsOpen && (

<OrganizationsDropdown/>

)

}

</AnimatePresence>

</div>

          <div
  className="relative"
  onMouseEnter={() => setPricingOpen(true)}
  onMouseLeave={() => setPricingOpen(false)}
>

  <button

  tabIndex={0}

aria-haspopup="menu"

aria-expanded={pricingOpen}
onKeyDown={(e)=>{

if(e.key==="Enter" || e.key===" "){

e.preventDefault();

setPricingOpen(prev=>!prev);

}

}}
    className="
    flex
    items-center
    gap-1
    font-medium
    text-gray-700
    hover:text-violet-600
    transition-all
    duration-300
    
    "
  >

    Pricing

    <motion.div
      animate={{
        rotate: pricingOpen ? 180 : 0,
      }}
      transition={{
        duration: .25,
      }}
    >

      <ChevronDown className="w-4 h-4"/>

    </motion.div>

  </button>

  <AnimatePresence>

    {pricingOpen && (

    <PricingDropdown
navigate={navigate}
/>

    )}

  </AnimatePresence>

</div>

          </ul>

          {/* Desktop Buttons */}

          <div className="hidden md:flex items-center gap-4">
<button
  onClick={() => {
    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById("upload")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 200);

      return;
    }

    document
      .getElementById("upload")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }}
  className="
    px-6
    py-3
    bg-emerald-500
    text-white
    rounded-xl
    font-medium
    hover:bg-emerald-600
    transition
  "
>
  Get Started
</button>


<button
    onClick={() => navigate("/register")}
    className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition"
  >
    Register
  </button>

            <button
              onClick={() => navigate("/login")}
              className="
                px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition
              "
            >
              Sign In
            </button>

          </div>

          {/* Mobile Menu Icon */}

          <button
            className="lg:hidden flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X
                className="
                  w-5
                  h-5
                  sm:w-6
                  sm:h-6
                "
              />
            ) : (
              <Menu
                className="
                  w-5
                  h-5
                  sm:w-6
                  sm:h-6
                "
              />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="lg:hidden bg-white border-t">

          <div className="container-custom py-6">

            <ul className="flex flex-col gap-6 text-gray-700 font-medium">

             <li>

  <button
    onClick={() =>
      setMobileResumeOpen(!mobileResumeOpen)
    }
    className="
      w-full
      flex
      items-center
      justify-between
      py-2
      font-medium
    "
  >
    <span>Resume</span>

    <motion.div
      animate={{
        rotate: mobileResumeOpen ? 180 : 0,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <ChevronDown className="w-5 h-5" />
    </motion.div>
  </button>

</li>
<AnimatePresence>

  {mobileResumeOpen && (

    <motion.div
      initial={{
        height: 0,
        opacity: 0
      }}
      animate={{
        height: "auto",
        opacity: 1
      }}
      exit={{
        height: 0,
        opacity: 0
      }}
      transition={{
        duration: 0.3
      }}
      className="
        overflow-hidden
      "
    >
<motion.div>
      <div
className="
mt-4
rounded-3xl
overflow-hidden
bg-white
shadow-xl
border
border-emerald-100
"
><div
className="
relative
bg-gradient-to-r
from-emerald-500
to-cyan-500
text-white
p-4
sm:p-5
"
>

  {/* Animated Brain */}

  <motion.div
    animate={{
      rotate: [0, 10, -10, 0]
    }}
    transition={{
      repeat: Infinity,
      duration: 4
    }}
  >
    <Brain className="w-8 h-8" />
  </motion.div>

  <div className="mt-3">

    <h3
      className="
      text-lg
      font-bold
      "
    >
      AI Resume Tools
    </h3>

    <p
      className="
      text-sm
      text-white/90
      "
    >
      Powered by Gemini AI
    </p>

  </div>

  {/* Floating Sparkle */}

  <motion.div
    animate={{
      y: [0, -5, 0],
      rotate: [0, 8, 0]
    }}
    transition={{
      repeat: Infinity,
      duration: 3
    }}
    className="
    absolute
    top-5
    right-5
    "
  >
    <Sparkles className="w-5 h-5" />
  </motion.div>

</div>
<div className="p-4">

  {[
    {
      icon: <SearchCheck className="w-5 h-5" />,
      title: "ATS Resume Checker",
      badge: "92%",
    },
    {
      icon: <Wand2 className="w-5 h-5" />,
      title: "Resume Optimizer",
      badge: "+35%",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Job Match",
      badge: "95%",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Cover Letter",
      badge: "AI",
    },
  ].map((item, index) => (

    <motion.div
      key={index}
      whileTap={{ scale: 0.97 }}
      className="
      flex
      items-center
      justify-between
      rounded-2xl
      p-4
      mb-3
      bg-white
      border
      border-gray-100
      shadow-sm
      active:bg-emerald-50
      transition-all
      duration-300
      "
    >

      <div className="flex items-center gap-3">

        <div className="text-emerald-500">
          {item.icon}
        </div>

        <div>

          <p className="font-semibold">
            {item.title}
          </p>

          <p className="text-xs text-gray-500">
            AI Powered
          </p>

        </div>

      </div>

      <span
        className="
        px-3
        py-1
        rounded-full
        bg-emerald-100
        text-emerald-600
        text-xs
        font-semibold
        "
      >
        {item.badge}
      </span>

    </motion.div>

  ))}

</div>

<div
  className="
    border-t
    border-gray-100
    bg-gray-50
    px-4
    py-5
  "
>

  <div
    className="
      grid
      grid-cols-3
      gap-4
      text-center
    "
  >

    <div>
      <h3
        className="
          text-lg
          sm:text-xl
          font-bold
          text-emerald-600
        "
      >
        92%
      </h3>

      <p
        className="
          text-xs
          text-gray-500
          mt-1
        "
      >
        ATS
      </p>
    </div>

    <div>
      <h3
        className="
          text-lg
          sm:text-xl
          font-bold
          text-cyan-600
        "
      >
        95%
      </h3>

      <p
        className="
          text-xs
          text-gray-500
          mt-1
        "
      >
        Match
      </p>
    </div>

    <div>
      <h3
        className="
          text-lg
          sm:text-xl
          font-bold
          text-violet-600
        "
      >
        AI
      </h3>

      <p
        className="
          text-xs
          text-gray-500
          mt-1
        "
      >
        Powered
      </p>
    </div>

  </div>

</div>

<div
  className="
    px-4
    pb-5
    bg-gray-50
  "
>

  <button

    onClick={() => {

      navigate("/");

      setIsOpen(false);

      setMobileResumeOpen(false);

      setTimeout(() => {

        document
          .getElementById("upload")
          ?.scrollIntoView({

            behavior: "smooth",

            block: "start",

          });

      }, 200);

    }}

    className="
      w-full
      py-3.5
      rounded-2xl
      font-semibold
      text-white

      bg-gradient-to-r
      from-emerald-500
      to-cyan-500

      active:scale-95
      transition-all
      duration-300

      shadow-lg
      hover:shadow-xl
    "
  >

    Try AI Resume Analyzer

  </button>

</div>
</div>
</motion.div>
    </motion.div>

  )}

</AnimatePresence>

<li>

<button

onClick={()=>

setMobileToolsOpen(

!mobileToolsOpen

)

}

className="

w-full

flex

items-center

justify-between

py-2

font-medium

"

>

<span>

Tools

</span>

<motion.div

animate={{

rotate:

mobileToolsOpen

?180

:0

}}

transition={{

duration:.25

}}

>

<ChevronDown/>

</motion.div>

</button>

</li>
<AnimatePresence>

{

mobileToolsOpen && (

<motion.div

initial={{

height:0,

opacity:0

}}

animate={{

height:"auto",

opacity:1

}}

exit={{

height:0,

opacity:0

}}

transition={{

duration:.3

}}

className="

overflow-hidden

"

>

<div className="py-3">

<ToolsMegaMenu

mobile

navigate={navigate}

onClose={()=>{

setMobileToolsOpen(false);

setIsOpen(false);

}}

/>

</div>

</motion.div>

)

}

</AnimatePresence>

             <li>

<button

onClick={()=>

setMobileOrganizationsOpen(

!mobileOrganizationsOpen

)

}

className="
w-full
flex
items-center
justify-between
py-2
font-medium
"

>

<span>

Organizations

</span>

<motion.div

animate={{
rotate:
mobileOrganizationsOpen
?180
:0
}}

transition={{
duration:.25
}}

>

<ChevronDown/>

</motion.div>

</button>

</li>
<AnimatePresence>

{

mobileOrganizationsOpen && (

<motion.div

initial={{
height:0,
opacity:0
}}

animate={{
height:"auto",
opacity:1
}}

exit={{
height:0,
opacity:0
}}

transition={{
duration:.3
}}

className="overflow-hidden"

>

<div className="py-3">

<OrganizationsDropdown

mobile

navigate={navigate}

onClose={()=>{

setMobileOrganizationsOpen(false);

setIsOpen(false);

}}

/>

</div>

</motion.div>

)

}

</AnimatePresence>

              <li ref={pricingRef}>

<button
tabIndex={0}

aria-haspopup="menu"

aria-expanded={mobilePricingOpen}

onKeyDown={(e)=>{

if(e.key==="Enter" || e.key===" "){

e.preventDefault();

setMobilePricingOpen(prev=>!prev);

}

}}

onClick={()=>

setMobilePricingOpen(

!mobilePricingOpen

)

}

className="

w-full

flex

items-center

justify-between

py-2

font-medium

"

>

<span>

Pricing

</span>

<motion.div

animate={{

rotate:

mobilePricingOpen

?180

:0

}}

transition={{

duration:.25

}}

>

<ChevronDown/>

</motion.div>

</button>

</li>
<AnimatePresence>

{

mobilePricingOpen && (

<motion.div

initial={{

height:0,

opacity:0

}}

animate={{

height:"auto",

opacity:1

}}

exit={{

height:0,

opacity:0

}}

transition={{

duration:.3

}}

className="

overflow-hidden

"

>

<div className="py-3">

<PricingDropdown

mobile

navigate={navigate}

onClose={()=>{

setMobilePricingOpen(false);

setIsOpen(false);

}}

/>

</div>

</motion.div>

)

}

</AnimatePresence>

              <button
                onClick={() => {
                  navigate("/login");
                  setIsOpen(false);
                }}
                className="
                  py-4
text-base
                  border
                  rounded-xl
                  w-full
                "
              >
                Sign In
              </button>

              <button
                onClick={() => {
                  navigate("/register");
                  setIsOpen(false);
                }}
                className="
                  py-4
text-base
                  bg-emerald-500
                  text-white
                  rounded-xl
                  w-full
                "
              >
                Get Started
              </button>

            </ul>

          </div>

        </div>
      )}

    </nav>
  );
}