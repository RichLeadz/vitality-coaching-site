import { Link } from 'react-router-dom';
import { Clock, TrendingUp, Users } from 'lucide-react';

export default function Testimonials() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#0C0C0A] min-h-[70vh] flex items-center justify-center">
        <div className="container-custom text-center">
          <p className="label-upper mb-4">CLIENT RESULTS</p>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.95] text-[#FFFFFF] mb-6">
            REAL RESULTS. NO FAKE REVIEWS.
          </h1>
          <p className="text-[18px] text-[#D1D5DB] max-w-[640px] mx-auto leading-relaxed">
            Every testimonial on this page will be from a real client with real data. We're building this business on transparency and trust — not fabricated marketing.
          </p>
        </div>
      </section>

      {/* Awaiting Results */}
      <section className="bg-[#0F140F] section-padding">
        <div className="container-custom max-w-[900px] mx-auto">
          {/* Status Card */}
          <div className="bg-[#0C0C0A] border border-[rgba(16,185,129,0.1)] rounded-xl p-12 text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#10B981] " />
              <span className="text-[14px] text-[#10B981] font-semibold uppercase tracking-[0.08em]">Protocol In Progress</span>
            </div>
            <h2 className="font-display text-[clamp(28px,4vw,48px)] text-[#FFFFFF] mb-4">
              AWAITING CLIENT RESULTS
            </h2>
            <p className="text-[18px] text-[#D1D5DB] leading-relaxed max-w-[600px] mx-auto mb-8">
              Vitality Protocol is a new business looking to change people's lives. We're currently working with our first cohort of clients and documenting every step of their transformation journey. Real results take real time — and we're committed to showing you the honest, unfiltered outcomes.
            </p>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[500px] mx-auto mb-10">
              No fabricated before-and-afters. No paid testimonials. No borrowed success stories. When you see a result here, it'll be from someone who actually walked the protocol.
            </p>
            <div className="inline-block bg-[#0F140F] border border-[rgba(16,185,129,0.1)] rounded-lg px-8 py-4">
              <p className="text-[14px] text-[#9CA3AF]">
                <Clock size={14} className="inline mr-2 -mt-0.5" />
                First results expected Q3 2026
              </p>
            </div>
          </div>

          {/* What We'll Track */}
          <div className="text-center mb-12">
            <h3 className="font-display text-[32px] text-[#FFFFFF] mb-4">WHAT WE'LL DOCUMENT</h3>
            <p className="text-[16px] text-[#D1D5DB]">Every client result will include verified data points:</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'HORMONE PANELS', desc: 'Before/after lab results with verified markers — total/free testosterone, thyroid, cortisol, and inflammatory markers.' },
              { icon: Users, title: 'BODY COMPOSITION', desc: 'Verified weight, body fat percentage, muscle mass changes, and progress photos (with client permission).' },
              { icon: Clock, title: 'SYMPTOM TRACKING', desc: 'Energy levels, sleep quality, autoimmune flare frequency, joint pain, and libido scores over time.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#0C0C0A] border border-[rgba(16,185,129,0.1)] rounded-xl p-8 hover:border-[rgba(16,185,129,0.2)] transition-all">
                <item.icon size={32} className="text-[#10B981] mb-4" />
                <h4 className="font-display text-[20px] text-[#FFFFFF] mb-3">{item.title}</h4>
                <p className="text-[14px] text-[#D1D5DB] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-[18px] text-[#FFFFFF] mb-6">
              Want to be one of the first success stories featured here?
            </p>
            <Link to="/contact" className="inline-block bg-[#10B981] text-[#0C0C0A] text-[14px] font-semibold tracking-[0.04em] uppercase px-10 py-4 hover:bg-[#34D399] transition-all">
              START YOUR FREE VITALITY AUDIT
            </Link>
            <p className="text-[13px] text-[#9CA3AF] mt-4">
              Be the proof. Start your transformation today.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
