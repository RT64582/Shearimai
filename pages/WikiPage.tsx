import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { wikiTerms } from '../data/wikiTerms';
import { WikiTerm } from '../types';

const WikiPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = {
    foundation: 'מונחי יסוד',
    technical: 'מונחים טכניים בסיסיים',
    tools: 'כלים ופלטפורמות',
    advanced: 'מונחים מתקדמים',
    practice: 'מונחי יישום ופרקטיקה',
  };

  const groupedAndFilteredTerms = useMemo(() => {
    const filtered = wikiTerms.filter(term =>
      term.hebrewName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Group the filtered terms by category
    return filtered.reduce((acc, term) => {
      const category = term.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(term);
      return acc;
    }, {} as Record<string, WikiTerm[]>);

  }, [searchTerm]);


  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark-blue mb-2">מילון שערים לבינה מלאכותית</h1>
          <p className="text-lg text-slate-600">הוויקי המקיף והפשוט ביותר להבנת עולם ה-AI, גם ללא רקע טכני.</p>
        </div>

        <div className="mb-12 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="חפש מונח..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 text-lg bg-white/70 backdrop-blur-sm border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition shadow-sm"
          />
        </div>

        <div className="space-y-12">
           {Object.entries(categories).map(([key, title]) => {
              const termsInCategory = groupedAndFilteredTerms[key as keyof typeof categories] || [];
              if (termsInCategory.length === 0) return null;

              return (
                 <div key={key}>
                    <h2 className="text-3xl font-bold text-slate-800 mb-6 border-r-4 border-brand-blue pr-4">{title}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {termsInCategory.map(term => (
                        <Link to={`/wiki/${term.slug}`} key={term.id} className="block bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-white/50">
                          <h3 className="text-xl font-bold text-brand-blue">{term.hebrewName}</h3>
                          <p className="text-slate-500 text-sm mb-2">{term.englishName}</p>
                          <p className="text-slate-700">{term.shortDescription}</p>
                        </Link>
                      ))}
                    </div>
                 </div>
              );
           })}
        </div>
      </div>
    </div>
  );
};

export default WikiPage;