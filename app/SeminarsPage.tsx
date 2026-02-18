export default function SeminarsPage() {
  return (
    <section id="seminars" className="mb-24">
      <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
        <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
        Seminars & Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Seminar 1 */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-indigo-200 transition-colors">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-slate-900">
                Cybersecurity Workshop
              </h3>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                Certificate
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-1">
              Organized by: Google Developers
            </p>
            <p className="text-sm text-slate-400 mb-4">
              Date: October 2023
            </p>
            <p className="text-sm text-slate-600 mb-4">
              Intensive workshop covering HTML5, CSS3, and basic JavaScript
              concepts for modern web development.
            </p>
          </div>

          {/* Certificate Image Area */}
          <a
            href="/certificates/React.png"
            target="_blank"
            className="group block overflow-hidden rounded-lg border border-slate-200 hover:border-blue-400 transition-all mt-4"
          >
            <img
              // REPLACE THIS URL WITH YOUR ACTUAL IMAGE PATH (e.g., "/cert1.png")
              src="/certificates/React.png"
              alt="Cybersecurity Certificate"
              className="w-full h-40 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="bg-slate-50 px-2 py-1.5 text-center text-xs font-medium text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              Click to View Full Certificate
            </div>
          </a>
        </div>

        {/* Seminar 2 */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-indigo-200 transition-colors">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-slate-900">
                Cybersecurity in Action: Real-world Case Studies
              </h3>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                Certificate
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-1">
              Organized by: Corporate Solutions
            </p>
            <p className="text-sm text-slate-400 mb-4">
              Date: July 2024
            </p>
            <p className="text-sm text-slate-600 mb-4">
              Learned essential skills in Cybersecurity and its applications in real-world scenarios, including risk management and incident response.
            </p>
          </div>

          {/* Certificate Image Area */}
          <a
            href="#"
            target="_blank"
            className="group block overflow-hidden rounded-lg border border-slate-200 hover:border-blue-400 transition-all mt-4"
          >
            <img
              // REPLACE THIS URL WITH YOUR ACTUAL IMAGE PATH
              src="https://placehold.co/600x400/e2e8f0/475569?text=Certificate+Preview"
              alt="Real-world Case Studies Certificate"
              className="w-full h-40 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="bg-slate-50 px-2 py-1.5 text-center text-xs font-medium text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              Click to View Full Certificate
            </div>
          </a>
        </div>

        {/* Seminar 3 */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-indigo-200 transition-colors">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-slate-900">
                Version Control with Git and GitHub
              </h3>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                Certificate
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-1">
              Organized by: Google Developers
            </p>
            <p className="text-sm text-slate-400 mb-4">
              Date: October 2023
            </p>
            <p className="text-sm text-slate-600 mb-4">
              Covered the fundamentals of version control, branching strategies, and collaborative workflows using Git and GitHub.
            </p>
          </div>

          {/* Certificate Image Area */}
          <a
            href="/certificates/VersionControl.pdf"
            target="_blank"
            className="group block overflow-hidden rounded-lg border border-slate-200 hover:border-blue-400 transition-all mt-4"
          >
            <img
              // REPLACE THIS URL WITH YOUR ACTUAL IMAGE PATH
              src="/certificates/VersionControl.pdf"
              alt="Git and GitHub Certificate"
              className="w-full h-40 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="bg-slate-50 px-2 py-1.5 text-center text-xs font-medium text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              Click to View Full Certificate
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}