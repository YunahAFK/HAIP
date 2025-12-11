
import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, RefreshCw, BrainCircuit, CheckSquare, AlertCircle } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
  title?: string;
  mode?: 'wizard' | 'form'; // 'wizard' is one-by-one, 'form' is all-at-once
}

export const QuizComponent: React.FC<QuizProps> = ({ questions, title = "Refresher Quiz", mode = 'wizard' }) => {
  // Wizard Mode State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Form Mode State
  const [formAnswers, setFormAnswers] = useState<Record<string, number>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formScore, setFormScore] = useState(0);

  // --- WIZARD MODE HANDLERS ---
  const handleWizardAnswerClick = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const resetWizardQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  // --- FORM MODE HANDLERS ---
  const handleFormSelect = (questionId: string, optionIndex: number) => {
    if (formSubmitted) return;
    setFormAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const submitFormQuiz = () => {
    let calculatedScore = 0;
    questions.forEach(q => {
      if (formAnswers[q.id] === q.correctAnswer) {
        calculatedScore++;
      }
    });
    setFormScore(calculatedScore);
    setFormSubmitted(true);
    // Scroll to top to see score
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetFormQuiz = () => {
    setFormAnswers({});
    setFormSubmitted(false);
    setFormScore(0);
  };


  // --- RENDER FORM MODE (Google Forms Style) ---
  if (mode === 'form') {
    return (
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">{title}</h2>
          <p className="text-slate-400 mb-6">Answer all questions below to verify your understanding of the protocol.</p>
          
          {formSubmitted && (
             <div className="animate-in fade-in slide-in-from-top-4 duration-500 bg-emerald-900/30 border border-emerald-500/50 p-6 rounded-2xl mb-4">
                <div className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-1">Assessment Complete</div>
                <div className="text-4xl font-black text-white mb-2">
                   {formScore} <span className="text-2xl text-emerald-400/60">/ {questions.length}</span>
                </div>
                <p className="text-slate-300">
                   {formScore === questions.length ? "Perfect Score! You are mission ready." : "Review the correct answers below."}
                </p>
                <button 
                  onClick={resetFormQuiz}
                  className="mt-6 inline-flex items-center px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-bold uppercase tracking-wide border border-white/10"
                >
                  <RefreshCw className="w-4 h-4 mr-2" /> Retake Test
                </button>
             </div>
          )}
        </div>

        <div className="space-y-6">
           {questions.map((q, index) => {
              const selectedOpt = formAnswers[q.id];
              const isCorrect = formSubmitted && selectedOpt === q.correctAnswer;
              const isWrong = formSubmitted && selectedOpt !== undefined && selectedOpt !== q.correctAnswer;
              
              let cardBorderClass = "border-white/10";
              if (formSubmitted) {
                if (isCorrect) cardBorderClass = "border-emerald-500/50 ring-1 ring-emerald-500/20";
                else if (isWrong) cardBorderClass = "border-red-500/50 ring-1 ring-red-500/20";
              } else if (selectedOpt !== undefined) {
                 cardBorderClass = "border-blue-500/50";
              }

              return (
                <div key={q.id} className={`bg-white/5 p-6 md:p-8 rounded-2xl border ${cardBorderClass} transition-all duration-300 backdrop-blur-sm hover:bg-white/10`}>
                   <div className="flex items-start mb-6">
                      <span className="bg-white/10 text-slate-300 text-xs font-mono px-2 py-1 rounded mr-4 mt-1 flex-shrink-0">
                        Q{index + 1}
                      </span>
                      <h3 className="text-lg md:text-xl font-medium text-slate-100 leading-relaxed">
                        {q.question}
                      </h3>
                   </div>

                   <div className="space-y-3 pl-0 md:pl-12">
                      {q.options.map((opt, optIdx) => {
                         const isSelected = selectedOpt === optIdx;
                         const isAnswerKey = formSubmitted && q.correctAnswer === optIdx;
                         
                         let optionClass = "w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ";
                         
                         if (formSubmitted) {
                            if (isAnswerKey) {
                               optionClass += "bg-emerald-500/20 border-emerald-500/50 text-emerald-100";
                            } else if (isSelected && !isAnswerKey) {
                               optionClass += "bg-red-500/20 border-red-500/50 text-red-100";
                            } else {
                               optionClass += "bg-black/20 border-white/5 text-slate-500 opacity-60";
                            }
                         } else {
                            if (isSelected) {
                               optionClass += "bg-blue-600/20 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]";
                            } else {
                               optionClass += "bg-black/20 border-white/5 text-slate-300 hover:bg-white/5 hover:border-white/20";
                            }
                         }

                         return (
                            <button
                              key={optIdx}
                              onClick={() => handleFormSelect(q.id, optIdx)}
                              disabled={formSubmitted}
                              className={optionClass}
                            >
                               <div className="flex items-center">
                                  <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center flex-shrink-0 ${
                                     isSelected || isAnswerKey 
                                        ? (formSubmitted && isAnswerKey ? 'border-emerald-400 bg-emerald-400' : (formSubmitted && !isAnswerKey ? 'border-red-400 bg-red-400' : 'border-blue-500 bg-blue-500'))
                                        : 'border-slate-500 group-hover:border-slate-300'
                                  }`}>
                                     {(isSelected || isAnswerKey) && <div className="w-2 h-2 bg-white rounded-full" />}
                                  </div>
                                  <span className="text-sm md:text-base">{opt}</span>
                               </div>
                               
                               {formSubmitted && isAnswerKey && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                               {formSubmitted && isSelected && !isAnswerKey && <XCircle className="w-5 h-5 text-red-400" />}
                            </button>
                         );
                      })}
                   </div>
                   
                   {/* Feedback for wrong answer */}
                   {formSubmitted && isWrong && (
                      <div className="mt-4 ml-0 md:ml-12 p-3 bg-red-950/30 border border-red-500/20 rounded-lg flex items-start text-red-200 text-sm">
                         <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                         <span>Incorrect. The correct answer is marked in green.</span>
                      </div>
                   )}
                </div>
              );
           })}
        </div>

        {!formSubmitted && (
           <div className="flex justify-end pt-6">
              <button 
                onClick={submitFormQuiz}
                disabled={Object.keys(formAnswers).length < questions.length}
                className={`px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-xl flex items-center ${
                   Object.keys(formAnswers).length < questions.length
                     ? 'bg-slate-700 text-slate-400 cursor-not-allowed opacity-50'
                     : 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-blue-500/20 hover:scale-[1.02]'
                }`}
              >
                 <CheckSquare className="w-5 h-5 mr-3" />
                 Submit Answers
              </button>
           </div>
        )}
      </div>
    );
  }

  // --- RENDER WIZARD MODE (Interactive/Card) ---
  // ... (Existing implementation for Refresher Quiz)

  if (showScore) {
    return (
      <div className="bg-white/5 p-6 sm:p-8 rounded-xl shadow-lg text-center border border-white/10 backdrop-blur-sm w-full h-full flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold text-white mb-4">Quiz Completed!</h3>
        <p className="text-lg text-slate-300 mb-6">
          You scored <span className="font-bold text-emerald-400">{score}</span> out of {questions.length}
        </p>
        <button
          onClick={resetWizardQuiz}
          className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors shadow-lg"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Retake Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="bg-white/5 p-4 sm:p-6 rounded-xl shadow-lg border border-white/10 backdrop-blur-sm w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 sm:mb-6 border-b border-white/10 pb-3 sm:pb-4">
        <h3 className="text-sm sm:text-lg font-bold text-slate-200 flex items-center uppercase tracking-wide">
          <BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-emerald-400" />
          {title}
        </h3>
        <span className="text-[10px] sm:text-xs font-mono bg-white/10 px-2 py-1 rounded text-slate-400">
          {currentQuestionIndex + 1} / {questions.length}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <h4 className="text-base sm:text-lg font-medium text-white mb-4 sm:mb-6 leading-relaxed">{currentQuestion.question}</h4>

        <div className="space-y-2 sm:space-y-3">
          {currentQuestion.options.map((option, index) => {
            let buttonClass = "w-full text-left p-3 sm:p-4 rounded-lg border transition-all text-xs sm:text-sm ";
            
            if (isAnswered) {
               if (index === currentQuestion.correctAnswer) {
                 buttonClass += "border-green-500/50 bg-green-500/20 text-green-200";
               } else if (index === selectedAnswer) {
                 buttonClass += "border-red-500/50 bg-red-500/20 text-red-200";
               } else {
                 buttonClass += "border-white/5 bg-white/5 text-slate-500 opacity-50";
               }
            } else {
              buttonClass += "border-white/10 bg-white/5 hover:border-emerald-500/50 hover:bg-white/10 text-slate-200";
            }

            return (
              <button
                key={index}
                onClick={() => handleWizardAnswerClick(index)}
                disabled={isAnswered}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {isAnswered && index === currentQuestion.correctAnswer && <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 ml-2" />}
                  {isAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer && <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 ml-2" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {isAnswered && (
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={handleNextQuestion}
            className="px-4 sm:px-6 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-colors shadow-lg text-sm"
          >
            {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
};
