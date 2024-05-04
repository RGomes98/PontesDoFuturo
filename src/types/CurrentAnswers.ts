import type { CareerScore, Opinion } from './CareerProfiler';

export type CurrentAnswers = { [index: string]: { opinion: Opinion; scores: CareerScore[] } };
