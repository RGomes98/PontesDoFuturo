import type { CareerScore, Opinion } from './CareerProfiler';

export type CurrentAnswers = Record<string, { opinion: Opinion; scores: CareerScore[] }>;
