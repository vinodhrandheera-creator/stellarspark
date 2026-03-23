import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-background-light">
      <section className="relative bg-darkblue pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309]"></div>
        <div className="absolute inset-0 z-0 tech-mesh opacity-40"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">Privacy Policy</h1>
          <p className="text-blue-100/70 max-w-2xl">Last updated: May 20, 2026</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-gray-900 font-display font-bold">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              At StellarSpark, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
            </p>

            <h2 className="text-gray-900 font-display font-bold mt-12">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              We collect information that you provide directly to us through our contact forms, including your name, email address, and details about your business challenges. We also use cookies to improve your browsing experience and analyze site traffic.
            </p>

            <h2 className="text-gray-900 font-display font-bold mt-12">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We use your information to respond to your inquiries, provide technical recommendations, and improve our services. We do not sell your personal information to third parties.
            </p>

            <h2 className="text-gray-900 font-display font-bold mt-12">4. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration.
            </p>

            <h2 className="text-gray-900 font-display font-bold mt-12">5. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@stellarspark.com" className="text-primary font-bold">hello@stellarspark.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;