

import { Lecture, EQStep, FloodScenario } from './types';

export const LECTURES: Lecture[] = [
   {
      id: '1',
      title: 'Earthquake Hazards & Effects',
      description: 'A comprehensive guide to primary and secondary earthquake hazards, including ground shaking, liquefaction, and tsunamis.',
      topic: 'Earthquake',
      imageUrl: '/19e4a3c9-78f1-48f6-8d76-327cee5077d3.jpg',
      readTime: 10,
      difficulty: 'Intermediate',
      objectives: [
         'Identify various potential earthquake hazards',
         'Analyze the effects of different earthquake hazards',
         'Understand the difference between primary and secondary hazards',
         'Recognize real-world examples of historical earthquake damage'
      ],
      competencies: [
         'Hazard Identification',
         'Risk Analysis',
         'Disaster Resilience'
      ],
      gameType: 'earthquake-sim',
      decisionGame: [
         {
            id: 'dg-eq-1',
            title: 'Classroom Crisis',
            scenario: 'You are in a classroom on the 3rd floor when the building starts shaking violently. Debris begins to fall from the ceiling.',
            options: [
               {
                  label: 'Run immediately to the nearest exit and stairs.',
                  isCorrect: false,
                  feedback: 'Running during strong shaking puts you at high risk of falling or being hit by debris. Stairs may also be compromised.'
               },
               {
                  label: 'Drop, Cover, and Hold On under a sturdy desk.',
                  isCorrect: true,
                  feedback: 'Correct! This protects you from falling objects and structural failure until the shaking stops.'
               }
            ]
         },
         {
            id: 'dg-eq-2',
            title: 'Coastal Warning',
            scenario: 'The shaking has stopped. You are at a beach resort and you notice the ocean water receding rapidly, exposing the sea floor.',
            options: [
               {
                  label: 'Walk out to the exposed sand to investigate.',
                  isCorrect: false,
                  feedback: 'Critical Error! Rapid recession of water is a natural sign of an approaching tsunami. You would be in the impact zone.'
               },
               {
                  label: 'Evacuate immediately to high ground.',
                  isCorrect: true,
                  feedback: 'Excellent. Natural signs like receding water often precede a tsunami wave by only minutes. Immediate evacuation saves lives.'
               }
            ]
         },
         {
            id: 'dg-eq-3',
            title: 'Driving Hazard',
            scenario: 'You are driving on a highway when you feel the car shaking uncontrollably, as if you have a flat tire.',
            options: [
               {
                  label: 'Speed up to get home faster.',
                  isCorrect: false,
                  feedback: 'Dangerous. Speeding reduces control and you might encounter collapsed bridges or road ruptures ahead.'
               },
               {
                  label: 'Pull over to a safe open area and stop.',
                  isCorrect: true,
                  feedback: 'Correct. Stop away from overpasses, power lines, and buildings. Stay inside the vehicle until shaking stops.'
               }
            ]
         }
      ],
      sections: [
         {
            id: 'melc',
            title: 'Most Essential Learning Competencies',
            content: `
          <div class="flex flex-col items-center justify-center min-h-[40vh] py-10">
             <div class="bg-orange-950/40 border-4 border-orange-500/40 p-10 rounded-[3rem] max-w-5xl w-full text-center backdrop-blur-md shadow-[0_0_60px_rgba(249,115,22,0.2)] hover:scale-[1.02] transition-transform duration-500 group relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] group-hover:bg-orange-500/20 transition-all"></div>
                
                <h3 class="text-3xl md:text-5xl font-russo font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 uppercase mb-12 drop-shadow-xl tracking-wider">
                   Most Essential Learning Competencies
                </h3>
                
                <div class="space-y-8 text-left">
                   <div class="bg-black/30 p-6 rounded-2xl border border-orange-500/20 hover:bg-orange-900/20 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div class="text-xl md:text-2xl text-slate-100 font-chakra font-bold">
                         Identify various potential earthquake hazards.
                      </div>
                      <span class="bg-orange-600 text-white px-4 py-2 rounded-lg font-mono text-sm font-bold tracking-widest shadow-lg whitespace-nowrap">
                         DRR11/12-If-g-17
                      </span>
                   </div>

                   <div class="bg-black/30 p-6 rounded-2xl border border-orange-500/20 hover:bg-orange-900/20 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div class="text-xl md:text-2xl text-slate-100 font-chakra font-bold">
                         Analyze the effects of the different earthquake hazards.
                      </div>
                      <span class="bg-orange-600 text-white px-4 py-2 rounded-lg font-mono text-sm font-bold tracking-widest shadow-lg whitespace-nowrap">
                         DRR11/12-If-g-19
                      </span>
                   </div>
                </div>
             </div>
          </div>
        `
         },
         {
            id: 'objectives',
            title: 'Learning Objectives',
            content: `
          <div class="bg-white/5 p-3 rounded-xl border-l-4 border-orange-500 hover:bg-white/10 transition-all duration-300 shadow-lg">
            <ul class="space-y-6 text-slate-200 font-chakra text-lg md:text-xl">
              <li class="flex items-center group">
                <div class="bg-orange-500/20 p-2 rounded-lg mr-4 group-hover:bg-orange-500/40 group-hover:scale-110 transition-all duration-300">
                   <svg class="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span class="group-hover:translate-x-2 transition-transform duration-300">Recognize real-world examples of historical earthquake damage</span>
              </li>
              <li class="flex items-center group">
                <div class="bg-orange-500/20 p-2 rounded-lg mr-4 group-hover:bg-orange-500/40 group-hover:scale-110 transition-all duration-300">
                   <svg class="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span class="group-hover:translate-x-2 transition-transform duration-300">Learn safety protocols for before, during, and after an earthquake</span>
              </li>
            </ul>
          </div>
        `
         },
         {
            id: 'intro',
            title: 'Introduction',
            content: `
          <div class="flex flex-col items-center justify-center min-h-full space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 py-4">
            
            <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-2 group cursor-pointer hover:scale-105 transition-transform duration-500">
              <!-- Animated Visual Icon (Seismic Pulse) -->
              <div class="relative flex-shrink-0">
                <div class="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full group-hover:bg-orange-500/40 transition-all duration-500"></div>
                <svg class="w-16 h-16 md:w-20 md:h-20 text-orange-500 transform group-hover:rotate-12 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>

              <!-- Title -->
              <h3 class="text-5xl font-russo font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 uppercase tracking-tighter drop-shadow-2xl">
                Earthquakes
              </h3>
            </div>
            
            <div class="max-w-6xl mx-auto px-4 w-full">
               <!-- Primary Content Card -->
               <div class="bg-white/5 border-2 border-white/10 p-6 md:p-8 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(249,115,22,0.15)] hover:border-orange-500/30">
                  <div class="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] group-hover:bg-orange-500/20 transition-all"></div>
                  
                  <p class="text-3xl text-slate-100 font-light leading-snug relative z-10 text-center mb-6 font-chakra">
                    <span class="font-bold text-orange-400 font-russo uppercase tracking-wide">Earthquakes</span> are among the most destructive natural hazards on Earth.
                  </p>
                  
                  <p class="text-xl text-slate-300 font-light leading-snug relative z-10 text-center mb-8 font-chakra">
                    Their impacts go beyond ground shaking—they trigger a chain of <span class="font-bold text-white border-b-4 border-orange-500/50 hover:bg-orange-500/20 transition-colors px-1">secondary hazards</span> that pose immediate threats.
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-8">
                     <div class="bg-black/40 p-6 rounded-3xl border border-orange-500/10 hover:border-orange-500/60 transition-all group/badge cursor-default hover:-translate-y-3 duration-300 hover:bg-orange-950/40 hover:shadow-xl">
                        <div class="text-orange-500 font-russo uppercase text-lg mb-2 tracking-widest group-hover/badge:text-white flex items-center justify-center gap-2 group-hover/badge:scale-110 transition-transform">
                           <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                           Predict
                        </div>
                        <div class="text-slate-300 text-sm md:text-base text-center leading-tight font-chakra">Analyze effects to anticipate secondary hazards before they strike.</div>
                     </div>
                     <div class="bg-black/40 p-6 rounded-3xl border border-orange-500/10 hover:border-orange-500/60 transition-all group/badge cursor-default hover:-translate-y-3 duration-300 delay-100 hover:bg-orange-950/40 hover:shadow-xl">
                        <div class="text-orange-500 font-russo uppercase text-lg mb-2 tracking-widest group-hover/badge:text-white flex items-center justify-center gap-2 group-hover/badge:scale-110 transition-transform">
                           <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                           Minimize
                        </div>
                        <div class="text-slate-300 text-sm md:text-base text-center leading-tight font-chakra">Implement safety protocols to drastically reduce casualties.</div>
                     </div>
                     <div class="bg-black/40 p-6 rounded-3xl border border-orange-500/10 hover:border-orange-500/60 transition-all group/badge cursor-default hover:-translate-y-3 duration-300 delay-200 hover:bg-orange-950/40 hover:shadow-xl">
                        <div class="text-orange-500 font-russo uppercase text-lg mb-2 tracking-widest group-hover/badge:text-white flex items-center justify-center gap-2 group-hover/badge:scale-110 transition-transform">
                           <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                           Strengthen
                        </div>
                        <div class="text-slate-300 text-sm md:text-base text-center leading-tight font-chakra">Build resilient infrastructure to withstand future disasters.</div>
                     </div>
                  </div>
                  
                  <div class="flex justify-center opacity-80 hover:opacity-100 transition-opacity">
                      <div class="flex items-center space-x-2 bg-black/40 px-6 py-2 rounded-full border border-white/10 hover:bg-black/60 transition-colors">
                        <span class="text-slate-400 text-xs uppercase tracking-widest font-bold font-russo">Reference</span>
                        <span class="text-orange-500 text-xs font-chakra">PHIVOLCS (2023). Earthquake Hazards.</span>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        `
         },
         {
            id: 'primary',
            title: 'Primary Hazards',
            content: `
          <div class="flex flex-col space-y-8 animate-in fade-in duration-700 py-6">
            
            <div class="relative z-10">              
              <div class="grid grid-cols-1 gap-6 items-center">
                 <div class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-all duration-500 hover:border-orange-500/30 group">
                     <h3 class="text-4xl font-russo font-black text-white mb-2 uppercase tracking-tight drop-shadow-lg">
                        Ground Shaking
                     </h3>   
                     <p class="text-slate-200 leading-relaxed mb-2 font-chakra font-light">
                      The vibration of the ground caused by the sudden release of energy during an earthquake.
                     </p>
                    <div class="h-32 flex items-center justify-center bg-black/60 rounded-2xl overflow-hidden relative border border-white/10 shadow-inner">
                       <style>
                          @keyframes seismic-scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                          }
                       </style>
                       <div class="absolute inset-0 flex items-center w-[200%]" style="animation: seismic-scroll 2s linear infinite">
                          <svg class="w-1/2 h-full text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0 10 H10 L15 8 L20 12 L25 5 L30 15 L35 2 L40 18 L45 8 L50 12 L55 4 L60 16 L65 10 H100" fill="none" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke" />
                          </svg>
                          <svg class="w-1/2 h-full text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0 10 H10 L15 8 L20 12 L25 5 L30 15 L35 2 L40 18 L45 8 L50 12 L55 4 L60 16 L65 10 H100" fill="none" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke" />
                          </svg>
                       </div>
                       
                       <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-0"></div>

                       <span class="text-orange-500 font-russo text-sm z-10 bg-black/90 px-4 py-2 rounded-lg border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.4)] flex items-center gap-3 tracking-wider group-hover:scale-110 transition-transform">
                          <span class="relative flex h-3 w-3">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                          </span>
                          LIVE SEISMOGRAPH
                       </span>
                    </div>
                 </div>

                 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 duration-300">
                       <h4 class="text-xl font-russo text-orange-400 mb-4 uppercase tracking-wide flex items-center">
                          <svg class="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          Seismic Waves
                       </h4>
                       <ul class="space-y-4 font-chakra">
                          <li class="flex items-start group">
                             <div class="bg-orange-500/20 px-3 py-1 rounded mr-3 text-orange-400 font-bold text-xs w-20 text-center mt-0.5 group-hover:scale-110 transition-transform font-russo tracking-wider group-hover:bg-orange-500/40 group-hover:text-white">P-WAVES</div>
                             <p class="text-slate-300 text-base">Primary Waves - fastest, compressional motion. Usually felt as a sudden jolt.</p>
                          </li>
                          <li class="flex items-start group">
                             <div class="bg-red-500/20 px-3 py-1 rounded mr-3 text-red-400 font-bold text-xs w-20 text-center mt-0.5 group-hover:scale-110 transition-transform font-russo tracking-wider group-hover:bg-red-500/40 group-hover:text-white">S-WAVES</div>
                             <p class="text-slate-300 text-base">Secondary Waves - slower but stronger side-to-side motion. Causes significant damage.</p>
                          </li>
                          <li class="flex items-start group">
                             <div class="bg-purple-500/20 px-3 py-1 rounded mr-3 text-purple-400 font-bold text-xs w-20 text-center mt-0.5 group-hover:scale-110 transition-transform font-russo tracking-wider group-hover:bg-purple-500/40 group-hover:text-white">SURFACE</div>
                             <p class="text-slate-300 text-base">Travel along the Earth's Surface.</p>
                          </li>
                       </ul>
                    </div>

                    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 duration-300">
                       <h4 class="text-xl font-russo text-orange-400 mb-4 uppercase tracking-wide flex items-center">
                          <svg class="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                          Intensity Factors
                       </h4>
                       <div class="space-y-6 font-chakra">
                          <div class="group">
                             <div class="flex justify-between text-sm font-bold uppercase mb-2 font-russo">
                                <span class="text-slate-300">Magnitude</span>
                                <span class="text-orange-500 group-hover:scale-110 transition-transform origin-right">Energy Released</span>
                             </div>
                             <div class="w-full bg-white/10 h-2 rounded-full overflow-hidden"><div class="bg-orange-500 h-full w-3/4 shadow-[0_0_10px_orange]"></div></div>
                             <p class="text-slate-300 text-xs mt-1.5">The total amount of energy released at the source.</p>
                          </div>
                          <div class="group">
                             <div class="flex justify-between text-sm font-bold uppercase mb-2 font-russo">
                                <span class="text-slate-300">Distance</span>
                                <span class="text-orange-500 group-hover:scale-110 transition-transform origin-right">Proximity</span>
                             </div>
                             <div class="w-full bg-white/10 h-2 rounded-full overflow-hidden"><div class="bg-orange-500 h-full w-1/2 shadow-[0_0_10px_orange]"></div></div>
                             <p class="text-slate-300 text-xs mt-1.5">Closer to the epicenter = Stronger shaking.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        `
         },
         {
            id: 'effects-analysis',
            title: 'Effects Analysis',
            content: `
          <div class="flex flex-col h-full justify-center">
            <h3 class="text-4xl md:text-5xl font-russo font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-12 text-center uppercase drop-shadow-md tracking-wider">
              Effects Analysis
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 items-stretch h-[40vh]">
              <!-- Card 1: Structural Damage -->
              <div class="group relative bg-black/40 border-2 border-white/10 rounded-3xl overflow-hidden hover:border-orange-500 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_50px_rgba(249,115,22,0.4)] flex flex-col justify-end p-8 cursor-pointer">
                 <div class="absolute inset-0">
                    <img src="earthquake-hazards/pBXuXnF.jpeg" alt="Structural Damage" class="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 group-hover:opacity-80 group-hover:rotate-1" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                 </div>
                 
                 <div class="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <div class="mb-4 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-4 group-hover:translate-y-0 scale-0 group-hover:scale-100 origin-bottom-left">
                        <svg class="w-16 h-16 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 11-4 0 2 2 0 014 0zM12 9a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                     </div>
                     <h4 class="text-3xl font-russo font-black text-white mb-3 uppercase tracking-wide leading-none group-hover:text-orange-100 drop-shadow-md">Structural<br/>Damage</h4>
                     <p class="text-slate-200 text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500 font-chakra font-medium">
                        Weakly designed buildings collapse, especially on <span class="text-orange-400 font-bold bg-black/50 px-2 rounded">soft soils</span>.
                     </p>
                 </div>
              </div>

              <!-- Card 2: Infrastructure Disruption -->
              <div class="group relative bg-black/40 border-2 border-white/10 rounded-3xl overflow-hidden hover:border-red-500 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] flex flex-col justify-end p-8 cursor-pointer">
                 <div class="absolute inset-0">
                    <img src="earthquake-hazards/P2c24Fz.jpeg" alt="Infrastructure Disruption" class="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 group-hover:opacity-80 group-hover:-rotate-1" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                 </div>
                 
                 <div class="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <div class="mb-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-4 group-hover:translate-y-0 scale-0 group-hover:scale-100 origin-bottom-left">
                        <svg class="w-16 h-16 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                     </div>
                     <h4 class="text-3xl font-russo font-black text-white mb-3 uppercase tracking-wide leading-none group-hover:text-red-100 drop-shadow-md">Infrastructure<br/>Disruption</h4>
                     <p class="text-slate-200 text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500 font-chakra font-medium">
                        Roads crack and utilities fail, cutting off <span class="text-red-400 font-bold bg-black/50 px-2 rounded">critical networks</span>.
                     </p>
                 </div>
              </div>

              <!-- Card 3: Psychological Stress -->
              <div class="group relative bg-black/40 border-2 border-white/10 rounded-3xl overflow-hidden hover:border-purple-500 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] flex flex-col justify-end p-8 cursor-pointer">
                 <div class="absolute inset-0">
                    <img src="earthquake-hazards/nieyw10.jpeg" alt="Psychological Stress" class="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 group-hover:opacity-80 grayscale group-hover:grayscale-0" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                 </div>
                 
                 <div class="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <div class="mb-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-4 group-hover:translate-y-0 scale-0 group-hover:scale-100 origin-bottom-left">
                        <svg class="w-16 h-16 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                     </div>
                     <h4 class="text-3xl font-russo font-black text-white mb-3 uppercase tracking-wide leading-none group-hover:text-purple-100 drop-shadow-md">Psychological<br/>Stress</h4>
                     <p class="text-slate-200 text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500 font-chakra font-medium">
                        Fear and trauma affect survivors <span class="text-purple-400 font-bold bg-black/50 px-2 rounded">long after</span> the event.
                     </p>
                 </div>
              </div>
            </div>
          </div>
        `
         },
         {
            id: 'ground-rupture',
            title: 'Ground Rupture',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-320px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full py-2 overflow-y-auto custom-scrollbar pr-2">
                <div class="space-y-3">
                    <div>
                        <h3 class="text-4xl md:text-5xl font-russo font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 uppercase leading-none mb-4 transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Ground Rupture</h3>
                        <p class="text-xl md:text-2xl text-slate-300 font-chakra font-light leading-relaxed">
                        The visible tearing or displacement of the ground surface along an active fault during an earthquake.
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                       <div class="bg-white/5 p-4 rounded-2xl border-2 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group cursor-pointer hover:border-orange-400/50">
                          <div class="text-orange-400 font-bold text-lg uppercase mb-2 group-hover:text-white transition-colors font-russo">Vertical Offset</div>
                          <div class="text-slate-300 text-sm leading-snug group-hover:text-white font-chakra">One side lifts higher than the other, creating steep scarps.</div>
                       </div>
                       <div class="bg-white/5 p-4 rounded-2xl border-2 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group cursor-pointer hover:border-orange-400/50">
                          <div class="text-orange-400 font-bold text-lg uppercase mb-2 group-hover:text-white transition-colors font-russo">Horizontal Shift</div>
                          <div class="text-slate-300 text-sm leading-snug group-hover:text-white font-chakra">Ground moves sideways, severing roads and utility lines.</div>
                       </div>
                    </div>

                    <div class="bg-white/5 border-l-4 border-orange-500 p-3 rounded-r-3xl hover:bg-white/10 transition-colors duration-300 shadow-md">
                        <h4 class="text-lg font-bold text-orange-400 mb-3 uppercase tracking-wide flex items-center font-russo">
                           <span class="w-3 h-3 bg-orange-500 rounded-sm mr-3 animate-spin"></span>
                           Effects Analysis
                        </h4>
                        <ul class="space-y-3 text-slate-200 text-base font-chakra">
                          <li class="flex items-start p-1 rounded-lg hover:bg-orange-500/20 transition-all duration-300 hover:translate-x-2 cursor-default">
                             <span class="text-red-500 mr-3 mt-1 font-bold">►</span>
                             <span><strong>Structural Tearing:</strong> Foundations split apart instantly.</span>
                          </li>
                          <li class="flex items-start p-1 rounded-lg hover:bg-orange-500/20 transition-all duration-300 hover:translate-x-2 cursor-default">
                             <span class="text-red-500 mr-3 mt-1 font-bold">►</span>
                             <span><strong>Uninhabitable Zones:</strong> Permanent no-build zones.</span>
                          </li>
                        </ul>
                    </div>
                    
                    <div class="bg-orange-950/40 border border-orange-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-orange-900/40 transition-colors duration-500 group hover:shadow-lg hover:shadow-orange-900/50">
                        <div class="mr-4 mt-1 bg-orange-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                             <svg class="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-orange-300 font-bold uppercase text-base mb-1 group-hover:text-white font-russo tracking-wide">Safety Protocol: The 5-Meter Rule</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 font-chakra">
                                Permanent structures are strictly prohibited within <span class="text-white font-bold bg-orange-600 px-2 py-0.5 rounded shadow-sm">5 meters</span> on both sides of the active fault trace.
                             </p>
                        </div>
                    </div>
                </div>
             </div>

             <div class="h-auto lg:h-5/6 relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                <div class="space-y-6 px-4 py-6">
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-orange-500/30">
                      <div class="h-48 overflow-hidden relative">
                         <img src="earthquake-hazards/mz2zqMV.jpeg" alt="Bohol Rupture" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://afe-adb.org/sites/default/files/Earthquake%20Risk%20and%20Preparedness%20Presentation%20ADB%2028May2013.pdf" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-orange-500" title="View Source">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-base text-slate-200 font-bold mb-1 font-chakra">Ground rupture in Bohol following the 2013 earthquake.</p>
                      </div>
                   </div>
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-orange-500/30">
                      <div class="h-48 overflow-hidden relative">
                         <img src="earthquake-hazards/nSEuU4D.jpeg" alt="Cotabato Rupture" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://www.youtube.com/watch?v=tSeflXdLrJE" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-orange-500" title="View Source">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-base text-slate-200 font-bold mb-1 font-chakra">Surface rupture observed in North Cotabato after the 2019 earthquake.</p>
                      </div>
                   </div>
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-orange-500/30">
                      <div class="h-48 overflow-hidden relative">
                         <img src="earthquake-hazards/lgVgC4n.jpeg" alt="Negros Fissure" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://rpnradio.com/davao-multiple-ground-rupture-naranasan-sa-kalsada-ng-purok-silad-sa-barangay-macambol-mati/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-orange-500" title="View Source">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-base text-slate-200 font-bold mb-1 font-chakra">Extensive ground fissure in Negros Oriental after the 2012 earthquake.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        `
         },
         {
            id: 'liquefaction',
            title: 'Liquefaction',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-320px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full py-2 overflow-y-auto custom-scrollbar pr-2">
                <div class="space-y-3">
                    <h3 class="text-4xl md:text-5xl font-russo font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-500 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Liquefaction</h3>
                    <p class="text-xl md:text-2xl text-slate-300 mb-8 font-light font-chakra">
                      The process where water-saturated, loose soil behaves like a liquid during intense shaking.
                    </p>

                    <div class="grid grid-cols-3 gap-3 mb-8">
                      <div class="bg-cyan-900/20 border-2 border-cyan-500/30 p-4 rounded-xl text-center hover:bg-cyan-900/40 transition-colors duration-300 hover:-translate-y-2 group cursor-pointer hover:border-cyan-400">
                        <div class="text-3xl mb-2 group-hover:rotate-12 transition-transform duration-500">🏖️</div>
                        <div class="text-sm uppercase font-bold text-cyan-400 tracking-wide group-hover:text-cyan-200 font-russo">Loose Soil</div>
                      </div>
                      <div class="bg-cyan-900/20 border-2 border-cyan-500/30 p-4 rounded-xl text-center hover:bg-cyan-900/40 transition-colors duration-300 hover:-translate-y-2 group cursor-pointer hover:border-cyan-400">
                        <div class="text-3xl mb-2 group-hover:animate-bounce">💧</div>
                        <div class="text-sm uppercase font-bold text-cyan-400 tracking-wide group-hover:text-cyan-200 font-russo">Water</div>
                      </div>
                      <div class="bg-cyan-900/20 border-2 border-cyan-500/30 p-4 rounded-xl text-center hover:bg-cyan-900/40 transition-colors duration-300 hover:-translate-y-2 group cursor-pointer hover:border-cyan-400">
                        <div class="text-3xl mb-2 group-hover:animate-spin">〰️</div>
                        <div class="text-sm uppercase font-bold text-cyan-400 tracking-wide group-hover:text-cyan-200 font-russo">Shaking</div>
                      </div>
                    </div>
                    
                    <div class="space-y-6">
                      <div class="bg-cyan-950/30 border border-cyan-500/20 p-3 rounded-2xl group hover:border-cyan-500/40 transition-all hover:bg-cyan-900/30 hover:shadow-lg">
                        <h4 class="text-xl font-bold text-cyan-400 mb-2 uppercase tracking-wide group-hover:text-cyan-300 font-russo">Critical Impacts</h4>
                        <ul class="space-y-3 text-slate-300 text-lg font-chakra">
                          <li class="flex items-start p-1 rounded hover:bg-white/5 transition-all hover:translate-x-2 cursor-default"><span class="text-cyan-500 mr-2 font-bold">►</span> Building Instability: Structures sink or tilt.</li>
                          <li class="flex items-start p-1 rounded hover:bg-white/5 transition-all hover:translate-x-2 cursor-default"><span class="text-cyan-500 mr-2 font-bold">►</span> Underground Damage: Pipes burst due to soil movement.</li>
                        </ul>
                      </div>
                    </div>

                    <div class="bg-blue-950/40 border border-blue-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-blue-900/40 transition-colors duration-500 group hover:shadow-lg hover:shadow-blue-900/50">
                        <div class="mr-4 mt-1 bg-blue-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                             <svg class="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-blue-300 font-bold uppercase text-base mb-1 group-hover:text-white font-russo tracking-wide">Safety Protocol: Structural Check</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 font-chakra">
                                Evacuate immediately if you notice floor tilting or water seeping through cracks. Move to <span class="text-white font-bold bg-blue-600 px-2 py-0.5 rounded">stable, high ground</span>.
                             </p>
                        </div>
                    </div>
                </div>
             </div>

             <div class="h-auto lg:h-5/6 relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                <div class="space-y-6 px-4 py-6">
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-500/30">
                      <div class="h-48 overflow-hidden relative">
                         <img src="earthquake-hazards/ejDazPW.jpeg" alt="Dagupan Liquefaction" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://www.nzsee.org.nz/db/2011/043.pdf" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-cyan-500" title="View Source">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-base text-slate-200 font-bold mb-1 font-chakra">Buildings sinking and tilting in Dagupan City following the 1990 Luzon earthquake.</p>
                      </div>
                   </div>
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-500/30">
                      <div class="h-48 overflow-hidden relative">
                         <img src="earthquake-hazards/XkdS1Sh.jpeg" alt="Sand Boils" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://www.researchgate.net/figure/Documented-liquefaction-after-the-2022-Mw-70-Northwestern-Luzon-Earthquake-A-An_fig8_368335398" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-cyan-500" title="View Source">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-base text-slate-200 font-bold mb-1 font-chakra">Evidence of liquefaction in the form of sand boils erupting from the ground in Pampanga.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        `
         },
         {
            id: 'landslides',
            title: 'Landslides',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-320px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full py-2 overflow-y-auto custom-scrollbar pr-2">
                <div class="space-y-3">
                    <div>
                       <h3 class="text-4xl md:text-5xl font-russo font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-stone-500 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Landslides</h3>
                       <p class="text-xl md:text-2xl text-slate-300 font-light leading-relaxed font-chakra">
                          Downhill movement of rocks and soil triggered by <span class="text-emerald-400 font-bold">ground shaking</span>, especially in mountainous terrains.
                       </p>
                    </div>

                    <div class="grid grid-cols-1 gap-4">
                       <div class="bg-stone-900/40 border border-stone-600/30 p-5 rounded-2xl flex items-start hover:bg-stone-800/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(120,113,108,0.2)] group cursor-pointer">
                          <div class="bg-stone-500/20 p-3 rounded-lg mr-4 group-hover:bg-stone-500/40 transition-colors">
                             <svg class="w-6 h-6 text-stone-400 group-hover:text-stone-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                          </div>
                          <div>
                             <h4 class="text-stone-300 font-bold uppercase text-lg mb-1 group-hover:text-white font-russo">Burial of Settlements</h4>
                             <p class="text-slate-400 text-lg group-hover:text-slate-300 font-chakra">Entire villages can be buried, as seen in upland communities of Luzon.</p>
                          </div>
                       </div>
                       <div class="bg-stone-900/40 border border-stone-600/30 p-5 rounded-2xl flex items-start hover:bg-stone-800/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(120,113,108,0.2)] group cursor-pointer">
                          <div class="bg-stone-500/20 p-3 rounded-lg mr-4 group-hover:bg-stone-500/40 transition-colors">
                             <svg class="w-6 h-6 text-stone-400 group-hover:text-stone-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                          </div>
                          <div>
                             <h4 class="text-stone-300 font-bold uppercase text-lg mb-1 group-hover:text-white font-russo">Isolation of Areas</h4>
                             <p class="text-slate-400 text-lg group-hover:text-slate-300 font-chakra">Blocked roads hinder rescue and relief operations.</p>
                          </div>
                       </div>
                    </div>

                    <div class="bg-emerald-950/40 border border-emerald-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-emerald-900/40 transition-colors duration-500 group hover:shadow-lg hover:shadow-emerald-900/50">
                        <div class="mr-4 mt-1 bg-emerald-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-125 transition-transform duration-300 group-hover:-rotate-12">
                             <svg class="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3" /></svg>
                        </div>
                        <div>
                             <h4 class="text-emerald-300 font-bold uppercase text-base mb-1 group-hover:text-emerald-200 font-russo tracking-wide">Safety Protocol: Listen & Look</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 font-chakra">
                                Stay alert for unusual sounds like trees cracking. If near a stream, move to <span class="text-white font-bold bg-emerald-600 px-2 py-0.5 rounded shadow-sm">higher ground</span> if water flow suddenly changes.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-auto lg:h-5/6 relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-emerald-500/30">
                        <div class="h-56 overflow-hidden relative">
                           <img src="earthquake-hazards/2lNocmC.jpeg" alt="Maco Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://news.mongabay.com/2024/02/landslide-in-philippines-mining-town-kills-nearly-100-prompts-calls-for-action/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-emerald-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-chakra">The aftermath of a massive landslide that buried a mining village in Maco, Davao de Oro.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-emerald-500/30">
                        <div class="h-56 overflow-hidden relative">
                           <img src="earthquake-hazards/cU3ltee.jpeg" alt="Naga City Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://floodlist.com/asia/philippines-northern-mindanao-october-2022" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-emerald-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-chakra">Rescuers searching through the debris of a major landslide in Naga City, Cebu.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-emerald-500/30">
                        <div class="h-56 overflow-hidden relative">
                           <img src="earthquake-hazards/rco3Z7S.jpeg" alt="Itogon Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://news.mongabay.com/2024/02/landslide-in-philippines-mining-town-kills-nearly-100-prompts-calls-for-action/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-emerald-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-chakra">Large-scale slope failure in Itogon, Benguet, triggered by Typhoon Ompong.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-emerald-500/30">
                        <div class="h-56 overflow-hidden relative">
                           <img src="earthquake-hazards/G7bkEeA.jpeg" alt="Guinsaugon Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://blogs.agu.org/landslideblog/2022/07/28/abra-earthquake-1/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-emerald-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-chakra">An aerial view of the catastrophic landslide that covered the village of Guinsaugon in Southern Leyte.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-emerald-500/30">
                        <div class="h-56 overflow-hidden relative">
                           <img src="earthquake-hazards/1iMpqkq.jpeg" alt="Baybay City Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://www.pna.gov.ph/articles/1140765" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-emerald-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-chakra">Devastation caused by landslides in Baybay City following Tropical Storm Agaton.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'tsunami',
            title: 'Tsunami',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-6 overflow-y-auto custom-scrollbar pr-2">
                <div class="space-y-8">
                    <div>
                        <h3 class="text-4xl md:text-5xl font-russo font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-6 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Tsunami</h3>
                        <p class="text-2xl text-slate-300 mb-8 font-light font-chakra">
                        A series of large sea waves generated by undersea earthquakes that displace huge volumes of water.
                        </p>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="flex items-center space-x-4 bg-blue-900/20 p-4 rounded-xl border border-blue-500/20 hover:bg-blue-800/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer hover:border-blue-400">
                            <div class="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/40 group-hover:rotate-180 transition-transform duration-500"><svg class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>
                            <div>
                            <h4 class="text-blue-300 font-bold group-hover:text-blue-200 font-russo uppercase">Coastal Inundation</h4>
                            <p class="text-slate-400 text-sm group-hover:text-slate-300 font-chakra">Flooding destroys homes, ports, and infrastructure.</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4 bg-blue-900/20 p-4 rounded-xl border border-blue-500/20 hover:bg-blue-800/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer hover:border-blue-400">
                            <div class="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/40 group-hover:scale-125 transition-transform"><svg class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg></div>
                            <div>
                            <h4 class="text-blue-300 font-bold group-hover:text-blue-200 font-russo uppercase">Loss of Lives</h4>
                            <p class="text-slate-400 text-sm group-hover:text-slate-300 font-chakra">People near shorelines have little time to evacuate.</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-indigo-950/40 border border-indigo-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-indigo-900/40 transition-colors duration-500 group hover:shadow-lg hover:shadow-indigo-900/50">
                        <div class="mr-4 mt-1 bg-indigo-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                             <svg class="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        </div>
                        <div>
                             <h4 class="text-indigo-300 font-bold uppercase text-base mb-1 group-hover:text-white font-russo tracking-wide">Safety Protocol: High Ground</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 font-chakra">
                                If you are near the coast and feel a strong earthquake, move to <span class="text-white font-bold bg-indigo-600 px-2 py-0.5 rounded shadow-sm">high ground</span> immediately. Do not wait for warning.
                             </p>
                        </div>
                    </div>
                </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                <div class="space-y-6 px-4 py-6">
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-blue-500/30">
                      <div class="h-56 overflow-hidden relative">
                         <img src="https://www.travelandtourworld.com/wp-content/uploads/2025/10/tsunami.jpeg" alt="Tsunami Wreckage" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://www.travelandtourworld.com/news/article/davao-philippines-struck-by-6-9-aftershock-after-major-7-4-earthquake-tsunami-warning-issued-impact-on-tourism-and-emergency-response/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-blue-500" title="View Source">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-base text-slate-200 font-bold mb-1 font-chakra">Wreckage of houses washed ashore during a tsunami event.</p>
                      </div>
                   </div>
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-blue-500/30">
                      <div class="h-56 overflow-hidden relative">
                         <img src="earthquake-hazards/zPDFeDmtdDJDkudQBsmD.webp" alt="Evacuation Drill" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://reopen.media/en-gb/articles/7-4-magnitude-earthquake-hits-philippines-tsunami-warning" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-blue-500" title="View Source">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-base text-slate-200 font-bold mb-1 font-chakra">Quake Hits Philippines, Tsunami Warning Issued.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        `
         },
         {
            id: 'fire-refs',
            title: 'Fire & Infra',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-6 overflow-y-auto custom-scrollbar pr-2">
                <div class="space-y-8">
                    <div>
                        <h3 class="text-4xl md:text-5xl font-russo font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-6 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Fire & Failures</h3>
                        <p class="text-2xl text-slate-300 mb-8 font-light font-chakra">
                        Secondary hazards caused by damaged gas lines, power systems, and industrial facilities.
                        </p>
                    </div>
                    
                    <div class="bg-red-950/30 border-2 border-red-500/20 p-6 rounded-2xl hover:bg-red-900/30 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                        <ul class="space-y-4 text-slate-300 font-chakra text-lg">
                            <li class="flex items-center p-2 rounded hover:bg-white/5 transition-all hover:translate-x-2 cursor-default group"><span class="w-3 h-3 bg-red-500 rounded-sm mr-3 group-hover:animate-ping"></span>Urban Fires spread rapidly when water lines break.</li>
                            <li class="flex items-center p-2 rounded hover:bg-white/5 transition-all hover:translate-x-2 cursor-default group"><span class="w-3 h-3 bg-red-500 rounded-sm mr-3 group-hover:animate-ping"></span>Chemical leaks contaminate air and soil.</li>
                            <li class="flex items-center p-2 rounded hover:bg-white/5 transition-all hover:translate-x-2 cursor-default group"><span class="w-3 h-3 bg-red-500 rounded-sm mr-3 group-hover:animate-ping"></span>Fire-damaged areas require longer rebuilding.</li>
                        </ul>
                    </div>

                    <div class="bg-red-950/40 border border-red-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-red-900/40 transition-colors duration-500 group hover:shadow-lg hover:shadow-red-900/50">
                        <div class="mr-4 mt-1 bg-red-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                             <svg class="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-red-300 font-bold uppercase text-base mb-1 group-hover:text-white font-russo tracking-wide">Safety Protocol: Gas & Power</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 font-chakra">
                                Check for gas leaks immediately after shaking stops. If you smell gas, turn off the main valve and <span class="text-white font-bold bg-red-600 px-2 py-0.5 rounded shadow-sm">leave</span>.
                             </p>
                        </div>
                    </div>
                </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                <div class="space-y-6 px-4 py-6">
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-red-500/30">
                      <div class="h-56 overflow-hidden relative">
                         <img src="https://www.leytesamardailynews.com/wp-content/uploads/2025/02/tacloban-firermn-1536x1152.jpg" alt="Chemical Factory Fire" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://www.leytesamardailynews.com/fire-in-tacloban-quakes-in-hernani/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-red-500" title="View Source">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-base text-slate-200 font-bold mb-1 font-chakra">A major fire engulfing a chemical factory in the aftermath of an earthquake.</p>
                      </div>
                   </div>
                   <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-red-500/30">
                      <div class="h-56 overflow-hidden relative">
                         <img src="https://www.geoengineer.org/storage/news/2509/featured_image/8703/featured_image.jpeg" alt="Collapsed Building Smoke" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                         <a href="https://www.geoengineer.org/news/massive-earthquake-struck-philippines" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-red-500" title="View Source">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                         </a>
                      </div>
                      <div class="p-4">
                         <p class="text-base text-slate-200 font-bold mb-1 font-chakra">Smoke rising from a collapsed building structure following a seismic event.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        `
         }
      ],
      refresherQuiz: [
         {
            id: 'q1',
            question: 'Which type of seismic wave causes the most damage to structures?',
            options: ['P-Waves', 'S-Waves', 'Surface Waves', 'Micro-tremors'],
            correctAnswer: 2
         },
         {
            id: 'q2',
            question: 'What is the most effective immediate action during an earthquake?',
            options: ['Run outside', 'Drop, Cover, and Hold On', 'Stand in a doorway', 'Call emergency services'],
            correctAnswer: 1
         },
         {
            id: 'q3',
            question: 'Liquefaction mostly occurs in which type of soil?',
            options: ['Solid Bedrock', 'Dry Clay', 'Loose, water-saturated sand', 'Compact Gravel'],
            correctAnswer: 2
         }
      ],
      finalQuiz: [
         {
            id: 'fq1',
            question: 'Your school is located near an active fault line. Scientists detect several minor tremors in the past week. As a student leader, what is the best action your class should take?',
            options: [
               'Ignore the tremors since they are small.',
               'Wait for a government warning before acting.',
               'Conduct a safety drill and check evacuation routes.',
               'Continue regular activities since no major quake has happened yet.'
            ],
            correctAnswer: 2
         },
         {
            id: 'fq2',
            question: 'Barangay officials receive a report of unusual ground vibration without an identified source. What should they do first to forecast possible earthquake risks?',
            options: [
               'Check social media for rumors.',
               'Wait for aftershocks.',
               'Coordinate with PHIVOLCS to verify seismic data.',
               'Immediately evacuate all residents without confirmation.'
            ],
            correctAnswer: 2
         },
         {
            id: 'fq3',
            question: 'A student reads an online post claiming a major earthquake will occur on a specific date. What is the most accurate way to validate this information?',
            options: [
               'Share the post to alert others.',
               'Check PHIVOLCS or USGS for official forecasts.',
               'Ask friends if they heard the same news.',
               'Assume it\'s true since it went viral.'
            ],
            correctAnswer: 1
         },
         {
            id: 'fq4',
            question: 'An earthquake detection app shows a magnitude 4.0 tremor nearby, but your friends say they felt nothing. How can you determine if the report is accurate?',
            options: [
               'Delete the app for being unreliable.',
               'Compare data from other official monitoring centers.',
               'Believe your friends instead of the app.',
               'Assume the app has a bug.'
            ],
            correctAnswer: 1
         },
         {
            id: 'fq5',
            question: 'After an earthquake, several areas near rivers experience liquefaction. What caused this phenomenon?',
            options: [
               'The river water overflowed due to heavy rain.',
               'Strong shaking increased water pressure in loose soil.',
               'The ground fault directly opened under the river.',
               'Underground lava caused soil movement.'
            ],
            correctAnswer: 1
         },
         {
            id: 'fq6',
            question: 'In a city built on reclaimed land, buildings suffer more damage during an earthquake than those on solid rock. What best explains this difference?',
            options: [
               'Reclaimed land has stronger soil.',
               'Solid rock amplifies seismic waves.',
               'Soft soil increases shaking intensity.',
               'Both areas have equal risk.'
            ],
            correctAnswer: 2
         },
         {
            id: 'fq7',
            question: 'PHIVOLCS records a series of small tremors near a volcano over several weeks. What pattern could this indicate?',
            options: [
               'The volcano might be entering a rest period.',
               'A possible larger seismic event or eruption.',
               'Random natural movements with no risk.',
               'A decrease in tectonic activity.'
            ],
            correctAnswer: 1
         },
         {
            id: 'fq8',
            question: 'A hazard map shows that areas with soft soil near fault lines experienced more ground rupture in the past. What pattern can you recognize from this data?',
            options: [
               'Hard soil areas are more dangerous.',
               'Fault lines and soft soil together increase hazard risk.',
               'Distance to the sea affects rupture frequency.',
               'Past ruptures don’t affect future hazards.'
            ],
            correctAnswer: 1
         },
         {
            id: 'fq9',
            question: 'You are part of the school\'s disaster committee. A mild quake happens while class is ongoing. What is the most appropriate decision?',
            options: [
               'Stay seated and continue the lesson.',
               'Evacuate calmly and follow the earthquake drill procedure.',
               'Run outside immediately without coordination.',
               'Wait for aftershocks before moving.'
            ],
            correctAnswer: 1
         },
         {
            id: 'fq10',
            question: 'Your barangay is planning to build new housing near a known fault line. What is the best decision to recommend based on hazard forecasting?',
            options: [
               'Approve construction since earthquakes can’t be predicted.',
               'Continue construction but skip building permits.',
               'Relocate the site to a safer distance from the fault.',
               'Ignore hazard maps since they are only estimates.'
            ],
            correctAnswer: 2
         }
      ]
   },
   {
      id: '2',
      title: 'Hydrometeorological Hazards',
      description: 'Learn about hazards caused by atmospheric, hydrological, or oceanographic processes like cyclones, floods, and droughts.',
      topic: 'Flood',
      imageUrl: '83465e25-4967-4630-bf67-bcbc9efe0e90.jpg',
      readTime: 12,
      difficulty: 'Beginner',
      objectives: [
         'Recognize signs of impending hydrometeorological hazards',
         'Distinguish between natural signs and scientific forecasting',
         'Understand the impact of floods, cyclones, and storm surges'
      ],
      competencies: [
         'Hazard Recognition',
         'Early Warning Analysis',
         'Disaster Preparedness'
      ],
      gameType: 'flood-choice',
      sections: [
         {
            id: 'melc',
            title: 'Most Essential Learning Competencies',
            content: `
          <div class="flex flex-col items-center justify-center min-h-[40vh] py-10">
             <div class="bg-cyan-950/40 border-4 border-cyan-500/40 p-10 rounded-[3rem] max-w-5xl w-full text-center backdrop-blur-md shadow-[0_0_60px_rgba(6,182,212,0.2)] hover:scale-[1.02] transition-transform duration-500 group relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all"></div>
                
                <h3 class="text-3xl md:text-5xl font-fredoka font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase mb-12 drop-shadow-xl tracking-wider">
                   Most Essential Learning Competencies
                </h3>
                
                <div class="space-y-8 text-left">
                   <div class="bg-black/30 p-6 rounded-2xl border border-cyan-500/20 hover:bg-cyan-900/20 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div class="text-xl md:text-2xl text-slate-100 font-quicksand font-bold">
                         Recognize signs of impending hydrometeorological hazards.
                      </div>
                      <span class="bg-cyan-600 text-white px-4 py-2 rounded-lg font-mono text-sm font-bold tracking-widest shadow-lg whitespace-nowrap">
                         DRR11/12-IIc-d-33
                      </span>
                   </div>
                </div>
             </div>
          </div>
        `
         },
         {
            id: 'objectives',
            title: 'Learning Objectives',
            content: `
          <div class="bg-white/5 p-3 rounded-[2rem] border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 shadow-lg">
            <ul class="space-y-4 text-slate-200 font-quicksand text-lg font-bold">
               <li class="flex items-center group">
                <svg class="w-6 h-6 text-cyan-400 mr-3 group-hover:scale-125 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                <span class="group-hover:translate-x-2 transition-transform duration-300">Recognize signs of impending hydrometeorological hazards</span>
              </li>
              <li class="flex items-center group">
                <svg class="w-6 h-6 text-cyan-400 mr-3 group-hover:scale-125 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                <span class="group-hover:translate-x-2 transition-transform duration-300">Distinguish between natural signs and scientific forecasting</span>
              </li>
            </ul>
          </div>
        `
         },
         {
            id: 'intro',
            title: 'Introduction',
            content: `
          <div class="flex flex-col items-center justify-center min-h-full py-10">
            <div class="bg-cyan-950/40 border-4 border-cyan-500/20 p-8 rounded-[3rem] max-w-4xl w-full text-center backdrop-blur-md shadow-2xl hover:scale-105 transition-transform duration-700">
               <h3 class="text-4xl md:text-6xl font-fredoka font-black text-cyan-400 mb-8 uppercase tracking-wide drop-shadow-lg">Hydrometeorological Hazards</h3>
               <p class="text-xl text-slate-200 leading-relaxed mb-8 font-quicksand font-medium">
                 Natural events caused by atmospheric, hydrological, or oceanographic processes. These include <span class="text-white font-bold bg-cyan-600 px-2 py-1 rounded-lg">tropical cyclones, floods, storm surges, droughts, and monsoons</span>.
               </p>
               <p class="text-lg text-slate-300 leading-relaxed mb-8 font-quicksand">
                 Recognizing the early warning signs of these hazards is essential for forecasting, disaster preparedness, and reducing loss of life and property.
               </p>
               <div class="bg-black/30 p-6 rounded-[2rem] italic text-lg text-cyan-200 font-quicksand">
                 "Awareness of natural warning signs saves lives — even a few minutes of early action can make a big difference."
                 <div class="text-sm font-bold text-cyan-500 mt-2 not-italic font-fredoka uppercase tracking-widest">— NDRRMC, 2023</div>
               </div>
            </div>
          </div>
        `
         },
         {
            id: 'cyclone-natural',
            title: 'Tropical Cyclone (Natural)',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                <div class="space-y-8">
                    <div>
                        <h3 class="text-4xl md:text-5xl font-fredoka font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-6 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Signs of an Impending Tropical Cyclone</h3>
                        <p class="text-2xl text-slate-300 font-quicksand font-bold mb-6">
                           Natural Signs
                        </p>
                    </div>

                    <div class="bg-blue-900/30 p-6 rounded-[2.5rem] border-2 border-blue-500/30 hover:bg-blue-900/50 transition-all duration-300 hover:scale-[1.02] group cursor-pointer hover:border-blue-400">
                        <ul class="space-y-3 text-lg text-slate-200 font-quicksand font-bold">
                           <li class="flex items-start group hover:translate-x-2 transition-transform"><span class="text-blue-500 mr-3 text-xl">🌊</span> Sudden drop in air pressure and increased humidity</li>
                           <li class="flex items-start group hover:translate-x-2 transition-transform"><span class="text-blue-500 mr-3 text-xl">☁️</span> Dark, thick clouds forming in the eastern sky</li>
                           <li class="flex items-start group hover:translate-x-2 transition-transform"><span class="text-blue-500 mr-3 text-xl">💨</span> Strong winds shifting directions rapidly</li>
                           <li class="flex items-start group hover:translate-x-2 transition-transform"><span class="text-blue-500 mr-3 text-xl">🌧️</span> Continuous heavy rain that does not stop for hours</li>
                        </ul>
                    </div>
                </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-blue-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://i.imgur.com/99KgPHB.jpeg" alt="Dark Clouds" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://i.imgur.com/99KgPHB.jpeg" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-blue-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Dark, thick clouds forming in the eastern sky.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-blue-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://i.imgur.com/XAnicgM.jpeg" alt="Strong Winds" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://i.imgur.com/XAnicgM.jpeg" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-blue-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Strong winds shifting directions rapidly.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-blue-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://i.imgur.com/9PCvmNU.jpeg" alt="Heavy Rain" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://i.imgur.com/9PCvmNU.jpeg" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-blue-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Continuous heavy rain that does not stop for hours.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'cyclone-scientific',
            title: 'Tropical Cyclone (Scientific)',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                <div class="space-y-8">
                    <div>
                        <h3 class="text-4xl md:text-5xl font-fredoka font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-6 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Signs of an Impending Tropical Cyclone</h3>
                        <p class="text-2xl text-slate-300 font-quicksand font-bold mb-6">
                           Scientific Forecasting Signs
                        </p>
                    </div>

                    <div class="bg-cyan-900/30 p-6 rounded-[2.5rem] border-2 border-cyan-500/30 hover:bg-cyan-900/50 transition-all duration-300 hover:scale-[1.02] group cursor-pointer hover:border-cyan-400">
                        <ul class="space-y-3 text-lg text-cyan-100 font-quicksand font-bold">
                           <li class="flex items-start group hover:translate-x-2 transition-transform"><span class="text-cyan-400 mr-3 text-xl">📡</span> PAGASA satellite images showing a spiraling cloud pattern over the Pacific</li>
                           <li class="flex items-start group hover:translate-x-2 transition-transform"><span class="text-cyan-400 mr-3 text-xl">📢</span> Weather bulletins announcing tropical depression or storm formation</li>
                           <li class="flex items-start group hover:translate-x-2 transition-transform"><span class="text-cyan-400 mr-3 text-xl">⚠️</span> Warning signals (Signal Nos. 1–5) issued for affected areas</li>
                        </ul>
                    </div>
                    
                    <div class="mt-8 pt-6 border-t-2 border-cyan-500/30 text-cyan-200">
                        <p class="font-fredoka text-2xl font-bold mb-2 uppercase">Example Scenario</p>
                        <p class="text-lg opacity-90 font-quicksand font-medium">Before Typhoon Yolanda (2013) made landfall, PAGASA recorded a drastic pressure drop and spiral cloud formation detected via satellite.</p>
                        <div class="text-sm font-bold text-cyan-500 mt-2 uppercase tracking-widest font-fredoka">Reference: PAGASA (2023), Tropical Cyclone Monitoring Manual.</div>
                    </div>

                    <div class="bg-blue-950/40 border border-blue-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-blue-900/40 transition-colors duration-500 group hover:shadow-lg hover:shadow-blue-900/50">
                        <div class="mr-4 mt-1 bg-blue-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                             <svg class="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-blue-300 font-bold uppercase text-base mb-1 group-hover:text-white font-fredoka tracking-wide">Safety Protocol: Monitor</h4>
                             <p class="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 font-quicksand">
                                Always tune in to official PAGASA updates. Secure loose items outside and prepare an emergency kit if Signal No. 1 is raised.
                             </p>
                        </div>
                    </div>
                </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://wmo.int/sites/default/files/styles/featured_image_x2_1536x1024_/public/2025-02/thumbnails_4.jpg?h=d1cb525d&itok=cMWQEoCZ" alt="Satellite Image" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://wmo.int/media/news-from-members/dost-pagasa-hosts-annual-session-of-escap-wmo-typhoon-committee-2025" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-cyan-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">PAGASA satellite images showing a spiraling cloud pattern.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://pia.gov.ph/uploads/2022/10/e465ff4333f5454e912c1217c0855cfa.jpg" alt="Wind Signals" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://mirror.pia.gov.ph/infographics/2022/10/29/tropical-cyclone-wind-signal" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-cyan-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Scientific forecasting includes issuing Tropical Cyclone Wind Signals.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://pia.gov.ph/uploads/2022/10/0be87521a26c8edae014b2477cd9dc40.jpg" alt="Wind Signals Info" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://mirror.pia.gov.ph/infographics/2022/10/29/tropical-cyclone-wind-signal" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-cyan-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Detailed breakdown of wind signals and expected impacts.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'flood-natural',
            title: 'Flood (Natural)',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                <h3 class="text-4xl font-fredoka font-black text-white mb-2 uppercase drop-shadow-md">Signs of an Impending Flood</h3>
                <h4 class="text-xl font-bold text-slate-300 font-quicksand mb-6">Natural Signs</h4>
                <div class="space-y-6">
                   <div class="bg-white/5 p-6 rounded-[2rem] border border-white/10 flex items-center hover:bg-white/10 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">🌧️</span>
                      <p class="text-xl text-slate-200 font-quicksand font-bold">Continuous heavy rainfall lasts for several hours or days</p>
                   </div>
                   <div class="bg-white/5 p-6 rounded-[2rem] border border-white/10 flex items-center hover:bg-white/10 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">🌊</span>
                      <p class="text-xl text-slate-200 font-quicksand font-bold">Rising water levels in rivers and creeks</p>
                   </div>
                   <div class="bg-white/5 p-6 rounded-[2rem] border border-white/10 flex items-center hover:bg-white/10 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">🚧</span>
                      <p class="text-xl text-slate-200 font-quicksand font-bold">Overflowing canals or drainage systems</p>
                   </div>
                   <div class="bg-white/5 p-6 rounded-[2rem] border border-white/10 flex items-center hover:bg-white/10 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">💧</span>
                      <p class="text-xl text-slate-200 font-quicksand font-bold">Soil softening or water seeping from the ground</p>
                   </div>
                </div>
             </div>

              <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://i.imgur.com/1AxYlwJ.jpeg" alt="Satellite Image" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://www.youtube.com/watch?v=EwNe89zYEgM" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-cyan-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Several motorcyclists seen navigating through a flooded street</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://i.imgur.com/psv8mUn.jpeg" alt="Wind Signals" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://www.youtube.com/watch?v=A3Zx8wEwhCU" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-cyan-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Flooded city street during a rainstorm.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://i.imgur.com/XRkStTg.jpeg" alt="Wind Signals Info" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://www.youtube.com/watch?v=BhgtcMoLGok" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-cyan-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Heavily flooded open space.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'flood-scientific',
            title: 'Flood (Scientific)',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                <h3 class="text-4xl font-fredoka font-black text-cyan-300 mb-2 uppercase drop-shadow-md">Signs of an Impending Flood</h3>
                <h4 class="text-xl font-bold text-slate-300 font-quicksand mb-6">Scientific Forecasting Signs</h4>
                <div class="space-y-6">
                   <div class="bg-cyan-900/30 p-6 rounded-[2rem] border border-cyan-500/30 flex items-center hover:bg-cyan-900/50 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">📡</span>
                      <p class="text-xl text-cyan-100 font-quicksand font-bold">PAGASA rainfall radar showing high rainfall intensity (>50mm/hr)</p>
                   </div>
                   <div class="bg-cyan-900/30 p-6 rounded-[2rem] border border-cyan-500/30 flex items-center hover:bg-cyan-900/50 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">🚥</span>
                      <p class="text-xl text-cyan-100 font-quicksand font-bold">Flood advisories and color-coded warnings (Yellow, Orange, Red Alerts)</p>
                   </div>
                </div>
                
                <div class="mt-8 pt-6 border-t-2 border-cyan-500/30 text-cyan-200">
                    <p class="font-fredoka text-2xl font-bold mb-2 uppercase">Example Scenario</p>
                    <p class="text-lg opacity-90 font-quicksand font-medium">In Marikina, residents monitor the Marikina River water level using PAGASA’s flood monitoring system.</p>
                    <div class="text-sm font-bold text-cyan-500 mt-2 uppercase tracking-widest font-fredoka">Reference: PAGASA (2023), Flood Forecasting and Warning System for River Basins.</div>
                </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-white border border-white/5 group/scroller flex flex-col shadow-2xl">
                 <div class="bg-cyan-950 text-cyan-50 text-xs font-bold uppercase tracking-widest py-3 text-center flex-none flex items-center justify-center gap-2">
                    <span>Source: PAGASA Warning Legends</span>
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                 </div>
                 <div class="flex-1 w-full bg-white relative">
                      <iframe 
                         src="https://www.pagasa.dost.gov.ph/learnings/legend" 
                         class="absolute inset-0 w-full h-full border-0"
                         title="PAGASA Warning Legends"
                         loading="lazy"
                         sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                     ></iframe>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'storm-surge-natural',
            title: 'Storm Surge (Natural)',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                <h3 class="text-4xl md:text-5xl font-fredoka font-black text-indigo-300 mb-2 uppercase drop-shadow-lg">Signs of an Impending Storm Surge</h3>
                <h4 class="text-xl font-bold text-slate-300 font-quicksand mb-8">Natural Signs</h4>
                <div class="grid grid-cols-1 gap-6 text-xl text-slate-200 font-quicksand font-bold">
                   <div class="bg-black/30 p-6 rounded-3xl hover:bg-indigo-600/40 transition-colors duration-300 hover:-translate-y-2 cursor-default border border-indigo-500/20">Unusually calm sea followed by a sudden rise in water level</div>
                   <div class="bg-black/30 p-6 rounded-3xl hover:bg-indigo-600/40 transition-colors duration-300 hover:-translate-y-2 cursor-default border border-indigo-500/20">Strong winds blowing toward the shore</div>
                   <div class="bg-black/30 p-6 rounded-3xl hover:bg-indigo-600/40 transition-colors duration-300 hover:-translate-y-2 cursor-default border border-indigo-500/20">Rapidly receding shoreline just before the surge</div>
                   <div class="bg-black/30 p-6 rounded-3xl hover:bg-indigo-600/40 transition-colors duration-300 hover:-translate-y-2 cursor-default border border-indigo-500/20">Low-pressure readings and dark clouds near the coast</div>
                </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://i.imgur.com/n0gaLzx.jpeg" alt="Satellite Image" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://i.imgur.com/n0gaLzx.jpeg" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-cyan-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Unusually calm sea followed by a sudden rise in water level.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://i.imgur.com/iXMV7o2.jpeg" alt="Wind Signals" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://i.imgur.com/iXMV7o2.jpeg" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-cyan-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Strong winds blowing toward the shore.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://i.imgur.com/6vN8KDZ.jpeg" alt="Wind Signals Info" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://i.imgur.com/6vN8KDZ.jpeg" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-cyan-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand"Heavily flooded open space, possibly a park or an area near a riverbank.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-cyan-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://i.imgur.com/JO5wBP9.jpeg" alt="Wind Signals Info" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://i.imgur.com/JO5wBP9.jpeg" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-cyan-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Low-pressure readings and dark clouds near the coast.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'storm-surge-scientific',
            title: 'Storm Surge (Scientific)',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                <h3 class="text-4xl md:text-5xl font-fredoka font-black text-indigo-300 mb-2 uppercase drop-shadow-lg">Signs of an Impending Storm Surge</h3>
                <h4 class="text-xl font-bold text-slate-300 font-quicksand mb-8">Scientific Forecasting Signs</h4>
                <div class="space-y-6">
                   <div class="bg-indigo-900/30 p-6 rounded-[2.5rem] border border-indigo-500/30 flex items-center hover:bg-indigo-900/50 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">📢</span>
                      <p class="text-xl text-indigo-100 font-quicksand font-bold">PAGASA storm surge advisories issued with typhoon warnings</p>
                   </div>
                   <div class="bg-indigo-900/30 p-6 rounded-[2.5rem] border border-indigo-500/30 flex items-center hover:bg-indigo-900/50 transition-all hover:-translate-y-2 cursor-default group">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">💻</span>
                      <p class="text-xl text-indigo-100 font-quicksand font-bold">Model simulations predicting surge height based on wind speed and tide</p>
                   </div>
                </div>
                
                <div class="mt-8 bg-black/30 p-8 rounded-[2rem] border-l-8 border-indigo-500 hover:scale-[1.02] transition-transform duration-500">
                    <h4 class="text-indigo-400 font-fredoka font-bold uppercase mb-2 text-2xl">Real World Example</h4>
                    <p class="text-slate-200 text-xl font-quicksand font-medium">During Typhoon Yolanda, storm surges up to <span class="text-indigo-400 font-bold text-2xl">7 meters high</span> devastated Tacloban City.</p>
                    <div class="text-sm font-bold text-indigo-500 mt-4 uppercase tracking-widest font-fredoka">Reference: DOST-PAGASA & JICA (2021), Storm Surge Hazard Mapping Project.</div>
                </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-white border border-white/5 group/scroller flex flex-col shadow-2xl">
                 <div class="bg-cyan-950 text-cyan-50 text-xs font-bold uppercase tracking-widest py-3 text-center flex-none flex items-center justify-center gap-2">
                    <span>Source: PAGASA Warning Legends</span>
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                 </div>
                 <div class="flex-1 w-full bg-white relative">
                      <iframe 
                         src="https://www.pagasa.dost.gov.ph/information/about-tropical-cyclone" 
                         class="absolute inset-0 w-full h-full border-0"
                         title="PAGASA Warning Legends"
                         loading="lazy"
                         sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                     ></iframe>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'landslide-natural',
            title: 'Landslide (Natural)',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                 <div class="space-y-8">
                    <div>
                       <h3 class="text-4xl md:text-5xl font-fredoka font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-stone-500 mb-2 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Signs of an Impending Landslide</h3>
                       <p class="text-2xl text-slate-300 font-quicksand font-bold">Natural Signs</p>
                    </div>

                    <div class="bg-stone-900/40 p-6 rounded-[2rem] border-2 border-stone-600/30 hover:bg-stone-800/40 transition-all duration-300 hover:scale-[1.02] group cursor-pointer hover:border-stone-400">
                        <ul class="space-y-4 text-slate-300 font-quicksand text-lg font-bold">
                            <li class="hover:translate-x-2 transition-transform p-3 hover:bg-white/5 rounded-xl flex items-center"><span class="mr-3 text-2xl">🏚️</span> Cracks appearing on the ground or walls</li>
                            <li class="hover:translate-x-2 transition-transform p-3 hover:bg-white/5 rounded-xl flex items-center"><span class="mr-3 text-2xl">🌳</span> Tilting of trees or poles</li>
                            <li class="hover:translate-x-2 transition-transform p-3 hover:bg-white/5 rounded-xl flex items-center"><span class="mr-3 text-2xl">🟤</span> Sudden appearance of muddy springs</li>
                            <li class="hover:translate-x-2 transition-transform p-3 hover:bg-white/5 rounded-xl flex items-center"><span class="mr-3 text-2xl">🔊</span> Unusual sounds (like rumbling or cracking) coming from the slope</li>
                        </ul>
                    </div>
                 </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-emerald-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2024/02/21135449/landslide-philippines.jpg" alt="Maco Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://news.mongabay.com/2024/02/landslide-in-philippines-mining-town-kills-nearly-100-prompts-calls-for-action/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-emerald-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Maco, Davao de Oro Landslide - Real World Impact</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-emerald-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://floodlist.com/wp-content/uploads/2022/10/Landslide-Philippines-Civil-Defense-Northern-Mindanao-Region-10-1536x1152.jpg" alt="Naga City Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://floodlist.com/asia/philippines-northern-mindanao-october-2022" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-emerald-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Naga City, Cebu Rescue Operations</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-emerald-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2024/02/21140213/landslide-philippines-2.jpg" alt="Itogon Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://news.mongabay.com/2024/02/landslide-in-philippines-mining-town-kills-nearly-100-prompts-calls-for-action/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-emerald-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-4">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Large-scale slope failure in Itogon, Benguet.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'landslide-scientific',
            title: 'Landslide (Scientific)',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                 <div class="space-y-8">
                    <div>
                       <h3 class="text-4xl md:text-5xl font-fredoka font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-stone-500 mb-2 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Signs of an Impending Landslide</h3>
                       <p class="text-2xl text-slate-300 font-quicksand font-bold">Scientific Forecasting Signs</p>
                    </div>

                    <div class="bg-emerald-900/30 p-6 rounded-[2rem] border-2 border-emerald-500/30 hover:bg-emerald-800/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer hover:border-emerald-400">
                        <ul class="space-y-3 text-emerald-100 font-quicksand text-lg font-bold">
                            <li class="hover:translate-x-2 transition-transform p-2 hover:bg-emerald-900/40 rounded-lg">• Soil moisture sensors detecting high water saturation</li>
                            <li class="hover:translate-x-2 transition-transform p-2 hover:bg-emerald-900/40 rounded-lg">• Rainfall threshold exceeded in landslide-prone areas</li>
                            <li class="hover:translate-x-2 transition-transform p-2 hover:bg-emerald-900/40 rounded-lg">• Ground deformation monitoring by PHIVOLCS or LGUs</li>
                        </ul>
                    </div>
                    
                    <div class="mt-8 pt-6 border-t-2 border-emerald-500/30 text-emerald-200">
                        <p class="font-fredoka text-2xl font-bold mb-2 uppercase">Example Scenario</p>
                        <p class="text-lg opacity-90 font-quicksand font-medium">The 2006 Leyte landslide was preceded by days of intense rainfall and visible ground cracks.</p>
                        <div class="text-sm font-bold text-emerald-500 mt-2 uppercase tracking-widest font-fredoka">Reference: PHIVOLCS (2022), Landslide Susceptibility Mapping Report.</div>
                    </div>
                 </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-emerald-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://i.imgur.com/alPzsqJ.jpeg" alt="Maco Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://i.imgur.com/alPzsqJ.jpeg" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-emerald-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Soil moisture sensors detecting high water saturation</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-emerald-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://i.imgur.com/U8hAnO7.jpeg" alt="Naga City Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://i.imgur.com/U8hAnO7.jpeg" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-emerald-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Ground deformation monitoring instruments</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'drought-natural',
            title: 'Drought (Natural)',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                <h3 class="text-5xl font-fredoka font-black text-orange-300 mb-2 uppercase drop-shadow-lg">Signs of an Impending Drought</h3>
                <h4 class="text-xl font-bold text-slate-300 font-quicksand mb-8">Natural Signs</h4>
                <div class="space-y-6">
                   <div class="p-6 bg-orange-950/40 rounded-[2rem] border border-orange-500/20 hover:bg-orange-800/40 transition-colors flex items-center group cursor-default">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">☀️</span>
                      <p class="text-xl text-slate-200 font-quicksand font-bold">Prolonged dry and hot days</p>
                   </div>
                   <div class="p-6 bg-orange-950/40 rounded-[2rem] border border-orange-500/20 hover:bg-orange-800/40 transition-colors flex items-center group cursor-default">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">🏜️</span>
                      <p class="text-xl text-slate-200 font-quicksand font-bold">Drying of small water bodies (ponds, wells, creeks)</p>
                   </div>
                   <div class="p-6 bg-orange-950/40 rounded-[2rem] border border-orange-500/20 hover:bg-orange-800/40 transition-colors flex items-center group cursor-default">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">🌾</span>
                      <p class="text-xl text-slate-200 font-quicksand font-bold">Wilting crops and grass</p>
                   </div>
                   <div class="p-6 bg-orange-950/40 rounded-[2rem] border border-orange-500/20 hover:bg-orange-800/40 transition-colors flex items-center group cursor-default">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">🌫️</span>
                      <p class="text-xl text-slate-200 font-quicksand font-bold">Dusty air and increased temperature</p>
                   </div>
                </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-emerald-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://perrona.wordpress.com/wp-content/uploads/2013/03/4-5-dried-up.jpg?w=1024" alt="Maco Landslide" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://perrona.wordpress.com/2013/03/28/water-movement-march-7th-2013/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-emerald-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-base text-slate-200 font-bold mb-1 font-quicksand">Soil moisture sensors detecting high water saturation</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'drought-scientific',
            title: 'Drought (Scientific)',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 overflow-y-auto custom-scrollbar pr-2">
                <h3 class="text-5xl font-fredoka font-black text-orange-300 mb-2 uppercase drop-shadow-lg">Signs of an Impending Drought</h3>
                <h4 class="text-xl font-bold text-slate-300 font-quicksand mb-8">Scientific Forecasting Signs</h4>
                <div class="space-y-6">
                   <div class="p-6 bg-orange-900/30 rounded-[2rem] border border-orange-500/30 hover:bg-orange-900/50 transition-colors flex items-center group cursor-default">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">📢</span>
                      <p class="text-xl text-orange-100 font-quicksand font-bold">El Niño advisory from PAGASA</p>
                   </div>
                   <div class="p-6 bg-orange-900/30 rounded-[2rem] border border-orange-500/30 hover:bg-orange-900/50 transition-colors flex items-center group cursor-default">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">📉</span>
                      <p class="text-xl text-orange-100 font-quicksand font-bold">Low rainfall forecasts over multiple weeks</p>
                   </div>
                   <div class="p-6 bg-orange-900/30 rounded-[2rem] border border-orange-500/30 hover:bg-orange-900/50 transition-colors flex items-center group cursor-default">
                      <span class="text-3xl mr-4 group-hover:scale-125 transition-transform">💧</span>
                      <p class="text-xl text-orange-100 font-quicksand font-bold">Decreased water level in reservoirs and dams</p>
                   </div>
                </div>
                
                <div class="mt-8 pt-6 border-t-2 border-orange-500/30 text-orange-200">
                   <p class="font-fredoka text-2xl font-bold mb-2 uppercase">Example Scenario</p>
                   <p class="text-lg opacity-90 font-quicksand font-medium">PAGASA declared an El Niño event in 2019, leading to agricultural drought in Central Luzon.</p>
                   <div class="text-sm font-bold text-orange-500 mt-2 uppercase tracking-widest font-fredoka">Reference: PAGASA (2020), Climate Monitoring Bulletin.</div>
                </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-white border border-white/5 group/scroller flex flex-col shadow-2xl">
                 <div class="bg-cyan-950 text-cyan-50 text-xs font-bold uppercase tracking-widest py-3 text-center flex-none flex items-center justify-center gap-2">
                    <span>Source: PAGASA Warning Legends</span>
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                 </div>
                 <div class="flex-1 w-full bg-white relative">
                      <iframe 
                         src="https://www.pagasa.dost.gov.ph/climate/el-nino-la-nina/advisories" 
                         class="absolute inset-0 w-full h-full border-0"
                         title="PAGASA Warning Legends"
                         loading="lazy"
                         sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                     ></iframe>
                 </div>
             </div>
          </div>
        `
         }
      ],
      refresherQuiz: [
         { id: 'hq1', question: 'What is a sign of an impending flood?', options: ['Clear skies', 'Rising river levels', 'Low humidity', 'Strong winds'], correctAnswer: 1 },
         { id: 'hq2', question: 'Which agency issues tropical cyclone warnings?', options: ['PHIVOLCS', 'PAGASA', 'DSWD', 'DepEd'], correctAnswer: 1 },
         { id: 'hq3', question: 'What characterizes a storm surge?', options: ['Receding shoreline', 'Heavy rain only', 'Ground shaking', 'Fire'], correctAnswer: 0 }
      ],
      finalQuiz: [
         { id: 'fhq1', question: 'The local weather bureau reports that a low-pressure area (LPA) has entered the Philippine Area of Responsibility (PAR). What should the barangay officials do to forecast possible hazards?', options: ['Wait until heavy rains start before preparing.', 'Monitor PAGASA updates and prepare for possible storm signals.', 'Ignore the report since LPA rarely develops into a typhoon', 'Focus only on temperature forecasts'], correctAnswer: 1 },
         { id: 'fhq2', question: 'Meteorologists observe rapid cloud buildup and dropping air pressure in a coastal area. What can be forecasted from these conditions?', options: ['Clear and dry weather', 'Possible thunderstorm or heavy rainfall', 'Volcanic eruption nearby', 'Increasing temperature in the area'], correctAnswer: 1 },
         { id: 'fhq3', question: 'A social media post says, "A super typhoon will hit the Philippines tomorrow," but PAGASA has not issued any warning. How can you verify the accuracy of this claim?', options: ['Share it immediately to alert others', 'Wait to see if it rains the next day', 'Check the official PAGASA or NDRRMC bulletins.', 'Believe the post because it has thousands of likes.'], correctAnswer: 2 },
         { id: 'fhq4', question: 'Your phone app shows a severe flood warning, but local authorities havent announced anything yet. What should you do to ensure accuracy before acting?', options: ['Compare the information with government advisories', 'Ignore it since theres no official announcement.', 'Immediately evacuate without checking.', 'Ask friends if they heard the same news.'], correctAnswer: 0 },
         { id: 'fhq5', question: 'After days of heavy rain, a hillside community experiences a landslide. What is the most likely cause of this hazard?', options: ['Strong winds loosed the trees.', 'Prolonged rainfall saturated the soil, weakening its stability.', 'Earthquake', 'Dry land'], correctAnswer: 1 },
         { id: 'fhq6', question: 'Flooding occured in a city even after only moderate rain. What could be the main contributing factor?', options: ['The citys drainage system is clogged or inadequate.', 'The was too much sunlight before the rain.', 'The city is too far from the coast.', 'Wind direction caused water to pile up.'], correctAnswer: 0 },
         { id: 'fhq7', question: 'Weather records show that a certain province often experiences strong typhoons every last quarter of the year. What pattern can be recognized from this data?', options: ['The area is safe during any season.', 'The province is located along the common typhoon path during monsoon months.', 'The typhoons aer random events.', 'The frequency is caused by human activity.'], correctAnswer: 1 },
         { id: 'fhq8', question: 'In the past five years, flash floods always occur shortly after intense rainfall more than an hour. What does this pattern suggest?', options: ['The floods are caused by sea-level rise.', 'There is a predictable relationship between rainfall intensity and flooding', 'Floods happen by coincidence', 'Rainfall has no connection to flooding'], correctAnswer: 1 },
         { id: 'fhq9', question: 'PAGASA raises a Tropical Cyclone Wind Signal No. 3 for your area. What should your family do first?', options: ['Go to the nearest open field to watch the winds.', 'Secure your house, prepare a go-bag, and stay tuned to official updates.', 'Wait for the rain to stop before preparing.', 'Continue normal activities as long as theres power.'], correctAnswer: 1 },
         { id: 'fhq10', question: 'Your shool is ina flood-prone area, and heavy rains have been continuous since early morning. As a student leader, what is the best decision to recommend to the principal?', options: ['Continue classes until dismissal time.', 'Wait for official cancellation from the mayors office', 'Suspend classes early and ensure students get home safely', 'Ask everyone to stay and observe the rainfall pattern'], correctAnswer: 2 }
      ]
   },
   {
      id: '3',
      title: 'Volcano-Related Hazards',
      description: 'Understand volcanic eruptions, ash fall, lahars, and pyroclastic flows.',
      topic: 'Volcano',
      imageUrl: 'cfdc22bb-2d99-4f5c-9705-2d2e998726f3.jpg',
      readTime: 15,
      difficulty: 'Advanced',
      objectives: [
         'Explain various volcano-related hazards',
         'Recognize signs of an impending volcanic eruption',
         'Understand the danger of pyroclastic flows and lahars'
      ],
      competencies: [
         'Hazard Identification',
         'Warning Sign Recognition',
         'Evacuation Planning'
      ],
      gameType: 'none',
      sections: [
         {
            id: 'melc',
            title: 'Most Essential Learning Competencies',
            content: `
          <div class="flex flex-col items-center justify-center min-h-[40vh] py-10">
             <div class="bg-red-950/40 border-4 border-red-500/40 p-10 rounded-[3rem] max-w-5xl w-full text-center backdrop-blur-md shadow-[0_0_60px_rgba(239,68,68,0.2)] hover:scale-[1.02] transition-transform duration-500 group relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] group-hover:bg-red-500/20 transition-all"></div>
                
                <h3 class="text-3xl md:text-5xl font-carter font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 uppercase mb-12 drop-shadow-xl tracking-wider">
                   Most Essential Learning Competencies
                </h3>
                
                <div class="space-y-8 text-left">
                   <div class="bg-black/30 p-6 rounded-2xl border border-red-500/20 hover:bg-red-900/20 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div class="text-xl md:text-2xl text-slate-100 font-signika font-bold">
                         Explain various volcano-related hazards.
                      </div>
                      <span class="bg-red-600 text-white px-4 py-2 rounded-lg font-mono text-sm font-bold tracking-widest shadow-lg whitespace-nowrap">
                         DRR11/12-Ih-i-22
                      </span>
                   </div>

                   <div class="bg-black/30 p-6 rounded-2xl border border-red-500/20 hover:bg-red-900/20 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div class="text-xl md:text-2xl text-slate-100 font-signika font-bold">
                         Recognize signs of an impending volcanic eruption.
                      </div>
                      <span class="bg-red-600 text-white px-4 py-2 rounded-lg font-mono text-sm font-bold tracking-widest shadow-lg whitespace-nowrap">
                         DRR11/12-Ih-i-24
                      </span>
                   </div>
                </div>
             </div>
          </div>
        `
         },
         {
            id: 'objectives',
            title: 'Learning Objectives',
            content: `
          <div class="bg-white/5 p-3 rounded-xl border-4 border-red-500/20 hover:border-red-500 hover:rotate-1 transition-all duration-300 shadow-xl">
            <ul class="space-y-6 text-slate-200 font-signika text-xl">
               <li class="flex items-center group"><svg class="w-8 h-8 text-red-500 mr-4 group-hover:scale-125 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>Explain various volcano-related hazards</li>
               <li class="flex items-center group"><svg class="w-8 h-8 text-red-500 mr-4 group-hover:scale-125 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>Recognize signs of impending eruption</li>
            </ul>
          </div>
        `
         },
         {
            id: 'intro',
            title: 'Introduction',
            content: `
          <div class="flex flex-col items-center justify-center min-h-full py-10">
             <div class="bg-red-950/40 border-4 border-red-500/40 p-10 rounded-[3rem] max-w-4xl text-center backdrop-blur-md shadow-[0_0_60px_rgba(239,68,68,0.3)] hover:scale-105 transition-transform duration-500">
                <h3 class="text-5xl md:text-7xl font-carter font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 uppercase mb-8 drop-shadow-xl">Volcano Hazards</h3>
                <p class="text-2xl text-slate-200 mb-8 leading-relaxed font-signika font-bold">
                   Volcanoes create landforms but cause large-scale destruction. Recognizing hazards like <span class="text-red-100 bg-red-600 px-3 py-1 rounded-full shadow-lg">magma, gas, and ash</span> is critical for saving lives.
                </p>
                <p class="text-xl italic text-red-200 font-signika border-t-2 border-red-500/30 pt-6">"Volcanic eruptions cannot be stopped, but their impacts can be reduced through awareness." — PHIVOLCS</p>
             </div>
          </div>
        `
         },
         {
            id: 'pyroclastic',
            title: 'Pyroclastic Flow',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 pr-2">
                 <div class="space-y-6">
                    <h3 class="text-4xl md:text-6xl font-carter font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Pyroclastic Flow</h3>
                    <p class="text-xl md:text-2xl text-slate-200 font-signika font-medium leading-relaxed">
                       A fast-moving mixture of hot gases, ash, and volcanic rocks that rush down the slopes of a volcano at speeds over <span class="text-red-400 font-bold text-3xl font-carter">100 km/h</span>.
                    </p>
                    
                    <div class="grid grid-cols-1 gap-4">
                       <div class="bg-red-950/40 border-2 border-red-500/20 p-5 rounded-2xl flex items-start hover:bg-red-900/50 transition-all duration-300 hover:scale-[1.02] group hover:border-red-500 hover:shadow-lg">
                          <div class="bg-red-500/20 p-3 rounded-xl mr-4 group-hover:bg-red-500/40 transition-colors group-hover:rotate-12">
                             <svg class="w-8 h-8 text-red-400 group-hover:text-red-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          </div>
                          <div>
                             <h4 class="text-red-300 font-bold uppercase text-xl mb-1 group-hover:text-white font-carter tracking-wide">Extreme Heat</h4>
                             <p class="text-slate-300 text-lg group-hover:text-white font-signika">Temperatures can reach up to <span class="text-white font-bold bg-red-600 px-2 rounded">800°C</span>, causing instant incineration.</p>
                          </div>
                       </div>
                       <div class="bg-red-950/40 border-2 border-red-500/20 p-5 rounded-2xl flex items-start hover:bg-red-900/50 transition-all duration-300 hover:scale-[1.02] group hover:border-red-500 hover:shadow-lg">
                          <div class="bg-red-500/20 p-3 rounded-xl mr-4 group-hover:bg-red-500/40 transition-colors group-hover:rotate-12">
                             <svg class="w-8 h-8 text-red-400 group-hover:text-red-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                          </div>
                          <div>
                             <h4 class="text-red-300 font-bold uppercase text-xl mb-1 group-hover:text-white font-carter tracking-wide">Massive Destruction</h4>
                             <p class="text-slate-300 text-lg group-hover:text-white font-signika">Burial of areas under thick deposits of ash and rock; destruction of forests and crops.</p>
                          </div>
                       </div>
                    </div>

                    <div class="bg-red-900/20 border-l-8 border-red-500 p-6 rounded-r-3xl hover:bg-red-900/40 transition-colors">
                       <p class="text-red-100 italic text-xl font-signika">"The 1991 Mount Pinatubo eruption produced pyroclastic flows that buried towns in Pampanga and Zambales."</p>
                       <p class="text-red-400 text-sm mt-3 font-bold uppercase font-carter tracking-widest">— PHIVOLCS, 2020</p>
                    </div>

                    <div class="bg-orange-950/40 border-2 border-orange-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-orange-900/60 transition-colors duration-500 group hover:border-orange-500 hover:shadow-xl">
                        <div class="mr-4 mt-1 bg-orange-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">
                             <svg class="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-orange-300 font-bold uppercase text-lg mb-1 group-hover:text-white font-carter">Safety Protocol: Evacuation</h4>
                             <p class="text-slate-300 text-base leading-relaxed group-hover:text-white font-signika">
                                Pyroclastic flows are faster than vehicles. Evacuate immediately upon <span class="text-white font-bold bg-orange-600 px-2 py-0.5 rounded shadow-md">Alert Level 3 or 4</span>. Stay out of valleys.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border-2 border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-xl hover:border-red-500">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Pyroclastic_flows_at_Mayon_Volcano.jpg" alt="Mayon Pyroclastic Flow" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://en.wikipedia.org/wiki/File:Pyroclastic_flows_at_Mayon_Volcano.jpg" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-red-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-lg text-slate-200 font-bold mb-1 font-signika">Mayon Volcano (Philippines), known for its classic cone and frequent pyroclastic density currents.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-xl hover:border-red-500">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://volcano.si.edu/gallery/photos/GVP-00956.jpg" alt="Mayon Flow 2" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://volcano.si.edu/gallery/ShowImage.cfm?photo=GVP-00956" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-red-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-lg text-slate-200 font-bold mb-1 font-signika">Pyroclastic flow descending the slopes of Mayon Volcano.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'ash-fall',
            title: 'Ash Fall',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 pr-2">
                 <div class="space-y-6">
                    <h3 class="text-4xl md:text-6xl font-carter font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Ash Fall (Tephra)</h3>
                    <p class="text-xl md:text-2xl text-slate-300 font-signika font-medium leading-relaxed">
                       Volcanic ash and rock fragments ejected during explosive eruptions that fall to the ground.
                    </p>

                    <div class="bg-slate-800/50 p-8 rounded-[2rem] border-2 border-slate-600/30 hover:bg-slate-800/70 transition-colors hover:border-slate-400 hover:shadow-lg">
                       <h4 class="font-bold text-white mb-4 uppercase flex items-center font-carter text-2xl tracking-wide">
                          <span class="w-4 h-4 bg-slate-400 rounded-full mr-4 animate-ping"></span>
                          Effects Analysis
                       </h4>
                       <ul class="text-slate-200 space-y-4 text-xl font-signika">
                          <li class="flex items-start group"><span class="text-slate-400 mr-3 group-hover:scale-125 transition-transform">►</span> Roof collapse due to heavy ash accumulation</li>
                          <li class="flex items-start group"><span class="text-slate-400 mr-3 group-hover:scale-125 transition-transform">►</span> Reduced air quality causing respiratory problems</li>
                          <li class="flex items-start group"><span class="text-slate-400 mr-3 group-hover:scale-125 transition-transform">►</span> Flight cancellations due to low visibility</li>
                          <li class="flex items-start group"><span class="text-slate-400 mr-3 group-hover:scale-125 transition-transform">►</span> Contamination of water supplies</li>
                       </ul>
                    </div>

                    <div class="bg-slate-900/40 border-l-8 border-slate-500 p-6 rounded-r-3xl">
                       <p class="text-slate-200 italic text-xl font-signika">"The 2020 Taal Volcano eruption blanketed nearby towns with thick ash, forcing mass evacuations."</p>
                       <p class="text-slate-400 text-sm mt-3 font-bold uppercase font-carter tracking-widest">— PHIVOLCS, 2021</p>
                    </div>

                    <div class="bg-slate-900/40 border-2 border-slate-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-slate-800/40 transition-colors duration-500 group hover:shadow-lg hover:border-slate-400">
                        <div class="mr-4 mt-1 bg-slate-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                             <svg class="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-slate-200 font-bold uppercase text-lg mb-1 group-hover:text-white font-carter tracking-wide">Safety Protocol: Mask Up</h4>
                             <p class="text-slate-400 text-base leading-relaxed group-hover:text-slate-200 font-signika">
                                Wear N95 masks or cover mouth/nose with damp cloth. Close windows and doors to prevent ash entry.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border-2 border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-xl hover:border-slate-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://1cms-img.imgix.net/Aerial-view.jpg?auto=compress" alt="Taal Ash" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://www.onenews.ph/articles/the-hazards-of-volcanic-ash-being-rock-and-natural-glass-particles" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-slate-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-lg text-slate-200 font-bold mb-1 font-signika">Examples from Taal Volcano (Philippines), showing heavy ash fall.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-xl hover:border-slate-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://www.traveldailymedia.com/assets/2020/01/taal-volcano-eruption.jpg" alt="Taal Eruption" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://www.traveldailymedia.com/philippines-taal-volcano-ash-fall-suspends-flights-in-manila/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-slate-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-lg text-slate-200 font-bold mb-1 font-signika">Taal Volcano ash fall suspending flights in Manila.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'lahar',
            title: 'Lahars',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 pr-2">
                 <div class="space-y-6">
                    <h3 class="text-4xl md:text-6xl font-carter font-black text-transparent bg-clip-text bg-gradient-to-r from-stone-300 to-stone-600 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Lahars (Mudflows)</h3>
                    <p class="text-xl md:text-2xl text-slate-300 mb-6 font-signika font-medium leading-relaxed">
                       Mixtures of volcanic ash, rocks, and water flowing down river valleys, often triggered by rain or melting ice.
                    </p>
                    
                    <div class="grid grid-cols-1 gap-4">
                       <div class="bg-stone-900/40 border-2 border-stone-600/30 p-5 rounded-[2rem] flex items-start hover:bg-stone-800/40 transition-all duration-300 hover:scale-[1.02] group hover:border-stone-400 hover:shadow-lg">
                          <div class="bg-stone-500/20 p-3 rounded-xl mr-4 group-hover:bg-stone-500/40 transition-colors group-hover:rotate-12">
                             <svg class="w-8 h-8 text-stone-400 group-hover:text-stone-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                          </div>
                          <div>
                             <h4 class="text-stone-300 font-bold uppercase text-xl mb-1 group-hover:text-white font-carter">Community Burial</h4>
                             <p class="text-slate-400 text-lg group-hover:text-slate-300 font-signika">Burial of communities and farmlands; long-term river siltation.</p>
                          </div>
                       </div>
                       <div class="bg-stone-900/40 border-2 border-stone-600/30 p-5 rounded-[2rem] flex items-start hover:bg-stone-800/40 transition-all duration-300 hover:scale-[1.02] group hover:border-stone-400 hover:shadow-lg">
                          <div class="bg-stone-500/20 p-3 rounded-xl mr-4 group-hover:bg-stone-500/40 transition-colors group-hover:rotate-12">
                             <svg class="w-8 h-8 text-stone-400 group-hover:text-stone-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </div>
                          <div>
                             <h4 class="text-stone-300 font-bold uppercase text-xl mb-1 group-hover:text-white font-carter">Infrastructure Loss</h4>
                             <p class="text-slate-400 text-lg group-hover:text-slate-300 font-signika">Destruction of bridges and transportation infrastructure.</p>
                          </div>
                       </div>
                    </div>

                    <div class="bg-stone-900/40 border-l-8 border-l-stone-400 p-6 rounded-r-3xl">
                       <p class="text-stone-200 italic text-xl font-signika">"Post-eruption lahars from Mount Pinatubo continued for years after 1991, affecting Pampanga and Tarlac."</p>
                       <p class="text-stone-500 text-sm mt-3 font-bold uppercase font-carter tracking-widest">— Lagmay et al., 2020</p>
                    </div>

                    <div class="bg-stone-950/40 border-2 border-stone-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-stone-900/40 transition-colors duration-500 group hover:border-stone-400 hover:shadow-lg">
                        <div class="mr-4 mt-1 bg-stone-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                             <svg class="w-8 h-8 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3" /></svg>
                        </div>
                        <div>
                             <h4 class="text-stone-300 font-bold uppercase text-lg mb-1 group-hover:text-stone-200 font-carter tracking-wide">Safety Protocol: Avoid Valleys</h4>
                             <p class="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 font-signika">
                                Lahars follow river valleys. Move to <span class="text-white font-bold bg-stone-600 px-2 py-0.5 rounded shadow-sm">high ground</span> immediately when rain starts near volcanic deposits.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border-2 border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-xl hover:border-stone-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://pubs.usgs.gov/fs/1997/fs114-97/resources/lourdes.jpg" alt="Pinatubo Lahar" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://pubs.usgs.gov/fs/1997/fs114-97/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-stone-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-lg text-slate-200 font-bold mb-1 font-signika">Destructive lahars from Mount Pinatubo (Philippines).</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-xl hover:border-stone-400">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://volcanofoundation.org/wp-content/uploads/2021/07/lhar-devastation-eruption-mount-pinatubo-philippines.jpg" alt="Lahar Devastation" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://volcanofoundation.org/building-risk-knowledge/hazards/lahars/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-stone-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-lg text-slate-200 font-bold mb-1 font-signika">Building risk knowledge: Lahar devastation.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'lava-flows',
            title: 'Lava Flows',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 pr-2">
                 <div class="space-y-6">
                    <h3 class="text-4xl md:text-6xl font-carter font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Lava Flows</h3>
                    <p class="text-xl md:text-2xl text-slate-300 mb-6 font-signika font-medium leading-relaxed">
                       Molten rock that flows from the crater during a non-explosive eruption.
                    </p>

                    <div class="bg-orange-900/20 border-2 border-orange-500/20 p-6 rounded-[2rem] hover:border-orange-500/50 hover:shadow-lg transition-all duration-300">
                       <h4 class="font-bold text-orange-400 mb-4 uppercase flex items-center font-carter text-2xl tracking-wide">Effects</h4>
                       <ul class="space-y-4 text-xl text-slate-200 font-signika">
                          <li class="flex items-start group"><span class="text-orange-500 mr-3 group-hover:scale-125 transition-transform font-bold">►</span> Burns everything it touches but moves slowly</li>
                          <li class="flex items-start group"><span class="text-orange-500 mr-3 group-hover:scale-125 transition-transform font-bold">►</span> Destroys farmland and infrastructure</li>
                          <li class="flex items-start group"><span class="text-orange-500 mr-3 group-hover:scale-125 transition-transform font-bold">►</span> Creates new land when it cools</li>
                       </ul>
                    </div>

                    <div class="bg-orange-950/40 border-l-8 border-orange-500 p-6 rounded-r-3xl">
                       <p class="text-orange-200 italic text-xl font-signika">"The Mayon Volcano’s eruptions often produce lava flows that threaten nearby barangays in Albay."</p>
                       <p class="text-orange-400 text-sm mt-3 font-bold uppercase font-carter tracking-widest">— PHIVOLCS, 2023</p>
                    </div>

                    <div class="bg-orange-950/40 border-2 border-orange-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-orange-900/60 transition-colors duration-500 group hover:border-orange-500 hover:shadow-xl">
                        <div class="mr-4 mt-1 bg-orange-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                             <svg class="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-orange-300 font-bold uppercase text-lg mb-1 group-hover:text-white font-carter tracking-wide">Safety Protocol: Evacuate Calmly</h4>
                             <p class="text-slate-300 text-base leading-relaxed group-hover:text-white font-signika">
                                Lava moves slowly. You typically have time to <span class="text-white font-bold bg-orange-600 px-2 py-0.5 rounded shadow-md">walk away</span> from the path of flow. Follow designated evacuation routes.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border-2 border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-xl hover:border-orange-500">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://volcanodiscovery.de/uploads/pics/2018/02/DSC_4213.jpg" alt="Mayon Lava" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://www.volcanodiscovery.com/es/mayon/news/67715/Mayon-volcano-Philippines-lava-flows-remain-active-resumption-of-explosive-activity.html" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-orange-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-lg text-slate-200 font-bold mb-1 font-signika">Lava flows from Mayon Volcano (Philippines).</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-xl hover:border-orange-500">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://static.temblor.net/wp-content/uploads/2018/01/mayon-volcano-eruption.jpg" alt="Mayon Eruption" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://temblor.net/volcano-insights/mayon-volcano-forces-evacuation-of-nearly-40000-people-6128/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-orange-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-lg text-slate-200 font-bold mb-1 font-signika">Mayon Volcano forces evacuation.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'volcanic-gases',
            title: 'Volcanic Gases',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 pr-2">
                 <div class="space-y-6">
                    <h3 class="text-4xl md:text-6xl font-carter font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Volcanic Gases</h3>
                    <p class="text-xl md:text-2xl text-slate-300 mb-6 font-signika font-medium leading-relaxed">
                       Emissions of gases such as sulfur dioxide (SO₂), carbon dioxide (CO₂), and hydrogen sulfide (H₂S) released before, during, or after eruptions.
                    </p>

                    <div class="bg-yellow-900/20 border-2 border-yellow-500/20 p-6 rounded-[2rem] hover:border-yellow-500/50 hover:shadow-lg transition-all duration-300">
                       <h4 class="font-bold text-yellow-400 mb-4 uppercase flex items-center font-carter text-2xl tracking-wide">Effects</h4>
                       <ul class="space-y-4 text-xl text-slate-200 font-signika">
                          <li class="flex items-start group"><span class="text-yellow-500 mr-3 group-hover:scale-125 transition-transform font-bold">►</span> Poisoning of animals and humans in low-lying areas</li>
                          <li class="flex items-start group"><span class="text-yellow-500 mr-3 group-hover:scale-125 transition-transform font-bold">►</span> Acid rain formation damaging crops and water</li>
                          <li class="flex items-start group"><span class="text-yellow-500 mr-3 group-hover:scale-125 transition-transform font-bold">►</span> Atmospheric pollution contributing to global cooling</li>
                       </ul>
                    </div>
                    
                    <div class="bg-yellow-950/40 border-l-8 border-yellow-500 p-6 rounded-r-3xl">
                       <p class="text-yellow-200 italic text-xl font-signika">"Taal Volcano releases sulfur dioxide plumes, monitored by PHIVOLCS to estimate eruption probability."</p>
                       <p class="text-yellow-400 text-sm mt-3 font-bold uppercase font-carter tracking-widest">— PHIVOLCS Gas Monitoring Bulletin, 2023</p>
                    </div>

                    <div class="bg-yellow-950/40 border-2 border-yellow-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-yellow-900/60 transition-colors duration-500 group hover:border-yellow-500 hover:shadow-xl">
                        <div class="mr-4 mt-1 bg-yellow-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                             <svg class="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        </div>
                        <div>
                             <h4 class="text-yellow-300 font-bold uppercase text-lg mb-1 group-hover:text-white font-carter tracking-wide">Safety Protocol: Mask & Seal</h4>
                             <p class="text-slate-300 text-base leading-relaxed group-hover:text-white font-signika">
                                If you smell rotten eggs (sulfur), <span class="text-white font-bold bg-yellow-600 px-2 py-0.5 rounded shadow-sm">cover your face</span> and seal windows. Move to higher ground if gases accumulate.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border-2 border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-xl hover:border-yellow-500">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://files01.pna.gov.ph/category-list/2021/10/15/img20211015220021.jpg" alt="Taal Vog" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://www.pna.gov.ph/articles/1156851" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-yellow-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-lg text-slate-200 font-bold mb-1 font-signika">Volcanic smog (vog) from Taal Volcano.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-xl hover:border-yellow-500">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://volcano.si.edu/images/bulletin/273070/273070_BGVN_022.jpg" alt="Gas Emission" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://volcano.si.edu/showreport.cfm?doi=10.5479/si.GVP.BGVN202110-273070" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-yellow-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-lg text-slate-200 font-bold mb-1 font-signika">Gas monitoring at Taal Volcano.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         },
         {
            id: 'volcanic-tsunami',
            title: 'Volcanic Tsunami',
            content: `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[calc(100vh-250px)] relative pb-10 lg:pb-0">
             <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

             <div class="flex flex-col justify-start h-full lg:px-12 py-2 pr-2">
                 <div class="space-y-6">
                    <h3 class="text-4xl md:text-6xl font-carter font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-4 uppercase transition-all duration-500 hover:tracking-widest cursor-default drop-shadow-lg">Volcanic Tsunami</h3>
                    <p class="text-xl md:text-2xl text-slate-300 mb-6 font-signika font-medium leading-relaxed">
                       Large sea waves generated by underwater eruptions, landslides, or caldera collapses.
                    </p>

                    <div class="bg-indigo-900/20 border-2 border-indigo-500/20 p-6 rounded-[2rem] hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300">
                       <h4 class="font-bold text-indigo-400 mb-4 uppercase flex items-center font-carter text-2xl tracking-wide">Effects</h4>
                       <ul class="space-y-4 text-xl text-slate-200 font-signika">
                          <li class="flex items-start group"><span class="text-indigo-500 mr-3 group-hover:scale-125 transition-transform font-bold">►</span> Flooding of coastal communities</li>
                          <li class="flex items-start group"><span class="text-indigo-500 mr-3 group-hover:scale-125 transition-transform font-bold">►</span> Destruction of ports and fishing areas</li>
                          <li class="flex items-start group"><span class="text-indigo-500 mr-3 group-hover:scale-125 transition-transform font-bold">►</span> Risk to nearby islands and coastal cities</li>
                       </ul>
                    </div>

                    <div class="bg-indigo-950/40 border-l-8 border-indigo-500 p-6 rounded-r-3xl">
                       <p class="text-indigo-200 italic text-xl font-signika">"The 2022 Hunga Tonga–Hunga Ha’apai eruption generated a tsunami that reached the Philippines."</p>
                       <p class="text-indigo-400 text-sm mt-3 font-bold uppercase font-carter tracking-widest">— USGS, 2022</p>
                    </div>

                    <div class="bg-indigo-950/40 border-2 border-indigo-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-indigo-900/60 transition-colors duration-500 group hover:border-indigo-500 hover:shadow-xl">
                        <div class="mr-4 mt-1 bg-indigo-500/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                             <svg class="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                        </div>
                        <div>
                             <h4 class="text-indigo-300 font-bold uppercase text-lg mb-1 group-hover:text-white font-carter tracking-wide">Safety Protocol: Immediate Evacuation</h4>
                             <p class="text-slate-300 text-base leading-relaxed group-hover:text-white font-signika">
                                If you feel a strong quake near the coast or see sudden sea level changes, <span class="text-white font-bold bg-indigo-600 px-2 py-0.5 rounded shadow-sm">evacuate inland</span> immediately.
                             </p>
                        </div>
                    </div>
                 </div>
             </div>

             <div class="h-96 lg:h-full relative overflow-hidden rounded-[2rem] bg-black/20 border-2 border-white/5 group/scroller overflow-y-auto custom-scrollbar">
                 <div class="space-y-6 px-4 py-6">
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-xl hover:border-indigo-500">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://nhess.copernicus.org/articles/20/549/2020/nhess-20-549-2020-f11-thumb.jpg" alt="Anak Krakatau Tsunami" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://nhess.copernicus.org/articles/20/549/2020/" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-indigo-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-lg text-slate-200 font-bold mb-1 font-signika">Example of a major volcanic tsunami (2018).</p>
                        </div>
                    </div>
                    <div class="bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-xl hover:border-indigo-500">
                        <div class="h-56 overflow-hidden relative">
                           <img src="https://volcano.oregonstate.edu/sites/volcano.oregonstate.edu/files/tongaquake.jpg" alt="Tonga Tsunami" class="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in" />
                           <a href="https://volcano.oregonstate.edu/volcanogenic-tsunamis" target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-indigo-500" title="View Source">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                           </a>
                        </div>
                        <div class="p-6">
                           <p class="text-lg text-slate-200 font-bold mb-1 font-signika">Hunga Tonga–Hunga Ha’apai eruption generated a tsunami.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        `
         }
      ],
      refresherQuiz: [
         { id: 'vq1', question: 'What is a pyroclastic flow?', options: ['Water flood', 'Hot gas & rock mix', 'Lava river', 'Ash cloud'], correctAnswer: 1 },
         { id: 'vq2', question: 'Lahars are often triggered by?', options: ['Wind', 'Rain', 'Sun', 'Snow'], correctAnswer: 1 },
         { id: 'vq3', question: 'What gas smells like rotten eggs?', options: ['Sulfur Dioxide', 'Oxygen', 'Carbon Dioxide', 'Helium'], correctAnswer: 0 }
      ],
      finalQuiz: [
         { id: 'vfq1', question: 'Scientists observe increasing ground deformation and frequent volcanic quakes near Mt. Mayon. What does this most likely indicate?', options: ['The volcano is returning to its normal state.', 'Magma is moving upward, possibly leading to an eruption.', "Wind pressure is increasing on the volcano's slopes", 'The volcano is cooling down.'], correctAnswer: 1 },
         { id: 'vfq2', question: 'Residents notice a strong sulfur smell and steam rising from a nearby crater. What should be done to forecast possible volcanic activity?', options: ['Dismiss it as normal gas emission.', 'Monitor and report the observation to PHIVOLCS', 'Evacuate immediately without confirmation.', 'Wait until ashfall occurs before acting.'], correctAnswer: 1 },
         { id: 'vfq3', question: 'A viral post claims that "Mt. Taal will erupt this weekend." How can you verify the accuracy of this claim?', options: ['Check the latest PHIVOLCS bulletin and alert level.', "Believe it because it's trending online", 'Wait until someone nearby confirms an explosion.', 'Share it to warn others quickly'], correctAnswer: 0 },
         { id: 'vfq4', question: "Your teacher says the volcano's alert level has changed from 1 to 3. What does this accurately mean?", options: ['The volcano has completely erupted.', 'There is an increased tendency toward hazardous eruption', 'The volcano is safe for tourism again.', 'The volcano has already stopped releasing gas.'], correctAnswer: 1 },
         { id: 'vfq5', question: 'After a volcanic eruption, rivers nearby experience lahar flow when it rains heavily. What is the main cause of this hazard?', options: ['Cooling magma creates more rain.', 'Ash and debris mix with rainwater and flow downstream', 'Earthquakes push the water outward.', 'Forest fires loosen the soil.'], correctAnswer: 1 },
         { id: 'vfq6', question: 'Villages near a volcano are buried in pyroclastic materials. What caused this type of destruction?', options: ['Fast-moving currents of hot gas and volcanic fragments.', 'Rising water levels from nearby river.', 'Lava solidifying near houses', 'Slow buildup of volcanic gases'], correctAnswer: 0 },
         { id: 'vfq7', question: 'Scientists record a series of harmonic tremors followed by gas emission increases. What pattern do these data suggest?', options: ['The volcano is becoming dormant.', 'There is a potential eruption due to magma movement.', "The volcano's activity is decreasing", 'Weather changes are affecting the readings.'], correctAnswer: 1 },
         { id: 'vfq8', question: 'In the past 50 years, every time the crater lake of a certain volcano changes color, an eruption follows within weeks. What does this pattern imply? ', options: ['The lake color change can be ignored.', 'It may serve as an early warning indicator of volcanic activity.', 'The lake is affected only by seasonal rainfall.', 'It proves that eruptions are caused by lake pollution.'], correctAnswer: 1 },
         { id: 'vfq9', question: 'PHIVOLCS raises the alert level to 4 for a nearby volcano. As a student living 8 km from the crater, what should you and your family do?', options: ['Continue normal activities but stay alert.', 'Pack essentials and evacuate following official instructions.', 'Wait for ashfall before leaving.', 'Climb the volcano to observe the eruption safely.'], correctAnswer: 1 },
         { id: 'vfq10', question: 'Local officials plan to allow tourists to visit a volcano still under Alert Level 2. What is the most appropriate decision based on hazard forecasting? ', options: ['Allow it because the volcano is not yet erupting.', 'Limit access and wait for official downgrading to Alert Level 0.', 'Promote more tours for economic recovery.', 'Ignore PHIVOLCS advisories since it’s a minor alert.'], correctAnswer: 1 }
      ]
   }
];

export const FLOOD_SCENARIOS: FloodScenario[] = [
   {
      id: '1',
      text: 'Heavy rain causes rapid water rise. You are on the ground floor.',
      isSafe: false,
      explanation: 'Move to a higher floor or roof immediately. Ground floors flood quickly.',
   },
   {
      id: '2',
      text: 'You see water flowing over a road. It looks shallow.',
      isSafe: false,
      explanation: 'Never walk or drive through moving water. It can sweep you away.',
   },
   {
      id: '3',
      text: 'Floodwaters enter your home. You turn off the main power from a dry spot.',
      isSafe: true,
      explanation: 'Cutting power prevents electrocution, but ensure you are dry.',
   },
   {
      id: '4',
      text: 'You follow designated evacuation routes to higher ground.',
      isSafe: true,
      explanation: 'Designated routes are checked for safety. Shortcuts may be blocked.',
   },
   {
      id: '5',
      text: 'The rain stops. You return home immediately.',
      isSafe: false,
      explanation: 'Wait for official "All Clear". Hazards may persist.',
   }
];
