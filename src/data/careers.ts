import type { CareerURLSlug } from '@/utils/generateCareerURLSlug';
import type { Career } from '@/types/CareerProfiler';

export type CareersDetails = typeof careers;

export type CareerData = {
  name: Career;
  paths: string[];
  summary: string;
  category: string;
  description: string;
};

export const careers: Record<CareerURLSlug, CareerData> = {
  design: {
    name: 'Design',
    category: 'Exatas',
    summary: 'Transformando ideias em realidade através da criatividade visual',
    description:
      'O design é uma disciplina criativa que combina arte, tecnologia e comunicação para criar soluções visuais eficazes e atraentes. Os designers utilizam sua habilidade para compreender as necessidades dos clientes e do público-alvo, aplicando-a em projetos que vão desde logotipos e embalagens até interfaces digitais e espaços físicos. Eles devem ser inovadores, ter um olhar atento aos detalhes e estar atualizados com as tendências do mercado para desenvolverem designs impactantes e funcionais.',
    paths: ['Publicidade', 'Web Design', 'Design Gráfico', 'Design de Produto', 'Design de Interiores'],
  },
  direito: {
    name: 'Direito',
    category: 'Humanas',
    summary: 'Defendendo a justiça e os direitos legais',
    description:
      'A carreira jurídica envolve a aplicação e interpretação das leis para resolver disputas, proteger direitos individuais e promover a justiça. Os advogados podem atuar em diversas áreas, como direito civil, criminal, empresarial e internacional. Eles precisam ter sólido conhecimento das leis, habilidades de argumentação persuasiva e capacidade de análise crítica para defender os interesses de seus clientes de forma ética e eficaz.',
    paths: [
      'Advocacia Civil',
      'Advocacia Criminal',
      'Direito Empresarial',
      'Direito Internacional',
      'Direito Trabalhista',
    ],
  },
  nutricao: {
    name: 'Nutrição',
    category: 'Biociências',
    summary: 'Melhorando a saúde por meio de dietas equilibradas',
    description:
      'Os nutricionistas são profissionais da saúde especializados em alimentação e nutrição. Eles ajudam as pessoas a melhorarem sua qualidade de vida através de uma alimentação balanceada e adequada às suas necessidades individuais. Os nutricionistas avaliam o estado nutricional dos pacientes, desenvolvem planos alimentares personalizados e oferecem orientações sobre hábitos alimentares saudáveis para prevenir e tratar doenças relacionadas à nutrição.',
    paths: [
      'Nutrição Clínica',
      'Nutrição Esportiva',
      'Nutrição Funcional',
      'Nutrição Infantil',
      'Nutrição Hospitalar',
    ],
  },
  medicina: {
    name: 'Medicina',
    category: 'Biociências',
    summary: 'Cuidando da saúde e bem-estar das pessoas',
    description:
      'A medicina é uma profissão dedicada ao cuidado da saúde humana. Os médicos são responsáveis pelo diagnóstico, tratamento e prevenção de doenças, além de promoverem a saúde e o bem-estar de seus pacientes. Eles passam por uma extensa formação acadêmica e prática para adquirirem conhecimentos em anatomia, fisiologia, farmacologia e outras áreas relacionadas à saúde, bem como desenvolverem habilidades de comunicação e empatia para lidarem com pacientes em situações diversas.',
    paths: ['Clínica Médica', 'Cirurgia', 'Pediatria', 'Ginecologia e Obstetrícia', 'Ortopedia'],
  },
  enfermagem: {
    name: 'Enfermagem',
    category: 'Biociências',
    summary: 'Oferecendo cuidados essenciais e apoio aos pacientes',
    description:
      'Os enfermeiros desempenham um papel fundamental no sistema de saúde, oferecendo cuidados diretos aos pacientes e auxiliando no tratamento e recuperação de diversas condições médicas. Eles trabalham em estreita colaboração com médicos e outros profissionais de saúde, monitorando sinais vitais, administrando medicamentos, realizando curativos e fornecendo apoio emocional aos pacientes e suas famílias.',
    paths: [
      'Enfermagem Clínica',
      'Enfermagem Pediátrica',
      'Enfermagem Cirúrgica',
      'Enfermagem Geriátrica',
      'Enfermagem Obstétrica',
    ],
  },
  odontologia: {
    name: 'Odontologia',
    category: 'Biociências',
    summary: 'Promovendo a saúde bucal e o sorriso das pessoas',
    description:
      'Os dentistas são profissionais especializados na saúde bucal, responsáveis pela prevenção, diagnóstico e tratamento de problemas dentários e periodontais. Eles realizam exames, limpezas, restaurações e procedimentos cirúrgicos, visando manter a saúde e a funcionalidade dos dentes e gengivas de seus pacientes. Além disso, os dentistas também educam sobre a importância da higiene oral e do cuidado preventivo.',
    paths: [
      'Odontologia Preventiva',
      'Ortodontia',
      'Endodontia',
      'Cirurgia Buco-Maxilo-Facial',
      'Odontopediatria',
    ],
  },
  administracao: {
    name: 'Administração',
    category: 'Humanas',
    summary: 'Gerenciando recursos e estratégias para o sucesso empresarial',
    description:
      'A administração é uma área multidisciplinar que envolve o planejamento, organização, direção e controle de recursos em organizações públicas e privadas. Os administradores são responsáveis por gerenciar pessoas, finanças, operações e estratégias para alcançar os objetivos da empresa de forma eficiente e sustentável. Eles devem ter habilidades de liderança, tomada de decisão, comunicação e resolução de problemas para enfrentarem os desafios do mundo corporativo.',
    paths: [
      'Administração Financeira',
      'Gestão de Recursos Humanos',
      'Marketing',
      'Consultoria Empresarial',
      'Logística',
    ],
  },
  'engenharia-civil': {
    name: 'Engenharia Civil',
    category: 'Exatas',
    summary: 'Construindo o futuro com soluções criativas e seguras',
    description:
      'Os engenheiros civis são responsáveis pelo projeto, construção e manutenção de infraestruturas civis, como edifícios, estradas, pontes, barragens e sistemas de transporte. Eles aplicam conhecimentos de matemática, física, materiais e tecnologia para garantir a segurança, durabilidade e eficiência das estruturas construídas, considerando também questões ambientais e socioeconômicas.',
    paths: ['Construção Civil', 'Estruturas', 'Geotecnia', 'Saneamento', 'Transportes'],
  },
  'engenharia-eletrica': {
    name: 'Engenharia Elétrica',
    category: 'Exatas',
    summary: 'Energizando o mundo com inovação e tecnologia',
    description:
      'Os engenheiros elétricos projetam, desenvolvem e mantêm sistemas e dispositivos que utilizam energia elétrica, como circuitos, equipamentos eletrônicos, redes de distribuição e sistemas de controle. Eles precisam ter sólido entendimento de princípios de eletricidade e eletrônica, além de habilidades em programação e automação, para atender às demandas de um mundo cada vez mais tecnológico e interconectado.',
    paths: ['Eletrônica', 'Controle e Automação', 'Energia', 'Telecomunicações', 'Sistemas de Potência'],
  },
  'engenharia-mecanica': {
    name: 'Engenharia Mecânica',
    category: 'Exatas',
    summary: 'Movendo o mundo com engenhosidade e precisão',
    description:
      'Os engenheiros mecânicos lidam com o projeto, análise e fabricação de sistemas mecânicos, máquinas e equipamentos utilizados em diversas indústrias, como automotiva, aeroespacial, energia e manufatura. Eles aplicam princípios de física, termodinâmica e materiais para desenvolver soluções inovadoras que melhoram a eficiência, confiabilidade e segurança dos produtos e processos mecânicos.',
    paths: ['Manufatura', 'Controle de Qualidade', 'Projeto de Máquinas', 'Energia Térmica', 'Aeroespacial'],
  },
  'engenharia-ambiental': {
    name: 'Engenharia Ambiental',
    category: 'Exatas',
    summary: 'Protegendo e preservando o meio ambiente para as gerações futuras',
    description:
      'Os engenheiros ambientais trabalham para proteger e preservar o meio ambiente, desenvolvendo soluções sustentáveis para questões relacionadas à poluição, conservação de recursos naturais, gestão de resíduos e controle de impactos ambientais. Eles aplicam conhecimentos de ciências ambientais, engenharia e legislação para projetar e implementar sistemas e tecnologias que promovem a sustentabilidade e a qualidade de vida das comunidades.',
    paths: [
      'Gestão Ambiental',
      'Recursos Hídricos',
      'Saneamento Ambiental',
      'Energias Renováveis',
      'Avaliação de Impacto Ambiental',
    ],
  },
  'engenharia-de-producao': {
    name: 'Engenharia de Produção',
    category: 'Exatas',
    summary: 'Otimizando processos para o sucesso industrial',
    description:
      'Os engenheiros de produção são responsáveis pela otimização de processos industriais e operacionais, visando aumentar a eficiência, qualidade e lucratividade das empresas. Eles utilizam métodos quantitativos, tecnologias de informação e gestão de recursos para projetar, analisar e aprimorar sistemas produtivos, desde a concepção do produto até a entrega ao cliente, buscando sempre a excelência operacional e a satisfação do cliente.',
    paths: [
      'Gestão da Qualidade',
      'Logística',
      'Gestão de Projetos',
      'Engenharia Econômica',
      'Pesquisa Operacional',
    ],
  },
  'educacao-fisica': {
    name: 'Educação Física',
    category: 'Biociências',
    summary: 'Promovendo saúde e bem-estar por meio da atividade física',
    description:
      'Os profissionais de Educação Física têm como objetivo promover a saúde, o condicionamento físico e o bem-estar por meio da prática de atividades físicas e esportivas. Eles desenvolvem programas de exercícios personalizados, orientam sobre hábitos saudáveis e ensinam técnicas esportivas, adaptando-se às necessidades e capacidades individuais de cada pessoa para estimular',
    paths: [
      'Personal Trainer',
      'Treinamento Esportivo',
      'Fisioterapia Esportiva',
      'Educação Física Adaptada',
      'Recreação e Lazer',
    ],
  },
  'ciencias-contabeis': {
    name: 'Ciências Contábeis',
    category: 'Humanas',
    summary: 'Gerenciando finanças e garantindo conformidade legal',
    description:
      'Contadores são responsáveis pela gestão financeira e contábil de organizações, empresas e indivíduos. Eles registram transações financeiras, preparam relatórios contábeis e fiscais, analisam dados financeiros, garantem a conformidade com regulamentações e fornecem aconselhamento financeiro para tomada de decisões.',
    paths: [
      'Auditoria',
      'Contabilidade Fiscal',
      'Contabilidade Gerencial',
      'Perícia Contábil',
      'Controladoria',
    ],
  },
  'ciencias-biologicas': {
    name: 'Ciências Biológicas',
    category: 'Biociências',
    summary: 'Explorando e estudando a vida em suas diversas formas',
    description:
      'Profissionais de ciências biológicas estudam os organismos vivos, incluindo sua estrutura, função, evolução e interações com o ambiente. Eles podem trabalhar em diversas áreas, como pesquisa acadêmica, biotecnologia, conservação ambiental, agricultura, saúde pública e farmacologia, contribuindo para avanços científicos e aplicações práticas.',
    paths: ['Biologia Molecular', 'Ecologia', 'Botânica', 'Zoologia', 'Genética'],
  },
  'sistemas-de-informacao': {
    name: 'Sistemas de Informação',
    category: 'Exatas',
    summary: 'Conectando o mundo por meio da tecnologia da informação',
    description:
      'Profissionais de sistemas de informação são responsáveis pelo planejamento, desenvolvimento, implementação e manutenção de sistemas de tecnologia da informação em organizações. Eles projetam e gerenciam redes de computadores, bancos de dados, sistemas de software e hardware, garantindo a integridade, segurança e eficiência das informações e tecnologias utilizadas pela organização.',
    paths: [
      'Desenvolvimento de Software',
      'Banco de Dados',
      'Segurança da Informação',
      'Redes de Computadores',
      'Análise de Sistemas',
    ],
  },
};
