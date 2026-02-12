// Data Definitions
const SYMPTOMS_DB = {
  fever: { label: "Fever", suggestion: "High body temperature detected. Stay hydrated and monitor closely." },
  cough: { label: "Cough", suggestion: "Persistent cough noted. Consider respiratory isolation if severe." },
  headache: { label: "Headache", suggestion: "Head pain reported. Rest in a dark room and reduce screen time." },
  "chest pain": { label: "Chest Pain", suggestion: "CRITICAL: If pain is sharp or heavy, seek immediate emergency help." },
  fatigue: { label: "Fatigue", suggestion: "General exhaustion. Ensure adequate sleep and balanced nutrition." },
};

const FAQS = [
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

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  initUI();
  initForm();
  initFAQs();
  initMobileMenu();
});

function initUI() {
  document.getElementById('current-year').textContent = new Date().getFullYear();
}

function initForm() {
  const form = document.getElementById('support-form');
  const symptomInput = document.getElementById('symptom-input');
  const detectionOutput = document.getElementById('detection-output');
  const formContainer = document.getElementById('form-container');

  // Real-time symptom detection
  symptomInput.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    const detected = Object.keys(SYMPTOMS_DB).filter(key => text.includes(key));

    if (detected.length > 0) {
      let html = `
        <div class="space-y-3 fade-in">
          <p class="text-sm text-slate-700">
            <span class="font-semibold text-emerald-600">Detected Symptoms:</span> ${detected.map(s => SYMPTOMS_DB[s].label).join(', ')}
          </p>
          <div class="text-xs text-slate-500 space-y-1">
            ${detected.map(s => `
              <p class="flex items-start gap-2">
                <i class="fas fa-lightbulb text-amber-500 mt-0.5"></i>
                <span>${SYMPTOMS_DB[s].suggestion}</span>
              </p>
            `).join('')}
          </div>
          <p class="text-xs italic text-slate-400 mt-2">Suggested: Professional consultation recommended.</p>
        </div>
      `;
      detectionOutput.innerHTML = html;
      detectionOutput.classList.remove('italic', 'text-slate-500');
    } else {
      detectionOutput.innerHTML = 'No common symptoms detected yet. Please provide more details in your message.';
      detectionOutput.classList.add('italic', 'text-slate-500');
    }
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('patient-name').value;
    
    // Simulate API call and switch to success view
    formContainer.innerHTML = `
      <div class="text-center py-12 fade-in">
        <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <i class="fas fa-check text-2xl"></i>
        </div>
        <h3 class="text-2xl font-bold text-slate-800 mb-2">Thank you, ${name}!</h3>
        <p class="text-slate-600 mb-6">Our healthcare support team has received your message and will contact you within 24 hours.</p>
        <button id="reset-form" class="text-emerald-600 font-medium hover:underline">
          Send another message
        </button>
      </div>
    `;

    document.getElementById('reset-form').addEventListener('click', () => {
      location.reload(); // Simple way to reset state in vanilla JS app
    });
  });
}

function initFAQs() {
  const container = document.getElementById('faq-accordion');
  
  FAQS.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'faq-item border-b border-slate-100 last:border-0';
    item.innerHTML = `
      <button class="faq-toggle w-full py-4 flex items-center justify-between text-left hover:text-emerald-600 transition-colors">
        <span class="font-medium text-slate-700 text-sm">${faq.question}</span>
        <i class="fas fa-chevron-down text-xs transition-transform duration-300"></i>
      </button>
      <div class="faq-content">
        <p class="text-slate-500 text-sm leading-relaxed">${faq.answer}</p>
      </div>
    `;
    
    item.querySelector('.faq-toggle').addEventListener('click', () => {
      // Close others (optional accordion behavior)
      const allItems = container.querySelectorAll('.faq-item');
      allItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
      
      item.classList.toggle('active');
    });
    
    container.appendChild(item);
  });
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('nav-menu');
  
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('absolute');
    menu.classList.toggle('top-16');
    menu.classList.toggle('left-0');
    menu.classList.toggle('right-0');
    menu.classList.toggle('bg-white');
    menu.classList.toggle('p-4');
    menu.classList.toggle('flex-col');
    menu.classList.toggle('border-b');
    menu.classList.toggle('shadow-xl');
  });

  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        menu.classList.remove('absolute', 'top-16', 'left-0', 'right-0', 'bg-white', 'p-4', 'flex-col', 'border-b', 'shadow-xl');
      }
    });
  });
}