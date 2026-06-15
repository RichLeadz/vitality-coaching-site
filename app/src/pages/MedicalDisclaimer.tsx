export default function MedicalDisclaimer() {
  return (
    <div className="pt-[72px] bg-[#0C0C0A] min-h-[100dvh]">
      <div className="container-custom max-w-[900px] py-20">
        <h1 className="font-display text-[clamp(32px,5vw,56px)] text-[#FFFFFF] mb-4">MEDICAL DISCLAIMER</h1>
        <p className="text-[13px] text-[#9CA3AF] mb-12">Last Updated: May 20, 2026</p>

        <div className="space-y-8 text-[15px] text-[#D1D5DB] leading-relaxed">
          <section>
            <h2 className="text-[18px] text-[#FFFFFF] font-semibold mb-3">1. NOT MEDICAL ADVICE</h2>
            <p>The information provided by Vitality Protocol LLC ("we," "us," or "our") on this website and through our coaching services is for informational and educational purposes only. Nothing on this website or communicated during coaching sessions constitutes medical advice, diagnosis, or treatment.</p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#FFFFFF] font-semibold mb-3">2. NO DOCTOR-PATIENT RELATIONSHIP</h2>
            <p>Your engagement with Vitality Protocol LLC does not create a doctor-patient, physician-patient, or any other healthcare provider relationship. Our coaching services are not a substitute for professional medical advice, diagnosis, or treatment from a licensed physician or other qualified healthcare provider.</p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#FFFFFF] font-semibold mb-3">3. COACHING SCOPE</h2>
            <p>Vitality Protocol LLC provides health coaching services focused on nutrition, fitness, and lifestyle guidance. Our coaches are not licensed physicians, endocrinologists, registered dietitians, or certified medical professionals. We do not:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Diagnose medical conditions</li>
              <li>Prescribe medications or hormone replacement therapy</li>
              <li>Provide medical treatment</li>
              <li>Interpret medical tests as a substitute for a licensed physician</li>
              <li>Offer emergency medical services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] text-[#FFFFFF] font-semibold mb-3">4. ENDOCRINOLOGY COORDINATION</h2>
            <p>While we may recommend that you consult with an endocrinologist or other specialist, and may facilitate introductions to licensed medical professionals, such referrals do not constitute medical advice. All medical decisions, including hormone therapy, medication, and treatment plans, must be made by you in consultation with your licensed healthcare provider.</p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#FFFFFF] font-semibold mb-3">5. CONSULT YOUR PHYSICIAN</h2>
            <p>Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition, hormone levels, autoimmune disease, or before beginning any nutrition, exercise, or supplementation program. Never disregard professional medical advice or delay in seeking it because of information you received from Vitality Protocol LLC.</p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#FFFFFF] font-semibold mb-3">6. INDIVIDUAL RESULTS MAY VARY</h2>
            <p>Testimonials, case studies, and examples shown on this website are individual experiences and do not guarantee that you will achieve the same or similar results. Individual health outcomes depend on numerous factors including but not limited to genetics, medical history, adherence to protocols, and individual physiology.</p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#FFFFFF] font-semibold mb-3">7. EMERGENCY MEDICAL ATTENTION</h2>
            <p>If you are experiencing a medical emergency, call 911 immediately or visit your nearest emergency room. Do not rely on this website or our coaching services for emergency medical needs.</p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#FFFFFF] font-semibold mb-3">8. LIMITATION OF LIABILITY</h2>
            <p>To the fullest extent permitted by law, Vitality Protocol LLC shall not be liable for any damages, including but not limited to direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of our website or coaching services.</p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#FFFFFF] font-semibold mb-3">9. QUESTIONS</h2>
            <p>If you have any questions about this Medical Disclaimer, please contact us at coach@vitalityprotocol.co.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
