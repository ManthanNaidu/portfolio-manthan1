import { Briefcase, MapPin, Calendar, Code2, Brain, Zap } from 'lucide-react';
import { experience } from '../data/portfolio';

const TYPE_STYLE = {
  'Full Stack': {
    bg: 'bg-blue-100', text: 'text-blue-700',
    border: 'border-blue-200', dot: 'bg-blue-500',
    icon: <Code2 className="w-3.5 h-3.5" />,
    cardBorder: 'border-blue-200',
    accentBar: 'bg-gradient-to-b from-blue-400 to-blue-200',
  },
  'AI/ML': {
    bg: 'bg-purple-100', text: 'text-purple-700',
    border: 'border-purple-200', dot: 'bg-purple-500',
    icon: <Brain className="w-3.5 h-3.5" />,
    cardBorder: 'border-purple-200',
    accentBar: 'bg-gradient-to-b from-purple-400 to-purple-200',
  },
};

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-white relative overflow-hidden">
      {/* subtle background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-badge inline-flex">Experience</div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Work Experience</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Hands-on internship experience across full-stack Java development and AI/ML engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-gray-100 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {experience.map((exp, i) => {
              const s = TYPE_STYLE[exp.type] || TYPE_STYLE['Full Stack'];
              return (
                <div key={i} className="relative flex gap-6 group">
                  {/* Timeline dot */}
                  <div className={`relative z-10 hidden sm:flex shrink-0 w-12 h-12 rounded-2xl ${s.bg} border-2 ${s.border} items-center justify-center shadow-sm mt-1 group-hover:scale-110 transition-transform duration-200`}>
                    <Briefcase className={`w-5 h-5 ${s.text}`} />
                  </div>

                  {/* Card */}
                  <div className={`flex-1 bg-white border ${s.cardBorder} rounded-2xl shadow-sm card-hover overflow-hidden`}>
                    {/* Top color bar */}
                    <div className={`h-1 w-full ${s.dot.replace('bg-', 'bg-gradient-to-r from-')} ${s.accentBar.replace('bg-gradient-to-b', '')}`}
                      style={{ background: exp.type === 'AI/ML' ? 'linear-gradient(90deg,#a855f7,#6366f1)' : 'linear-gradient(90deg,#3b82f6,#6366f1)' }}
                    />

                    <div className="p-6">
                      {/* Badges row */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${s.bg} ${s.text}`}>
                          {s.icon} {exp.type} Internship
                        </span>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Currently Working
                          </span>
                        )}
                      </div>

                      {/* Role */}
                      <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold text-sm mt-0.5 mb-3">{exp.company}</p>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" /> {exp.duration}
                        </span>
                        <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" /> {exp.location}
                        </span>
                      </div>

                      {/* Bullets */}
                      <ul className="flex flex-col gap-2.5">
                        {exp.points.map((point, pi) => (
                          <li key={pi} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                            <Zap className={`shrink-0 w-3.5 h-3.5 mt-0.5 ${s.text}`} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
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
