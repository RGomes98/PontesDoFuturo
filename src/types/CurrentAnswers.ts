import type { CareerScore, Opinion } from './Questions';

export type CurrentAnswers = { [index: string]: { opinion: Opinion; scores: CareerScore[] } };
