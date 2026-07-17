import { Link2, Mail, Heart } from 'lucide-react';
import { personal } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">M</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">{personal.name}</p>
              <p className="text-xs text-gray-500">Java Full Stack & AI/ML Engineer</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { href: personal.github,   icon: <Link2 className="w-4 h-4" />,   label: 'GitHub'   },
              { href: personal.linkedin, icon: <Link2 className="w-4 h-4" />, label: 'LinkedIn' },
              { href: `mailto:${personal.email}`, icon: <Mail className="w-4 h-4" />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            © {year} {personal.name} · Built with{' '}
            <Heart className="w-3 h-3 inline text-red-500 fill-red-500" />
            {' '}using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
