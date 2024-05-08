export type Opinion = 'heavily-agree' | 'agree' | 'neutral' | 'disagree' | 'strongly-disagree';

export type TotalScore = Record<string, number>;

export type Career =
  | 'Design'
  | 'Direito'
  | 'Nutrição'
  | 'Medicina'
  | 'Enfermagem'
  | 'Odontologia'
  | 'Administração'
  | 'Educação Física'
  | 'Engenharia Civil'
  | 'Ciências Contábeis'
  | 'Engenharia Elétrica'
  | 'Ciências Biológicas'
  | 'Engenharia Mecânica'
  | 'Engenharia Ambiental'
  | 'Engenharia de Produção'
  | 'Sistemas de Informação';

export type CareerScore = {
  score: number;
  career: Career;
};

export type Answer = {
  opinion: Opinion;
  careerScores: CareerScore[];
};

export type CareerProfiler = {
  id: string;
  answers: Answer[];
  statement: string;
}[];
