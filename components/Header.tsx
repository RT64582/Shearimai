import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'בית' },
    { to: '/courses', text: 'הקורסים' },
    { to: '/wiki', text: 'ויקי המונחים' },
    { to: '/about', text: 'מי אנחנו' },
    { to: '/faq', text: 'שאלות' },
    { to: '/contact', text: 'צור קשר' },
  ];
  
  const linkClass = "px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-colors duration-300";
  const activeLinkClass = "text-white brand-gradient shadow-md";

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="absolute top-2 right-4 text-xs text-slate-500 z-10">בס״ד</div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo layout="horizontal" />
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-baseline space-s-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeLinkClass : 'text-slate-700 hover:text-brand-blue'}`
                  }
                >
                  {link.text}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="hidden md:block">
            <a href="#register" className="brand-gradient text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5">
              הרשמה לקורס חינם
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">פתח תפריט ראשי</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'brand-gradient text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-brand-blue'}`
                }
              >
                {link.text}
              </NavLink>
            ))}
             <a href="#register" onClick={() => setIsMenuOpen(false)} className="block w-full text-center brand-gradient text-white mt-2 px-4 py-2 rounded-md text-base font-medium hover:brightness-110 transition-colors">
              להרשמה
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;