import React from 'react';

interface LogoProps {
  layout?: 'horizontal' | 'vertical';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ layout = 'vertical', className = '' }) => {
  const ArchIcon = ({ width = "60", height = "52" }) => (
    <svg width={width} height={height} viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoArchGradient" x1="38" y1="2" x2="2" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--brand-teal)"/>
          <stop offset="1" stopColor="var(--brand-blue)"/>
        </linearGradient>
      </defs>
      <path d="M38 19.4681C38 10.3872 30.2533 3 20 3C9.74668 3 2 10.3872 2 19.4681" stroke="url(#logoArchGradient)" strokeWidth="5" strokeLinecap="round"/>
      <rect x="17" y="10" width="6" height="15" rx="3" fill="var(--brand-yellow)"/>
    </svg>
  );

  if (layout === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="flex-shrink-0">
         <ArchIcon width="36" height="31" />
        </div>
        <div>
            <div className="text-2xl font-black leading-none" style={{color: 'var(--brand-dark-blue)'}}>שערים</div>
            <div className="text-[10px] text-slate-600 whitespace-nowrap leading-tight">כלים לצמיחה. מקצוע לחיים.</div>
        </div>
      </div>
    );
  }

  // Vertical layout
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <ArchIcon />
      <div className="text-center -mt-2">
        <h1 className="text-4xl font-black" style={{color: 'var(--brand-dark-blue)'}}>שערים</h1>
        <p className="text-sm text-slate-600 whitespace-nowrap">כלים לצמיחה. מקצוע לחיים.</p>
      </div>
    </div>
  );
};

export default Logo;