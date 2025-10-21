
import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import ZapIcon from '../components/icons/ZapIcon';
import TargetIcon from '../components/icons/TargetIcon';
import ClockIcon from '../components/icons/ClockIcon';


const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-100"></div>
        <div className="hero-dots-pattern"></div>
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-brand-teal/20 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-brand-blue/20 blur-3xl"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-black text-brand-dark-blue mb-4">
            <span className="text-gradient">שערים</span> - פותחים לך את השער לעולם הבינה המלאכותית
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-10">למד בינה מלאכותית בשפה שלך, בקצב שלך, בדרך החדשנית ביותר שיש</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/wiki" className="w-full sm:w-auto brand-gradient text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:brightness-110 transition-all duration-300 transform hover:-translate-y-1">
              התחל ללמוד עכשיו
            </Link>
            <Link to="/courses" className="w-full sm:w-auto bg-white/70 backdrop-blur-sm border border-slate-300 text-slate-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:border-slate-400 transition-all duration-300 transform hover:-translate-y-1">
              צפה בקורסים שלנו
            </Link>
          </div>
        </div>
      </section>

      {/* Why Shearim Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark-blue mb-16">למה שערים שונה?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50">
              <div className="w-16 h-16 brand-gradient text-white rounded-xl mx-auto mb-6 flex items-center justify-center">
                <ZapIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">למידה בזק</h3>
              <p className="text-slate-600">"מה שלוקח שנה במקומות אחרים, אצלנו לוקח חודשים"</p>
            </div>
            <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50">
              <div className="w-16 h-16 brand-gradient text-white rounded-xl mx-auto mb-6 flex items-center justify-center">
                <TargetIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">מותאם במיוחד</h3>
              <p className="text-slate-600">"מוסבר בשפה פשוטה, עם דוגמאות מהחיים שלך"</p>
            </div>
            <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50">
              <div className="w-16 h-16 brand-gradient text-white rounded-xl mx-auto mb-6 flex items-center justify-center">
                <ClockIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">גמיש לחלוטין</h3>
              <p className="text-slate-600">"קורסים מוקלטים + שיעורים חיים, תלמד מתי שנוח לך"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-slate-100/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark-blue mb-12">מה תלמד?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.slice(0, 4).map(course => (
              <div key={course.id} className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md text-right border border-white/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brand-blue mb-2">{course.title}</h3>
                <p className="text-slate-600 h-16">{course.description[0]}</p>
                <Link to="/courses" className="text-brand-blue font-semibold hover:underline mt-4 inline-block">לפרטים נוספים &larr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark-blue mb-12">המלצות מתלמידים</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-slate-300/50 flex items-center justify-center text-3xl font-serif text-slate-500">י.כ</div>
              </div>
              <p className="text-lg italic text-slate-700">"הקורס פתח לי את הראש. פתאום אני מבין על מה כולם מדברים, וזה הכל בשפה פשוטה וברורה. ממליץ בחום!"</p>
              <p className="mt-4 font-semibold text-slate-600">- י. כהן, בני ברק</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="register" className="py-20 brand-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">מוכנים להתחיל? הקורס הראשון עליך!</h2>
          <p className="mb-8 max-w-xl mx-auto">השאירו פרטים ונחזור אליכם עם כל המידע על קורס ChatGPT למתחילים - בחינם!</p>
          <form className="max-w-lg mx-auto grid sm:grid-cols-3 gap-4">
            <input type="text" placeholder="שם מלא" className="p-3 rounded-lg text-slate-800 sm:col-span-1 focus:ring-2 focus:ring-brand-yellow focus:outline-none" />
            <input type="email" placeholder="אימייל" className="p-3 rounded-lg text-slate-800 sm:col-span-1 focus:ring-2 focus:ring-brand-yellow focus:outline-none" />
            <button type="submit" className="sm:col-span-1 brand-dark-blue text-white p-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">שלחו לי</button>
          </form>
        </div>
      </section>
    </div>
  );
};

// FIX: Added missing default export.
export default HomePage;
