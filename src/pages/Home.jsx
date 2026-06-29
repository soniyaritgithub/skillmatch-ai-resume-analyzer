import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ATSExplanation from "../components/ATSExplanation";
import ATSFeatures from "../components/ATSFeatures";
import ATSCheck from "../components/ATSCheck";
import TailorResume from "../components/TailorResume";
import HiringManager from "../components/HiringManager";
import ResumeWorkflow from "../components/ResumeWorkflow";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      
      <Hero />
      <ATSExplanation />
      <ATSFeatures />
      <ATSCheck />
      <TailorResume />
      <HiringManager />
      <ResumeWorkflow />
      <Reviews />

<FAQ />

<Footer />
    </>
  );
}