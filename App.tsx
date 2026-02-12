
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SupportForm from './components/SupportForm';
import FAQSection from './components/FAQSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-r from-emerald-600 to-sky-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">HealPath Community Support</h1>
            <p className="text-lg md:text-xl text-emerald-50 opacity-90 mb-8">
              We provide accessible healthcare guidance for families in need. Submit your concerns below, and our team of volunteer professionals will assist you.
            </p>
            <div className="flex justify-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                <i className="fas fa-check-circle mr-2"></i> 24/7 Monitoring
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                <i className="fas fa-user-md mr-2"></i> Expert Advice
              </span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section id="support" className="py-12 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-3">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Patient Support Form</h2>
              <p className="text-slate-500 mb-8">Please describe your symptoms clearly to help our automated system and medical team prioritize your case.</p>
              <SupportForm />
            </div>
          </div>

          {/* FAQ and Info Side */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <h3 className="text-lg font-bold text-emerald-800 mb-4 flex items-center">
                <i className="fas fa-info-circle mr-2"></i> How it works
              </h3>
              <ul className="space-y-4 text-emerald-900/80 text-sm">
                <li className="flex gap-3">
                  <span className="bg-emerald-200 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold">1</span>
                  Fill out your basic contact information and symptoms.
                </li>
                <li className="flex gap-3">
                  <span className="bg-emerald-200 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold">2</span>
                  Our Smart Detection system provides immediate initial context.
                </li>
                <li className="flex gap-3">
                  <span className="bg-emerald-200 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold">3</span>
                  A volunteer medical professional reviews your file within 24 hours.
                </li>
              </ul>
            </div>
            
            <FAQSection />
          </div>
        </section>

        {/* About Us Placeholder */}
        <section id="about" className="py-16 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">About HealPath NGO</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              HealPath was founded with a single mission: to ensure that financial status never stands in the way of healthcare guidance. We operate on the generosity of our donors and the expertise of our volunteer medical network.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">10k+</div>
                <div className="text-sm text-slate-500 uppercase font-semibold">Patients Helped</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">150+</div>
                <div className="text-sm text-slate-500 uppercase font-semibold">Volunteer Doctors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                <div className="text-sm text-slate-500 uppercase font-semibold">Global Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Donate Section Placeholder */}
        <section id="donate" className="py-20 bg-emerald-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
              Your contribution helps us keep this platform running and provides essential medical kits to families in remote areas.
            </p>
            <button className="bg-white text-emerald-700 font-bold px-8 py-3 rounded-full hover:bg-emerald-50 transition-all shadow-xl">
              Make a Donation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
