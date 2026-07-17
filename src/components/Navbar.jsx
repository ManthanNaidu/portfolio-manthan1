import { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, ChevronDown, Code2, Brain } from 'lucide-react';
import { personal } from '../data/portfolio';

const navLinks = [
  { label: 'About',       href: '#about'       },
  { label: 'Skills',      href: '#skills'      },
  { label: 'Projects',    href: '#projects'    },
  { label: 'Experience',  href: '#experience'  },
  { label: 'Contact',     href: '#contact'     },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm',
      ].join(' ')}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm font-['Sora']">M</span>
          </div>
          <span className="font-bold text-gray-900 text-sm hidden sm:block">Manthan M Y</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">{link.label}</a>
          ))}
        </div>

        {/* Desktop — Resume dropdown */}
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block" ref={dropRef}>
            <button
              onClick={() => setResumeOpen(!resumeOpen)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resumeOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            {resumeOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden z-50">
                <div className="px-3 py-2 border-b border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Download Resume</p>
                </div>
                <a
                  href={personal.resumeJava}
                  download="Manthan_Java_Resume.pdf"
                  onClick={() => setResumeOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                    <Code2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Java Full Stack</p>
                    <p className="text-[11px] text-gray-400">javaMan.pdf</p>
                  </div>
                  <Download className="w-3.5 h-3.5 text-gray-300 group-hover:text-blue-500 ml-auto" />
                </a>
                <a
                  href={personal.resumeML}
                  download="Manthan_AIML_Resume.pdf"
                  onClick={() => setResumeOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 transition-colors group border-t border-gray-100"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center shrink-0 group-hover:bg-purple-200 transition-colors">
                    <Brain className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">AI / ML Engineer</p>
                    <p className="text-[11px] text-gray-400">Manai.pdf</p>
                  </div>
                  <Download className="w-3.5 h-3.5 text-gray-300 group-hover:text-purple-500 ml-auto" />
                </a>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile resume buttons */}
          <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Download Resume</p>
            <a
              href={personal.resumeJava}
              download="Manthan_Java_Resume.pdf"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold hover:bg-blue-100 transition-colors"
            >
              <Code2 className="w-4 h-4" /> Java Full Stack Resume
              <Download className="w-4 h-4 ml-auto" />
            </a>
            <a
              href={personal.resumeML}
              download="Manthan_AIML_Resume.pdf"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 text-sm font-semibold hover:bg-purple-100 transition-colors"
            >
              <Brain className="w-4 h-4" /> AI / ML Resume
              <Download className="w-4 h-4 ml-auto" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
