import React from 'react';
import { ChevronLeft, ChevronRight, Flag } from 'lucide-react';

interface NavigationPanelProps {
  currentQuestion: number;
  totalQuestions: number;
  answers: { [key: number]: number[] };
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onNavigateToQuestion: (questionIndex: number) => void;
}

export const NavigationPanel: React.FC<NavigationPanelProps> = ({
  currentQuestion,
  totalQuestions,
  answers,
  onPrevious,
  onNext,
  onSubmit
  onNavigateToQuestion
}) => {
  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const answeredQuestions = Object.keys(answers).length;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Progress</h3>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(answeredQuestions / totalQuestions) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          {answeredQuestions} of {totalQuestions} questions answered
        </p>
      </div>

      <div className="flex flex-col space-y-3">
        <button
          onClick={onPrevious}
          disabled={isFirstQuestion}
          className={`flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors ${
            isFirstQuestion
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </button>

        {!isLastQuestion ? (
          <button
            onClick={onNext}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </button>
        ) : (
          <button
            onClick={onSubmit}
            className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
          >
            <Flag className="h-4 w-4 mr-2" />
            Submit Exam
          </button>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Quick Navigation</h4>
        <div className="grid grid-cols-5 gap-1">
          {Array.from({ length: totalQuestions }, (_, index) => (
            <div
              key={index}
              onClick={() => onNavigateToQuestion(index)}
              className={`w-8 h-8 rounded text-xs font-medium flex items-center justify-center cursor-pointer transition-colors ${
                index === currentQuestion
                  ? 'bg-blue-600 text-white'
                  : answers[index]
                  ? 'bg-green-100 text-green-800 hover:bg-green-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};