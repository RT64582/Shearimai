import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { Course } from '../types';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden flex flex-col border border-white/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-brand-dark-blue mb-2">{course.title}</h3>
        <div className="flex justify-between text-sm text-slate-600 mb-4">
          <span>🕒 {course.duration}</span>
          <span>👥 {course.audience}</span>
        </div>
        
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="space-y-2 text-slate-700 list-disc list-inside pt-4 mt-2 border-t border-slate-200">
            {course.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-center text-sm font-semibold text-slate-600 bg-slate-100/70 hover:bg-slate-200/70 rounded-lg py-2 mt-4 flex items-center justify-center gap-2 transition-colors duration-300"
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? 'הצג פחות' : 'פרטים נוספים'}</span>
          <svg 
            className={`w-5 h-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

      </div>
      <div className="p-6 bg-slate-100/50 flex justify-end items-center mt-auto">
        <Link to="/contact" className="brand-gradient text-white px-6 py-2 rounded-lg font-semibold hover:shadow-md hover:brightness-110 transition-all duration-300">
          להרשמה
        </Link>
      </div>
    </div>
  );
};


const CoursesPage: React.FC = () => {
  const categories = {
    foundation: 'קורסי יסוד',
    practical: 'כלים מעשיים',
    advanced: 'קורסים מתקדמים',
    professional: 'מסלולים מקצועיים',
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark-blue mb-2">מה אפשר ללמוד?</h1>
          <p className="text-lg text-slate-600">בחרו את המסלול שמתאים לכם והתחילו את המסע שלכם בעולם הבינה המלאכותית.</p>
        </div>

        <div className="space-y-12">
          {Object.entries(categories).map(([key, title]) => (
            <div key={key}>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 border-r-4 border-brand-blue pr-4">{title}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {courses.filter(c => c.category === key).map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;