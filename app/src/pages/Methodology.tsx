import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: '01',
    label: 'PILLAR ONE',
    title: 'REVEAL',
    subtitle: 'The Diagnostic Phase — You Can\'t Fix What You Haven\'t Found',
    body: "Before we touch a weight or write a meal plan, we map your complete hormonal and autoimmune landscape. This isn't a questionnaire. This is a comprehensive diagnostic protocol that most doctors skip.",
    features: [
      'Comprehensive hormone panel analysis (total/free testosterone, estrogen, thyroid T3/T4/TSH, cortisol, DHEA, insulin, SHBG)',
      'Autoimmune trigger identification (inflammatory markers, gut health assessment, food sensitivity review)',
      'Lifestyle audit (sleep architecture, stress profiling, training history, medication interactions)',
      'Deliverable: Your 12-page Vitality Roadmap showing exactly what\'s broken and the precise protocol to fix it',
    ],
    timeline: 'Weeks 1–2',
    img: '/pillar-reveal.jpg',
    color: '#10B981',
  },
  {
    num: '02',
    label: 'PILLAR TWO',
    title: 'RESTORE',
    subtitle: 'The Stabilization Phase — Build the Foundation Before You Build the House',
    body: "You don't start construction on a cracked foundation. Pillar 2 is about stabilizing your endocrine system and reducing systemic inflammation so your body can actually respond to training.",
    features: [
      'Anti-inflammatory nutrition protocol customized to your specific autoimmune condition',
      'Circadian rhythm reset and sleep architecture optimization',
      'Cortisol management and stress protocol',
      'Endocrinologist referral and coordination (when HRT or medication is needed)',
      'Supplement stack based on your actual deficiencies, not trends',
      'Deliverable: Your custom 90-day Restore Protocol with weekly milestones',
    ],
    timeline: 'Weeks 3–6',
    img: '/pillar-restore.jpg',
    color: '#059669',
  },
  {
    num: '03',
    label: 'PILLAR THREE',
    title: 'REBUILD',
    subtitle: 'The Training Phase — Progressive Resistance Without the Flare-ups',
    body: "Finally, the part you've been waiting for. But this isn't a bro-split or CrossFit program. This is inflammation-aware progressive resistance training designed around your autoimmune reality.",
    features: [
      'Periodized training program that accounts for your energy fluctuations and flare patterns',
      'Autoimmune-specific exercise selection (joint-friendly progressions, recovery-optimized splits)',
      'Training timed around your medication schedule and hormone peaks',
      'Weekly program adjustments based on biofeedback (HRV, sleep quality, inflammation markers)',
      'Form coaching via video submission',
      'Deliverable: Your evolving training program, adjusted weekly',
    ],
    timeline: 'Weeks 7–14',
    img: '/pillar-rebuild.jpg',
    color: '#10B981',
  },
  {
    num: '04',
    label: 'PILLAR FOUR',
    title: 'REINFORCE',
    subtitle: 'The Optimization Phase — This Is For Life, Not 12 Weeks',
    body: "The first three pillars get you there. Pillar 4 keeps you there. This is about long-term optimization, ongoing monitoring, and building the systems that make your results permanent.",
    features: [
      'Monthly comprehensive hormone panel tracking',
      'Quarterly strategy adjustments based on new data',
      'Ongoing endocrinology coordination as protocols evolve',
      'Lifestyle integration (travel, stress, life events — maintaining results through real life)',
      'Maintenance training and nutrition protocols',
      'Annual comprehensive reassessment and protocol refresh',
      'Deliverable: Lifetime Vitality System with continuous support',
    ],
    timeline: 'Month 4+ — Ongoing',
    img: '/pillar-reinforce.jpg',
    color: '#10B981',
  },
];

const tierComparison = [
  { feature: 'REVEAL — Full Diagnostic', audit: true, protocol: true, private: true },
  { feature: 'REVEAL — Vitality Roadmap', audit: true, protocol: true, private: true },
  { feature: 'RESTORE — Custom Nutrition', audit: false, protocol: true, private: true },
  { feature: 'RESTORE — Endo Coordination', audit: 'Basic', protocol: true, private: true },
  { feature: 'RESTORE — 90-Day Protocol', audit: false, protocol: true, private: true },
  { feature: 'REBUILD — Training Program', audit: false, protocol: true, private: true },
  { feature: 'REBUILD — Weekly Adjustments', audit: false, protocol: 'App', private: '1:1 Call' },
  { feature: 'REINFORCE — Monthly Labs', audit: false, protocol: true, private: true },
  { feature: 'REINFORCE — Quarterly Strategy', audit: false, protocol: false, private: true },
  { feature: 'REINFORCE — 24/7 Messaging', audit: false, protocol: false, private: true },
  { feature: 'REINFORCE — Annual Refresh', audit: false, protocol: false, private: true },
];

export default function Methodology() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((el) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.fromTo(el.querySelectorAll('.animate-item'), { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out' });
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#0C0C0A]">
        <div className="container-custom text-center">
          <p className="label-upper mb-4">THE SYSTEM</p>
          <h1 className="font-display text-[clamp(32px,8vw,80px)] leading-[0.95] text-[#FFFFFF] mb-6 break-words">
            THE VITALITY PROTOCOL™
          </h1>
          <p className="text-[18px] text-[#D1D5DB] max-w-[640px] mx-auto leading-relaxed mb-8">
            A 4-pillar framework designed specifically for men with autoimmune conditions and hormone dysfunction. Every pillar builds on the last. Skip one, and the whole system collapses.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px] uppercase tracking-[0.08em] text-[#9CA3AF]">
            {pillars.map((p, i) => (
              <span key={i} className="flex items-center gap-4">
                <span className="text-[#10B981] font-semibold">{p.num}</span> <span className="text-[#D1D5DB]">{p.title}</span>
                {i < pillars.length - 1 && <span className="hidden sm:block w-6 h-[1px] bg-[rgba(16,185,129,0.2)]" />}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      {pillars.map((pillar, idx) => (
        <section
          key={pillar.num}
          ref={(el) => { sectionRefs.current[idx] = el; }}
          className={`${idx % 2 === 0 ? 'bg-[#0C0C0A]' : 'bg-[#0F140F]'} section-padding`}
        >
          <div className="container-custom">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative">
                  <span className="absolute -top-8 -left-4 font-display text-[120px] leading-none z-20 pointer-events-none" style={{ color: pillar.num === '02' ? 'rgba(16,185,129,0.25)' : 'rgba(16,185,129,0.15)' }}>
                    {pillar.num}
                  </span>
                  <img src={pillar.img} alt={pillar.title} className="w-full object-cover relative z-10" />
                </div>
              </div>
              <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="animate-item label-upper mb-2" style={{ color: pillar.color }}>{pillar.label}</p>
                <h2 className="animate-item font-display text-[clamp(40px,6vw,80px)] leading-[0.95] text-[#FFFFFF] mb-4">
                  {pillar.title}
                </h2>
                <p className="animate-item text-[20px] font-medium mb-6" style={{ color: pillar.color }}>{pillar.subtitle}</p>
                <p className="animate-item text-[17px] text-[#D1D5DB] leading-relaxed mb-8">{pillar.body}</p>
                <ul className="space-y-3 mb-8">
                  {pillar.features.map((f, i) => (
                    <li key={i} className="animate-item flex items-start gap-3 text-[15px] text-[#FFFFFF] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: pillar.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="animate-item flex items-center gap-2 text-[14px]" style={{ color: pillar.color }}>
                  <Clock size={16} />
                  <span>Timeline: {pillar.timeline}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section ref={(el) => { sectionRefs.current[4] = el; }} className="bg-[#0C0C0A] section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="label-upper mb-4">WHICH PROTOCOL IS RIGHT FOR YOU?</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[1] text-[#FFFFFF]">
              EVERY PILLAR, EVERY TIER
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-[rgba(16,185,129,0.2)]">
                  <th className="text-left py-4 px-4 text-[13px] font-medium uppercase tracking-[0.08em] text-[#9CA3AF]">Feature</th>
                  <th className="text-center py-4 px-4 text-[13px] font-medium uppercase tracking-[0.08em] text-[#D1D5DB]">Vitality Audit</th>
                  <th className="text-center py-4 px-4 text-[13px] font-medium uppercase tracking-[0.08em] text-[#10B981] bg-[rgba(212,168,83,0.05)]">The Protocol</th>
                  <th className="text-center py-4 px-4 text-[13px] font-medium uppercase tracking-[0.08em] text-[#FFFFFF]">Private Vitality</th>
                </tr>
              </thead>
              <tbody>
                {tierComparison.map((row, i) => (
                  <tr key={i} className="border-b border-[rgba(16,185,129,0.08)] hover:bg-[rgba(16,185,129,0.04)] transition-colors">
                    <td className="py-3 px-4 text-[14px] text-[#D1D5DB]">{row.feature}</td>
                    <td className="text-center py-3 px-4">
                      {row.audit === true ? <span className="text-[#10B981]">✓</span> : row.audit === false ? <span className="text-[#9CA3AF]">—</span> : <span className="text-[14px] text-[#D1D5DB]">{row.audit}</span>}
                    </td>
                    <td className="text-center py-3 px-4 bg-[rgba(212,168,83,0.03)]">
                      {row.protocol === true ? <span className="text-[#10B981]">✓</span> : row.protocol === false ? <span className="text-[#9CA3AF]">—</span> : <span className="text-[14px] text-[#D1D5DB]">{row.protocol}</span>}
                    </td>
                    <td className="text-center py-3 px-4">
                      {row.private === true ? <span className="text-[#10B981]">✓</span> : row.private === false ? <span className="text-[#9CA3AF]">—</span> : <span className="text-[14px] text-[#D1D5DB]">{row.private}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block bg-[#10B981] text-[#0C0C0A] text-[14px] font-semibold tracking-[0.04em] uppercase px-10 py-4 hover:bg-[#34D399] transition-all">
              START WITH THE FREE AUDIT
            </Link>
            <p className="text-[14px] text-[#9CA3AF] mt-4">Not sure which tier? The free audit includes a personalized recommendation.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F140F] section-padding">
        <div className="container-custom text-center">
          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.95] text-[#FFFFFF] mb-6">
            READY TO REVEAL WHAT'S BROKEN?
          </h2>
          <p className="text-[18px] text-[#D1D5DB] max-w-[540px] mx-auto mb-10">
            Start with the free Vitality Audit. 5 minutes. Zero commitment. The roadmap to fixing your hormones.
          </p>
          <Link to="/contact" className="inline-block bg-[#10B981] text-[#0C0C0A] text-[14px] font-semibold tracking-[0.04em] uppercase px-12 py-5 hover:bg-[#34D399] transition-all">
            START YOUR FREE AUDIT
          </Link>
        </div>
      </section>
    </div>
  );
}
