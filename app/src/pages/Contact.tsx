import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Instagram, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
    program: '',
    diagnosed: '',
    condition: '',
    labs: '',
    frustration: '',
    tried: '',
    whyNow: '',
    source: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo('.contact-animate', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' });
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#0C0C0A] h-[60vh] flex items-center justify-center">
        <div className="container-custom text-center">
          <p className="label-upper mb-4">LET'S TALK</p>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.95] text-[#FFFFFF] mb-6">
            READY TO FIX THIS? LET'S FIGURE OUT YOUR NEXT STEP.
          </h1>
          <p className="text-[18px] text-[#D1D5DB]">
            Two ways to start. Pick the one that fits where you are right now.
          </p>
        </div>
      </section>

      {/* Two Paths */}
      <section ref={sectionRef} className="bg-[#0C0C0A] section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Clarity Call */}
            <div className="contact-animate bg-[#0F140F] border border-[rgba(16,185,129,0.1)] p-10 border-t-[3px] border-t-[#10B981]">
              <Phone size={48} className="text-[#10B981] mb-6" />
              <h2 className="font-display text-[32px] text-[#FFFFFF] mb-4">BOOK A FREE 15-MIN CALL</h2>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-8">
                Not sure which tier fits? Want to ask questions before applying? Book a free 15-minute call. No sales pitch — just straight answers about whether we're a fit.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Where you are right now',
                  'What you\'ve already tried',
                  'Which tier (if any) makes sense',
                  'Whether your goals align with the protocol',
                  'Any questions about the process',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[15px] text-[#FFFFFF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-[#9CA3AF] mb-6">Available Tuesday–Saturday, 10am–6pm EST</p>
              <a
                href="https://calendly.com/richleadz/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#10B981] text-[#0C0C0A] text-[14px] font-semibold tracking-[0.04em] uppercase px-10 py-4 hover:bg-[#34D399] transition-all"
              >
                BOOK MY CALL
              </a>
            </div>

            {/* Application Form */}
            <div className="contact-animate bg-[#0F140F] border border-[rgba(16,185,129,0.1)] p-10">
              {submitted ? (
                <div className="text-center py-20">
                  <h3 className="font-display text-[36px] text-[#FFFFFF] mb-4">APPLICATION RECEIVED</h3>
                  <p className="text-[18px] text-[#D1D5DB] max-w-[400px] mx-auto">
                    I personally review every application. Expect a response within 48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h2 className="font-display text-[32px] text-[#FFFFFF] mb-2">APPLY FOR A PAID PROGRAM</h2>
                    <p className="text-[16px] text-[#D1D5DB] leading-relaxed">
                      Already know which protocol you want? Skip the call and apply directly. I'll review within 48 hours.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <input name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} className="w-full bg-[#0C0C0A] border border-[rgba(16,185,129,0.15)] px-4 py-3 text-[15px] text-[#FFFFFF] placeholder:text-[#9CA3AF] focus:border-[#10B981] focus:outline-none transition-colors" />
                      <input name="email" type="email" placeholder="Email *" required value={formData.email} onChange={handleChange} className="w-full bg-[#0C0C0A] border border-[rgba(16,185,129,0.15)] px-4 py-3 text-[15px] text-[#FFFFFF] placeholder:text-[#9CA3AF] focus:border-[#10B981] focus:outline-none transition-colors" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <input name="age" type="number" placeholder="Age *" required value={formData.age} onChange={handleChange} className="w-full bg-[#0C0C0A] border border-[rgba(16,185,129,0.15)] px-4 py-3 text-[15px] text-[#FFFFFF] placeholder:text-[#9CA3AF] focus:border-[#10B981] focus:outline-none transition-colors" />
                      <input name="phone" type="tel" placeholder="Phone (optional)" value={formData.phone} onChange={handleChange} className="w-full bg-[#0C0C0A] border border-[rgba(16,185,129,0.15)] px-4 py-3 text-[15px] text-[#FFFFFF] placeholder:text-[#9CA3AF] focus:border-[#10B981] focus:outline-none transition-colors" />
                    </div>
                    <select name="program" required value={formData.program} onChange={handleChange} className="w-full bg-[#0C0C0A] border border-[rgba(16,185,129,0.15)] px-4 py-3 text-[15px] text-[#FFFFFF] focus:border-[#10B981] focus:outline-none transition-colors">
                      <option value="">Which program are you interested in? *</option>
                      <option value="protocol">The Protocol ($997/3mo)</option>
                      <option value="private">Private Vitality ($2,997/6mo)</option>
                      <option value="unsure">Not sure — help me decide</option>
                    </select>
                    <select name="diagnosed" required value={formData.diagnosed} onChange={handleChange} className="w-full bg-[#0C0C0A] border border-[rgba(16,185,129,0.15)] px-4 py-3 text-[15px] text-[#FFFFFF] focus:border-[#10B981] focus:outline-none transition-colors">
                      <option value="">Have you been diagnosed with an autoimmune condition? *</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="suspected">Suspected but undiagnosed</option>
                    </select>
                    {formData.diagnosed === 'yes' && (
                      <input name="condition" placeholder="Which autoimmune condition?" value={formData.condition} onChange={handleChange} className="w-full bg-[#0C0C0A] border border-[rgba(16,185,129,0.15)] px-4 py-3 text-[15px] text-[#FFFFFF] placeholder:text-[#9CA3AF] focus:border-[#10B981] focus:outline-none transition-colors" />
                    )}
                    <select name="labs" required value={formData.labs} onChange={handleChange} className="w-full bg-[#0C0C0A] border border-[rgba(16,185,129,0.15)] px-4 py-3 text-[15px] text-[#FFFFFF] focus:border-[#10B981] focus:outline-none transition-colors">
                      <option value="">Have you had recent hormone labs done? *</option>
                      <option value="yes">Yes (within 6 months)</option>
                      <option value="no">No</option>
                      <option value="old">Over 6 months ago</option>
                    </select>
                    <textarea name="frustration" placeholder="What's your biggest frustration with your current health? *" required rows={3} value={formData.frustration} onChange={handleChange} className="w-full bg-[#0C0C0A] border border-[rgba(16,185,129,0.15)] px-4 py-3 text-[15px] text-[#FFFFFF] placeholder:text-[#9CA3AF] focus:border-[#10B981] focus:outline-none transition-colors resize-none" />
                    <textarea name="tried" placeholder="What have you already tried that didn't work? *" required rows={3} value={formData.tried} onChange={handleChange} className="w-full bg-[#0C0C0A] border border-[rgba(16,185,129,0.15)] px-4 py-3 text-[15px] text-[#FFFFFF] placeholder:text-[#9CA3AF] focus:border-[#10B981] focus:outline-none transition-colors resize-none" />
                    <textarea name="whyNow" placeholder="What's motivating you to take action right now?" rows={3} value={formData.whyNow} onChange={handleChange} className="w-full bg-[#0C0C0A] border border-[rgba(16,185,129,0.15)] px-4 py-3 text-[15px] text-[#FFFFFF] placeholder:text-[#9CA3AF] focus:border-[#10B981] focus:outline-none transition-colors resize-none" />
                    <select name="source" value={formData.source} onChange={handleChange} className="w-full bg-[#0C0C0A] border border-[rgba(16,185,129,0.15)] px-4 py-3 text-[15px] text-[#FFFFFF] focus:border-[#10B981] focus:outline-none transition-colors">
                      <option value="">How did you hear about Vitality Protocol?</option>
                      <option value="instagram">Instagram</option>
                      <option value="tiktok">TikTok</option>
                      <option value="youtube">YouTube</option>
                      <option value="referral">Referral</option>
                      <option value="google">Google</option>
                      <option value="other">Other</option>
                    </select>
                    <button type="submit" className="w-full bg-[#10B981] text-[#0C0C0A] text-[14px] font-semibold tracking-[0.04em] uppercase px-10 py-4 hover:bg-[#34D399] transition-all">
                      SUBMIT APPLICATION
                    </button>
                    <p className="text-[13px] text-[#9CA3AF] text-center">
                      I personally review every application. Expect a response within 48 hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-[#0F140F] py-20">
        <div className="container-custom max-w-[900px]">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: Mail, title: 'EMAIL', value: 'coach@vitalityprotocol.co', note: '48h response time' },
              { icon: Instagram, title: 'INSTAGRAM', value: '@vitalityprotocol', note: 'Daily content & DMs' },
              { icon: Clock, title: 'RESPONSE TIME', value: 'Within 48 hours', note: 'Tuesday–Saturday' },
            ].map((item, i) => (
              <div key={i}>
                <item.icon size={28} className="text-[#10B981] mx-auto mb-4" />
                <h4 className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#9CA3AF] mb-2">{item.title}</h4>
                <p className="text-[16px] text-[#FFFFFF] mb-1">{item.value}</p>
                <p className="text-[13px] text-[#D1D5DB]">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#0C0C0A] py-12">
        <div className="container-custom max-w-[800px] text-center">
          <p className="text-[12px] text-[#9CA3AF] leading-relaxed">
            Vitality Protocol is a health coaching service. I am not a licensed physician, endocrinologist, or medical professional. I do not diagnose, treat, or prescribe. All recommendations are educational and should be reviewed with your qualified healthcare provider before implementation. If you are experiencing a medical emergency, call 911 or your local emergency services.
          </p>
        </div>
      </section>
    </div>
  );
}
