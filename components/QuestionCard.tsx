import React, { useState } from 'react';
import { Question } from '../types';
import { Bookmark, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  index: number;
  isBookmarked: boolean;
  onToggleBookmark: (id: number) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  index,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const getCategoryColor = (cat: string) => {
    if (cat.includes('单选')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    if (cat.includes('判断')) return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
    if (cat.includes('多选')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
  };

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 overflow-hidden transition-all duration-300 hover:shadow-md mb-6">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${getCategoryColor(question.category)}`}>
            {question.category}
          </span>
          <button
            onClick={() => onToggleBookmark(question.id)}
            className={`p-2 rounded-full transition-colors ${
              isBookmarked
                ? 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200'
            }`}
            title={isBookmarked ? "Remove from Difficult" : "Mark as Difficult"}
          >
            <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4 leading-relaxed">
          <span className="mr-2 text-zinc-400 font-mono">#{index}</span>
          {question.content}
        </h3>

        {question.options && (
          <div className="space-y-2 mb-6">
            {question.options.map((opt, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-700/50 text-zinc-700 dark:text-zinc-300 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                onClick={() => setShowAnswer(true)}
              >
                {opt}
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="flex items-center justify-center w-full py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 rounded-lg transition-colors"
        >
          {showAnswer ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              收起解析
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              查看答案与解析
            </>
          )}
        </button>

        {showAnswer && (
          <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-700 animate-fadeIn">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-lg">
                正确答案: {question.answer}
              </span>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div className="text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-line leading-relaxed">
                  <span className="font-semibold block mb-1 text-blue-700 dark:text-blue-300">解析详情：</span>
                  {question.explanation}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
