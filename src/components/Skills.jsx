import { skills } from '../data/portfolio';

const CATEGORY_COLORS = {
  'Languages':    { bg: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-100',  bar: 'bg-blue-500'   },
  'Full Stack':   { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-100', bar: 'bg-indigo-500' },
  'AI / ML':      { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-100', bar: 'bg-purple-500' },
  'Tools & DevOps': { bg: 'bg-slate-50', text: 'text-slate-700',  border: 'border-slate-200',  bar: 'bg-slate-500'  },
};

function SkillCard({ name, level, colors }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-sm font-medium text-gray-700 min-w-[100px]">{name}</span>
      <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
        <div
          className={`h-full rounded-full ${colors.bar} transition-all duration-700`}
          style={{ width: `${level}%` }}
        />
      </div>
      <span className="text-xs font-semibold text-gray-400 w-8 text-right">{level}%</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-badge inline-flex">Skills</div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Technical Toolkit
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            A broad skill set spanning full-stack development, machine learning, and modern DevOps practices.
          </p>
        </div>

        {/* Skill grids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {Object.entries(skills).map(([category, items]) => {
            const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS['Tools & DevOps'];
            return (
              <div
                key={category}
                className={`rounded-2xl border ${colors.border} ${colors.bg} p-5 card-hover shadow-sm`}
              >
                <h3 className={`text-xs font-bold uppercase tracking-widest ${colors.text} mb-4`}>
                  {category}
                </h3>
                {items.map((skill) => (
                  <SkillCard key={skill.name} {...skill} colors={colors} />
                ))}
              </div>
            );
          })}
        </div>

        {/* Tech tag cloud */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {[
            'Java','Spring Boot','React.js','Python','TensorFlow','Scikit-learn',
            'MySQL','MongoDB','REST API','Hibernate','Pandas','NumPy',
            'Git','Docker','Postman','Streamlit','NLP','XGBoost',
          ].map((tech) => (
            <span
              key={tech}
              className="tag bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-colors cursor-default shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
