import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, FlaskConical, Network } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      refs.current.forEach((el) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.fromTo(el.children, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' });
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  const addRef = (el: HTMLElement | null, i: number) => { refs.current[i] = el; };

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/about-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0C0C0A]/80" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <p className="label-upper mb-4">THE COACH</p>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.95] text-[#FFFFFF] mb-6">
            I DIDN'T JUST STUDY THIS. I SURVIVED IT.
          </h1>
          <p className="text-[18px] text-[#D1D5DB] max-w-[500px] mx-auto">
            Most coaches teach what they learned. I teach what I lived.
          </p>
        </div>
      </section>

      {/* My Story */}
      <section ref={(el) => addRef(el, 0)} className="bg-[#0C0C0A] section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img src="/about-story.jpg" alt="Transformation journey" className="w-full object-cover" />
          </div>
          <div>
            <p className="label-upper mb-4">MY JOURNEY</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[1] text-[#FFFFFF] mb-8">
              FROM BEDRIDDEN TO BULLETPROOF
            </h2>
            <div className="space-y-6 text-[17px] text-[#D1D5DB] leading-relaxed">
              <p>Three years ago, I couldn't bench press the bar. My testosterone had cratered to 180 ng/dL. I was 28 years old and my doctor told me I had the hormone profile of a 70-year-old. Meanwhile, my autoimmune condition was flaring every time I tried to train.</p>
              <p>The endocrinologist said my levels were "within range." The personal trainer put me on a program that triggered three flares in two months. The nutritionist gave me a meal plan that made my inflammation worse.</p>
              <p>Nobody connected the dots. So I spent 18 months studying functional endocrinology, autoimmune physiology, and inflammation-specific training protocols. I tested everything on myself. I documented every variable. And slowly, methodically, I rebuilt my body from the cellular level up.</p>
              <p>Today my testosterone sits at 850 ng/dL. I train 5 days a week without a single autoimmune flare. Now I'm taking everything I learned and using it to help other men rebuild themselves — physically and mentally.</p>
            </div>
            <blockquote className="mt-8 pl-6 border-l-[3px] border-[#10B981]">
              <p className="font-accent italic text-[22px] text-[#10B981] leading-relaxed">
                "This isn't theory. It's not something I read in a book. It's what I had to figure out to save my own life."
              </p>
            </blockquote>
            <p className="mt-4 text-[16px] text-[#FFFFFF]">— Your Coach</p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section ref={(el) => addRef(el, 1)} className="bg-[#0F140F] section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="label-upper mb-4">WHY TRUST ME?</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[1] text-[#FFFFFF]">
              CREDENTIALS THAT MATTER
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {[
              { icon: Shield, title: 'PERSONAL TRANSFORMATION', desc: 'Took my own testosterone from 180 to 850 ng/dL while managing autoimmune flares. I\'ve lived every step of this protocol.' },
              { icon: Users, title: 'DEDICATED CLIENT FOCUS', desc: 'I take on a limited number of clients at a time so every protocol gets my full attention. No mass-market programs.' },
              { icon: FlaskConical, title: 'EVIDENCE-BASED PROTOCOL', desc: 'Built on peer-reviewed research in functional endocrinology, autoimmune physiology, and inflammation-specific training science.' },
              { icon: Network, title: 'ENDOCRINOLOGY NETWORK', desc: 'Direct referral network of vetted endocrinologists across 15 states. When you need medical intervention, I know who to call.' },
            ].map((card, i) => (
              <div key={i} className="bg-[#0F140F] border border-[rgba(16,185,129,0.1)] p-8 hover:border-[rgba(16,185,129,0.2)] hover:-translate-y-1 transition-all">
                <card.icon size={32} className="text-[#10B981] mb-4" />
                <h3 className="font-display text-[24px] text-[#FFFFFF] mb-3">{card.title}</h3>
                <p className="text-[15px] text-[#D1D5DB] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section ref={(el) => addRef(el, 2)} className="bg-[#0C0C0A] section-padding">
        <div className="container-custom max-w-[800px] text-center">
          <p className="label-upper mb-4">MY PHILOSOPHY</p>
          <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[1] text-[#FFFFFF] mb-10">
            NO GUESSWORK. NO GURU BS. JUST PROTOCOLS.
          </h2>
          <div className="space-y-6 text-[17px] text-[#D1D5DB] leading-relaxed mb-12">
            <p>I don't do cookie-cutter programs that ignore your autoimmune reality. I don't give you a meal plan and send you on your way. What I do goes deeper than that.</p>
            <p>I build precise, individualized protocols based on your actual biomarkers, your autoimmune condition, and your life constraints. But here's what separates me from every other coach out there — I know that fixing your body is only half the battle. The other half is your mindset.</p>
            <p>I've been in the dark place where your body is betraying you and your mind is spiraling. I know what it's like to feel like giving up. So when I coach you, I'm not just tracking your macros and programming your lifts — I'm helping you rebuild the mental framework to believe you can actually get better. Because you can.</p>
            <p>Physical transformation and mental resilience go hand in hand. You can't fix your hormones without fixing your head. That's the Vitality Protocol.</p>
          </div>
          <Link to="/contact" className="inline-block bg-[#10B981] text-[#0C0C0A] text-[14px] font-semibold tracking-[0.04em] uppercase px-10 py-4 hover:bg-[#34D399] transition-all -glow">
            SEE IF WE'RE A FIT — FREE AUDIT
          </Link>
        </div>
      </section>
    </div>
  );
}
