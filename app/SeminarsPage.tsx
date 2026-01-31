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
                Web Development Bootcamp
              </h3>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                Certificate
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-1">
              Organized by: Tech Academy
            </p>
            <p className="text-sm text-slate-400 mb-4">
              Date: October 2023
            </p>
            <p className="text-sm text-slate-600 mb-4">
              Intensive workshop covering HTML5, CSS3, and basic JavaScript
              concepts for modern web development.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center w-full py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
          >
            View Certificate
          </a>
        </div>

        {/* Seminar 2 */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-indigo-200 transition-colors">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-slate-900">
                Project Management Fundamentals
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
              Learned essential skills in team coordination, documentation, and
              scheduling in a fast-paced environment.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center w-full py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}
