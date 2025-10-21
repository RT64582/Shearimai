import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark-blue mb-2">יצירת קשר</h1>
          <p className="text-lg text-slate-600">יש לכם שאלה? רוצים להתייעץ? אנחנו כאן בשבילכם.</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50">
            <h2 className="text-2xl font-bold text-brand-dark-blue mb-6">טופס פנייה</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">שם מלא</label>
                <input type="text" id="name" name="name" className="block w-full px-4 py-3 bg-white/80 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">אימייל או טלפון</label>
                <input type="text" id="email" name="email" className="block w-full px-4 py-3 bg-white/80 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">נושא הפנייה</label>
                <input type="text" id="subject" name="subject" className="block w-full px-4 py-3 bg-white/80 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">הודעה</label>
                <textarea id="message" name="message" rows={4} className="block w-full px-4 py-3 bg-white/80 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"></textarea>
              </div>
              <button type="submit" className="w-full brand-gradient text-white py-3 px-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5">
                שליחה
              </button>
            </form>
          </div>

          <div className="md:col-span-2 bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50">
            <h2 className="text-2xl font-bold text-brand-dark-blue mb-6">פרטי קשר</h2>
            <div className="space-y-4 text-lg text-slate-700">
              <p><strong>אימייל:</strong> <a href="mailto:contact@shearim.ai" className="text-brand-blue hover:underline">contact@shearim.ai</a></p>
              <p><strong>טלפון:</strong> <a href="tel:050-1234567" className="text-brand-blue hover:underline">050-1234567</a></p>
              <p><strong>ווטסאפ:</strong> <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">לחצו לשליחת הודעה</a></p>
              <div className="pt-4 mt-4 border-t border-slate-200">
                <h3 className="font-semibold text-slate-800">שעות מענה:</h3>
                <p>ימים א'-ה': 09:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;