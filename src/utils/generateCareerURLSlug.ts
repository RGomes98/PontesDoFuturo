export type CareerURLSlug = ReturnType<typeof generateCareerURLSlug>;

export const generateCareerURLSlug = (career: string) => {
  switch (career) {
    case 'Design':
      return 'design';
    case 'Direito':
      return 'direito';
    case 'Nutrição':
      return 'nutricao';
    case 'Medicina':
      return 'medicina';
    case 'Enfermagem':
      return 'enfermagem';
    case 'Odontologia':
      return 'odontologia';
    case 'Administração':
      return 'administracao';
    case 'Engenharia Civil':
      return 'engenharia-civil';
    case 'Engenharia Elétrica':
      return 'engenharia-eletrica';
    case 'Engenharia Mecânica':
      return 'engenharia-mecanica';
    case 'Engenharia Ambiental':
      return 'engenharia-ambiental';
    case 'Engenharia de Produção':
      return 'engenharia-de-producao';
    case 'Educação Física':
      return 'educacao-fisica';
    case 'Ciências Contábeis':
      return 'ciencias-contabeis';
    case 'Ciências Biológicas':
      return 'ciencias-biologicas';
    case 'Sistemas de Informação':
      return 'sistemas-de-informacao';
    default:
      return career;
  }
};
