import { useState, useEffect } from 'react';
import { ArrowDown, Link2, MapPin, Code2, Brain, Camera, Download } from 'lucide-react';
import { personal, stats } from '../data/portfolio';

const ROLES = [
  'Java Developer',
  'AI / ML Engineer',
  'Problem Solver',
  'Full Stack Builder',
];

function Typewriter() {
  const [idx, setIdx]   = useState(0);
  const [text, setText] = useState('');
  const [del, setDel]   = useState(false);

  useEffect(() => {
    const full = ROLES[idx];
    let timeout;
    if (!del && text.length < full.length) {
      timeout = setTimeout(() => setText(full.slice(0, text.length + 1)), 75);
    } else if (!del && text.length === full.length) {
      timeout = setTimeout(() => setDel(true), 1800);
    } else if (del && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (del && text.length === 0) {
      setDel(false);
      setIdx((prev) => (prev + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [text, del, idx]);

  return (
    <span className="gradient-text font-black">
      {text}
      <span className="typewriter-cursor" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #EFF6FF 0%, #F5F3FF 40%, #FFFFFF 100%)' }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,#2563EB 0,#2563EB 1px,transparent 1px,transparent 56px),repeating-linear-gradient(90deg,#2563EB 0,#2563EB 1px,transparent 1px,transparent 56px)' }}
      />

      {/* Floating decorative orbs */}
      <div className="absolute top-24 right-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Floating dots */}
      <div className="absolute top-32 left-16 hidden lg:flex flex-col gap-2 opacity-40">
        <div className="w-2 h-2 rounded-full bg-blue-400 float-1" />
        <div className="w-2 h-2 rounded-full bg-purple-400 float-2" />
        <div className="w-2 h-2 rounded-full bg-cyan-400 float-3" />
      </div>
      <div className="absolute bottom-32 right-16 hidden lg:flex flex-col gap-2 opacity-40">
        <div className="w-2 h-2 rounded-full bg-indigo-400 float-3" />
        <div className="w-2 h-2 rounded-full bg-blue-400 float-1" />
        <div className="w-2 h-2 rounded-full bg-purple-400 float-2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center text-center fade-up">

        {/* Availability badge */}
        {personal.available && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-7 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to Opportunities
          </div>
        )}

        {/* ── Profile photo ───────────────────────────────────────── */}
        <div className="mb-6 group">
          <div className="photo-ring">
            {personal.photo ? (
              <img
                src={personal.photo}
                alt={personal.name}
                className="w-28 h-28 rounded-[18px] object-cover shadow-xl relative z-10"
              />
            ) : (
              <div className="w-28 h-28 rounded-[18px] bg-white flex flex-col items-center justify-center shadow-md relative z-10 overflow-hidden">
                <span className="text-4xl font-black text-blue-600 font-['Sora'] select-none">M</span>
                {/* hover hint */}
                <div className="absolute inset-0 bg-blue-600/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-[18px]">
                  <Camera className="w-5 h-5 text-white mb-1" />
                  <span className="text-white text-[9px] font-bold text-center leading-tight px-2">
                    Add photo<br/>in portfolio.js
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hint shown only when no photo */}
        {!personal.photo && (
          <p className="text-[10px] text-gray-400 -mt-2 mb-4 font-medium">
            📸 Drop your photo at{' '}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono">public/profile.jpg</code>
            {' '}then set{' '}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono">photo: '/profile.jpg'</code>
          </p>
        )}

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black text-gray-900 leading-tight mb-2">
          {personal.name}
        </h1>

        {/* Typewriter tagline */}
        <p className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5 h-8">
          <Typewriter />
        </p>

        {/* Role pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-5">
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold border border-blue-200 shadow-sm">
            <Code2 className="w-3.5 h-3.5" /> Java Developer
          </span>
          <span className="text-gray-300 hidden sm:block">·</span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold border border-indigo-200 shadow-sm">
            <Brain className="w-3.5 h-3.5" /> AI / ML Engineer
          </span>
        </div>

        {/* Bio */}
        <p className="text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed mb-4">
          {personal.bio}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-8">
          <MapPin className="w-3.5 h-3.5" /> {personal.location}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a href="#projects"
            className="btn-glow px-7 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all duration-200 shadow-md">
            View My Work
          </a>
          <a href="#contact"
            className="px-7 py-3 rounded-xl bg-white text-gray-800 font-bold text-sm border border-gray-200 hover:border-blue-300 hover:text-blue-700 transition-all duration-200 shadow-sm">
            Get In Touch
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white text-gray-700 border border-gray-200 hover:border-gray-900 hover:text-gray-900 transition-all duration-200 shadow-sm text-sm font-semibold"
            aria-label="GitHub">
            <Link2 className="w-4 h-4" /> GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-all duration-200 shadow-sm text-sm font-semibold"
            aria-label="LinkedIn">
            <Link2 className="w-4 h-4" /> LinkedIn
          </a>
        </div>

        {/* ── Resume download strip ─────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest w-full text-center mb-1">Download Resume</span>
          <a
            href={personal.resumeJava}
            download="Manthan_Java_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-sm font-bold hover:bg-blue-100 hover:border-blue-400 transition-all duration-200 shadow-sm group"
          >
            <Code2 className="w-4 h-4" />
            Java Full Stack Resume
            <Download className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all" />
          </a>
          <a
            href={personal.resumeML}
            download="Manthan_AIML_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 text-sm font-bold hover:bg-purple-100 hover:border-purple-400 transition-all duration-200 shadow-sm group"
          >
            <Brain className="w-4 h-4" />
            AI / ML Resume
            <Download className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all" />
          </a>
        </div>

        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-0.5 py-5 px-2 hover:bg-blue-50/50 transition-colors">
                <span className="text-2xl font-black gradient-text">{stat.value}{stat.suffix}</span>
                <span className="text-[11px] text-gray-400 font-medium text-center leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <a href="#skills" className="mt-12 flex flex-col items-center gap-1.5 text-gray-400 hover:text-blue-500 transition-colors text-xs font-medium">
          <span>Scroll to explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
