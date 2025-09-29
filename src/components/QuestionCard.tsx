import React from 'react';
import { Question } from '../types/exam';

interface QuestionCardProps {
  question: Question;
  selectedAnswers: number[];
  onAnswerChange: (answers: number[]) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswers,
  onAnswerChange
}) => {
  const handleSingleChoice = (optionIndex: number) => {
    onAnswerChange([optionIndex]);
  };

  const handleMultipleChoice = (optionIndex: number) => {
    if (selectedAnswers.includes(optionIndex)) {
      onAnswerChange(selectedAnswers.filter(index => index !== optionIndex));
    } else {
      onAnswerChange([...selectedAnswers, optionIndex]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3">
          {question.topic} • {question.marks} marks
        </span>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {question.question}
        </h2>
        {question.multipleChoice && (
          <p className="text-sm text-gray-600 mb-4 italic">
            Select multiple answers (use checkboxes)
          </p>
        )}
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
              selectedAnswers.includes(index)
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200'
            }`}
          >
            {question.multipleChoice ? (
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                checked={selectedAnswers.includes(index)}
                onChange={() => handleMultipleChoice(index)}
              />
            ) : (
              <input
                type="radio"
                name={`question-${question.id}`}
                className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
                checked={selectedAnswers.includes(index)}
                onChange={() => handleSingleChoice(index)}
              />
            )}
            <span className="ml-3 text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};