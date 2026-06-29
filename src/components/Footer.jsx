export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-10
          "
        >
          {/* Logo */}

          <div>
            <h3 className="font-bold text-2xl">
              SkillMatch AI
            </h3>

            <p className="mt-4 text-slate-400 text-sm">
              AI-powered ATS Resume Analyzer for
              job seekers and professionals.
            </p>
          </div>

          {/* Resume */}

          <div>
            <h4 className="font-semibold mb-4">
              Resume
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>Resume Builder</li>
              <li>ATS Checker</li>
              <li>Templates</li>
              <li>Examples</li>
            </ul>
          </div>

          {/* Cover Letters */}

          <div>
            <h4 className="font-semibold mb-4">
              Cover Letters
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>Generator</li>
              <li>Examples</li>
              <li>Templates</li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h4 className="font-semibold mb-4">
              Resources
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>Blog</li>
              <li>Career Advice</li>
              <li>Guides</li>
            </ul>
          </div>

          {/* Compare */}

          <div>
            <h4 className="font-semibold mb-4">
              Compare
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>Enhancv</li>
              <li>Resume.io</li>
              <li>Zety</li>
              <li>Kickresume</li>
            </ul>
          </div>
        </div>

        <div
          className="
            mt-16
            pt-8
            border-t
            border-slate-800
            text-center
            text-slate-400
          "
        >
          © 2026 SkillMatch AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}