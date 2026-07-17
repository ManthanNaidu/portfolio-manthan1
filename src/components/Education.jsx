import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { education, certifications } from '../data/portfolio';

const CERT_COLORS = {
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700',   dot: 'bg-blue-500'   },
  green:  { bg: 'bg-emerald-50',border: 'border-emerald-200',text: 'text-emerald-700',dot: 'bg-emerald-500' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', dot: 'bg-indigo-500'  },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', dot: 'bg-orange-500'  },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', dot: 'bg-purple-500'  },
};

export default function Education() {
  return (
    <section id="education" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-badge inline-flex">Education</div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Education & Certifications
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Strong academic foundation complemented by industry-recognized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Academic Background
            </h3>
            <div className="flex flex-col gap-4">
              {education.map((edu, i) => (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 card-hover">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="p-2 rounded-xl bg-blue-100 border border-blue-200 shrink-0">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                    </div>
                    {edu.cgpa && (
                      <span className="px-3 py-1 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-bold shadow-sm">
                        {edu.cgpa}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mt-3 mb-1">{edu.degree}</h4>
                  <p className="text-blue-600 font-semibold text-sm mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {edu.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {edu.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5 flex items-center gap-2">
              <Award className="w-4 h-4" /> Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {certifications.map((cert, i) => {
                const style = CERT_COLORS[cert.color] || CERT_COLORS.blue;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${style.bg} ${style.border} card-hover`}
                  >
                    <div className={`w-2 h-2 rounded-full shrink-0 ${style.dot}`} />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{cert.name}</p>
                      <p className={`text-xs font-medium ${style.text}`}>{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <CheckCircle2 className={`w-4 h-4 ${style.text}`} />
                      <span className="text-xs font-bold text-gray-400">{cert.year}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
