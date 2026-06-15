import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    badge: { text: 'FREE', bg: '#059669', textColor: '#fff' },
    title: 'VITALITY AUDIT',
    price: '$0',
    period: '',
    desc: 'Your starting point. Before you spend a dollar, get a complete picture of what\'s actually going on with your hormones and autoimmune triggers.',
    features: [
      'Complete hormone panel review (8 markers)',
      'Autoimmune trigger assessment',
      'Inflammation marker analysis',
      'Personalized Vitality Roadmap (12 pages)',
      'Endocrinologist referral guidance',
      'Hormone education content library access',
      'Email support for 14 days post-audit',
    ],
    bestFor: 'Men who want clarity before committing',
    cta: 'START FREE AUDIT',
    ctaStyle: 'secondary' as const,
    payment: '',
    img: '/service-audit.jpg',
  },
  {
    badge: { text: 'MOST POPULAR', bg: '#10B981', textColor: '#0C0C0A' },
    title: 'THE PROTOCOL',
    price: '$997',
    period: '/ 3 MONTHS',
    desc: 'The complete transformation system. Everything in the Audit plus 3 months of full-spectrum coaching across nutrition, training, and hormone optimization.',
    features: [
      'Everything in Vitality Audit',
      'Custom anti-inflammatory nutrition plan',
      'Autoimmune-aware training program (periodized)',
      'Weekly progress check-ins via coaching app',
      'Monthly hormone panel tracking and adjustments',
      'Direct endocrinology coordination',
      'Priority messaging support (48h response)',
      'Form review via video submission',
      'Weekly protocol adjustments based on biofeedback',
    ],
    bestFor: 'Men ready to commit to serious transformation',
    cta: 'APPLY NOW',
    ctaStyle: 'primary' as const,
    payment: 'Payment plan: $349/month × 3',
    img: '/service-protocol.jpg',
    featured: true,
  },
  {
    badge: { text: 'CONCIERGE', bg: 'transparent', textColor: '#10B981', border: '1px solid #10B981' },
    title: 'PRIVATE VITALITY',
    price: '$2,997',
    period: '/ 6 MONTHS',
    desc: 'White-glove 1:1 coaching for men who want maximum results with complete personalization and unwavering accountability.',
    features: [
      'Everything in The Protocol',
      'Weekly 1:1 video coaching calls (45 min)',
      'Fully customized periodization (not templated)',
      'Quarterly comprehensive lab reviews',
      'Priority endocrinology integration',
      '24/7 direct messaging access',
      'Lifetime protocol maintenance plan',
      'Annual reassessment included',
      'Exclusive Private Vitality community access',
      'Emergency protocol adjustments (flare management)',
    ],
    bestFor: 'Men who demand the highest level of personalization',
    cta: 'APPLY FOR PRIVATE VITALITY',
    ctaStyle: 'secondary' as const,
    payment: 'Payment plan: $549/month × 6',
    img: '/service-private.jpg',
  },
];

const excludedItems = [
  'A meal plan that ignores your autoimmune triggers',
  'A training program that causes flares',
  'Generic advice you could find on Reddit',
  'Motivational speeches without actual protocols',
  'A coach who hasn\'t been through it himself',
  'Prescriptions or medical treatment (I coordinate with your endocrinologist, but I don\'t prescribe)',
];

const faqs = [
  { q: 'Do I need to have an autoimmune diagnosis to work with you?', a: "Not necessarily. If you're experiencing symptoms consistent with autoimmune activity alongside hormone dysfunction, the Vitality Audit will help determine whether you should pursue formal diagnosis. Many of my clients come in with 'unexplained' symptoms that labs later clarify." },
  { q: 'Will you prescribe testosterone or other hormones?', a: "No — I'm a coach, not a doctor. What I do is interpret your labs, identify what's off, and coordinate directly with your endocrinologist (or help you find one). I make the recommendations; they write the prescriptions." },
  { q: 'How is this different from a regular personal trainer?', a: "A personal trainer gives you exercises. I give you a complete physiological protocol. Your training program is built around your hormone cycle, your autoimmune limitations, and your inflammation markers. It's not fitness. It's biochemistry-meets-strength." },
  { q: 'What if I\'m in a flare right now?', a: "Then we start with Pillar 2 (Restore) before touching training. The protocol adapts to your current state. I've coached men through active flares — the key is knowing which levers to pull and when." },
  { q: 'How soon will I see results?', a: 'Most clients report improved energy and sleep within 2–3 weeks. Body composition changes typically begin around week 6–8. Hormone panel improvements show at the 3-month mark. This is a protocol, not a quick fix.' },
  { q: 'Do you offer refunds?', a: "The Vitality Audit is free — no refund needed. For paid programs, I offer a 14-day satisfaction guarantee. If you do the work and don't feel we're a fit, I'll refund your investment minus a $150 processing fee." },
  { q: 'Can I upgrade from The Protocol to Private Vitality?', a: 'Absolutely. Many clients start with The Protocol and upgrade when they want more 1:1 attention. I\'ll credit your remaining balance toward Private Vitality.' },
  { q: 'Do you work with clients outside the US?', a: 'Currently, I only work with clients based in the United States. This ensures seamless coordination with US-based endocrinologists, streamlined payment processing, and compliance with domestic healthcare standards. International offerings may be available in the future.' },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((el) => {
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
      <section className="bg-[#0C0C0A] h-[60vh] flex items-center justify-center">
        <div className="container-custom text-center">
          <p className="label-upper mb-4">INVESTMENT</p>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.95] text-[#FFFFFF] mb-6">
            INVEST IN YOURSELF. NOT ANOTHER GYM MEMBERSHIP.
          </h1>
          <p className="text-[18px] text-[#D1D5DB] max-w-[600px] mx-auto">
            Most men waste years and thousands on programs that ignore their hormones. Here's what it actually costs to fix the root cause.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section ref={(el) => { sectionsRef.current[0] = el; }} className="bg-[#0C0C0A] section-padding">
        <div className="container-custom space-y-20">
          {services.map((service, idx) => (
            <div key={idx} className={`animate-item grid lg:grid-cols-[35%_65%] gap-12 items-start ${idx % 2 === 1 ? 'lg:grid-cols-[65%_35%]' : ''}`}>
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <img src={service.img} alt={service.title} className="w-full object-cover" />
              </div>
              <div className={`${service.featured ? 'border-t-[4px] border-t-[#10B981] shadow-emerald -mt-4 pt-8' : ''} ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="inline-block text-[12px] font-medium uppercase tracking-[0.08em] px-3 py-1 mb-6" style={{ background: service.badge.bg, color: service.badge.textColor, border: service.badge.border }}>
                  {service.badge.text}
                </span>
                <h3 className="font-display text-[40px] text-[#FFFFFF] mb-2">{service.title}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className={`font-display text-[56px] ${service.featured ? 'text-[#10B981]' : 'text-[#FFFFFF]'}`}>{service.price}</span>
                  {service.period && <span className="text-[20px] text-[#D1D5DB]">{service.period}</span>}
                </div>
                <p className="text-[16px] text-[#D1D5DB] mb-8">{service.desc}</p>
                <p className="text-[14px] font-medium uppercase tracking-[0.06em] text-[#9CA3AF] mb-4">What's included:</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#FFFFFF]">
                      <Check size={16} className="text-[#10B981] flex-shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
                <p className="text-[14px] mb-6" style={{ color: service.featured ? '#10B981' : '#059669' }}>
                  <span className="font-medium">Best for:</span> {service.bestFor}
                </p>
                <Link
                  to="/contact"
                  className={`inline-block text-[14px] font-semibold tracking-[0.04em] uppercase px-10 py-4 transition-all ${
                    service.ctaStyle === 'primary'
                      ? 'bg-[#10B981] text-[#0C0C0A] hover:bg-[#34D399]'
                      : 'border border-[rgba(16,185,129,0.3)] text-[#FFFFFF] hover:border-[#10B981] hover:text-[#10B981]'
                  }`}
                >
                  {service.cta}
                </Link>
                {service.payment && <p className="text-[13px] text-[#9CA3AF] mt-3">{service.payment}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's NOT Included */}
      <section ref={(el) => { sectionsRef.current[1] = el; }} className="bg-[#0F140F] py-20">
        <div className="container-custom max-w-[800px] text-center">
          <h2 className="animate-item font-display text-[clamp(28px,3vw,48px)] text-[#FFFFFF] mb-10">
            WHAT YOU WON'T GET FROM ME
          </h2>
          <ul className="space-y-4 mb-10">
            {excludedItems.map((item, i) => (
              <li key={i} className="animate-item flex items-start gap-3 text-[16px] text-[#D1D5DB] text-left">
                <X size={18} className="text-[#10B981] flex-shrink-0 mt-1" />{item}
              </li>
            ))}
          </ul>
          <p className="animate-item text-[17px] text-[#FFFFFF] leading-relaxed">
            I only do what works. If it's not evidence-based, autoimmune-aware, and hormone-specific — it's not in my protocol.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section ref={(el) => { sectionsRef.current[2] = el; }} className="bg-[#0C0C0A] section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-16">
            <p className="label-upper mb-4">FAQ</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] text-[#FFFFFF]">
              QUESTIONS YOU'RE PROBABLY ASKING
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="animate-item border border-[rgba(16,185,129,0.1)]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[rgba(16,185,129,0.04)] transition-colors"
                >
                  <span className="text-[16px] text-[#FFFFFF] pr-4">{faq.q}</span>
                  <ChevronDown size={18} className={`text-[#10B981] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[400px]' : 'max-h-0'}`}>
                  <p className="px-5 pb-5 text-[15px] text-[#D1D5DB] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0F140F] section-padding">
        <div className="container-custom text-center">
          <h2 className="font-display text-[clamp(32px,4vw,56px)] text-[#FFFFFF] mb-6">
            STILL HAVE QUESTIONS?
          </h2>
          <p className="text-[18px] text-[#D1D5DB] max-w-[540px] mx-auto mb-10">
            Apply for a free 15-minute clarity call. No pitch, no pressure — just answers.
          </p>
          <Link to="/contact" className="inline-block bg-[#10B981] text-[#0C0C0A] text-[14px] font-semibold tracking-[0.04em] uppercase px-10 py-4 hover:bg-[#34D399] transition-all mb-4">
            BOOK A CLARITY CALL
          </Link>
          <p className="text-[14px] text-[#10B981]">
            <Link to="/contact" className="hover:underline">Or start with the free Vitality Audit →</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
