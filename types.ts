

export type HazardTopic = 'Earthquake' | 'Flood' | 'Volcano' | 'General';

export type GameType = 'earthquake-sim' | 'flood-sim' | 'volcanic-eruption-sim' | 'none';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
}

export interface TocItem {
  title: string;
  sectionIndex: number; // changed from id to sectionIndex for pagination
}

export interface LectureSection {
  id: string;
  title: string;
  content: string; // HTML content for this specific section
}

export interface DecisionOption {
  label: string;
  isCorrect: boolean;
  feedback: string;
}

export interface DecisionScenario {
  id: string;
  title: string;
  scenario: string;
  options: DecisionOption[];
}

export interface Lecture {
  id: string;
  title: string;
  description: string;
  topic: HazardTopic;
  imageUrl: string;
  readTime: number; // minutes
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  objectives: string[];
  competencies: string[];
  sections: LectureSection[];
  refresherQuiz?: QuizQuestion[];
  decisionGame?: DecisionScenario[];
  finalQuiz?: QuizQuestion[];
  gameType: GameType;
}

// Game Specific Types
export interface EQStep {
  id: string;
  text: string;
  correctCategory: 'Before' | 'During' | 'After';
}

export interface FloodScenario {
  id: string;
  text: string;
  isSafe: boolean;
  explanation: string;
}