import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { wikiTerms } from '../data/wikiTerms';
import { articles } from '../data/articles';

const WikiTermPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const term = wikiTerms.find(t => t.slug === slug);

  const relatedArticles = React.useMemo(() => {
    if (!term) return [];
    
    const keywords = new Set([
      term.hebrewName.toLowerCase(),
      ...term.englishName.toLowerCase().split(/[\s-]+/).filter(s => s.length > 2)
    ]);

    return articles.filter(article => {
      const articleText = `${article.title.toLowerCase()} ${article.summary.toLowerCase()}`;
      return Array.from(keywords).some(keyword => articleText.includes(keyword));
    });
  }, [term]);

  if (!term) {
    return <Navigate to="/wiki" />;
  }
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/wiki" className="inline-block mb-8 text-brand-blue font-semibold hover:underline transition-all duration-300">
            &larr; חזרה לוויקי
          </Link>

          {term.imageUrl && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-2 border-white">
              <img src={term.imageUrl} alt={`איור עבור ${term.hebrewName}`} className="w-full h-auto object-cover" />
            </div>
          )}

          <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-6 md:p-10">
            <header className="border-b border-slate-200 pb-6 mb-6">
              <h1 className="text-4xl md:text-5xl font-black text-brand-dark-blue">{term.hebrewName}</h1>
              <p className="text-lg text-slate-500 mt-1">{term.englishName}</p>
            </header>
            
            <section className="mb-6">
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">🎯 בקצרה</h2>
              <p className="text-xl font-semibold text-brand-dark-blue">{term.shortDescription}</p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">📖 הסבר מפורט</h2>
              <div className="prose prose-lg max-w-none text-slate-700 whitespace-pre-line leading-relaxed">
                {term.longDescription}
              </div>
            </section>
            
            <section className="mb-6">
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">💡 דוגמה מהחיים</h2>
              <div className="text-lg text-slate-800 bg-brand-yellow/10 p-5 rounded-xl border-r-4 border-brand-yellow whitespace-pre-line">{term.example}</div>
            </section>
            
            <section className="mb-6">
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">🔗 קשור גם ל:</h2>
              <div className="flex flex-wrap gap-3">
                {term.relatedTerms.map((related, index) => {
                  const relatedSlug = wikiTerms.find(t => t.hebrewName === related)?.slug;
                  return relatedSlug ? (
                    <Link key={index} to={`/wiki/${relatedSlug}`} className="bg-blue-100/70 text-brand-blue px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-200/80 transition-all duration-300 transform hover:scale-105">
                      {related}
                    </Link>
                  ) : (
                    <span key={index} className="bg-slate-200/70 text-slate-800 px-4 py-1.5 rounded-full text-sm font-semibold">
                      {related}
                    </span>
                  );
                })}
              </div>
            </section>

            <section className="pt-6 border-t border-slate-200">
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">📚 מאמרים קשורים</h2>
              {relatedArticles.length > 0 ? (
                <div className="space-y-4">
                  {relatedArticles.map(article => (
                    <Link 
                      key={article.id} 
                      to={`/blog/${article.slug}`} 
                      className="block p-4 bg-slate-50/70 rounded-lg hover:bg-white/80 transition-colors border-r-4 border-slate-300 hover:border-brand-teal"
                    >
                      <h3 className="font-semibold text-brand-blue">{article.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{article.summary}</p>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 italic">לא נמצאו מאמרים קשורים.</p>
              )}
            </section>

            {term.videoUrl && (
              <section className="pt-6 mt-6 border-t border-slate-200">
                 <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">📺 סרטון הסבר</h2>
                 <div className="aspect-video shadow-lg rounded-xl overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={term.videoUrl}
                    title={`סרטון הסבר על ${term.hebrewName}`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                 </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WikiTermPage;