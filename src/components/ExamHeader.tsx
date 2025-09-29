import React from 'react';
import { Clock, BookOpen, Target } from 'lucide-react';

interface ExamHeaderProps {
  timeRemaining: number;
  currentQuestion: number;
  totalQuestions: number;
  formatTime: (seconds: number) => string;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  timeRemaining,
  currentQuestion,
  totalQuestions,
  formatTime
}) => {
  const timeColor = timeRemaining < 300 ? 'text-red-500' : timeRemaining < 900 ? 'text-yellow-500' : 'text-green-500';
  
  return (
    <div className="bg-white shadow-lg border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">AWS Cloud Practitioner Exam</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className={`h-5 w-5 ${timeColor}`} />
            <span className={`text-lg font-mono font-bold ${timeColor}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};