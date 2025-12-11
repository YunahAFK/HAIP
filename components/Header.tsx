import React from 'react';
import { ShieldAlert, HelpCircle } from 'lucide-react';

interface HeaderProps {
  onHomeClick: () => void;
  onHelpClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onHomeClick, onHelpClick }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div
          onClick={onHomeClick}
          className="flex items-center cursor-pointer group"
        >
          <span className="ml-3 text-xl font-bold text-slate-800 tracking-tight">
            HAIP <span className="text-slate-400 font-normal hidden sm:inline">| Hazard Awareness</span>
          </span>
        </div>
        <nav className="flex items-center space-x-4">
          <button
            onClick={onHomeClick}
            className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
          >
            Library
          </button>

          {onHelpClick && (
            <>
              <span className="text-slate-300">|</span>
              <button
                onClick={onHelpClick}
                className="flex items-center text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors group"
                title="Restart Tutorial"
              >
                <HelpCircle className="w-4 h-4 mr-1.5 text-slate-400 group-hover:text-brand-500" />
                Help
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};