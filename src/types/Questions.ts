export type Opinion = 'heavily-agree' | 'agree' | 'neutral' | 'disagree' | 'strongly-disagree';

export type TotalScore = Record<string, number>;

export type Career =
  | 'Medicina'
  | 'Odontologia'
  | 'Administração'
  | 'Direito'
  | 'Ciências Contábeis'
  | 'Engenharia de Produção'
  | 'Sistemas de Informação'
  | 'Design'
  | 'Nutrição'
  | 'Educação Física'
  | 'Engenharia Ambiental'
  | 'Engenharia Civil'
  | 'Engenharia Elétrica'
  | 'Engenharia Mecânica'
  | 'Ciências Biológicas'
  | 'Enfermagem';

export type CareerScore = {
  career: Career;
  score: number;
};

export type Answer = {
  opinion: Opinion;
  careerScores: CareerScore[];
};

export type Questions = {
  id: string;
  question: string;
  answers: Answer[];
};
