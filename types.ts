export type QuestionType = 'single' | 'judge' | 'multi' | 'text';

export interface Question {
  id: number;
  type: QuestionType;
  category: string; // e.g., "Single Choice", "True/False"
  content: string;
  options?: string[]; // For single/multi choice
  answer: string; // The correct option letter(s) or text answer
  explanation: string; // Detailed breakdown
}

export interface TabState {
  id: 'all' | 'wrong';
  label: string;
}
