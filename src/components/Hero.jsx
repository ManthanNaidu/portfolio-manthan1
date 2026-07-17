import { ArrowDown, Link2, Mail, MapPin, Code2, Brain, Camera } from 'lucide-react';
import { personal, stats } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,#2563EB 0,#2563EB 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#2563EB 0,#2563EB 1px,transparent 1px,transparent 60px)',
        }}
      />

      {/* Soft blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center text-center">

        {/* Availability badge */}
        {personal.available && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to Opportunities
          </div>
        )}

        {/* ── Profile photo / placeholder ───────────────────────────── */}
        <div className="relative mb-6 group">
          {personal.photo ? (
            /* ── Actual photo (set personal.photo = '/profile.jpg' in portfolio.js) ── */
            <img
              src={personal.photo}
              alt={personal.name}
              className="w-28 h-28 rounded-2xl object-cover shadow-xl ring-4 ring-white border border-gray-200"
            />
          ) : (
            /* ── Placeholder shown until you add a photo ── */
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-dashed border-blue-300 flex flex-col items-center justify-center shadow-sm relative overflow-hidden">
              {/* Initials fallback */}
              <span className="text-3xl font-black text-blue-600 font-['Sora'] select-none">
                M
              </span>
              {/* Hover overlay with instruction */}
              <div className="absolute inset-0 bg-blue-600/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl">
                <Camera className="w-5 h-5 text-white mb-1" />
                <span className="text-white text-[9px] font-bold text-center leading-tight px-1">
                  Add photo<br />in portfolio.js
                </span>
              </div>
            </div>
          )}

          {/* Status dot */}
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white shadow-sm" />
        </div>

        {/* How to add photo — small hint text shown only when no photo */}
        {!personal.photo && (
          <p className="text-[10px] text-gray-400 -mt-3 mb-4 font-medium">
            📸 Drop your photo at{' '}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono">public/profile.jpg</code>
            {' '}then set{' '}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono">photo: '/profile.jpg'</code>
            {' '}in portfolio.js
          </p>
        )}

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-3">
          {personal.name}
        </h1>

        {/* Dual role badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold border border-blue-200">
            <Code2 className="w-3.5 h-3.5" /> Java Developer
          </span>
          <span className="text-gray-300 hidden sm:block">·</span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold border border-indigo-200">
            <Brain className="w-3.5 h-3.5" /> AI / ML Engineer
          </span>
        </div>

        {/* Bio */}
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-4">
          {personal.bio}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-8">
          <MapPin className="w-3.5 h-3.5" />
          {personal.location}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-blue-200 hover:shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white text-gray-800 font-semibold text-sm border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 shadow-sm"
          >
            Get In Touch
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-all duration-200 shadow-sm"
            aria-label="GitHub"
          >
            <Link2 className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 shadow-sm"
            aria-label="LinkedIn"
          >
            <Link2 className="w-4 h-4" />
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-px bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-200 w-full max-w-2xl">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 min-w-[100px] flex flex-col items-center gap-0.5 py-4 px-3 bg-white"
            >
              <span className="text-2xl font-black gradient-text">
                {stat.value}{stat.suffix}
              </span>
              <span className="text-xs text-gray-500 font-medium text-center">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <a href="#skills" className="mt-12 flex flex-col items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors text-xs font-medium">
          <span>Scroll down</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
