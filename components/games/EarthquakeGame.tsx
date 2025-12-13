import React from 'react';
import { Play } from 'lucide-react';

interface EarthquakeGameProps {
  onPlayClick?: () => void;
}

export const EarthquakeGame: React.FC<EarthquakeGameProps> = ({ onPlayClick }) => {
  return (
    <div>
     
      {/* Play Button */}
      <button
        onClick={onPlayClick}
        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all group z-10 rounded-lg"
        title="Play Earthquake Simulator"
      >
        <div className="flex flex-col items-center gap-3">
          <div>
            <Play/>
          </div>
          <span className="text-white font-bold text-xs sm:text-sm lg:text-base uppercase tracking-wide">Play Simulator</span>
        </div>
      </button>
    </div>
  );
};
