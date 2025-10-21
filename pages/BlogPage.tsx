import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const BlogPage: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark-blue mb-2">פינת הידע</h1>
          <p className="text-lg text-slate-600">מאמרים ועדכונים מעולם הבינה המלאכותית, בשפה שכולם מבינים.</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {articles.map(article => (
            <Link 
              key={article.id} 
              to={`/blog/${article.slug}`} 
              className="block bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group"
            >
              <div className="overflow-hidden">
                  <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-brand-dark-blue mb-2 group-hover:text-brand-blue transition-colors">{article.title}</h2>
                <p className="text-slate-700 mb-4">{article.summary}</p>
                <span className="font-semibold text-brand-blue group-hover:underline">קרא עוד &larr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;