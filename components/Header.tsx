import React from 'react';

const BotIcon: React.FC = () => (
    <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20 ring-1 ring-white/10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8V4H8" />
            <rect x="4" y="12" width="16" height="8" rx="2" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="M12 12v-2" />
            <path d="M12 20v-4" />
            <circle cx="12" cy="8" r="2" />
        </svg>
    </div>
);


const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
            <div className="flex items-center gap-4">
                <BotIcon />
                <h1 className="text-lg font-bold text-white leading-tight tracking-tight">
                    Gemini <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Assistant</span>
                </h1>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;