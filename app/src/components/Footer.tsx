import { Link } from 'react-router-dom';
import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0C0A] border-t border-[rgba(16,185,129,0.1)]">
      <div className="container-custom pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-[20px] tracking-[0.08em] text-[#FFFFFF]">
              VITALITY PROTOCOL
            </Link>
            <p className="mt-4 text-[14px] text-[#D1D5DB] leading-relaxed max-w-[280px]">
              The Autoimmune-to-Athlete Protocol. Fix your hormones. Build your body. Reclaim your life.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://instagram.com/richleadz" target="_blank" rel="noopener noreferrer" className="text-[#D1D5DB] hover:text-[#10B981] transition-colors">
                Instagram
              </a>
              <a href="https://tiktok.com/@richleadz" target="_blank" rel="noopener noreferrer" className="text-[#D1D5DB] hover:text-[#10B981] transition-colors">
                TikTok
              </a>
              <a href="mailto:coach@vitalityprotocol.co" className="text-[#D1D5DB] hover:text-[#10B981] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#9CA3AF] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Methodology', path: '/methodology' },
                { label: 'Services', path: '/services' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[14px] text-[#D1D5DB] hover:text-[#10B981] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#9CA3AF] mb-6">Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-[14px] text-[#D1D5DB] hover:text-[#10B981] transition-colors">
                  Vitality Audit (Free)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[14px] text-[#D1D5DB] hover:text-[#10B981] transition-colors">
                  The Protocol ($997)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[14px] text-[#D1D5DB] hover:text-[#10B981] transition-colors">
                  Private Vitality ($2,997)
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#9CA3AF] mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:coach@vitalityprotocol.co" className="text-[14px] text-[#D1D5DB] hover:text-[#10B981] transition-colors">
                  coach@vitalityprotocol.co
                </a>
              </li>
              <li>
                <span className="text-[14px] text-[#D1D5DB]">Response time: 48 hours</span>
              </li>
              <li>
                <span className="text-[14px] text-[#D1D5DB]">Tuesday – Saturday</span>
              </li>
              <li>
                <a href="https://instagram.com/richleadz" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#D1D5DB] hover:text-[#10B981] transition-colors">
                  @richleadz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[rgba(16,185,129,0.1)] gap-4">
          <p className="text-[12px] text-[#9CA3AF]">
            © {new Date().getFullYear()} Vitality Protocol LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/medical-disclaimer" className="text-[12px] text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">
              Medical Disclaimer
            </Link>
            <Link to="/privacy-policy" className="text-[12px] text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">
              Privacy Policy
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="text-[#9CA3AF] hover:text-[#10B981] transition-colors p-2"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
