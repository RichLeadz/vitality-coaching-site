import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Methodology', path: '/methodology' },
  { label: 'Services', path: '/services' },
  { label: 'Results', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0C0C0A]/95 backdrop-blur-xl border-b border-[rgba(16,185,129,0.1)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Vitality Protocol" className="h-10 w-10 object-contain" />
            <span className="font-display text-[20px] tracking-[0.08em] text-[#FFFFFF] hover:text-[#10B981] transition-colors">
              VITALITY PROTOCOL
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[14px] font-medium tracking-[0.06em] transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#10B981]'
                    : 'text-[#D1D5DB] hover:text-[#FFFFFF]'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#10B981]" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#10B981] text-[#0C0C0A] text-[14px] font-semibold tracking-[0.04em] uppercase px-5 py-2.5 hover:bg-[#34D399] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#FFFFFF] p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0C0C0A] transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-display text-[36px] tracking-[0.02em] text-[#FFFFFF] hover:text-[#10B981] transition-colors"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 bg-[#10B981] text-[#0C0C0A] text-[16px] font-semibold tracking-[0.04em] uppercase px-8 py-4"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
}
