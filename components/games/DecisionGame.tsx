
import React, { useState } from 'react';
import { DecisionScenario } from '../../types';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, RefreshCw, Activity, ShieldAlert } from 'lucide-react';

interface DecisionGameProps {
    scenarios: DecisionScenario[];
    topic: string;
}

export const DecisionGame: React.FC<DecisionGameProps> = ({ scenarios, topic }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const currentScenario = scenarios[currentIndex];

    const getThemeColors = () => {
        switch (topic) {
            case 'Earthquake': return { accent: 'text-orange-400', border: 'border-orange-500', bg: 'bg-orange-500', glow: 'shadow-orange-500/20' };
            case 'Flood': return { accent: 'text-cyan-400', border: 'border-cyan-500', bg: 'bg-cyan-500', glow: 'shadow-cyan-500/20' };
            case 'Volcano': return { accent: 'text-red-400', border: 'border-red-500', bg: 'bg-red-500', glow: 'shadow-red-500/20' };
            default: return { accent: 'text-emerald-400', border: 'border-emerald-500', bg: 'bg-emerald-500', glow: 'shadow-emerald-500/20' };
        }
    };

    const theme = getThemeColors();

    const handleOptionClick = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);
        if (currentScenario.options[index].isCorrect) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < scenarios.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResults(true);
        }
    };

    const resetGame = () => {
        setCurrentIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setScore(0);
        setShowResults(false);
    };

    if (showResults) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl text-center shadow-2xl animate-in fade-in duration-500">
                <Activity className={`w-16 h-16 ${theme.accent} mb-6`} />
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Simulation Complete</h2>
                <p className="text-slate-300 text-xl mb-8">
                    You made the right call in <span className={`font-bold ${theme.accent} text-2xl`}>{score}</span> out of {scenarios.length} scenarios.
                </p>
                <button
                    onClick={resetGame}
                    className={`px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-white transition-all shadow-lg hover:scale-105 flex items-center ${theme.bg} hover:brightness-110`}
                >
                    <RefreshCw className="w-5 h-5 mr-2" /> Restart Simulation
                </button>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center max-w-6xl mx-auto overflow-x-hidden">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* Left Col: Scenario Description */}
                <div className="flex flex-col justify-center space-y-6">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md w-fit ${theme.accent} font-mono text-xs uppercase tracking-widest`}>
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Scenario {currentIndex + 1} of {scenarios.length}
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-lg">
                        {currentScenario.title}
                    </h2>

                    <div className="p-6 bg-white/5 border-l-4 border-white/20 rounded-r-2xl backdrop-blur-sm">
                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium">
                            {currentScenario.scenario}
                        </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-4">
                        <div
                            className={`h-full ${theme.bg} transition-all duration-500`}
                            style={{ width: `${((currentIndex + 1) / scenarios.length) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Right Col: Options & Feedback */}
                <div className="flex flex-col gap-4 justify-center">
                    {!isAnswered ? (
                        <div className="space-y-4 animate-in slide-in-from-right-8 fade-in duration-500">
                            <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Select your course of action:</p>
                            {currentScenario.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionClick(idx)}
                                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 group relative overflow-hidden bg-black/40 border-white/10 hover:border-white/40 hover:bg-white/5`}
                                >
                                    <div className="flex items-center justify-between relative z-10">
                                        <span className="text-lg text-slate-100 font-bold group-hover:text-white">{option.label}</span>
                                        <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in zoom-in-95 fade-in duration-300">
                            {/* Selected Choice Status */}
                            <div className={`p-6 rounded-2xl border-2 flex items-start gap-4 ${currentScenario.options[selectedOption!].isCorrect
                                    ? 'bg-emerald-950/40 border-emerald-500/50'
                                    : 'bg-red-950/40 border-red-500/50'
                                }`}>
                                {currentScenario.options[selectedOption!].isCorrect ? (
                                    <CheckCircle className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                                ) : (
                                    <XCircle className="w-8 h-8 text-red-400 flex-shrink-0" />
                                )}
                                <div>
                                    <h3 className={`text-xl font-black uppercase mb-2 ${currentScenario.options[selectedOption!].isCorrect ? 'text-emerald-400' : 'text-red-400'
                                        }`}>
                                        {currentScenario.options[selectedOption!].isCorrect ? 'Excellent Decision' : 'Critical Error'}
                                    </h3>
                                    <p className="text-slate-200 text-lg leading-relaxed">
                                        {currentScenario.options[selectedOption!].feedback}
                                    </p>
                                </div>
                            </div>

                            {/* Show correct answer if wrong */}
                            {!currentScenario.options[selectedOption!].isCorrect && (
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <p className="text-sm text-slate-400 uppercase font-bold mb-1">Correct Protocol:</p>
                                    <p className="text-slate-200">
                                        {currentScenario.options.find(o => o.isCorrect)?.label}
                                    </p>
                                </div>
                            )}

                            <button
                                onClick={handleNext}
                                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-[1.02] ${currentScenario.options[selectedOption!].isCorrect ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-slate-700 hover:bg-slate-600'
                                    }`}
                            >
                                {currentIndex < scenarios.length - 1 ? 'Next Scenario' : 'Finish Simulation'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
