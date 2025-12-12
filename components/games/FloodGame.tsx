
import React from 'react';
import { Play } from 'lucide-react';

interface FloodGameProps {
  onPlayClick?: () => void;
}

export const FloodGame: React.FC<FloodGameProps> = ({ onPlayClick }) => {
  return (
    <div className="w-full h-[450px] lg:h-full min-h-[300px] relative rounded-xl overflow-hidden bg-black/80 border border-white/10 shadow-inner group">
      {/* Loading Placeholder/Background */}
      <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm z-0 font-mono animate-pulse">
        Initializing Simulator...
      </div>
      
      {/* Play Button */}
      <button
        onClick={onPlayClick}
        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all group z-10 rounded-lg"
        title="Play Flood Simulator"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white fill-white ml-1" />
          </div>
          <span className="text-white font-bold text-xs sm:text-sm lg:text-base uppercase tracking-wide">Play Simulator</span>
        </div>
      </button>
    </div>
  );
};
