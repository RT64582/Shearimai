import React, { useState } from 'react';
import { faqItems } from '../data/faq';
import { FAQItem } from '../types';

const AccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-right flex justify-between items-center py-5 px-6 hover:bg-white/10 focus:outline-none transition-all duration-300"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-brand-dark-blue">{item.question}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-5">
          <p className="text-slate-700 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQPage: React.FC = () => {
  const categories = {
    studies: 'על הלימודים',
    tech: 'על הטכנולוגיה',
    college: 'על המכללה',
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark-blue mb-2">שאלות ותשובות</h1>
          <p className="text-lg text-slate-600">כל מה שרציתם לדעת על הלימודים בשערים.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {Object.entries(categories).map(([key, title]) => (
            <div key={key}>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 border-r-4 border-brand-blue pr-4">{title}</h2>
              <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/50">
                {faqItems.filter(item => item.category === key).map((item, index) => (
                  <AccordionItem key={index} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;