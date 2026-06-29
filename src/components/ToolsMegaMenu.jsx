import {
  motion
} from "framer-motion";

import {
  Brain,
  Sparkles,
  SearchCheck,
  Target,
  Wand2,
  FileText,
  Briefcase,
  Bot,
} from "lucide-react";

export default function ToolsMegaMenu({

mobile=false,

onClose,

navigate

}){

const tools=[

{

icon:<SearchCheck className="w-5 h-5"/>,

title:"ATS Resume Checker",

badge:"92%"

},

{

icon:<Target className="w-5 h-5"/>,

title:"Job Match",

badge:"95%"

},

{

icon:<Wand2 className="w-5 h-5"/>,

title:"Resume Optimizer",

badge:"+35%"

},

{

icon:<FileText className="w-5 h-5"/>,

title:"Cover Letter AI",

badge:"GPT"

},

{

icon:<Briefcase className="w-5 h-5"/>,

title:"Interview Prep",

badge:"AI"

},

{

icon:<Bot className="w-5 h-5"/>,

title:"Career Assistant",

badge:"24/7"

}

];

return (

<div
className="
mt-4
w-full
max-w-[420px]
rounded-3xl
overflow-hidden
bg-white/90
backdrop-blur-2xl
border
border-white/40
shadow-[0_30px_80px_rgba(0,0,0,.12)]
"
>
<div

className="
relative
bg-gradient-to-r
from-violet-600
via-indigo-500
to-cyan-500
text-white
p-5
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

AI Career Toolkit

</h3>

<p className="text-sm opacity-90">

Powered by SkillMatch AI

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

className="
absolute
right-5
top-5
"

>

<Sparkles className="w-5 h-5"/>

</motion.div>

</div>
<div className="p-4 space-y-2">

{

tools.map((tool,index)=>(

<motion.div

key={index}

whileHover={

mobile

?{}

:{

x:8,

scale:1.02

}

}

whileTap={{

scale:.98

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
hover:bg-violet-50
"

>

<div className="flex items-center gap-3">

<div className="text-violet-500">

{tool.icon}

</div>

<div>

<p className="font-semibold">

{tool.title}

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
bg-violet-100
text-violet-600
text-xs
font-semibold
"

>

{tool.badge}

</span>

</motion.div>

))

}

</div>
<div
className="
grid
grid-cols-3
gap-3
bg-gray-50
px-4
py-5
text-center
border-t
"
>

<div>

<h3 className="font-bold text-violet-600 text-lg">

150+

</h3>

<p className="text-xs text-gray-500">

AI Tools

</p>

</div>

<div>

<h3 className="font-bold text-cyan-600 text-lg">

99%

</h3>

<p className="text-xs text-gray-500">

Accuracy

</p>

</div>

<div>

<h3 className="font-bold text-emerald-600 text-lg">

24/7

</h3>

<p className="text-xs text-gray-500">

Available

</p>

</div>

</div>
<div
className="
p-4
border-t
bg-white
"
>

<button

onClick={() => {

navigate("/");

onClose?.();

setTimeout(() => {

document
.getElementById("upload")
?.scrollIntoView({

behavior:"smooth"

});

},200);

}}

className="
w-full
rounded-2xl
bg-gradient-to-r
from-violet-500
via-indigo-500
to-cyan-500
py-3.5
text-white
font-semibold
transition-all
duration-300
hover:scale-[1.02]
hover:shadow-xl
active:scale-[.98]
"

>

Explore AI Tools

</button>

</div>
</div>

);

}