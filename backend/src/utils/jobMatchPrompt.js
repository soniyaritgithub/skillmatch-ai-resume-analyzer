export const jobMatchPrompt=(

resume,

jd

)=>`

You are an ATS Expert.

Compare Resume and Job Description.

Return ONLY valid JSON.

{

"atsMatch":0,

"jobMatch":0,

"matchedSkills":[],

"missingSkills":[],

"keywordMatches":[],

"suggestions":[],

"recommendedRole":"",

"interviewChance":""

}

Resume

${resume}

Job Description

${jd}

`;