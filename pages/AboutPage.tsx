import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark-blue mb-4">שלום, אנחנו "סיפור שערים"</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            ברוכים הבאים לגישה המהפכנית שלנו ללמידה. אנחנו מאמינים שבכל שער נעול – לידע, למטרה או להבנה – <strong>המפתח הוא תמיד סיפור.</strong>
            <br />
            הגיע הזמן לפצח את הפרדוקס הגדול מכולם: מדוע אנו זוכרים סיפורים לשנים, אך שוכחים חומר לימוד תוך ימים?
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto space-y-12">
          
          <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 border-r-4 border-brand-teal pr-4">השער הסיזיפי: מלכודת המאמץ השגוי</h3>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                כולנו מכירים את התחושה. ה"מאמץ סיזיפי כבד" של לימוד מסורתי הוא מאבק מתיש ומתסכל. זוהי למידה שמרגישה כמו עבודה קשה, אך מותירה אותנו עם הבנה שטחית וזיכרון "מעורפל" שבורח. שיטת השינון מתייחסת למוח כאל מחסן שיש למלא בכוח, ויוצרת רתיעה טבעית וחוסר רצון ללמוד.
              </p>
              <p>
                הבעיה המרכזית היא שהמאמץ הקוגניטיבי הזה, על אף כוונותיו הטובות, פשוט עובד נגד הטבע של המוח. התוצאה היא זיכרון חלקי, שבו אנו אולי זוכרים פרטים בודדים, אך מאבדים את הקשרים ואת התמונה המלאה.
              </p>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 border-r-4 border-brand-teal pr-4">השער האטומי: הכוח האמיתי של המוח</h3>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
               <p>
                הטעות הגדולה ביותר שלנו היא להאשים את הכלי. הבעיה, כפי שמודגש, היא <strong>"לא קיבולת המוח. היא השיטה"</strong>. המוח האנושי אינו מחסן נתונים, הוא "מפלצת אטומית" של עיבוד מידע. הוא מנוע-על, המסוגל לעבד מידע במורכבות בלתי נתפסת.
              </p>
              <p>
                חישבו על פעולה "פשוטה" כמו הקלדה: באותו רגע המוח מנהל הבנת שפה, שליטה מוטורית, זיכרון חוקי דקדוק, שליפת מילים, חשיבה ותיקון שגיאות – וכל זה קורה במקביל ובאופן אוטומטי לחלוטין. הכוח הזה הוא בלתי נתפס, והוא רק מחכה שנלמד להפעיל אותו נכון.
              </p>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 border-r-4 border-brand-teal pr-4">שער הסיפור: המפתח להבנה עמוקה</h3>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                אם המוח הוא מנוע-על, <strong>ה"דרמה סיפורית" היא שפת התכנות שלו.</strong> זוהי התשובה לפרדוקס הזיכרון. במקום לדחוף עובדות יבשות, אנו מזינים למוח את מה שהוא בנוי לעבד: נרטיב.
              </p>
              <p>השיטה שלנו היא הנדסה מדויקת של הבנה:</p>
              <ul className="space-y-4 text-lg text-slate-700 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-brand-teal font-bold text-2xl mr-3 mt-1">✓</span>
                  <div><strong className="font-semibold text-slate-800">דרמה מורכבת:</strong> הסיפור מציג עלילה מרתקת שתופסת את תשומת הלב ללא מאמץ.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal font-bold text-2xl mr-3 mt-1">✓</span>
                  <div><strong className="font-semibold text-slate-800">נקודות עוגן:</strong> בתוך הסיפור שזורים המושגים והרעיונות כנקודות עוגן טבעיות.</div>
                </li>
                <li className="flex items-start">
                   <span className="text-brand-teal font-bold text-2xl mr-3 mt-1">✓</span>
                  <div><strong className="font-semibold text-slate-800">זיכרון מקושר:</strong> המוח יוצר רשת של קשרים רגשיים ולוגיים, ובונה זיכרון עשיר ורב-שכבתי.</div>
                </li>
                <li className="flex items-start">
                   <span className="text-brand-teal font-bold text-2xl mr-3 mt-1">✓</span>
                  <div><strong className="font-semibold text-slate-800">הבנה הוליסטית:</strong> התוצאה אינה רשימת עובדות, אלא הבנה עמוקה של הנושא לטווח ארוך.</div>
                </li>
              </ul>
              <div className="text-lg text-slate-800 bg-brand-yellow/10 p-5 rounded-xl border-r-4 border-brand-yellow mt-6">
                <strong className="block mb-2">דוגמה קונקרטית:</strong>
                <p>
                  בואו ניקח מושג כמו "אלגוריתם". במקום לשנן הגדרה יבשה, אנו מספרים סיפור: "דמיינו שף שמכין עוגה. המתכון שלו, עם השלבים המדויקים, הוא האלגוריתם. כך המחשב עוקב אחר 'מתכונים' כדי להפעיל את Waze". הסיפור הופך את המושג המופשט למשהו חי ומוחשי.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 border-r-4 border-brand-teal pr-4">שער האוטומציה: סיפור הלכה למעשה</h3>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                וכיצד כל הפילוסופיה הזו באה לידי ביטוי בעולם האמיתי? מדריך <strong>"יאללה אוטומציה"</strong> הוא דוגמה מושלמת. המדריך דוחה את גישת הלימוד המסורתית ("לבזבז חודשים על תיאוריה") ומאמץ גישה סיפורית, מבוססת פרויקטים.
              </p>
              <p>
                על ידי מינוף AI לכתיבת הקוד, המדריך מאפשר ללומד להתרכז ב"סיפור" של האוטומציה – מה המטרה? מהם השלבים הלוגיים? – במקום להיאבק בתחביר. <strong>זה חוסך שעות של תסכול, מאפשר התמקדות בלוגיקה העסקית, ומסיר את מחסום הכניסה הטכני שמרתיע רבים.</strong>
              </p>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-4">מה אומרים על השיטה?</h3>
             <blockquote className="text-center">
                <p className="text-lg italic text-slate-700">"תמיד פחדתי מקוד. שיטת הסיפור של 'שערים' פשוט גרמה לזה להרגיש כמו משחק. פתאום הבנתי את הלוגיקה, ולא רק שיננתי פקודות. בניתי את האוטומציה הראשונה שלי תוך שבועיים!"</p>
                <footer className="mt-4 font-semibold text-slate-600">- משה לוי, ירושלים</footer>
            </blockquote>
          </div>

          <div className="text-center pt-8">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">השער הבא הוא שלכם</h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-8">
              האם אתם מוכנים להפסיק לדחוף סלע במעלה ההר ולהתחיל להשתמש במנוע הסילון שלכם?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/courses" className="w-full sm:w-auto brand-gradient text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:brightness-110 transition-all duration-300 transform hover:-translate-y-1">
                צפייה בקורסים שלנו
              </Link>
              <Link to="/contact" className="w-full sm:w-auto bg-white/70 backdrop-blur-sm border border-slate-300 text-slate-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:border-slate-400 transition-all duration-300 transform hover:-translate-y-1">
                יצירת קשר לייעוץ
              </Link>
            </div>
             <p className="mt-12 text-lg text-slate-600 max-w-3xl mx-auto">
                בפעם הבאה שאתם ניצבים מול אתגר, אל תנסו לפרוץ אותו בכוח.
                <br/>
                קחו צעד אחורה, ושאלו את עצמכם: <strong>מה הסיפור כאן?</strong> כי שם, תמיד, נמצא המפתח.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
