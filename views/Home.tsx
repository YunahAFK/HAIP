

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { LECTURES } from '../data';
import { LectureCard } from '../components/LectureCard';
import { Search, Shield, Target, ChevronRight, X, ArrowDown } from 'lucide-react';
import { HazardTopic } from '../types';
import { ImageWithLoader } from '../components/ImageWithLoader';

interface HomeProps {
  onNavigate: (lectureId: string) => void;
  tutorialStep: number | null;
  setTutorialStep: (step: number | null) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, tutorialStep, setTutorialStep }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<HazardTopic | 'All'>('All');

  const controlsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // auto-scroll to highlighted elements during walkthrough
  useEffect(() => {
    if (tutorialStep === 1 && controlsRef.current) {
      controlsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (tutorialStep === 2 && gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [tutorialStep]);

  const handleNextStep = () => {
    if (tutorialStep === null) return;

    if (tutorialStep < 2) {
      setTutorialStep(tutorialStep + 1);
    } else if (tutorialStep === 2) {
      // transition to Lecture View for step 3
      const firstLecture = filteredLectures[0] || LECTURES[0];
      if (firstLecture) {
        setTutorialStep(3); // next step in Lecture View
        onNavigate(firstLecture.id);
      } else {
        completeTutorial();
      }
    }
  };

  const completeTutorial = () => {
    localStorage.setItem('haip_onboarding_complete', 'true');
    setTutorialStep(null);
  };

  const filteredLectures = useMemo(() => {
    return LECTURES.filter(lecture => {
      const matchesSearch = lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lecture.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTopic = selectedTopic === 'All' || lecture.topic === selectedTopic;
      return matchesSearch && matchesTopic;
    });
  }, [searchTerm, selectedTopic]);

  // determine dialog position based on step
  const getDialogPosition = () => {
    switch (tutorialStep) {
      case 0: return 'bottom-8'; // Welcome - Bottom
      case 1: return 'bottom-8'; // Search (Top) - Dialog Bottom
      case 2: return 'top-24';   // Grid (Bottom) - Dialog Top
      default: return 'bottom-8';
    }
  };

  return (
    <div className="relative w-full min-h-full">
      {/* Custom Animations Styles */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes drift {
          0% { transform: translateY(0px); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
        .animate-blob {
          animation: blob 20s infinite ease-in-out;
        }
        .animate-drift {
          animation: drift 10s infinite linear;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
           animation-delay: 6s;
        }
      `}</style>

      {/* --- TUTORIAL OVERLAY --- */}
      {tutorialStep !== null && tutorialStep <= 2 && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-all duration-700 ${tutorialStep === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
          />

          {/* Tutorial Dialog Box */}
          <div className={`fixed ${getDialogPosition()} left-0 right-0 z-[100] flex justify-center px-4 animate-in fade-in duration-500 transition-all ease-in-out`}>
            <div className="bg-slate-900 border border-brand-500/50 shadow-[0_0_50px_rgba(14,165,233,0.3)] max-w-2xl w-full rounded-2xl p-6 relative overflow-hidden">
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
                    {tutorialStep === 0 && "Welcome Recruit. This is the HAIP Command Center. I will be your guide for this session."}
                    {tutorialStep === 1 && "Use the Command Deck to identify specific hazard protocols or filter missions by category."}
                    {tutorialStep === 2 && "Missions are displayed here. We will now select a mission to demonstrate the briefing protocol."}
                  </p>

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={completeTutorial}
                      className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider transition-colors"
                    >
                      Skip Briefing
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="px-6 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-brand-500/25 transition-all flex items-center"
                    >
                      {tutorialStep === 2 ? 'Select Mission' : 'Next'} <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Background Visual Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0">
          <ImageWithLoader
            src="gigapixel-u8c9kJ7.webp"
            alt="World Map Background"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-transparent to-slate-50/60" />
        </div>

        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[100px] animate-blob z-10 mix-blend-overlay" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 z-10 mix-blend-overlay" />
        <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] animate-blob animation-delay-4000 z-10 mix-blend-overlay" />

        <div className="absolute top-[60%] left-[10%] w-2 h-2 bg-slate-400 rounded-full animate-drift opacity-0 z-10" />
        <div className="absolute top-[40%] right-[20%] w-3 h-3 bg-blue-400 rounded-full animate-drift animation-delay-2000 opacity-0 z-10" />
        <div className="absolute top-[80%] left-[40%] w-1.5 h-1.5 bg-orange-400 rounded-full animate-drift animation-delay-6000 opacity-0 z-10" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        {/* Hero / Dashboard Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 bg-white/80 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-white/40">
          <div className="w-full md:w-3/5 lg:w-1/2">
            <div className="flex items-center text-brand-700 font-bold tracking-widest text-xs lg:text-sm uppercase mb-3">
              <Shield className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
              Disaster Preparedness Training
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase relative leading-tight drop-shadow-sm">
              <span className="relative z-10">Hazard Awareness Interactive Portal</span>
              <div className="absolute -bottom-2 left-0 w-1/3 h-3 bg-brand-200/50 -skew-x-12 -z-10" />
            </h1>
            <p className="text-slate-700 mt-6 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl">
              Select a learning module below to access comprehensive lessons, simulations, and safety protocols designed to build disaster resilience.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-8 md:mt-0 self-start md:self-end">
            <div className="hidden md:block text-right pl-6 border-l-2 border-slate-200">
              <div className="text-4xl lg:text-5xl font-black text-brand-600 leading-none">{LECTURES.length}</div>
              <div className="text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Active Modules</div>
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div
          ref={controlsRef}
          className={`flex flex-col md:flex-row gap-4 mb-10 items-center justify-between bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-slate-200/60 transition-all duration-500 ${tutorialStep === 1 ? 'relative z-[70] ring-4 ring-brand-500/50 scale-[1.02] shadow-[0_0_50px_rgba(14,165,233,0.3)] bg-white' : ''}`}
        >
          {tutorialStep === 1 && (
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-[80] flex flex-col items-center animate-bounce">
              <div className="bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg mb-2 uppercase tracking-wide whitespace-nowrap">
                Filter & Search
              </div>
              <ArrowDown className="w-8 h-8 text-brand-500 fill-current" />
            </div>
          )}

          <div className="relative w-full md:w-80 lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Hazards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all font-medium placeholder-slate-400 shadow-inner"
            />
          </div>

          <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto p-1 custom-scrollbar">
            {(['All', 'Earthquake', 'Flood', 'Volcano'] as const).map(topic => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap uppercase tracking-wide ${selectedTopic === topic
                  ? 'bg-slate-900 text-white shadow-lg transform scale-105'
                  : 'bg-transparent text-slate-600 hover:bg-white/50 hover:text-slate-900'
                  }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Grid - Updated to 4 columns on XL screens */}
        <div
          ref={gridRef}
          className={`transition-all duration-500 rounded-3xl ${tutorialStep === 2 ? 'relative z-[70] ring-4 ring-brand-500/50 p-4 bg-white/10 backdrop-blur-sm' : ''}`}
        >
          {tutorialStep === 2 && (
            <div className="absolute -top-16 left-8 z-[80] flex flex-col items-start animate-bounce">
              <div className="bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg mb-2 uppercase tracking-wide whitespace-nowrap">
                Select Mission
              </div>
              <ArrowDown className="w-8 h-8 text-brand-500 fill-current ml-6" />
            </div>
          )}

          {filteredLectures.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredLectures.map(lecture => (
                <LectureCard
                  key={lecture.id}
                  lecture={lecture}
                  onClick={(id) => {
                    if (tutorialStep === 2) {
                      setTutorialStep(3);
                    }
                    onNavigate(id);
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-dashed border-slate-300 shadow-sm">
              <Target className="w-16 h-16 text-slate-300 mb-4" />
              <p className="text-slate-500 text-lg font-medium">No missions found matching criteria.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedTopic('All'); }}
                className="mt-4 text-brand-600 font-bold hover:underline uppercase tracking-wide text-sm"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};