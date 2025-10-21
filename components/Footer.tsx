import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--brand-dark-blue)'}} className="text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-right">
            <Logo layout="vertical" />
            <p className="text-slate-400 mt-4 max-w-sm">מכללת שערים מציעה את הדרך המהירה והפשוטה ביותר להיכנס לעולם הבינה המלאכותית, עם קורסים מותאמים אישית, בשפה ברורה וללא צורך בידע מוקדם.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-200">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-slate-400 hover:text-brand-teal transition-colors">הקורסים</Link></li>
              <li><Link to="/wiki" className="text-slate-400 hover:text-brand-teal transition-colors">ויקי המונחים</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-brand-teal transition-colors">מי אנחנו</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-brand-teal transition-colors">שאלות ותשובות</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-brand-teal transition-colors">צור קשר</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-200">יצירת קשר</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="mailto:contact@shearim.ai" className="hover:text-brand-teal transition-colors">contact@shearim.ai</a></li>
              <li><a href="tel:050-1234567" className="hover:text-brand-teal transition-colors">050-1234567</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} כל הזכויות שמורות למכללת שערים.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;