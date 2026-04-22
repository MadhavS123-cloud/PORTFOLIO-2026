import { resumeData } from "../data";

export default function ResumePrintView({ onBack }) {
  const { basics, skills, projects, education } = resumeData;

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 print:p-0">
      <div className="max-w-3xl mx-auto print:max-w-none">
        <div className="print:hidden mb-8 flex gap-4">
          <button onClick={() => window.print()} className="px-6 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">🖨️ Print / Save PDF</button>
          <button onClick={onBack} className="px-6 py-2.5 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors">← Back to Portfolio</button>
        </div>

        <header className="mb-8 pb-6 border-b-2 border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900">{basics.name}</h1>
          <p className="text-blue-600 font-semibold text-lg mt-1">{basics.title}</p>
          <p className="text-gray-600 mt-3 max-w-2xl text-sm leading-relaxed">{basics.summary}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-4 text-sm text-gray-600">
            <span>📧 {basics.email}</span><span>📞 {basics.phone}</span><span>📍 {basics.location}</span>
            <a href={basics.links.github} className="text-blue-600 hover:underline">GitHub</a>
            <a href={basics.links.linkedin} className="text-blue-600 hover:underline">LinkedIn</a>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-5">Personal Projects</h2>
          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.id} className="break-inside-avoid">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-800">{p.title}</h3><span className="text-gray-500 text-sm">{p.year}</span>
                </div>
                <p className="text-blue-600 text-sm font-medium mb-2">Tech Stack: {p.stack.join(", ")}</p>
                <ul className="list-disc list-outside ml-5 space-y-1">
                  {p.bullets.map((b, i) => (<li key={i} className="text-gray-700 text-sm">{b}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-5">Certifications</h2>
          <div className="space-y-4">
            {resumeData.certifications?.map((c, i) => (
              <div key={i} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{c.title}</h3>
                  <p className="text-blue-600 text-sm">{c.issuer}</p>
                </div>
                <span className="text-gray-500 text-sm">{c.year}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-5">Hackathons</h2>
          <div className="space-y-4">
            {resumeData.hackathons?.map((h, i) => (
              <div key={i} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{h.name}</h3>
                  <p className="text-blue-600 text-sm">{h.role}</p>
                </div>
                <span className="text-gray-500 text-sm">{h.year}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-5">Skills</h2>
          <div className="space-y-2">
            {skills.map((g) => (
              <div key={g.group} className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-semibold text-gray-600 w-44 shrink-0">{g.group}:</span>
                <span className="text-sm text-gray-700">{g.items.join(" · ")}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-5">Education</h2>
          {education.map((e, i) => (
            <div key={i}>
              <h3 className="font-semibold text-gray-800">{e.institution}</h3><p className="text-blue-600 text-sm font-medium">{e.degree}</p>
              <p className="text-gray-600 text-sm mt-1">{e.note}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
