import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ExamHeader } from './components/ExamHeader';
import { QuestionCard } from './components/QuestionCard';
import { NavigationPanel } from './components/NavigationPanel';
import { ResultsScreen } from './components/ResultsScreen';
import { useExamTimer } from './hooks/useExamTimer';
import { examQuestions } from './data/questions';
import { ExamState } from './types/exam';

function App() {
  const [examState, setExamState] = useState<'welcome' | 'exam' | 'results'>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number[] }>({});
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  
  const { timeRemaining, isActive, startTimer, stopTimer, resetTimer, formatTime } = useExamTimer(90 * 60);

  const startExam = () => {
    setExamState('exam');
    setCurrentQuestion(0);
    setAnswers({});
    resetTimer();
    startTimer();
  };

  const handleAnswerChange = (questionAnswers: number[]) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: questionAnswers
    }));
  };

  const navigateToQuestion = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else if (direction === 'prev' && currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const navigateToSpecificQuestion = (questionIndex: number) => {
    if (questionIndex >= 0 && questionIndex < examQuestions.length) {
      setCurrentQuestion(questionIndex);
    }
  };
  const calculateScore = () => {
    let totalScore = 0;
    
    examQuestions.forEach((question, index) => {
      const userAnswers = answers[index] || [];
      const correctAnswers = question.correctAnswers;
      
      // Check if answers match exactly (for both single and multiple choice)
      const isCorrect = JSON.stringify(userAnswers.sort()) === JSON.stringify(correctAnswers.sort());
      
      if (isCorrect) {
        totalScore += question.marks;
      }
    });
    
    return totalScore;
  };

  const submitExam = () => {
    stopTimer();
    setExamState('results');
  };

  const handleConfirmSubmit = () => {
    setShowConfirmSubmit(true);
  };

  // Auto-submit when time runs out
  useEffect(() => {
    if (timeRemaining === 0 && isActive) {
      submitExam();
    }
  }, [timeRemaining, isActive]);

  if (examState === 'welcome') {
    return <WelcomeScreen onStart={startExam} />;
  }

  if (examState === 'results') {
    const score = calculateScore();
    const totalMarks = examQuestions.reduce((sum, q) => sum + q.marks, 0);
    const timeSpent = (90 * 60) - timeRemaining;
    
    return (
      <ResultsScreen
        score={score}
        totalMarks={totalMarks}
        questions={examQuestions}
        answers={answers}
        timeSpent={timeSpent}
        onRestart={() => {
          setExamState('welcome');
          setCurrentQuestion(0);
          setAnswers({});
          resetTimer();
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ExamHeader
        timeRemaining={timeRemaining}
        currentQuestion={currentQuestion}
        totalQuestions={examQuestions.length}
        formatTime={formatTime}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <QuestionCard
              question={examQuestions[currentQuestion]}
              selectedAnswers={answers[currentQuestion] || []}
              onAnswerChange={handleAnswerChange}
            />
          </div>
          
          <div className="lg:col-span-1">
            <NavigationPanel
              currentQuestion={currentQuestion}
              totalQuestions={examQuestions.length}
              answers={answers}
              onPrevious={() => navigateToQuestion('prev')}
              onNext={() => navigateToQuestion('next')}
              onSubmit={handleConfirmSubmit}
              onNavigateToQuestion={navigateToSpecificQuestion}
            />
          </div>
        </div>
      </div>

      {/* Confirm Submit Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Submit Exam?</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to submit your exam? You have answered{' '}
              {Object.keys(answers).length} out of {examQuestions.length} questions.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Continue Exam
              </button>
              <button
                onClick={submitExam}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Submit Exam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;