
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Lecture, HazardTopic } from '../types';
import { ArrowLeft, BrainCircuit, Gamepad2, Clock, ChevronRight, ChevronLeft, Target, Shield, Play, AlertTriangle, Zap, Waves, Maximize, Minimize, X, ArrowDown, ArrowUp, ZoomIn, RotateCcw } from 'lucide-react';
import { QuizComponent } from '../components/QuizComponent';
import { EarthquakeGame } from '../components/games/EarthquakeGame';
import { FloodGame } from '../components/games/FloodGame';
import { DecisionGame } from '../components/games/DecisionGame';
import { ImageWithLoader } from '../components/ImageWithLoader';

interface LectureViewProps {
  lecture: Lecture;
  onBack: () => void;
  tutorialStep: number | null;
  setTutorialStep: (step: number | null) => void;
}

// Game-like visual themes based on topic - LIGHTER VARIANTS
const THEME_STYLES: Record<HazardTopic | 'General', {
  bgGradient: string;
  accentColor: string;
  buttonBg: string;
  buttonHover: string;
  icon: React.ElementType;
  glow: string;
}> = {
  'Earthquake': {
    bgGradient: 'from-orange-800 via-slate-700 to-slate-800',
    accentColor: 'text-orange-400',
    buttonBg: 'bg-orange-600',
    buttonHover: 'hover:bg-orange-500',
    icon: ActivityIcon,
    glow: 'shadow-orange-500/20'
  },
  'Flood': {
    bgGradient: 'from-cyan-800 via-blue-800 to-slate-800',
    accentColor: 'text-cyan-300',
    buttonBg: 'bg-cyan-600',
    buttonHover: 'hover:bg-cyan-500',
    icon: Waves,
    glow: 'shadow-cyan-500/20'
  },
  'Volcano': {
    bgGradient: 'from-red-800 via-slate-700 to-slate-800',
    accentColor: 'text-red-400',
    buttonBg: 'bg-red-600',
    buttonHover: 'hover:bg-red-500',
    icon: AlertTriangle,
    glow: 'shadow-red-500/20'
  },
  'General': {
    bgGradient: 'from-slate-700 via-slate-600 to-slate-800',
    accentColor: 'text-emerald-400',
    buttonBg: 'bg-emerald-600',
    buttonHover: 'hover:bg-emerald-500',
    icon: Shield,
    glow: 'shadow-emerald-500/20'
  }
};

function ActivityIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  );
}

type SlideType = 'content' | 'dashboard' | 'final-quiz' | 'decision-game';

interface Slide {
  type: SlideType;
  title: string;
  data?: any;
}

export const LectureView: React.FC<LectureViewProps> = ({ lecture, onBack, tutorialStep, setTutorialStep }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showStartMenu, setShowStartMenu] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isGameFullscreen, setIsGameFullscreen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(() => {
    // initialize zoom level based on screen size for mobile users
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024 ? 0.7 : 1.5; // 0.7 for mobile/tablet, 1.5 for desktop
    }
    return 1.5;
  });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const contentScrollRef = useRef<HTMLDivElement>(null);
  const initButtonRef = useRef<HTMLButtonElement>(null);
  const abortButtonRef = useRef<HTMLButtonElement>(null);

  // auto-scroll logic for Tutorial Step 3 & 4
  useEffect(() => {
     if (tutorialStep === 3 && initButtonRef.current) {
        initButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
     } else if (tutorialStep === 4 && abortButtonRef.current) {
        abortButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
     }
  }, [tutorialStep]);

  const handleNextTutorialStep = () => {
    if (tutorialStep === 3) {
      setTutorialStep(4);
    } else if (tutorialStep === 4) {
      // complete
      localStorage.setItem('haip_onboarding_complete', 'true');
      setTutorialStep(null);
    }
  };

  const completeTutorial = () => {
    localStorage.setItem('haip_onboarding_complete', 'true');
    setTutorialStep(null);
  };

  const resetZoom = () => {
    const defaultZoom = typeof window !== 'undefined' && window.innerWidth < 1024 ? 0.7 : 1.5;
    setZoomLevel(defaultZoom);
  };

  // Construct Virtual Slides Array
  const slides = useMemo(() => {
    const s: Slide[] = lecture.sections.map((section, index) => ({
      type: index === 1 ? 'dashboard' : 'content',
      title: section.title,
      data: section
    }));
    
    // Insert Decision Game Slide
    if (lecture.decisionGame && lecture.decisionGame.length > 0) {
      s.push({
        type: 'decision-game',
        title: 'Hazard Simulation',
        data: lecture.decisionGame
      });
    }

    // Insert Final Quiz Slide
    if (lecture.finalQuiz && lecture.finalQuiz.length > 0) {
      s.push({
        type: 'final-quiz',
        title: 'Test Your Knowledge',
        data: lecture.finalQuiz
      });
    }

    return s;
  }, [lecture]);

  useEffect(() => {
    setActiveSlideIndex(0);
    setShowStartMenu(true);
  }, [lecture.id]);

  useEffect(() => {
    if (contentScrollRef.current) {
      contentScrollRef.current.scrollTop = 0;
    }
  }, [activeSlideIndex]);

  // Handle injected content image loading
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (contentScrollRef.current) {
        const images = contentScrollRef.current.querySelectorAll('img');
        
        images.forEach((img) => {
          if (img.complete) return; // Already loaded

          // Add loading state classes
          img.style.opacity = '0';
          img.style.transition = 'opacity 0.5s ease-in-out';
          
          const parent = img.parentElement;
          if (parent) {
             parent.classList.add('animate-pulse', 'bg-white/10');
          }

          const handleLoad = () => {
             img.style.opacity = '1';
             if (parent) {
               parent.classList.remove('animate-pulse', 'bg-white/10');
             }
          };

          img.addEventListener('load', handleLoad);
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [activeSlideIndex, slides]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as any;
      setIsFullscreen(!!(doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    const doc = document as any;
    const el = containerRef.current as any;
    const isFullscreen = doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement;

    if (!isFullscreen) {
      if (el) {
          // Robust check for vendor prefixes
          if (el.requestFullscreen) {
            el.requestFullscreen().catch((err: any) => {
              console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
          } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
          } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
          } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
          }
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
      }
    }
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' && target.classList.contains('zoomable-image')) {
      const img = target as HTMLImageElement;
      setPreviewImage(img.src);
    }
  };

  const theme = THEME_STYLES[lecture.topic] || THEME_STYLES.General;
  const TopicIcon = theme.icon;

  const activeSlide = slides[activeSlideIndex];
  const isFirstSlide = activeSlideIndex === 0;
  const isLastSlide = activeSlideIndex === slides.length - 1;
  const progressPercent = ((activeSlideIndex + 1) / slides.length) * 100;

  const handleNext = () => {
    if (!isLastSlide) {
      setActiveSlideIndex(prev => prev + 1);
    } else {
      onBack();
    }
  };

  const handlePrev = () => {
    if (!isFirstSlide) {
      setActiveSlideIndex(prev => prev - 1);
    }
  };

  // --- MISSION BRIEFING SCREEN ---
  if (showStartMenu) {
    const titleSize = lecture.title.length > 20 ? "text-3xl sm:text-4xl md:text-6xl" : "text-4xl sm:text-5xl md:text-7xl";
    
    return (
      <div className={`fixed inset-0 z-50 overflow-y-auto bg-gradient-to-br ${theme.bgGradient} text-white`} ref={containerRef}>
        
        {/* TUTORIAL OVERLAY FOR STEPS 3 & 4 */}
        {tutorialStep !== null && (tutorialStep === 3 || tutorialStep === 4) && (
          <div className="fixed top-24 left-0 right-0 z-[100] flex justify-center px-4 animate-in fade-in duration-500">
             <div className="bg-slate-900 border border-brand-500/50 shadow-[0_0_50px_rgba(14,165,233,0.3)] max-w-2xl w-full rounded-2xl p-6 relative overflow-hidden">
                {/* Decorative Tech Lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-2/3 h-px bg-gradient-to-l from-brand-500/50 to-transparent"></div>
                
                <div className="flex items-start gap-6">
                   <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-brand-400 font-mono text-xs uppercase tracking-widest font-bold">
                           System Message // Step {tutorialStep + 1} of 5
                        </h3>
                        <button onClick={completeTutorial} className="text-slate-500 hover:text-white transition-colors">
                           <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <p className="text-lg text-white font-medium mb-6 min-h-[3.5rem]">
                        {tutorialStep === 3 && "Click 'INITIALIZE' to deploy the mission. This begins the interactive lesson and simulation."}
                        {tutorialStep === 4 && "Use 'ABORT MISSION' or 'Exit' to return to the Command Deck at any time."}
                      </p>

                      <div className="flex justify-end gap-3">
                         <button 
                           onClick={completeTutorial}
                           className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider transition-colors"
                         >
                            Skip Briefing
                         </button>
                         <button 
                           onClick={handleNextTutorialStep}
                           className="px-6 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-brand-500/25 transition-all flex items-center"
                         >
                            {tutorialStep === 4 ? 'Finish Briefing' : 'Next'} <ChevronRight className="w-4 h-4 ml-1" />
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        )}

        {/* Top Right Controls Group */}
        <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-3">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center bg-black/40 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md shadow-lg transition-all hover:bg-black/60">
                 <button onClick={resetZoom} title="Reset Zoom" className="pr-3 border-r border-white/10 text-slate-400 hover:text-white transition-colors flex items-center">
                    <RotateCcw className="w-4 h-4" />
                 </button>
                 <div className="flex items-center pl-3">
                    <ZoomIn className="w-4 h-4 text-slate-300 mr-2" />
                    <input
                      type="range"
                      min="0.8"
                      max="1.5"
                      step="0.1"
                      value={zoomLevel}
                      onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
                      className="w-20 h-1.5 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-white"
                    />
                 </div>
            </div>

            {/* Fullscreen Toggle */}
            <button 
              onClick={toggleFullscreen} 
              className="p-3 bg-black/40 border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all shadow-lg group"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
               {isFullscreen ? (
                 <Minimize className="w-6 h-6 group-hover:scale-90 transition-transform" />
               ) : (
                 <Maximize className="w-6 h-6 group-hover:scale-110 transition-transform" />
               )}
            </button>
        </div>

        <div className="fixed inset-0 opacity-40 pointer-events-none">
          <ImageWithLoader 
             src={lecture.imageUrl} 
             alt="Background" 
             containerClassName="w-full h-full"
             className="w-full h-full object-cover filter blur-sm scale-110 animate-pulse" 
             style={{ animationDuration: '10s' }}
           />
        </div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />

        {/* Content Wrapper */}
        <div className="relative min-h-full flex items-center justify-center p-6">
          <div 
            style={{ zoom: zoomLevel }}
            className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center animate-in fade-in zoom-in duration-500 py-10 lg:py-0"
          >
            
            {/* Mission Details */}
            <div className="flex-1 text-center lg:text-left space-y-6 w-full">
              <div className={`inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md ${theme.accentColor} font-mono text-xs md:text-sm tracking-widest uppercase mb-2 shadow-lg`}>
                <TopicIcon className="w-4 h-4 mr-2" />
                Mission Protocol: {lecture.topic}
              </div>
              
              <h1 className={`${titleSize} font-black uppercase tracking-tighter leading-none drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]`}>
                {lecture.title}
              </h1>
              
              <p className="text-slate-200 text-base md:text-xl font-light leading-relaxed border-l-4 border-white/20 pl-6 bg-gradient-to-r from-black/40 to-transparent p-2 rounded-r-lg backdrop-blur-sm">
                {lecture.description}
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <div className="bg-black/40 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-md flex flex-col items-center lg:items-start min-w-[120px]">
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1 font-bold">Duration</div>
                  <div className="text-xl font-bold flex items-center text-white">
                    <Clock className="w-4 h-4 mr-2 text-slate-400" />
                    {lecture.readTime}:00
                  </div>
                </div>
                <div className="bg-black/40 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-md flex flex-col items-center lg:items-start min-w-[120px]">
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1 font-bold">Difficulty</div>
                  <div className={`text-xl font-bold ${theme.accentColor}`}>
                    {lecture.difficulty.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="w-full max-w-md bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
              <div className={`absolute top-0 left-0 w-full h-1 ${theme.buttonBg}`} />
              
              <h3 className="text-base font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center">
                <Target className="w-5 h-5 mr-2" /> 
                Mission Competencies
              </h3>
              
              <ul className="space-y-4 mb-10">
                {lecture.competencies.slice(0, 3).map((comp, i) => (
                  <li key={i} className="flex items-start text-lg text-slate-200">
                    <div className={`mt-2 mr-3 w-2 h-2 rounded-full ${theme.buttonBg} shadow-[0_0_8px_currentColor] flex-shrink-0`} />
                    <span className="leading-snug font-medium">{comp}</span>
                  </li>
                ))}
              </ul>
              
              {/* Initialize Button - HIGHLIGHTED IN STEP 3 */}
              <div className="relative">
                 {tutorialStep === 3 && (
                   <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-[80] flex flex-col items-center animate-bounce">
                     <div className="bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg mb-1 uppercase tracking-wide">
                        Click to Start
                     </div>
                     <ArrowDown className="w-8 h-8 text-brand-500 fill-current" />
                   </div>
                 )}
                 
                 <button
                  ref={initButtonRef}
                  onClick={() => {
                     // try fullscreen safely - iOS often doesn't support element fullscreen, 
                     // so we wrap this to prevent crashing the click handler
                     try {
                        const doc = document as any;
                        const isFullscreen = doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement;
                        
                        if (!isFullscreen && containerRef.current) {
                           const el = containerRef.current as any;
                           if (el.requestFullscreen) {
                              el.requestFullscreen().catch(() => {});
                           } else if (el.webkitRequestFullscreen) {
                              el.webkitRequestFullscreen();
                           }
                        }
                     } catch (e) {
                        // ignore errors on devices that don't support it
                     }
                     setShowStartMenu(false);
                  }}
                  className={`w-full group/btn relative overflow-hidden ${theme.buttonBg} ${theme.buttonHover} text-white font-black uppercase tracking-wider py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer ${tutorialStep === 3 ? 'ring-4 ring-brand-500/50 shadow-[0_0_30px_rgba(14,165,233,0.5)] z-50' : ''}`}
                >
                  <span className="relative z-10 flex items-center">
                    Initialize <Play className="w-5 h-5 ml-2 fill-current" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-[-200%] transition-transform duration-700 ease-in-out" />
                </button>
              </div>
              
              {/* Abort Button - HIGHLIGHTED IN STEP 4 */}
              <div className="relative mt-4">
                 {tutorialStep === 4 && (
                   <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-[80] flex flex-col items-center animate-bounce">
                     <ArrowUp className="w-8 h-8 text-brand-500 fill-current mb-1" />
                     <div className="bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wide">
                        Return to Base
                     </div>
                   </div>
                 )}

                 <button 
                  ref={abortButtonRef}
                  onClick={onBack} 
                  className={`w-full text-[10px] text-slate-500 hover:text-white uppercase tracking-widest transition-colors font-bold ${tutorialStep === 4 ? 'text-white bg-white/10 rounded py-2 ring-2 ring-brand-500/50 z-50' : ''}`}
                >
                  Abort Mission
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- SLIDE BASED CONTENT VIEW ---
  return (
    <div 
      ref={containerRef}
      className={`h-screen supports-[height:100dvh]:h-[100dvh] w-full flex flex-col bg-gradient-to-br ${theme.bgGradient} text-white font-sans overflow-hidden relative`}
    >
        {/* Background Layers (Persistent from Start Menu) */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 opacity-40 pointer-events-none">
                <ImageWithLoader 
                    src={lecture.imageUrl} 
                    alt="Background" 
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover filter blur-sm scale-110 animate-pulse" 
                    style={{ animationDuration: '10s' }}
                />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />
        </div>

        {previewImage && (
          <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setPreviewImage(null)}>
             <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                <X className="w-8 h-8" />
             </button>
             <ImageWithLoader 
               src={previewImage} 
               alt="Preview" 
               containerClassName="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl ring-1 ring-white/10"
               className="max-h-[90vh] max-w-[90vw] object-contain"
               onClick={(e: React.MouseEvent) => e.stopPropagation()} 
             />
          </div>
        )}

        {/* TOP BAR - ALWAYS VISIBLE */}
        <div className="flex-none flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-black/10 border-b border-white/5 backdrop-blur-sm z-20 relative">
          <button onClick={onBack} className="group flex items-center text-slate-300 hover:text-white transition-colors font-medium">
            <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 shadow-sm mr-2 sm:mr-3 group-hover:bg-white/10">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase tracking-wide hidden sm:inline">Exit Mission</span>
            <span className="text-xs uppercase tracking-wide sm:hidden">Exit</span>
          </button>

          <div className="flex items-center space-x-3">
              {/* Zoom Controls */}
              <div className="flex items-center bg-black/20 border border-white/10 rounded-full px-3 py-1.5 mr-2">
                 <button onClick={resetZoom} className="pr-3 border-r border-white/10 text-slate-400 hover:text-white transition-colors flex items-center" title="Reset Zoom">
                    <RotateCcw className="w-4 h-4" />
                 </button>
                 <div className="flex items-center pl-3">
                    <ZoomIn className="w-4 h-4 text-slate-300 mr-2" />
                    <input 
                      type="range" 
                      min="0.5" 
                      max="1.5" 
                      step="0.1" 
                      value={zoomLevel} 
                      onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
                      className="w-24 h-1.5 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-white"
                      title="Zoom Content (0.5x - 1.5x)"
                    />
                 </div>
              </div>

              <button 
                onClick={toggleFullscreen} 
                className="p-2 bg-black/20 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-slate-300 hover:text-white" 
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>
            <div className={`px-3 py-1 bg-black/20 border border-white/10 rounded text-[10px] font-bold uppercase tracking-wider ${theme.accentColor}`}>
              {lecture.topic} <span className="hidden sm:inline">Protocol</span>
            </div>
          </div>
        </div>

        <div className="h-1 bg-white/5 w-full flex-none z-20 relative">
          <div 
            className={`h-full ${theme.buttonBg} transition-all duration-300 shadow-[0_0_10px_currentColor]`} 
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div 
           className="flex-1 overflow-y-auto lg:overflow-y-hidden w-full mx-auto p-4 sm:p-6 lg:p-8 custom-scrollbar px-8 lg:px-12 relative z-10"
           ref={contentScrollRef}
           onClick={handleContentClick}
        >
          <div style={{ zoom: zoomLevel }} className="h-full">
            {activeSlide.type === 'dashboard' ? (
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-full h-auto min-h-min w-full">
                  {/* Left Column Container - Explicitly defined to handle Flex distribution */}
                  <div className="flex flex-col gap-6 lg:h-full h-auto lg:overflow-hidden order-1 min-w-0">
                      {/* Objectives Section - Flex 1 to take remaining space, min-h-0 to allow scrolling inside */}
                      <div className="bg-black/10 border border-white/10 rounded-3xl p-6 sm:p-6 backdrop-blur-sm lg:flex-1 lg:min-h-0 overflow-y-auto max-h-96 lg:max-h-none">
                          <h2 className={`text-2xl sm:text-3xl font-black uppercase mb-6 ${theme.accentColor} tracking-tight`}>
                             {activeSlide.title}
                          </h2>
                          <div 
                            className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-slate-200 prose-li:text-slate-200"
                            dangerouslySetInnerHTML={{ __html: activeSlide.data.content }}
                          />
                      </div>

                      {/* Game Section - Flex 1 to split evenly with Objectives */}
                      <div className="bg-black/20 border border-white/10 rounded-3xl p-4 sm:p-6 backdrop-blur-sm relative overflow-hidden flex flex-col lg:flex-1 lg:min-h-0 max-h-96 lg:max-h-none">
                          <div className="flex items-center justify-between mb-4 z-10 flex-none">
                            <h3 className="text-xl font-bold text-white flex items-center">
                               <Gamepad2 className={`w-5 h-5 mr-2 ${theme.accentColor}`} />
                               Simulation
                            </h3>
                            <span className="text-[10px] uppercase font-bold bg-white/10 px-2 py-1 rounded text-slate-300">Interactive</span>
                          </div>
                          
                          <div className="flex-1 relative z-10 overflow-y-auto custom-scrollbar">
                             {lecture.gameType === 'earthquake-sim' && <EarthquakeGame onPlayClick={() => setIsGameFullscreen(true)} />}
                             {lecture.gameType === 'flood-choice' && <FloodGame onPlayClick={() => setIsGameFullscreen(true)} />}
                             {lecture.gameType === 'none' && (
                               <div className="flex items-center justify-center h-full text-slate-400 text-sm italic">
                                 No simulation required for this protocol.
                               </div>
                             )}
                          </div>
                      </div>
                  </div>

                  {/* Right Column - Quiz */}
                  <div className="lg:h-full h-auto lg:overflow-hidden order-2 min-w-0">
                     <QuizComponent questions={lecture.refresherQuiz || []} title="Refresher Quiz" mode="wizard" />
                  </div>
               </div>
            ) : activeSlide.type === 'decision-game' ? (
                <div className="w-full h-full flex flex-col items-center justify-start max-w-6xl mx-auto pb-20 pt-10 overflow-y-auto custom-scrollbar">
                   <DecisionGame scenarios={activeSlide.data} topic={lecture.topic} />
                </div>
            ) : activeSlide.type === 'final-quiz' ? (
               <div className="w-full lg:h-full h-auto flex flex-col items-center justify-start max-w-5xl mx-auto overflow-y-auto custom-scrollbar pb-20 lg:pb-0">
                   <div className="w-full">
                      <QuizComponent questions={activeSlide.data} title="Test Your Knowledge" mode="form" />
                   </div>
               </div>
            ) : (
               <div className="flex flex-col lg:h-full h-auto">
                  <div className="flex items-center space-x-3 opacity-60">
                     <div className={`w-2 h-2 rounded-full ${theme.buttonBg}`}></div>
                     <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
                       Section {activeSlideIndex} / {slides.length - 1}
                     </span>
                  </div>

                  <div 
                    className="prose prose-invert prose-xl md:prose-2xl max-w-none w-full lg:flex-1"
                    dangerouslySetInnerHTML={{ __html: activeSlide.data.content }}
                  />
               </div>
            )}
          </div>
        </div>

        <div className="flex-none p-4 sm:p-6 bg-black/10 border-t border-white/5 backdrop-blur-sm z-20 relative">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={isFirstSlide}
              className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold transition-all ${
                isFirstSlide 
                  ? 'opacity-0 pointer-events-none' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex space-x-1.5 sm:space-x-2">
              {slides.map((_, idx) => (
                 <div 
                   key={idx}
                   className={`h-1.5 rounded-full transition-all duration-300 ${
                     idx === activeSlideIndex 
                       ? `w-6 sm:w-8 ${theme.buttonBg}` 
                       : 'w-1.5 sm:w-2 bg-white/30'
                   }`}
                 />
              ))}
            </div>

            <button
              onClick={handleNext}
              className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold transition-all shadow-lg ${theme.buttonBg} ${theme.buttonHover} text-white`}
            >
              <span className="hidden sm:inline">{isLastSlide ? 'Finish Mission' : 'Next Section'}</span>
              <span className="sm:hidden">{isLastSlide ? 'Finish' : 'Next'}</span>
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Fullscreen Game Modal */}
        {isGameFullscreen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[999] flex flex-col items-center justify-center p-4 animate-in fade-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsGameFullscreen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-110 shadow-xl border border-white/20 z-50"
              title="Close simulation"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Game Content with Iframes */}
            <div className="w-full h-full max-w-6xl flex flex-col items-center justify-center">
              {lecture.gameType === 'earthquake-sim' && (
                <iframe 
                  src="https://seismic-classroom-3d-earthquake-simulator-626730958040.us-west1.run.app"
                  className="w-full h-full border-0 rounded-lg"
                  title="3D Earthquake Simulator"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
                  allowFullScreen
                  loading="lazy"
                />
              )}
              {lecture.gameType === 'flood-choice' && (
                <iframe 
                  src="https://storm-surge-classroom-flood-simulator-626730958040.us-west1.run.app"
                  className="w-full h-full border-0 rounded-lg"
                  title="Storm Surge Simulator"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </div>
          </div>
        )}
    </div>
  );
};
