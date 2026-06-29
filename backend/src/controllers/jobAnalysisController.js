/* global process */

import {
analyzeJobDescription
}
from "../services/jobAnalysisService.js";

export const analyzeJob =
async (req,res)=>{

try{

const{

resumeText,

jobDescription

}=req.body;

if(

!resumeText ||

!jobDescription

){

return res.status(400).json({

success:false,

message:

"Resume and Job Description required."

});

}

const analysis=

await analyzeJobDescription(

resumeText,

jobDescription

);

return res.json({

success:true,

analysis

});

}

catch (error) {

  console.error("Job Analysis Error:");
  console.error(error);

  return res.status(500).json({
    success: false,
    message: "Analysis failed",
    error: error.message,
    stack: process.env.NODE_ENV !== "production"
      ? error.stack
      : undefined,
  });

}

};