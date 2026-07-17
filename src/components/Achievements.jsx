import { Trophy, Medal, Star } from 'lucide-react';
import { achievements } from '../data/portfolio';

const STYLES = {
  amber: {
    outer:  'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200',
    icon:   'bg-amber-100 text-amber-600 border-amber-200',
    badge:  'bg-amber-100 text-amber-700 border-amber-200',
    glow:   'shadow-amber-100',
    bar:    'from-amber-400 to-yellow-400',
  },
  blue: {
    outer:  'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200',
    icon:   'bg-blue-100 text-blue-600 border-blue-200',
    badge:  'bg-blue-100 text-blue-700 border-blue-200',
    glow:   'shadow-blue-100',
    bar:    'from-blue-400 to-indigo-400',
  },
};

const ICONS = {
  trophy: Trophy,
  medal:  Medal,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-badge inline-flex">Achievements</div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Awards & Recognition
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Competitive wins that reflect passion for technology and problem-solving.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {achievements.map((item, i) => {
            const style  = STYLES[item.color] || STYLES.amber;
            const Icon   = ICONS[item.icon]   || Trophy;
            return (
              <div
                key={i}
                className={`relative border rounded-2xl p-7 card-hover shadow-lg ${style.outer} ${style.glow} overflow-hidden`}
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${style.bar}`} />

                {/* Winner ribbon */}
                <div className={`absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full border text-[10px] font-bold ${style.badge}`}>
                  <Star className="w-2.5 h-2.5 fill-current" /> WINNER
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center mb-5 shadow-sm ${style.icon}`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 leading-snug mb-2 pr-16">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
