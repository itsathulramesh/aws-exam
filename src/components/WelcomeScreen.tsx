import React from 'react';
import { Play, Clock, Target, BookOpen, Award } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const topics = [
    { name: "Cloud Concepts", percentage: 24, color: "bg-blue-500" },
    { name: "Security and Compliance", percentage: 30, color: "bg-red-500" },
    { name: "Cloud Technology and Services", percentage: 34, color: "bg-green-500" },
    { name: "Billing, Pricing and Support", percentage: 12, color: "bg-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600 rounded-full mb-6">
            <Award className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            AWS Cloud Practitioner Exam
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Test your AWS cloud knowledge with this comprehensive practice exam. 
            Get ready for the real AWS Cloud Practitioner certification!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Exam Details</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <BookOpen className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-800">65 Questions</div>
                  <div className="text-sm text-gray-600">Multiple choice questions</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-800">90 Minutes</div>
                  <div className="text-sm text-gray-600">Time limit for completion</div>
                </div>
              </div>
              <div className="flex items-center">
                <Target className="h-6 w-6 text-purple-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-800">700/1000 to Pass</div>
                  <div className="text-sm text-gray-600">Minimum passing score</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Topic Coverage</h2>
            <div className="space-y-4">
              {topics.map((topic) => (
                <div key={topic.name} className="border-l-4 border-gray-200 pl-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-800">{topic.name}</h3>
                    <span className="text-sm font-medium text-gray-600">{topic.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${topic.color}`}
                      style={{ width: `${topic.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onStart}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <Play className="h-6 w-6 mr-3" />
            Start Practice Exam
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Make sure you have a stable internet connection and won't be interrupted
          </p>
        </div>
      </div>
    </div>
  );
};