import React, { useState, useEffect, useMemo } from 'react';
import { PAPERS, ALL_QUESTIONS } from './data/questions';
import { QuestionCard } from './components/QuestionCard';
import { Moon, Sun, BookOpen, AlertTriangle, GraduationCap, ChevronDown, Search } from 'lucide-react';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(() => {
    const saved = localStorage.getItem('bookmarkedQuestions');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  // State for selected exam paper
  const [currentPaperId, setCurrentPaperId] = useState<string>('mock_2');
  const [currentTab, setCurrentTab] = useState<'all' | 'wrong'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Current Paper Info
  const currentPaper = PAPERS[currentPaperId];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('bookmarkedQuestions', JSON.stringify(Array.from(bookmarkedIds)));
  }, [bookmarkedIds]);

  const toggleBookmark = (id: number) => {
    setBookmarkedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filteredQuestions = useMemo(() => {
    let sourceData = currentPaper.questions;
    
    // Priority 1: Search (Global)
    if (searchQuery.trim() !== '') {
      sourceData = ALL_QUESTIONS;
    } 
    // Priority 2: Wrong Questions (Global)
    else if (currentTab === 'wrong') {
      sourceData = ALL_QUESTIONS;
    }

    return sourceData.filter(q => {
      // 1. Filter by Wrong Tab
      if (currentTab === 'wrong' && !bookmarkedIds.has(q.id)) {
        return false;
      }

      // 2. Filter by Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const contentMatch = q.content.toLowerCase().includes(query);
        const optionsMatch = q.options?.some(opt => opt.toLowerCase().includes(query));
        return contentMatch || optionsMatch;
      }

      return true;
    });
  }, [currentTab, bookmarkedIds, currentPaper.questions, searchQuery]);

  const globalWrongCount = useMemo(() => {
    return ALL_QUESTIONS.filter(q => bookmarkedIds.has(q.id)).length;
  }, [bookmarkedIds]);

  const currentPaperWrongCount = useMemo(() => {
    return currentPaper.questions.filter(q => bookmarkedIds.has(q.id)).length;
  }, [currentPaper.questions, bookmarkedIds]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 py-3 sm:py-0 sm:h-20 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-600/20">
              <GraduationCap size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">
                传感网应用开发期末考试
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                STM32 / IoT | 复习系统
              </p>
            </div>
          </div>

          {/* Controls: Exam Selector & Theme */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            
            {/* Exam Paper Selector (Only enabled when not in global modes for clarity, or auto-switch back) */}
            <div className={`relative group flex-1 sm:flex-initial transition-opacity ${currentTab === 'wrong' || searchQuery ? 'opacity-50' : 'opacity-100'}`}>
              <select
                value={currentPaperId}
                onChange={(e) => {
                  setCurrentPaperId(e.target.value);
                  setCurrentTab('all'); // Reset tab on paper switch
                  setSearchQuery(''); // Reset search
                }}
                className="appearance-none bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 pl-4 pr-10 py-2 rounded-lg text-sm font-medium border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none cursor-pointer transition-all w-full sm:w-64"
              >
                {Object.values(PAPERS).map(paper => (
                  <option key={paper.id} value={paper.id}>
                    {paper.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
            </div>

            <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-700 mx-1 hidden sm:block"></div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors shrink-0"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Paper Info Banner - Show different text if in global mode */}
        <div className={`mb-6 p-6 rounded-2xl text-white shadow-xl transition-all ${
           searchQuery ? 'bg-indigo-600 shadow-indigo-900/10' :
           currentTab === 'wrong' ? 'bg-red-600 shadow-red-900/10' : 
           'bg-gradient-to-br from-blue-600 to-blue-700 shadow-blue-900/10'
        }`}>
          <h2 className="text-2xl font-bold mb-2">
            {searchQuery ? '全局搜索模式' : 
             currentTab === 'wrong' ? '全局错题集' : 
             currentPaper.title}
          </h2>
          <p className="text-white/90">
            {searchQuery ? `正在搜索 "${searchQuery}" (涵盖所有试卷)` : 
             currentTab === 'wrong' ? `汇集了你在所有试卷中标注的 ${globalWrongCount} 道难题` : 
             currentPaper.description}
          </p>
          
          {!searchQuery && currentTab === 'all' && (
            <div className="mt-4 flex items-center gap-4 text-sm font-medium text-blue-50">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                本卷题数: {currentPaper.questions.length}
              </span>
              <span className={`${currentPaperWrongCount > 0 ? 'text-yellow-300' : ''}`}>
                本卷错题: {currentPaperWrongCount}
              </span>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-400" />
          </div>
          <input
            type="text"
            placeholder="全局搜索：输入题目内容或选项..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-zinc-200 dark:border-zinc-700 rounded-xl leading-5 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm transition-all"
          />
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-6 bg-zinc-100 dark:bg-zinc-800/50 p-1.5 rounded-xl w-fit">
          <button
            onClick={() => {
              setCurrentTab('all');
              setSearchQuery('');
            }}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              currentTab === 'all' && !searchQuery
                ? 'bg-white dark:bg-zinc-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <BookOpen size={16} className="mr-2" />
            当前试卷
          </button>
          <button
            onClick={() => {
              setCurrentTab('wrong');
              setSearchQuery('');
            }}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              currentTab === 'wrong' && !searchQuery
                ? 'bg-white dark:bg-zinc-700 text-red-600 dark:text-red-400 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <AlertTriangle size={16} className="mr-2" />
            全局错题 ({globalWrongCount})
          </button>
        </div>

        {/* Content Area */}
        {filteredQuestions.length > 0 ? (
          <div className="space-y-6">
            {filteredQuestions.map((q, index) => {
              // Calculate original index logic for display
              // If we are in 'all' tab (current paper mode) without search, use the paper index.
              // If we are in global mode (search or wrong), showing the ID or a generic index might be better.
              // Let's verify if q belongs to current paper to give it a proper index, otherwise mark it.
              
              const isCurrentPaper = currentPaper.questions.some(pq => pq.id === q.id);
              const paperIndex = isCurrentPaper 
                ? currentPaper.questions.findIndex(item => item.id === q.id) + 1 
                : null;

              // Find which paper this question belongs to for label
              const sourcePaper = Object.values(PAPERS).find(p => p.questions.some(pq => pq.id === q.id));
              const label = paperIndex 
                ? `Question ${paperIndex}` 
                : (sourcePaper ? `${sourcePaper.title}` : `Question #${q.id}`);

              return (
                <div key={q.id} className="relative">
                   {/* If global view, show source badge */}
                   {(currentTab === 'wrong' || searchQuery) && sourcePaper && (
                     <div className="absolute -top-3 left-4 z-10">
                       <span className="bg-zinc-800 text-zinc-100 text-[10px] px-2 py-0.5 rounded shadow border border-zinc-600">
                         {sourcePaper.title}
                       </span>
                     </div>
                   )}
                  <QuestionCard
                    question={q}
                    index={paperIndex || q.id} 
                    isBookmarked={bookmarkedIds.has(q.id)}
                    onToggleBookmark={toggleBookmark}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-zinc-800/50 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-700">
            <div className="w-16 h-16 bg-zinc-50 dark:bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4">
              {searchQuery ? (
                <Search className="text-zinc-400 w-8 h-8" />
              ) : currentTab === 'wrong' ? (
                <AlertTriangle className="text-yellow-500 w-8 h-8" />
              ) : (
                <BookOpen className="text-zinc-400 w-8 h-8" />
              )}
            </div>
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-2">
              {searchQuery ? '未找到相关题目' : (currentTab === 'wrong' ? '太棒了！暂无错题' : '暂无题目')}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
              {searchQuery 
                ? '尝试更换搜索关键词' 
                : (currentTab === 'wrong' 
                  ? '在浏览题目时，点击题目右上角的书签图标即可将其加入错题集重点复习。' 
                  : '当前试卷暂无相关题目。')}
            </p>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-12 py-8 text-center text-zinc-400 text-sm">
        <p>© 2024 Sensing Application Development Review</p>
      </footer>
    </div>
  );
};

export default App;
