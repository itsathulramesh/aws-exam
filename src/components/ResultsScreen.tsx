import React from 'react';
import { Trophy, Target, Clock, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Question } from '../types/exam';

interface ResultsScreenProps {
  score: number;
  totalMarks: number;
  questions: Question[];
  answers: { [key: number]: number[] };
  timeSpent: number;
  onRestart: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  score,
  totalMarks,
  questions,
  answers,
  timeSpent,
  onRestart
}) => {
  const percentage = Math.round((score / totalMarks) * 100);
  const passed = score >= 700;
  
  const topicScores = questions.reduce((acc, question) => {
    const userAnswers = answers[question.id - 1] || [];
    const correct = JSON.stringify(userAnswers.sort()) === JSON.stringify(question.correctAnswers.sort());
    
    if (!acc[question.topic]) {
      acc[question.topic] = { earned: 0, total: 0, correct: 0, total_questions: 0 };
    }
    
    acc[question.topic].total += question.marks;
    acc[question.topic].total_questions += 1;
    if (correct) {
      acc[question.topic].earned += question.marks;
      acc[question.topic].correct += 1;
    }
    
    return acc;
  }, {} as Record<string, { earned: number; total: number; correct: number; total_questions: number }>);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
            passed ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {passed ? (
              <Trophy className="h-12 w-12 text-green-600" />
            ) : (
              <XCircle className="h-12 w-12 text-red-600" />
            )}
          </div>
          <h1 className={`text-3xl font-bold mb-2 ${
            passed ? 'text-green-800' : 'text-red-800'
          }`}>
            {passed ? 'Congratulations!' : 'Keep Learning!'}
          </h1>
          <p className="text-gray-600">
            {passed ? 'You passed the AWS Cloud Practitioner exam!' : 'You need 700 points to pass. Try again!'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Overall Results</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">Score</span>
                </div>
                <span className="font-bold text-2xl text-blue-600">{score}/{totalMarks}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-gray-700">Percentage</span>
                </div>
                <span className="font-bold text-xl">{percentage}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-gray-700">Time Spent</span>
                </div>
                <span className="font-medium">{Math.floor(timeSpent / 60)}m {timeSpent % 60}s</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Topic Breakdown</h2>
            <div className="space-y-3">
              {Object.entries(topicScores).map(([topic, scores]) => {
                const topicPercentage = Math.round((scores.earned / scores.total) * 100);
                return (
                  <div key={topic} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium text-gray-800">{topic}</h3>
                      <span className="text-sm font-medium text-gray-600">
                        {scores.correct}/{scores.total_questions} • {topicPercentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${topicPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onRestart}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Take Another Practice Exam
          </button>
        </div>
      </div>
    </div>
  );
};