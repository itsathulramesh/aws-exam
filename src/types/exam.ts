export interface Question {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctAnswers: number[];
  multipleChoice: boolean;
  marks: number;
  explanation?: string;
}

export interface ExamState {
  currentQuestion: number;
  answers: { [key: number]: number[] };
  timeRemaining: number;
  isSubmitted: boolean;
  score: number;
  totalMarks: number;
  passedTopics: string[];
}

export interface TopicWeightage {
  name: string;
  percentage: number;
  color: string;
}