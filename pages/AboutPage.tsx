import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark-blue mb-4">סיפור שערים</h1>
          <p className="text-xl text-slate-600">הסיפור שלנו פשוט: להפוך את עולם הבינה המלאכותית לנגיש ומובן לכולם.</p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto space-y-12">
          <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">החזון שלנו</h2>
            <blockquote className="text-lg text-slate-700 leading-relaxed border-r-4 border-brand-teal pr-4 italic">
              "ראינו שהעולם משתנה מהר, ושכל מי שלא מכיר בינה מלאכותית ייוותר מאחור. אבל כל ההסברים שמצאנו היו מסובכים, טכניים, ולא מתאימים לציבור שלנו. אז החלטנו ליצור מקום שבו כל אחד - אפילו מי שמעולם לא עסק בטכנולוגיה - יכול ללמוד ולהצליח."
            </blockquote>
          </div>

          <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">השיטה שלנו: "למידה בזקית"</h2>
            <ul className="space-y-4 text-lg text-slate-700">
              <li className="flex items-start">
                <span className="text-brand-teal font-bold text-2xl mr-3 mt-1">✓</span>
                <div><span className="font-semibold text-slate-800">לא שנים של תיאוריה:</span> אנחנו מאמינים בלמידה מהירה ויעילה.</div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-teal font-bold text-2xl mr-3 mt-1">✓</span>
                <div><span className="font-semibold text-slate-800">התמקדות במעשי ושימושי:</span> מהיום הראשון תלמדו כלים שיעזרו לכם בחיים ובעבודה.</div>
              </li>
              <li className="flex items-start">
                 <span className="text-brand-teal font-bold text-2xl mr-3 mt-1">✓</span>
                <div><span className="font-semibold text-slate-800">תרגול אמיתי מהיום הראשון:</span> כל שיעור כולל תרגול מעשי כדי שהחומר ייקלט היטב.</div>
              </li>
              <li className="flex items-start">
                 <span className="text-brand-teal font-bold text-2xl mr-3 mt-1">✓</span>
                <div><span className="font-semibold text-slate-800">ליווי אישי לכל תלמיד:</span> אנחנו כאן בשבילכם, לכל שאלה והתייעצות.</div>
              </li>
            </ul>
          </div>

          <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50 text-center">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">הצוות</h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
              מכללת שערים מובלת על ידי צוות מומחים עם תשוקה אמיתית להוראה וטכנולוגיה. אנו משלבים ניסיון עשיר מהתעשייה עם יכולת להסביר נושאים מורכבים בגובה העיניים, כדי להבטיח שתקבלו את ההכשרה הטובה ביותר.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;