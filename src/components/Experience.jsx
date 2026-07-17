import { Briefcase, MapPin, Calendar, Code2, Brain } from 'lucide-react';
import { experience } from '../data/portfolio';

const TYPE_STYLE = {
  'Full Stack': { bg: 'bg-blue-100',   text: 'text-blue-700',   icon: <Code2 className="w-3.5 h-3.5" /> },
  'AI/ML':      { bg: 'bg-purple-100', text: 'text-purple-700', icon: <Brain className="w-3.5 h-3.5" /> },
};

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-badge inline-flex">Experience</div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Work Experience
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Internship experience across full-stack engineering and AI/ML.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {experience.map((exp, i) => {
              const typeStyle = TYPE_STYLE[exp.type] || TYPE_STYLE['Full Stack'];
              return (
                <div key={i} className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-white border-2 border-blue-200 items-center justify-center shadow-sm mt-1">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm card-hover">
                    {/* Type badge */}
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${typeStyle.bg} ${typeStyle.text} mb-3`}>
                      {typeStyle.icon} {exp.type} Internship
                    </span>

                    {/* Role & company */}
                    <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-blue-600 font-semibold text-sm mt-0.5 mb-3">{exp.company}</p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                    </div>

                    {/* Bullet points */}
                    <ul className="flex flex-col gap-2">
                      {exp.points.map((point, pi) => (
                        <li key={pi} className="flex gap-2.5 text-sm text-gray-600 leading-relaxed">
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
