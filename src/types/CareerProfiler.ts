export type Opinion = 'heavily-agree' | 'agree' | 'neutral' | 'disagree' | 'strongly-disagree';

export type TotalScore = Record<string, number>;

export enum Career {
  'Design' = 'Design',
  'Direito' = 'Direito',
  'Nutrição' = 'Nutrição',
  'Medicina' = 'Medicina',
  'Enfermagem' = 'Enfermagem',
  'Odontologia' = 'Odontologia',
  'Administração' = 'Administração',
  'Educação Física' = 'Educação Física',
  'Engenharia Civil' = 'Engenharia Civil',
  'Ciências Contábeis' = 'Ciências Contábeis',
  'Engenharia Elétrica' = 'Engenharia Elétrica',
  'Ciências Biológicas' = 'Ciências Biológicas',
  'Engenharia Mecânica' = 'Engenharia Mecânica',
  'Engenharia Ambiental' = 'Engenharia Ambiental',
  'Engenharia de Produção' = 'Engenharia de Produção',
  'Sistemas de Informação' = 'Sistemas de Informação',
}

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
