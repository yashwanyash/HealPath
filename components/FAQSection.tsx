
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-emerald-600 transition-colors"
      >
        <span className="font-medium text-slate-700 text-sm">{question}</span>
        <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-4' : 'max-h-0'}`}>
        <p className="text-slate-500 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Is this a free service?",
      answer: "Yes, HealPath is an NGO-funded project. All basic consultations and symptom guidance provided through this portal are free for the community."
    },
    {
      question: "How long until I hear back?",
      answer: "Our goal is to respond to all valid support requests within 24 hours. Emergency cases are prioritized based on symptom detection."
    },
    {
      question: "Can I use this for emergencies?",
      answer: "If you are experiencing life-threatening symptoms (like severe chest pain or difficulty breathing), please call your local emergency number immediately instead of waiting for a response."
    },
    {
      question: "Who reviews my symptoms?",
      answer: "Your initial report is screened by our algorithm and then assigned to a certified volunteer doctor or registered nurse."
    }
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
        <i className="fas fa-question-circle mr-2 text-emerald-500"></i> Frequent Questions
      </h3>
      <div className="space-y-1">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
