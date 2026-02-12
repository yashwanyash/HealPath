
import React, { useState, useEffect, useCallback } from 'react';

const SYMPTOMS_DB: Record<string, { label: string; suggestion: string }> = {
  fever: { label: "Fever", suggestion: "High body temperature detected. Stay hydrated and monitor closely." },
  cough: { label: "Cough", suggestion: "Persistent cough noted. Consider respiratory isolation if severe." },
  headache: { label: "Headache", suggestion: "Head pain reported. Rest in a dark room and reduce screen time." },
  "chest pain": { label: "Chest Pain", suggestion: "CRITICAL: If pain is sharp or heavy, seek immediate emergency help." },
  fatigue: { label: "Fatigue", suggestion: "General exhaustion. Ensure adequate sleep and balanced nutrition." },
};

const SupportForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [detectedSymptoms, setDetectedSymptoms] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Logic to detect keywords in the message
  useEffect(() => {
    const text = formData.message.toLowerCase();
    const detected = Object.keys(SYMPTOMS_DB).filter(key => text.includes(key));
    setDetectedSymptoms(detected);
  }, [formData.message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Submitting:", formData);
    setIsSubmitted(true);
  };

  // Shared classes for consistent styling: dark background with white text
  const inputClasses = "w-full px-4 py-2 bg-slate-900 text-white border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-500";

  if (isSubmitted) {
    return (
      <div className="text-center py-12 animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-check text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank you, {formData.name}!</h3>
        <p className="text-slate-600 mb-6">Our healthcare support team has received your message and will contact you within 24 hours.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-emerald-600 font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
        <input
          required
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Symptoms / Message</label>
        <textarea
          required
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
          placeholder="e.g., I have been feeling a mild fever and cough for two days..."
        ></textarea>
      </div>

      {/* AI Detection Preview */}
      <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center">
          <i className="fas fa-robot mr-2"></i> Smart Detection Preview
        </h4>
        {detectedSymptoms.length > 0 ? (
          <div className="space-y-3">
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-emerald-600">Detected Symptoms:</span> {detectedSymptoms.map(s => SYMPTOMS_DB[s].label).join(', ')}
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              {detectedSymptoms.map(s => (
                <p key={s} className="flex items-start gap-2">
                  <i className="fas fa-lightbulb text-amber-500 mt-0.5"></i>
                  <span>{SYMPTOMS_DB[s].suggestion}</span>
                </p>
              ))}
            </div>
            <p className="text-xs italic text-slate-400 mt-2">Suggested: Professional consultation recommended.</p>
          </div>
        ) : (
          <p className="text-sm text-slate-500 italic">No common symptoms detected yet. Please provide more details in your message.</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all active:scale-95"
      >
        Submit Support Request
      </button>
      <p className="text-[10px] text-center text-slate-400 uppercase tracking-wide">
        Your data is encrypted and secure.
      </p>
    </form>
  );
};

export default SupportForm;
