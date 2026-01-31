export default function ProjectsPage() {
    return (
        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Project 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 p-8 flex items-center justify-center">
                 <svg className="w-20 h-20 text-indigo-300 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">CrowdFund</h3>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>
                <p className="text-slate-500 text-sm mb-4">
                  A crowdfunding project wherein people can raise a fund to help others and themselves.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Tailwind'].map(tag => (
                    <span key={tag} className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 p-8 flex items-center justify-center">
                 <svg className="w-20 h-20 text-purple-300 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">Automated Corn Shredder</h3>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>
                <p className="text-slate-500 text-sm mb-4">
                  A corn shredder machine with an IoT application
                </p>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'Arduino', 'Hardware'].map(tag => (
                    <span key={tag} className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-emerald-100 to-teal-100 p-8 flex items-center justify-center">
                 <svg className="w-20 h-20 text-emerald-300 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">Task Management Tool</h3>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>
                <p className="text-slate-500 text-sm mb-4">
                  A simple project coordination tool designed to track daily tasks and improve team workflow efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['C#', 'Web Forms', 'SQL'].map(tag => (
                    <span key={tag} className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-emerald-100 to-teal-100 p-8 flex items-center justify-center">
                 <svg className="w-20 h-20 text-emerald-300 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">Borrowing Management Tool</h3>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>
                <p className="text-slate-500 text-sm mb-4">
                  A simple project coordination tool designed to track daily tasks and improve team workflow efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['C#', 'Web Forms', 'SQL'].map(tag => (
                    <span key={tag} className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
    );
}