import { useState } from 'react';
import { ExternalLink, GitFork, Star, Code2, Brain } from 'lucide-react';
import { projects } from '../data/portfolio';

const FILTERS = ['All', 'Full Stack', 'AI/ML'];

const TYPE_STYLE = {
  'Full Stack': { bg: 'bg-blue-100',   text: 'text-blue-700'   },
  'AI/ML':      { bg: 'bg-purple-100', text: 'text-purple-700' },
};

const TECH_COLORS = [
  'bg-blue-50 text-blue-700 border-blue-100',
  'bg-indigo-50 text-indigo-700 border-indigo-100',
  'bg-purple-50 text-purple-700 border-purple-100',
  'bg-emerald-50 text-emerald-700 border-emerald-100',
  'bg-amber-50 text-amber-700 border-amber-100',
  'bg-rose-50 text-rose-700 border-rose-100',
  'bg-cyan-50 text-cyan-700 border-cyan-100',
];

function ProjectCard({ project }) {
  const typeStyle = TYPE_STYLE[project.type] || TYPE_STYLE['Full Stack'];
  return (
    <div className="relative bg-white rounded-2xl border border-gray-200 shadow-sm card-hover overflow-hidden flex flex-col">
      {/* Featured ribbon */}
      {project.featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-bold">
          <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" /> Featured
        </div>
      )}

      {/* Card header color band */}
      <div className={`h-1.5 w-full ${project.type === 'AI/ML' ? 'bg-gradient-to-r from-purple-400 to-indigo-500' : 'bg-gradient-to-r from-blue-500 to-indigo-500'}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Type badge */}
        <span className={`self-start inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${typeStyle.bg} ${typeStyle.text}`}>
          {project.type === 'AI/ML' ? <Brain className="w-3 h-3" /> : <Code2 className="w-3 h-3" />}
          {project.type}
        </span>

        {/* Title */}
        <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{project.title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((tech, i) => (
            <span key={tech} className={`tag border ${TECH_COLORS[i % TECH_COLORS.length]}`}>
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
            <GitFork className="w-4 h-4" /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors ml-auto"
            >
              Live Demo <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.type === filter || (filter === 'AI/ML' && p.type === 'AI/ML'));

  return (
    <section id="projects" className="section-pad bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="section-badge inline-flex">Projects</div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            What I've Built
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            A selection of personal and professional projects across full-stack development and AI/ML engineering.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex p-1 rounded-xl bg-white border border-gray-200 shadow-sm gap-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={[
                  'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
                  filter === f
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50',
                ].join(' ')}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
