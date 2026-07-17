import { Mail, Link2, MapPin, ArrowRight, Send } from 'lucide-react';
import { personal } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-badge inline-flex">Contact</div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Let's Work Together
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            I'm actively looking for opportunities in Full Stack Development and AI/ML Engineering. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CTA Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-blue-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Open to Opportunities</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Whether it's a full-time role, freelance project, or just a conversation — I'd love to hear from you.
              </p>
              <div className="flex items-center gap-2 text-blue-100 text-sm mb-2">
                <MapPin className="w-4 h-4" /> {personal.location}
              </div>
              <div className="flex items-center gap-2 text-blue-100 text-sm">
                <Mail className="w-4 h-4" /> {personal.email}
              </div>
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="mt-8 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-colors shadow-sm"
            >
              Send Me an Email <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Links card */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: <Mail className="w-5 h-5 text-blue-600" />,
                label: 'Email',
                value: personal.email,
                href: `mailto:${personal.email}`,
                bg: 'bg-blue-50 border-blue-200 hover:border-blue-400',
              },
              {
                icon: <Link2 className="w-5 h-5 text-gray-800" />,
                label: 'GitHub',
                value: 'github.com/ManthanNaidu',
                href: personal.github,
                bg: 'bg-gray-50 border-gray-200 hover:border-gray-400',
              },
              {
                icon: <Link2 className="w-5 h-5 text-blue-700" />,
                label: 'LinkedIn',
                value: 'linkedin.com/in/manthan-m-y',
                href: personal.linkedin,
                bg: 'bg-blue-50 border-blue-200 hover:border-blue-400',
              },
            ].map(({ icon, label, value, href, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-2xl border ${bg} bg-white transition-all duration-200 shadow-sm card-hover group`}
              >
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 font-medium">{label}</p>
                  <p className="text-sm text-gray-800 font-semibold truncate">{value}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}

            {/* Availability note */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <p className="text-sm text-emerald-800 font-medium">
                <span className="font-bold">Available for hire</span> — typically responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
