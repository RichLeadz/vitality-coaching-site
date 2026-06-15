import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-label', { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.2 });
      gsap.fromTo('.hero-headline span', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: 'power4.out', delay: 0.4 });
      gsap.fromTo('.hero-sub', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 });
      gsap.fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 1 });
      gsap.fromTo('.hero-trust', { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 1.2 });
      gsap.fromTo('.hero-img', { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 });

      // Problem section
      ScrollTrigger.create({
        trigger: problemRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo('.problem-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
          gsap.fromTo('.problem-body', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 });
          gsap.fromTo('.problem-item', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.4 });
        }
      });

      // Pillars section
      ScrollTrigger.create({
        trigger: pillarsRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo('.pillars-title span', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power3.out' });
          gsap.fromTo('.pillar-card', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.3 });
        }
      });

      // Testimonials
      ScrollTrigger.create({
        trigger: testimonialsRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo('.testi-card', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' });
          gsap.fromTo('.stat-number', { textContent: 0 }, { textContent: (i: number) => [200, 94, 4.9, 12][i], duration: 1.5, ease: 'power2.out', snap: { textContent: 1 }, stagger: 0.1, delay: 0.5 });
        }
      });

      // Services
      ScrollTrigger.create({
        trigger: servicesRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo('.pricing-card', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' });
        }
      });

      // Final CTA
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo('.cta-headline span', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power4.out' });
          gsap.fromTo('.cta-sub', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 });
          gsap.fromTo('.cta-btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.7 });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Section 1: Hero */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0C0C0A]/85" />
        </div>


        <div className="container-custom relative z-10 pt-[72px] grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-[700px]">
            <p className="hero-label label-upper mb-6 opacity-0">THE AUTOIMMUNE-TO-ATHLETE PROTOCOL</p>
            <h1 className="hero-headline font-display text-[clamp(40px,9vw,120px)] leading-[0.9] text-[#FFFFFF] mb-8 break-words">
              {'YOUR BODY ISN\'T BROKEN. YOUR HORMONES ARE SCREAMING.'.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-[0.25em] opacity-0">{word}</span>
              ))}
            </h1>
            <p className="hero-sub text-[18px] text-[#D1D5DB] max-w-[540px] leading-relaxed mb-8 opacity-0">
              I was told to "just manage it" too. After 3 years of battling autoimmune flare-ups and watching my testosterone crater, I built a system that took me from barely functioning to stronger than ever. Now I teach other men to do the same.
            </p>
            <div className="hero-cta opacity-0">
              <Link
                to="/contact"
                className="inline-block bg-[#10B981] text-[#0C0C0A] text-[14px] font-semibold tracking-[0.04em] uppercase px-10 py-4 hover:bg-[#34D399] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                START YOUR VITALITY AUDIT — FREE
              </Link>
              <p className="text-[12px] text-[#9CA3AF] mt-3">No credit card required. 5-minute assessment.</p>
            </div>
            <div className="hero-trust flex items-center gap-3 mt-8 opacity-0">
              <span className="text-[13px] text-[#D1D5DB]">Science-backed coaching for autoimmune and hormone health</span>
            </div>
          </div>
          <div className="hidden lg:block hero-img opacity-0">
            <img src="/hero-portrait.jpg" alt="Coach portrait" className="w-full max-w-[400px] ml-auto object-cover" style={{ maskImage: 'linear-gradient(to right, transparent, black 20%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%)' }} />
          </div>
        </div>
      </section>

      {/* Section 2: Problem */}
      <section ref={problemRef} className="bg-[#0C0C0A] section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-[600px]">
            <p className="label-upper mb-4">THE REAL PROBLEM</p>
            <h2 className="problem-title font-display text-[clamp(28px,5vw,72px)] leading-[0.95] text-[#FFFFFF] mb-8 break-words">
              YOUR DOCTOR SAYS YOU'RE "FINE." YOUR BODY SAYS OTHERWISE.
            </h2>
            <p className="problem-body text-[18px] text-[#D1D5DB] leading-relaxed mb-8">
              You've been to the endocrinologist. You've had the bloodwork. They told you your levels are "within range" while you struggle to get out of bed before noon. You've tried the diets, the supplements, the gym routines — but nothing sticks because nobody addressed the root cause: your hormones are working against you, and your autoimmune condition is the accelerant.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Constant fatigue no matter how much you sleep',
                'Gaining weight despite eating "clean"',
                'Low libido, brain fog, mood swings',
                'Autoimmune flares derailing your progress',
                'Told to "just manage it" one too many times',
              ].map((item, i) => (
                <li key={i} className="problem-item flex items-center gap-3 text-[16px] text-[#FFFFFF]">
                  <Check size={18} className="text-[#10B981] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="problem-item inline-block bg-[#10B981] text-[#0C0C0A] text-[14px] font-semibold tracking-[0.04em] uppercase px-10 py-4 hover:bg-[#34D399] transition-all">
              GET YOUR FREE VITALITY AUDIT
            </Link>
          </div>
          <div className="relative">
            <img src="/about-story.jpg" alt="Transformation" className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Section 3: Pillars */}
      <section ref={pillarsRef} className="bg-[#0F140F] section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="label-upper mb-4">THE VITALITY PROTOCOL</p>
            <h2 className="pillars-title font-display text-[clamp(36px,5vw,72px)] leading-[0.95] text-[#FFFFFF] mb-6">
              {'REVEAL. RESTORE. REBUILD. REINFORCE.'.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-[0.15em]">{word}</span>
              ))}
            </h2>
            <p className="text-[18px] text-[#D1D5DB] max-w-[700px] mx-auto">
              A 4-pillar system designed specifically for men fighting both hormone dysfunction and autoimmune disease. No guesswork. No generic fitness plans. Just a protocol built for your biology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'REVEAL', desc: 'Comprehensive hormone and autoimmune root-cause assessment. We identify exactly what\'s broken and why.', img: '/pillar-reveal.jpg' },
              { num: '02', title: 'RESTORE', desc: 'Stabilize your endocrine function through precision nutrition and lifestyle medicine designed for inflammatory conditions.', img: '/pillar-restore.jpg' },
              { num: '03', title: 'REBUILD', desc: 'Progressive resistance training customized for autoimmune limitations. Build strength without triggering flares.', img: '/pillar-rebuild.jpg' },
              { num: '04', title: 'REINFORCE', desc: 'Long-term optimization with ongoing monitoring, data-driven adjustments, and endocrinology integration.', img: '/pillar-reinforce.jpg' },
            ].map((pillar) => (
              <div key={pillar.num} className="pillar-card group bg-[#0F140F] border border-[rgba(16,185,129,0.1)] p-0 hover:border-[rgba(16,185,129,0.2)] hover:-translate-y-2 transition-all duration-400">
                <div className="h-[200px] overflow-hidden">
                  <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" />
                </div>
                <div className="p-6">
                  <span className="font-display text-[64px] text-[rgba(16,185,129,0.3)] leading-none block mb-2">{pillar.num}</span>
                  <h3 className="font-display text-[28px] text-[#FFFFFF] mb-3">{pillar.title}</h3>
                  <p className="text-[14px] text-[#D1D5DB] leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/methodology" className="inline-flex items-center gap-2 border border-[rgba(16,185,129,0.3)] text-[#FFFFFF] text-[14px] font-semibold tracking-[0.04em] uppercase px-10 py-4 hover:border-[#10B981] hover:text-[#10B981] transition-all">
              EXPLORE THE FULL METHODOLOGY
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials — Awaiting Real Results */}
      <section ref={testimonialsRef} className="bg-[#0C0C0A] section-padding">
        <div className="container-custom">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="label-upper mb-4">CLIENT RESULTS</p>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.95] text-[#FFFFFF] mb-6">
              REAL RESULTS COMING SOON
            </h2>
            <p className="text-[18px] text-[#D1D5DB] leading-relaxed mb-8">
              Vitality Protocol is a new business built on a mission to transform lives. We're currently working with our first cohort of clients, and their results are on the way. Every testimonial you see here in the future will be 100% real — no fabrications, no paid actors, just real men who put in the work.
            </p>
            <div className="bg-[#0F140F] border border-[rgba(16,185,129,0.1)] rounded-xl p-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#10B981] " />
                <span className="text-[14px] text-[#10B981] font-medium uppercase tracking-[0.08em]">In Progress</span>
              </div>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed">
                We're documenting every client's journey. Check back soon, or better yet — <Link to="/testimonials" className="text-[#10B981] hover:underline">visit our Results page</Link> to follow along as real transformations unfold.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/contact" className="inline-block bg-[#10B981] text-[#0C0C0A] text-[14px] font-semibold tracking-[0.04em] uppercase px-10 py-4 hover:bg-[#34D399] transition-all">
                BE ONE OF THE FIRST SUCCESS STORIES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Pricing */}
      <section ref={servicesRef} className="bg-[#0F140F] section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="label-upper mb-4">INVESTMENT</p>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.95] text-[#FFFFFF] mb-4">
              CHOOSE YOUR PATH
            </h2>
            <p className="text-[18px] text-[#D1D5DB] max-w-[600px] mx-auto">
              Start with the free audit. When you're ready, commit to the protocol that fits your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Free Audit */}
            <div className="pricing-card bg-[#0F140F] border border-[rgba(16,185,129,0.1)] p-8">
              <span className="inline-block bg-[#059669] text-white text-[12px] font-medium uppercase tracking-[0.08em] px-3 py-1 mb-6">FREE</span>
              <h3 className="font-display text-[32px] text-[#FFFFFF] mb-2">VITALITY AUDIT</h3>
              <p className="font-display text-[48px] text-[#FFFFFF] mb-4">$0</p>
              <p className="text-[15px] text-[#D1D5DB] mb-8">The starting point. A comprehensive assessment of your hormone health, autoimmune triggers, and current lifestyle.</p>
              <ul className="space-y-3 mb-8">
                {['Complete hormone panel review', 'Autoimmune trigger assessment', 'Personalized Vitality Roadmap', 'Hormone education content', 'Endocrinologist referral guidance'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-[#FFFFFF]">
                    <Check size={16} className="text-[#10B981] flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="block text-center border border-[rgba(16,185,129,0.3)] text-[#FFFFFF] text-[14px] font-semibold tracking-[0.04em] uppercase px-8 py-4 hover:border-[#10B981] hover:text-[#10B981] transition-all">
                START FREE AUDIT
              </Link>
            </div>

            {/* The Protocol - Featured */}
            <div className="pricing-card bg-[#0F140F] border-t-[3px] border-t-[#10B981] shadow-emerald p-8 lg:-translate-y-4">
              <span className="inline-block bg-[#10B981] text-[#0C0C0A] text-[12px] font-semibold uppercase tracking-[0.08em] px-3 py-1 mb-6">MOST POPULAR</span>
              <h3 className="font-display text-[32px] text-[#FFFFFF] mb-2">THE PROTOCOL</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-[48px] text-[#10B981]">$997</span>
                <span className="text-[20px] text-[#D1D5DB]">/ 3 MONTHS</span>
              </div>
              <p className="text-[15px] text-[#D1D5DB] mb-8">The complete transformation system. Nutrition, training, and hormone coordination designed for your specific biology.</p>
              <ul className="space-y-3 mb-8">
                {['Everything in the Audit, plus:', 'Custom anti-inflammatory nutrition plan', 'Autoimmune-aware training program', 'Weekly check-ins via app', 'Monthly hormone panel tracking', 'Direct endocrinology coordination', 'Priority messaging support'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-[#FFFFFF]">
                    <Check size={16} className="text-[#10B981] flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="block text-center bg-[#10B981] text-[#0C0C0A] text-[14px] font-semibold tracking-[0.04em] uppercase px-8 py-4 hover:bg-[#34D399] transition-all">
                APPLY FOR THE PROTOCOL
              </Link>
              <p className="text-[13px] text-[#9CA3AF] text-center mt-3">Payment plan: $349/month × 3</p>
            </div>

            {/* Private Vitality */}
            <div className="pricing-card bg-[#0F140F] border border-[rgba(16,185,129,0.1)] p-8">
              <span className="inline-block border border-[#10B981] text-[#10B981] text-[12px] font-medium uppercase tracking-[0.08em] px-3 py-1 mb-6">CONCIERGE</span>
              <h3 className="font-display text-[32px] text-[#FFFFFF] mb-2">PRIVATE VITALITY</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-[48px] text-[#FFFFFF]">$2,997</span>
                <span className="text-[20px] text-[#D1D5DB]">/ 6 MONTHS</span>
              </div>
              <p className="text-[15px] text-[#D1D5DB] mb-8">White-glove coaching for men who want maximum results with complete personalization and accountability.</p>
              <ul className="space-y-3 mb-8">
                {['Everything in The Protocol, plus:', 'Weekly 1:1 video coaching calls', 'Fully customized periodization', 'Quarterly comprehensive labs', 'Priority endocrinology integration', '24/7 messaging access', 'Lifetime protocol maintenance plan'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-[#FFFFFF]">
                    <Check size={16} className="text-[#10B981] flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="block text-center border border-[rgba(16,185,129,0.3)] text-[#FFFFFF] text-[14px] font-semibold tracking-[0.04em] uppercase px-8 py-4 hover:border-[#10B981] hover:text-[#10B981] transition-all">
                APPLY FOR PRIVATE VITALITY
              </Link>
              <p className="text-[13px] text-[#9CA3AF] text-center mt-3">Payment plan: $549/month × 6</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section ref={ctaRef} className="relative min-h-[100dvh] flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #0F140F 0%, #0C0C0A 100%)' }}>
        <div className="container-custom text-center">
          <h2 className="cta-headline font-display text-[clamp(36px,8vw,120px)] leading-[0.9] text-[#FFFFFF] mb-8 break-words">
            {'STOP MANAGING. START REBUILDING.'.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-[0.2em]">{word}</span>
            ))}
          </h2>
          <p className="cta-sub text-[20px] text-[#D1D5DB] max-w-[600px] mx-auto leading-relaxed mb-10">
            Your body is designed to be strong. Your hormones are designed to work FOR you, not against you. The only question is whether you're ready to do something about it.
          </p>
          <div className="cta-btn">
            <Link to="/contact" className="inline-block bg-[#10B981] text-[#0C0C0A] text-[14px] font-semibold tracking-[0.04em] uppercase px-12 py-5 hover:bg-[#34D399] hover:scale-[1.02] active:scale-[0.98] transition-all">
              START YOUR FREE VITALITY AUDIT
            </Link>
            <p className="text-[13px] text-[#9CA3AF] mt-4">Takes 5 minutes. No credit card. No commitment.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
