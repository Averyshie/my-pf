// Remove "use client" if it's here, unless you are using hooks in this file directly
import ContactForm from "./ContactForm"// Import the new component
import SeminarsPage from "./SeminarsPage"
import ProjectsPage from "./ProjectsPage";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-200 selection:text-indigo-900">
      
      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        
        {/* --- NAVBAR --- */}
        <nav className="flex justify-between items-center mb-16 backdrop-blur-sm bg-white/60 border border-white/20 rounded-full px-6 py-3 shadow-sm sticky top-4 z-50">
          <div className="font-bold text-xl text-indigo-900 tracking-tight">AC.</div>
          <a href="#contact" className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20">
            Let's Connect
          </a>
        </nav>

        {/* --- HERO SECTION --- */}
        <section className="mb-24 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold tracking-wide uppercase shadow-sm">
            Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Avery Yshie Cahilig</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
            An Aspiring Developer bridging the gap between organization, coding, and collaborative problem-solving.
          </p>
        </section>

        {/* --- SKILLS GRID --- */}
        <section id="skills" className="mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
            Technical Arsenal
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Development</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {['C', 'C#', 'JavaScript', 'HTML', 'CSS', 'Tailwind'].map(s => (
                  <span key={s} className="font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded-md">{s}</span>
                ))}
              </div>
            </div>

            <div className="group p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Hardware</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {['Arduino', 'Wiring', 'IoT'].map(s => (
                  <span key={s} className="font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded-md">{s}</span>
                ))}
              </div>
            </div>

            <div className="group p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tools</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {['Project Mgmt', 'Documentation', 'Teamwork'].map(s => (
                  <span key={s} className="font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded-md">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
        
       
        <ProjectsPage />

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
            Professional Journey
          </h2>
          
          <div className="relative pl-8 border-l-2 border-slate-200 space-y-12">
            <div className="relative group">
              <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-white border-4 border-blue-500 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Intern</h3>
                    <p className="text-blue-600 font-medium">Remote</p>
                  </div>
                  <span className="mt-2 sm:mt-0 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                    Jun 2024 - Aug 2024
                  </span>
                </div>
                <ul className="space-y-3 text-slate-600">
                  {['Assisted in daily project coordination and scheduling tasks to ensure workflow efficiency.', 'Supported a team by preparing documentation and reports for internal meetings.', 'Conducted research to gather relevant data, enhancing project understanding and outcomes.'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- EDUCATION SECTION --- */}
        <section id="education" className="mb-24">
           <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
            Education
          </h2>
          <div className="space-y-4">
            {[
              { school: "Cebu Institute of Technology - University", level: "College", year: "2021 - 2025" },
              { school: "Cebu Institute of Technology - University", level: "High School", year: "2019 - 2021" },
              { school: "Immaculate Heart of Mary Academy", level: "High School", year: "2015 - 2019" },
            ].map((edu, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-md p-5 rounded-xl border border-slate-100 flex flex-col sm:flex-row justify-between items-center hover:bg-white hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{edu.school}</h3>
                    <p className="text-sm text-slate-500">{edu.level}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mt-2 sm:mt-0">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>

        
        <SeminarsPage />

        {/* --- CONTACT FORM (IMPORTED COMPONENT) --- */}
        <ContactForm />

        {/* --- FOOTER --- */}
        <footer className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Avery Yshie Cahilig</h2>
            <p className="text-indigo-100 mb-8">Lower Tunghaan, Minglanilla, Cebu</p>
            <p className="text-sm text-indigo-200">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}