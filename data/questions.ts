import { Question } from '../types';
import { QUESTIONS_COMPREHENSIVE } from './questions_comprehensive';
import { QUESTIONS_JUDGE_SPECIAL, QUESTIONS_SHORT_SPECIAL } from './questions_special';
import { QUESTIONS_MOCK_1 } from './questions_mock1';
import { QUESTIONS_MOCK_2 } from './questions_mock2';

export interface ExamPaper {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const PAPERS: Record<string, ExamPaper> = {
  mock_2: {
    id: 'mock_2',
    title: '模拟考试 2 (NEW)',
    description: '物联网综合测试卷二，包含CAN总线、RPL路由、安全及连线题',
    questions: QUESTIONS_MOCK_2
  },
  mock_1: {
    id: 'mock_1',
    title: '模拟考试 1',
    description: '物联网/传感网基础理论综合测试，涵盖LoRa、ZigBee、协议栈等核心考点',
    questions: QUESTIONS_MOCK_1
  },
  comprehensive: {
    id: 'comprehensive',
    title: '期末综合模拟卷',
    description: '覆盖单选、判断、多选、简答的全题型综合练习 (STM32重点)',
    questions: QUESTIONS_COMPREHENSIVE
  },
  judge_special: {
    id: 'judge_special',
    title: '专项特训：判断题',
    description: '44道高频判断题，快速查漏补缺',
    questions: QUESTIONS_JUDGE_SPECIAL
  },
  short_special: {
    id: 'short_special',
    title: '专项特训：简答题',
    description: '8道核心概念简答题，强化记忆',
    questions: QUESTIONS_SHORT_SPECIAL
  }
};

// Flatten all questions for global search and global bookmarking
export const ALL_QUESTIONS: Question[] = [
  ...QUESTIONS_MOCK_2,
  ...QUESTIONS_MOCK_1,
  ...QUESTIONS_COMPREHENSIVE,
  ...QUESTIONS_JUDGE_SPECIAL,
  ...QUESTIONS_SHORT_SPECIAL
];
