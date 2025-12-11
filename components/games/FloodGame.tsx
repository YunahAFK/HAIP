
import React from 'react';

export const FloodGame: React.FC = () => {
  return (
    <div className="w-full h-[450px] lg:h-full min-h-[300px] relative rounded-xl overflow-hidden bg-black/80 border border-white/10 shadow-inner group">
      {/* Loading placeholder/background in case iframe takes time */}
      <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm z-0 font-mono animate-pulse">
        Initializing Simulator...
      </div>
      
      <iframe 
        src="https://storm-surge-classroom-flood-simulator-626730958040.us-west1.run.app"
        className="absolute inset-0 w-full h-full border-0 z-10 bg-slate-900"
        title="Storm Surge Simulator"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};
