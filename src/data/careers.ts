import type { CareerURLSlug } from '@/utils/generateCareerURLSlug';
import type { Career } from '@/types/CareerProfiler';

export type CareersDetails = typeof careers;

export type CareerData = {
  name: Career;
  paths: Path[];
  summary: string;
  category: string;
  description: string;
};

export type Path = {
  pathName: string;
  pathSummary: string;
};

export const careers: Record<CareerURLSlug, CareerData> = {
  design: {
    name: 'Design',
    category: 'Exatas',
    summary: 'Transformando ideias em realidade através da criatividade visual',
    description:
      'O design é uma disciplina criativa que combina arte, tecnologia e comunicação para criar soluções visuais eficazes e atraentes. Os designers utilizam sua habilidade para compreender as necessidades dos clientes e do público-alvo, aplicando-a em projetos que vão desde logotipos e embalagens até interfaces digitais e espaços físicos. Eles devem ser inovadores, ter um olhar atento aos detalhes e estar atualizados com as tendências do mercado para desenvolverem designs impactantes e funcionais.',
    paths: [
      {
        pathName: 'Publicidade',
        pathSummary:
          'Publicidade é uma área do Design que se dedica à criação e divulgação de mensagens persuasivas para promover produtos, serviços e marcas. Os profissionais de publicidade desenvolvem estratégias de comunicação, criam campanhas publicitárias, elaboram peças gráficas e audiovisuais, e utilizam diferentes meios de mídia para alcançar o público-alvo e influenciar seu comportamento de compra.',
      },
      {
        pathName: 'Web Design',
        pathSummary:
          'Web Design é uma área do Design que se dedica ao projeto e desenvolvimento de interfaces e experiências de usuário para websites e aplicativos web. Os web designers combinam princípios de design gráfico, usabilidade e tecnologia para criar layouts, gráficos, tipografia e interações que proporcionem uma navegação intuitiva, funcionalidade e estética agradável aos usuários.',
      },
      {
        pathName: 'Design Gráfico',
        pathSummary:
          'Design Gráfico é uma área do Design que se dedica à criação e comunicação visual por meio de elementos gráficos, como tipografia, ilustração, fotografia e layout. Os designers gráficos desenvolvem identidades visuais, materiais de marketing, embalagens, publicações impressas e digitais, e outros produtos de design para transmitir mensagens, informação e emoção de forma eficaz e esteticamente atraente.',
      },
      {
        pathName: 'Design de Produto',
        pathSummary:
          'Design de Produto é uma área do Design que se dedica à concepção e desenvolvimento de produtos físicos, desde sua função e forma até sua usabilidade e experiência do usuário. Os designers de produto combinam conhecimentos de engenharia, estética, ergonomia e mercado para criar produtos inovadores, sustentáveis e comercialmente viáveis, que atendam às necessidades e desejos dos usuários.',
      },
      {
        pathName: 'Design de Interiores',
        pathSummary:
          'Design de Interiores é uma área do Design que se dedica à criação de ambientes funcionais, estéticos e seguros para diferentes usos e ocupantes. Os designers de interiores planejam, projetam e decoram espaços residenciais, comerciais, institucionais e públicos, considerando aspectos como layout, mobiliário, cores, iluminação, materiais e acessórios, para proporcionar conforto, praticidade e beleza aos usuários.',
      },
    ],
  },
  direito: {
    name: 'Direito',
    category: 'Humanas',
    summary: 'Defendendo a justiça e os direitos legais',
    description:
      'A carreira jurídica envolve a aplicação e interpretação das leis para resolver disputas, proteger direitos individuais e promover a justiça. Os advogados podem atuar em diversas áreas, como direito civil, criminal, empresarial e internacional. Eles precisam ter sólido conhecimento das leis, habilidades de argumentação persuasiva e capacidade de análise crítica para defender os interesses de seus clientes de forma ética e eficaz.',
    paths: [
      {
        pathName: 'Advocacia Civil',
        pathSummary:
          'Advocacia Civil é a área do Direito que trata dos conflitos e questões relacionadas aos direitos civis dos cidadãos. Os advogados que atuam nessa área lidam com casos que envolvem contratos, propriedade, família, entre outros.',
      },
      {
        pathName: 'Advocacia Criminal',
        pathSummary:
          'Advocacia Criminal é a área do Direito que trata dos crimes e das questões relacionadas ao direito penal. Os advogados que atuam nessa área defendem clientes acusados de crimes, garantindo que tenham um julgamento justo e que seus direitos sejam respeitados.',
      },
      {
        pathName: 'Direito Empresarial',
        pathSummary:
          'Direito Empresarial é a área do Direito que trata das relações jurídicas entre empresas e empresários. Os advogados que atuam nessa área lidam com questões como contratos comerciais, fusões e aquisições, propriedade intelectual e direito do trabalho.',
      },
      {
        pathName: 'Direito Internacional',
        pathSummary:
          'Direito Internacional é a área do Direito que trata das relações entre os países e das normas que regem o comportamento dos Estados na comunidade internacional. Os advogados que atuam nessa área lidam com questões como tratados internacionais, direitos humanos e resolução de disputas entre nações.',
      },
      {
        pathName: 'Direito Trabalhista',
        pathSummary:
          'Direito Trabalhista é a área do Direito que trata das relações entre empregadores e empregados. Os advogados que atuam nessa área lidam com questões como contratos de trabalho, demissões, direitos trabalhistas e negociações coletivas.',
      },
    ],
  },
  nutricao: {
    name: 'Nutrição',
    category: 'Biociências',
    summary: 'Melhorando a saúde por meio de dietas equilibradas',
    description:
      'Os nutricionistas são profissionais da saúde especializados em alimentação e nutrição. Eles ajudam as pessoas a melhorarem sua qualidade de vida através de uma alimentação balanceada e adequada às suas necessidades individuais. Os nutricionistas avaliam o estado nutricional dos pacientes, desenvolvem planos alimentares personalizados e oferecem orientações sobre hábitos alimentares saudáveis para prevenir e tratar doenças relacionadas à nutrição.',
    paths: [
      {
        pathName: 'Nutrição Clínica',
        pathSummary:
          'Nutrição Clínica é a área da nutrição que se concentra no tratamento de doenças e distúrbios alimentares por meio da alimentação. Os nutricionistas clínicos trabalham em hospitais, clínicas e consultórios, fornecendo orientação dietética personalizada para melhorar a saúde e o bem-estar dos pacientes.',
      },
      {
        pathName: 'Nutrição Esportiva',
        pathSummary:
          'Nutrição Esportiva é a área da nutrição que se dedica a melhorar o desempenho esportivo por meio da alimentação. Os nutricionistas esportivos trabalham com atletas e praticantes de atividades físicas, fornecendo orientação nutricional especializada para otimizar o treinamento, a recuperação e o rendimento esportivo.',
      },
      {
        pathName: 'Nutrição Funcional',
        pathSummary:
          'Nutrição Funcional é uma abordagem da nutrição que busca identificar e tratar as causas subjacentes de problemas de saúde por meio da alimentação. Os nutricionistas funcionais avaliam as necessidades nutricionais individuais e recomendam estratégias alimentares específicas para promover a saúde e prevenir doenças.',
      },
      {
        pathName: 'Nutrição Infantil',
        pathSummary:
          'Nutrição Infantil é a área da nutrição que se dedica à alimentação e nutrição de crianças e adolescentes. Os nutricionistas especializados em nutrição infantil trabalham com famílias, escolas e instituições de saúde para fornecer orientação nutricional adequada para cada fase do desenvolvimento infantil, promovendo hábitos alimentares saudáveis desde cedo.',
      },
      {
        pathName: 'Nutrição Hospitalar',
        pathSummary:
          'Nutrição Hospitalar é a área da nutrição que se concentra no cuidado nutricional de pacientes hospitalizados. Os nutricionistas hospitalares avaliam as necessidades nutricionais dos pacientes, desenvolvem planos de alimentação adequados às condições médicas e monitoram a ingestão alimentar para garantir a recuperação e o bem-estar durante a hospitalização.',
      },
    ],
  },
  medicina: {
    name: 'Medicina',
    category: 'Biociências',
    summary: 'Cuidando da saúde e bem-estar das pessoas',
    description:
      'A medicina é uma profissão dedicada ao cuidado da saúde humana. Os médicos são responsáveis pelo diagnóstico, tratamento e prevenção de doenças, além de promoverem a saúde e o bem-estar de seus pacientes. Eles passam por uma extensa formação acadêmica e prática para adquirirem conhecimentos em anatomia, fisiologia, farmacologia e outras áreas relacionadas à saúde, bem como desenvolverem habilidades de comunicação e empatia para lidarem com pacientes em situações diversas.',
    paths: [
      {
        pathName: 'Clínica Médica',
        pathSummary:
          'Clínica Médica é a especialidade médica que se dedica ao diagnóstico, tratamento e prevenção de doenças em adultos. Os clínicos gerais, ou clínicos médicos, são responsáveis por cuidar da saúde geral dos pacientes, diagnosticar problemas de saúde comuns e encaminhar para especialistas quando necessário.',
      },
      {
        pathName: 'Cirurgia',
        pathSummary:
          'Cirurgia é a especialidade médica que se dedica ao tratamento de doenças e lesões por meio de intervenções cirúrgicas. Os cirurgiões realizam procedimentos cirúrgicos para corrigir problemas de saúde, remover tumores, reparar lesões traumáticas e melhorar a função ou aparência de partes do corpo.',
      },
      {
        pathName: 'Pediatria',
        pathSummary:
          'Pediatria é a especialidade médica que se dedica ao cuidado da saúde de crianças e adolescentes, desde o nascimento até a adolescência. Os pediatras avaliam o crescimento e desenvolvimento das crianças, tratam doenças infantis comuns, realizam exames preventivos e fornecem orientações sobre saúde e bem-estar infantil.',
      },
      {
        pathName: 'Ginecologia e Obstetrícia',
        pathSummary:
          'Ginecologia e Obstetrícia são especialidades médicas que se dedicam ao cuidado da saúde da mulher, incluindo a saúde reprodutiva, a gestação e o parto. Os ginecologistas realizam exames ginecológicos, tratam doenças do sistema reprodutivo feminino e fornecem cuidados pré-natais, enquanto os obstetras acompanham a gravidez, realizam partos e cuidam da saúde da mãe e do bebê durante o período perinatal.',
      },
      {
        pathName: 'Ortopedia',
        pathSummary:
          'Ortopedia é a especialidade médica que se dedica ao diagnóstico e tratamento de doenças e lesões do sistema musculoesquelético, incluindo ossos, articulações, músculos, ligamentos e tendões. Os ortopedistas tratam fraturas, luxações, lesões esportivas, doenças degenerativas, deformidades congênitas e outros problemas relacionados à estrutura e função do corpo.',
      },
    ],
  },
  enfermagem: {
    name: 'Enfermagem',
    category: 'Biociências',
    summary: 'Oferecendo cuidados essenciais e apoio aos pacientes',
    description:
      'Os enfermeiros desempenham um papel fundamental no sistema de saúde, oferecendo cuidados diretos aos pacientes e auxiliando no tratamento e recuperação de diversas condições médicas. Eles trabalham em estreita colaboração com médicos e outros profissionais de saúde, monitorando sinais vitais, administrando medicamentos, realizando curativos e fornecendo apoio emocional aos pacientes e suas famílias.',
    paths: [
      {
        pathName: 'Enfermagem Clínica',
        pathSummary:
          'Enfermagem Clínica é uma área da enfermagem que se concentra no cuidado de pacientes adultos em ambiente hospitalar ou ambulatorial. Os enfermeiros clínicos são responsáveis por avaliar o estado de saúde dos pacientes, administrar medicamentos, realizar curativos, monitorar sinais vitais e fornecer apoio emocional e educacional.',
      },
      {
        pathName: 'Enfermagem Pediátrica',
        pathSummary:
          'Enfermagem Pediátrica é uma área da enfermagem que se dedica ao cuidado de crianças e adolescentes, desde o nascimento até a adolescência. Os enfermeiros pediátricos trabalham em hospitais, clínicas pediátricas e unidades de saúde infantil, fornecendo cuidados especializados, administrando vacinas, realizando exames preventivos e oferecendo suporte às famílias.',
      },
      {
        pathName: 'Enfermagem Cirúrgica',
        pathSummary:
          'Enfermagem Cirúrgica é uma área da enfermagem que se dedica ao cuidado de pacientes submetidos a procedimentos cirúrgicos. Os enfermeiros cirúrgicos trabalham em salas de cirurgia, auxiliando os cirurgiões durante os procedimentos, preparando os pacientes para a cirurgia, monitorando os sinais vitais e garantindo a segurança e o conforto durante o período perioperatório.',
      },
      {
        pathName: 'Enfermagem Geriátrica',
        pathSummary:
          'Enfermagem Geriátrica é uma área da enfermagem que se concentra no cuidado de idosos e na promoção da saúde na terceira idade. Os enfermeiros geriátricos trabalham em hospitais, centros de saúde, casas de repouso e comunidades, fornecendo cuidados personalizados, gerenciando doenças crônicas, promovendo a independência e qualidade de vida dos idosos.',
      },
      {
        pathName: 'Enfermagem Obstétrica',
        pathSummary:
          'Enfermagem Obstétrica é uma área da enfermagem que se dedica ao cuidado da mulher durante a gestação, parto e pós-parto. Os enfermeiros obstétricos trabalham em maternidades, centros de parto, consultórios e unidades de saúde da mulher, oferecendo cuidados pré-natais, assistência ao parto, orientação para amamentação e suporte emocional às gestantes e puérperas.',
      },
    ],
  },
  odontologia: {
    name: 'Odontologia',
    category: 'Biociências',
    summary: 'Promovendo a saúde bucal e o sorriso das pessoas',
    description:
      'Os dentistas são profissionais especializados na saúde bucal, responsáveis pela prevenção, diagnóstico e tratamento de problemas dentários e periodontais. Eles realizam exames, limpezas, restaurações e procedimentos cirúrgicos, visando manter a saúde e a funcionalidade dos dentes e gengivas de seus pacientes. Além disso, os dentistas também educam sobre a importância da higiene oral e do cuidado preventivo.',
    paths: [
      {
        pathName: 'Odontologia Preventiva',
        pathSummary:
          'Odontologia Preventiva é uma área da odontologia que se dedica à prevenção de doenças bucais e promoção da saúde oral. Os dentistas preventivos realizam exames de rotina, aplicam selantes dentários, orientam sobre higiene bucal adequada, realizam limpezas profissionais e oferecem educação sobre hábitos saudáveis para manter os dentes e gengivas saudáveis.',
      },
      {
        pathName: 'Ortodontia',
        pathSummary:
          'Ortodontia é a especialidade odontológica que se dedica ao diagnóstico, prevenção e tratamento de problemas relacionados à posição dos dentes e das estruturas faciais. Os ortodontistas utilizam aparelhos ortodônticos e outras técnicas para corrigir problemas de má oclusão, alinhar os dentes e melhorar a estética do sorriso.',
      },
      {
        pathName: 'Endodontia',
        pathSummary:
          'Endodontia é a especialidade odontológica que se dedica ao tratamento dos tecidos internos do dente, como a polpa dental e o sistema de canal radicular. Os endodontistas realizam tratamentos de canal para remover tecido infectado ou inflamado, preservar a estrutura do dente e aliviar a dor associada a problemas endodônticos.',
      },
      {
        pathName: 'Cirurgia Buco-Maxilo-Facial',
        pathSummary:
          'Cirurgia Buco-Maxilo-Facial é a especialidade odontológica que se dedica ao diagnóstico e tratamento de doenças, lesões e deformidades da boca, face e região craniofacial. Os cirurgiões buco-maxilo-faciais realizam cirurgias para extrair dentes impactados, corrigir anomalias faciais, tratar lesões e tumores, e realizar procedimentos de reconstrução facial.',
      },
      {
        pathName: 'Odontopediatria',
        pathSummary:
          'Odontopediatria é a especialidade odontológica que se dedica ao cuidado da saúde bucal de crianças, desde a infância até a adolescência. Os odontopediatras realizam exames de rotina, aplicam selantes dentários, tratam cáries, realizam restaurações e orientam sobre higiene bucal adequada para crianças, promovendo uma saúde oral positiva desde cedo.',
      },
    ],
  },
  administracao: {
    name: 'Administração',
    category: 'Humanas',
    summary: 'Gerenciando recursos e estratégias para o sucesso empresarial',
    description:
      'A administração é uma área multidisciplinar que envolve o planejamento, organização, direção e controle de recursos em organizações públicas e privadas. Os administradores são responsáveis por gerenciar pessoas, finanças, operações e estratégias para alcançar os objetivos da empresa de forma eficiente e sustentável. Eles devem ter habilidades de liderança, tomada de decisão, comunicação e resolução de problemas para enfrentarem os desafios do mundo corporativo.',
    paths: [
      {
        pathName: 'Administração Financeira',
        pathSummary:
          'Administração Financeira é uma área da administração que se dedica à gestão dos recursos financeiros de uma empresa. Os profissionais de administração financeira são responsáveis por planejar, organizar, controlar e monitorar as atividades financeiras, como investimentos, captação de recursos, análise de riscos, elaboração de orçamentos e tomada de decisões financeiras estratégicas.',
      },
      {
        pathName: 'Gestão de Recursos Humanos',
        pathSummary:
          'Gestão de Recursos Humanos é uma área da administração que se dedica à gestão do capital humano de uma organização. Os profissionais de recursos humanos são responsáveis por recrutar, selecionar, treinar, desenvolver, avaliar e recompensar os colaboradores, além de promover um ambiente de trabalho saudável e produtivo.',
      },
      {
        pathName: 'Marketing',
        pathSummary:
          'Marketing é uma área da administração que se dedica ao estudo e aplicação de técnicas para promover produtos, serviços e marcas no mercado. Os profissionais de marketing são responsáveis por identificar as necessidades dos consumidores, desenvolver estratégias de comunicação e promoção, criar campanhas publicitárias, gerenciar redes sociais e monitorar o desempenho das ações de marketing.',
      },
      {
        pathName: 'Consultoria Empresarial',
        pathSummary:
          'Consultoria Empresarial é uma área da administração que se dedica a fornecer orientação e expertise para empresas enfrentarem desafios e alcançarem seus objetivos. Os consultores empresariais são especialistas em análise de negócios, estratégia, gestão de mudanças, melhoria de processos e resolução de problemas, trabalhando em projetos sob medida para atender às necessidades específicas dos clientes.',
      },
      {
        pathName: 'Logística',
        pathSummary:
          'Logística é uma área da administração que se dedica ao planejamento, organização, controle e execução de operações relacionadas ao transporte, armazenamento e distribuição de produtos e serviços. Os profissionais de logística são responsáveis por gerenciar cadeias de suprimentos, otimizar rotas de entrega, reduzir custos operacionais, garantir a eficiência dos processos logísticos e satisfazer as necessidades dos clientes.',
      },
    ],
  },
  'engenharia-civil': {
    name: 'Engenharia Civil',
    category: 'Exatas',
    summary: 'Construindo o futuro com soluções criativas e seguras',
    description:
      'Os engenheiros civis são responsáveis pelo projeto, construção e manutenção de infraestruturas civis, como edifícios, estradas, pontes, barragens e sistemas de transporte. Eles aplicam conhecimentos de matemática, física, materiais e tecnologia para garantir a segurança, durabilidade e eficiência das estruturas construídas, considerando também questões ambientais e socioeconômicas.',
    paths: [
      {
        pathName: 'Construção Civil',
        pathSummary:
          'Construção Civil é uma área da engenharia que se dedica à concepção, planejamento, execução e manutenção de edificações e infraestruturas civis. Os engenheiros civis que atuam na construção civil são responsáveis por coordenar equipes de trabalho, gerenciar recursos materiais e financeiros, garantir a qualidade e segurança das obras, e atender às necessidades dos clientes.',
      },
      {
        pathName: 'Estruturas',
        pathSummary:
          'Estruturas é uma área da engenharia civil que se dedica ao projeto e análise de estruturas de concreto, aço, madeira e outros materiais utilizados na construção civil. Os engenheiros de estruturas são responsáveis por garantir a estabilidade, resistência e durabilidade das edificações, pontes, viadutos e outras estruturas, utilizando princípios da mecânica estrutural e normas técnicas específicas.',
      },
      {
        pathName: 'Geotecnia',
        pathSummary:
          'Geotecnia é uma área da engenharia civil que se dedica ao estudo e análise do comportamento do solo e das rochas em obras de engenharia. Os engenheiros geotécnicos são responsáveis por investigar as características geológicas e geotécnicas do terreno, realizar ensaios e estudos de viabilidade, projetar fundações e estruturas de contenção, e garantir a estabilidade e segurança das obras.',
      },
      {
        pathName: 'Saneamento',
        pathSummary:
          'Saneamento é uma área da engenharia civil que se dedica ao planejamento, projeto e operação de sistemas de abastecimento de água, tratamento de esgoto, manejo de resíduos sólidos e controle de poluição ambiental. Os engenheiros de saneamento são responsáveis por garantir o acesso à água potável, promover a saúde pública, preservar o meio ambiente e garantir o desenvolvimento sustentável das comunidades.',
      },
      {
        pathName: 'Transportes',
        pathSummary:
          'Transportes é uma área da engenharia civil que se dedica ao planejamento, projeto, operação e gestão de sistemas de transporte terrestre, aquaviário e aéreo. Os engenheiros de transportes são responsáveis por projetar rodovias, ferrovias, portos, aeroportos e sistemas de transporte público, otimizar fluxos de tráfego, reduzir congestionamentos, melhorar a mobilidade urbana e garantir a segurança viária.',
      },
    ],
  },
  'engenharia-eletrica': {
    name: 'Engenharia Elétrica',
    category: 'Exatas',
    summary: 'Energizando o mundo com inovação e tecnologia',
    description:
      'Os engenheiros elétricos projetam, desenvolvem e mantêm sistemas e dispositivos que utilizam energia elétrica, como circuitos, equipamentos eletrônicos, redes de distribuição e sistemas de controle. Eles precisam ter sólido entendimento de princípios de eletricidade e eletrônica, além de habilidades em programação e automação, para atender às demandas de um mundo cada vez mais tecnológico e interconectado.',
    paths: [
      {
        pathName: 'Eletrônica',
        pathSummary:
          'Eletrônica é uma área da engenharia elétrica que se dedica ao estudo e desenvolvimento de dispositivos, circuitos e sistemas eletrônicos. Os engenheiros eletrônicos trabalham com componentes semicondutores, como diodos e transistores, e projetam circuitos para aplicações em eletrônica analógica e digital, sistemas embarcados, dispositivos móveis, entre outros.',
      },
      {
        pathName: 'Controle e Automação',
        pathSummary:
          'Controle e Automação é uma área da engenharia elétrica que se dedica ao projeto, análise e implementação de sistemas de controle e automação industrial. Os engenheiros de controle e automação desenvolvem algoritmos de controle, programam controladores lógicos programáveis (CLPs), integram sistemas supervisórios e robóticos, e otimizam processos industriais para aumentar a eficiência e produtividade.',
      },
      {
        pathName: 'Energia',
        pathSummary:
          'Energia é uma área da engenharia elétrica que se dedica ao estudo, geração, transmissão, distribuição e utilização de energia elétrica. Os engenheiros de energia trabalham com fontes de energia renováveis e não renováveis, como hidrelétricas, termelétricas, eólicas e solares, e projetam sistemas de energia para suprir as demandas residenciais, comerciais e industriais.',
      },
      {
        pathName: 'Telecomunicações',
        pathSummary:
          'Telecomunicações é uma área da engenharia elétrica que se dedica ao estudo e desenvolvimento de sistemas de comunicação e transmissão de dados. Os engenheiros de telecomunicações projetam redes de telecomunicações, sistemas de telefonia, redes de dados, sistemas de comunicação via satélite e tecnologias de transmissão de dados sem fio, como Wi-Fi, Bluetooth e 5G.',
      },
      {
        pathName: 'Sistemas de Potência',
        pathSummary:
          'Sistemas de Potência é uma área da engenharia elétrica que se dedica ao estudo e projeto de sistemas de geração, transmissão, distribuição e utilização de energia elétrica em larga escala. Os engenheiros de sistemas de potência trabalham com redes elétricas de alta tensão, geradores, transformadores, linhas de transmissão e subestações, visando garantir a confiabilidade, estabilidade e eficiência do sistema elétrico.',
      },
    ],
  },
  'engenharia-mecanica': {
    name: 'Engenharia Mecânica',
    category: 'Exatas',
    summary: 'Movendo o mundo com engenhosidade e precisão',
    description:
      'Os engenheiros mecânicos lidam com o projeto, análise e fabricação de sistemas mecânicos, máquinas e equipamentos utilizados em diversas indústrias, como automotiva, aeroespacial, energia e manufatura. Eles aplicam princípios de física, termodinâmica e materiais para desenvolver soluções inovadoras que melhoram a eficiência, confiabilidade e segurança dos produtos e processos mecânicos.',
    paths: [
      {
        pathName: 'Manufatura',
        pathSummary:
          'Manufatura é uma área da engenharia mecânica que se dedica ao processo de produção de peças e produtos utilizando técnicas de usinagem, fundição, moldagem, soldagem e montagem. Os engenheiros de manufatura são responsáveis por projetar processos de fabricação eficientes, selecionar materiais adequados, otimizar o fluxo de produção e garantir a qualidade dos produtos fabricados.',
      },
      {
        pathName: 'Controle de Qualidade',
        pathSummary:
          'Controle de Qualidade é uma área da engenharia mecânica que se dedica ao monitoramento e garantia da qualidade dos produtos e processos de fabricação. Os engenheiros de controle de qualidade realizam inspeções, testes e análises para identificar defeitos, desvios de qualidade e oportunidades de melhoria, visando garantir a conformidade com padrões e especificações técnicas.',
      },
      {
        pathName: 'Projeto de Máquinas',
        pathSummary:
          'Projeto de Máquinas é uma área da engenharia mecânica que se dedica ao projeto e desenvolvimento de máquinas, equipamentos e sistemas mecânicos. Os engenheiros de projeto de máquinas utilizam princípios de engenharia mecânica, como mecânica dos sólidos, dinâmica, termodinâmica e materiais, para conceber e otimizar máquinas que atendam às necessidades específicas dos clientes e aplicativos.',
      },
      {
        pathName: 'Energia Térmica',
        pathSummary:
          'Energia Térmica é uma área da engenharia mecânica que se dedica ao estudo, projeto e aplicação de sistemas de geração, conversão e utilização de energia térmica. Os engenheiros de energia térmica trabalham com sistemas de aquecimento, refrigeração, climatização, ventilação, e aproveitamento de calor residual, visando aumentar a eficiência energética e reduzir o impacto ambiental.',
      },
      {
        pathName: 'Aeroespacial',
        pathSummary:
          'Engenharia Aeroespacial é uma área da engenharia mecânica que se dedica ao projeto, análise e construção de aeronaves, espaçonaves e sistemas espaciais. Os engenheiros aeroespaciais trabalham com aerodinâmica, propulsão, estruturas aeroespaciais, controle de voo e sistemas de navegação, visando desenvolver tecnologias avançadas para explorar o espaço e expandir os horizontes da aviação.',
      },
    ],
  },
  'engenharia-ambiental': {
    name: 'Engenharia Ambiental',
    category: 'Exatas',
    summary: 'Protegendo e preservando o meio ambiente para as gerações futuras',
    description:
      'Os engenheiros ambientais trabalham para proteger e preservar o meio ambiente, desenvolvendo soluções sustentáveis para questões relacionadas à poluição, conservação de recursos naturais, gestão de resíduos e controle de impactos ambientais. Eles aplicam conhecimentos de ciências ambientais, engenharia e legislação para projetar e implementar sistemas e tecnologias que promovem a sustentabilidade e a qualidade de vida das comunidades.',
    paths: [
      {
        pathName: 'Gestão Ambiental',
        pathSummary:
          'Gestão Ambiental é uma área da engenharia que se dedica ao planejamento, implementação e monitoramento de políticas, programas e projetos para a preservação, conservação e uso sustentável dos recursos naturais e do meio ambiente. Os engenheiros ambientais trabalham com gestão de resíduos, controle de poluição, recuperação de áreas degradadas, conservação da biodiversidade e educação ambiental, visando promover o desenvolvimento sustentável e a qualidade de vida.',
      },
      {
        pathName: 'Recursos Hídricos',
        pathSummary:
          'Recursos Hídricos é uma área da engenharia que se dedica ao estudo, planejamento e gestão dos recursos hídricos, como rios, lagos, aquíferos e bacias hidrográficas. Os engenheiros de recursos hídricos trabalham com captação, tratamento e distribuição de água potável, controle de enchentes e inundações, gestão de irrigação, aproveitamento de energia hidrelétrica e preservação dos ecossistemas aquáticos.',
      },
      {
        pathName: 'Saneamento Ambiental',
        pathSummary:
          'Saneamento Ambiental é uma área da engenharia que se dedica ao planejamento, projeto e implementação de sistemas de saneamento básico para garantir a qualidade de vida e saúde pública. Os engenheiros de saneamento ambiental trabalham com tratamento de água e esgoto, coleta e disposição de resíduos sólidos, drenagem urbana, controle de vetores e zoonoses, e educação sanitária, visando prevenir doenças e promover o desenvolvimento sustentável.',
      },
      {
        pathName: 'Energias Renováveis',
        pathSummary:
          'Energias Renováveis é uma área da engenharia que se dedica ao estudo, desenvolvimento e aplicação de tecnologias para a geração de energia a partir de fontes renováveis e limpas, como solar, eólica, hidrelétrica, biomassa e geotérmica. Os engenheiros de energias renováveis trabalham com projeto e instalação de sistemas fotovoltaicos, turbinas eólicas, usinas hidrelétricas de pequeno porte, biodigestores e outras tecnologias sustentáveis, visando reduzir a dependência de combustíveis fósseis e mitigar as mudanças climáticas.',
      },
      {
        pathName: 'Avaliação de Impacto Ambiental',
        pathSummary:
          'Avaliação de Impacto Ambiental é uma área da engenharia que se dedica à avaliação dos impactos ambientais de projetos, obras e atividades humanas, visando identificar e mitigar potenciais danos ao meio ambiente. Os engenheiros de avaliação de impacto ambiental realizam estudos, análises e relatórios técnicos para subsidiar processos de licenciamento ambiental, promover a conservação da biodiversidade, proteger áreas sensíveis e garantir o desenvolvimento sustentável.',
      },
    ],
  },
  'engenharia-de-producao': {
    name: 'Engenharia de Produção',
    category: 'Exatas',
    summary: 'Otimizando processos para o sucesso industrial',
    description:
      'Os engenheiros de produção são responsáveis pela otimização de processos industriais e operacionais, visando aumentar a eficiência, qualidade e lucratividade das empresas. Eles utilizam métodos quantitativos, tecnologias de informação e gestão de recursos para projetar, analisar e aprimorar sistemas produtivos, desde a concepção do produto até a entrega ao cliente, buscando sempre a excelência operacional e a satisfação do cliente.',
    paths: [
      {
        pathName: 'Gestão da Qualidade',
        pathSummary:
          'Gestão da Qualidade é uma área da engenharia de produção que se dedica ao planejamento, controle e melhoria dos processos e produtos para garantir a satisfação do cliente e a eficiência operacional. Os engenheiros de gestão da qualidade aplicam métodos e ferramentas de controle estatístico de processo, gestão da qualidade total (TQM), lean manufacturing e seis sigma para reduzir defeitos, eliminar desperdícios e aumentar a produtividade.',
      },
      {
        pathName: 'Logística',
        pathSummary:
          'Logística é uma área da engenharia de produção que se dedica ao planejamento, operação e controle do fluxo de materiais, informações e recursos em uma cadeia de suprimentos. Os engenheiros de logística trabalham com transporte, armazenagem, distribuição, gestão de estoques, previsão de demanda e otimização de rotas, visando reduzir custos, melhorar o serviço ao cliente e aumentar a eficiência logística.',
      },
      {
        pathName: 'Gestão de Projetos',
        pathSummary:
          'Gestão de Projetos é uma área da engenharia de produção que se dedica ao planejamento, execução e controle de projetos em diferentes áreas e setores da indústria. Os engenheiros de gestão de projetos aplicam metodologias, técnicas e ferramentas de gerenciamento de projetos, como o PMBOK (Project Management Body of Knowledge) e o SCRUM, para garantir o cumprimento de prazos, custos e qualidade.',
      },
      {
        pathName: 'Engenharia Econômica',
        pathSummary:
          'Engenharia Econômica é uma área da engenharia de produção que se dedica ao estudo e aplicação de princípios econômicos na tomada de decisões relacionadas a investimentos, custos e benefícios em projetos e processos industriais. Os engenheiros de engenharia econômica utilizam métodos de análise financeira, como fluxo de caixa descontado, taxa interna de retorno (TIR) e valor presente líquido (VPL), para avaliar a viabilidade econômica de investimentos e alternativas de produção.',
      },
      {
        pathName: 'Pesquisa Operacional',
        pathSummary:
          'Pesquisa Operacional é uma área da engenharia de produção que se dedica ao uso de modelos matemáticos, estatísticos e computacionais para resolver problemas complexos de planejamento, programação e controle em organizações e sistemas produtivos. Os engenheiros de pesquisa operacional aplicam técnicas de otimização, simulação, análise de decisão, teoria dos jogos e inteligência computacional para melhorar o desempenho e eficiência dos processos e sistemas.',
      },
    ],
  },
  'educacao-fisica': {
    name: 'Educação Física',
    category: 'Biociências',
    summary: 'Promovendo saúde e bem-estar por meio da atividade física',
    description:
      'Os profissionais de Educação Física têm como objetivo promover a saúde, o condicionamento físico e o bem-estar por meio da prática de atividades físicas e esportivas. Eles desenvolvem programas de exercícios personalizados, orientam sobre hábitos saudáveis e ensinam técnicas esportivas, adaptando-se às necessidades e capacidades individuais de cada pessoa para estimular',
    paths: [
      {
        pathName: 'Educação Física Adaptada',
        pathSummary:
          'Educação Física Adaptada é uma área da educação física que se dedica ao desenvolvimento de programas de atividades físicas adaptadas para pessoas com deficiência ou necessidades especiais. Os profissionais de educação física adaptada promovem a inclusão social, autonomia e qualidade de vida por meio da prática regular de exercícios físicos adaptados às capacidades e limitações de cada indivíduo.',
      },
      {
        pathName: 'Personal Trainer',
        pathSummary:
          'Personal Trainer é uma área da educação física que se dedica ao treinamento personalizado de indivíduos, visando melhorar a saúde, condicionamento físico e qualidade de vida. Os profissionais de personal trainer desenvolvem programas de exercícios específicos para cada cliente, levando em consideração suas necessidades, objetivos e condições físicas, e acompanham o progresso ao longo do tempo.',
      },
      {
        pathName: 'Treinamento Esportivo',
        pathSummary:
          'Treinamento Esportivo é uma área da educação física que se dedica ao planejamento, execução e avaliação de programas de treinamento para atletas e praticantes de atividades físicas. Os profissionais de treinamento esportivo utilizam princípios de fisiologia do exercício, biomecânica, nutrição e psicologia do esporte para otimizar o desempenho atlético, prevenir lesões e promover o desenvolvimento físico e técnico dos praticantes.',
      },
      {
        pathName: 'Fisioterapia Esportiva',
        pathSummary:
          'Fisioterapia Esportiva é uma área da educação física que se dedica ao diagnóstico, tratamento e reabilitação de lesões e disfunções musculoesqueléticas em atletas e praticantes de atividades físicas. Os fisioterapeutas esportivos utilizam técnicas de terapia manual, exercícios terapêuticos, modalidades físicas e reabilitação funcional para acelerar a recuperação, restaurar a função e prevenir novas lesões.',
      },
      {
        pathName: 'Recreação e Lazer',
        pathSummary:
          'Recreação e Lazer é uma área da educação física que se dedica à organização e realização de atividades recreativas e de lazer para promover o bem-estar, interação social e diversão. Os profissionais de recreação e lazer desenvolvem programas de atividades físicas, esportivas, culturais e de entretenimento para crianças, adultos e idosos, em ambientes como escolas, clubes, parques e centros de lazer.',
      },
    ],
  },
  'ciencias-contabeis': {
    name: 'Ciências Contábeis',
    category: 'Humanas',
    summary: 'Gerenciando finanças e garantindo conformidade legal',
    description:
      'Contadores são responsáveis pela gestão financeira e contábil de organizações, empresas e indivíduos. Eles registram transações financeiras, preparam relatórios contábeis e fiscais, analisam dados financeiros, garantem a conformidade com regulamentações e fornecem aconselhamento financeiro para tomada de decisões.',
    paths: [
      {
        pathName: 'Auditoria',
        pathSummary:
          'Auditoria é uma área da ciências contábeis que se dedica à análise, avaliação e verificação dos registros contábeis, demonstrações financeiras e processos organizacionais de uma empresa ou entidade. Os auditores realizam procedimentos de auditoria para identificar irregularidades, erros, fraudes e garantir a conformidade com as normas contábeis e regulamentações.',
      },
      {
        pathName: 'Contabilidade Fiscal',
        pathSummary:
          'Contabilidade Fiscal é uma área da ciências contábeis que se dedica ao registro, controle e apuração dos tributos e obrigações fiscais de uma empresa ou entidade. Os profissionais de contabilidade fiscal calculam impostos, elaboram declarações fiscais, realizam planejamento tributário e assessoram na conformidade com a legislação fiscal.',
      },
      {
        pathName: 'Contabilidade Gerencial',
        pathSummary:
          'Contabilidade Gerencial é uma área da ciências contábeis que se dedica à produção e análise de informações financeiras para auxiliar a gestão e tomada de decisões dentro de uma empresa ou organização. Os contadores gerenciais elaboram relatórios, análises de custos, orçamentos, indicadores de desempenho e avaliam a viabilidade econômica de projetos e investimentos.',
      },
      {
        pathName: 'Perícia Contábil',
        pathSummary:
          'Perícia Contábil é uma área da ciências contábeis que se dedica à investigação e análise de questões financeiras, contábeis e patrimoniais em processos judiciais ou extrajudiciais. Os peritos contábeis realizam exames, laudos periciais e pareceres técnicos para subsidiar decisões judiciais, arbitragens, medições de patrimônio e litígios relacionados à área contábil.',
      },
      {
        pathName: 'Controladoria',
        pathSummary:
          'Controladoria é uma área da ciências contábeis que se dedica ao planejamento, controle e análise das atividades financeiras, contábeis e de gestão de uma empresa ou organização. Os profissionais de controladoria elaboram relatórios gerenciais, análises financeiras, orçamentos, planos estratégicos e garantem a integridade e confiabilidade das informações contábeis para suportar a tomada de decisões.',
      },
    ],
  },
  'ciencias-biologicas': {
    name: 'Ciências Biológicas',
    category: 'Biociências',
    summary: 'Explorando e estudando a vida em suas diversas formas',
    description:
      'Profissionais de ciências biológicas estudam os organismos vivos, incluindo sua estrutura, função, evolução e interações com o ambiente. Eles podem trabalhar em diversas áreas, como pesquisa acadêmica, biotecnologia, conservação ambiental, agricultura, saúde pública e farmacologia, contribuindo para avanços científicos e aplicações práticas.',
    paths: [
      {
        pathName: 'Biologia Molecular',
        pathSummary:
          'Biologia Molecular é uma área das Ciências Biológicas que se dedica ao estudo das estruturas, funções e processos moleculares que regem a vida dos organismos. Os biólogos moleculares investigam moléculas como DNA, RNA e proteínas, suas interações e modificações, e como esses processos estão relacionados à expressão gênica, desenvolvimento, doenças e evolução.',
      },
      {
        pathName: 'Ecologia',
        pathSummary:
          'Ecologia é uma área das Ciências Biológicas que se dedica ao estudo das relações entre os organismos e o meio ambiente em que vivem. Os ecologistas investigam os processos ecológicos, como cadeias alimentares, ciclos biogeoquímicos, dinâmica de populações, comunidades e ecossistemas, e como fatores ambientais, como clima, habitat e interações bióticas, influenciam a distribuição e abundância dos seres vivos.',
      },
      {
        pathName: 'Botânica',
        pathSummary:
          'Botânica é uma área das Ciências Biológicas que se dedica ao estudo das plantas, desde sua estrutura e fisiologia até sua classificação e interações com o ambiente. Os botânicos investigam aspectos como morfologia vegetal, fisiologia vegetal, reprodução, sistemática e evolução das plantas, e sua importância para os ecossistemas e para a humanidade, como fonte de alimentos, medicamentos e recursos naturais.',
      },
      {
        pathName: 'Zoologia',
        pathSummary:
          'Zoologia é uma área das Ciências Biológicas que se dedica ao estudo dos animais, desde sua diversidade e evolução até seu comportamento e ecologia. Os zoólogos investigam aspectos como anatomia, fisiologia, comportamento, classificação e distribuição dos animais nos diferentes ambientes terrestres e aquáticos, e sua interação com outros organismos e o meio ambiente.',
      },
      {
        pathName: 'Genética',
        pathSummary:
          'Genética é uma área das Ciências Biológicas que se dedica ao estudo da hereditariedade e das variações genéticas nos organismos. Os geneticistas investigam os princípios e mecanismos de transmissão e expressão dos genes, mutações genéticas, regulação gênica, evolução e biotecnologia, e como esses processos estão relacionados à saúde, doenças genéticas, melhoramento genético e diversidade biológica.',
      },
    ],
  },
  'sistemas-de-informacao': {
    name: 'Sistemas de Informação',
    category: 'Exatas',
    summary: 'Conectando o mundo por meio da tecnologia da informação',
    description:
      'Profissionais de sistemas de informação são responsáveis pelo planejamento, desenvolvimento, implementação e manutenção de sistemas de tecnologia da informação em organizações. Eles projetam e gerenciam redes de computadores, bancos de dados, sistemas de software e hardware, garantindo a integridade, segurança e eficiência das informações e tecnologias utilizadas pela organização.',
    paths: [
      {
        pathName: 'Desenvolvimento de Software',
        pathSummary:
          'Desenvolvimento de Software é uma área de Sistemas de Informação que se dedica à criação, manutenção e evolução de programas de computador. Os profissionais de desenvolvimento de software projetam, codificam, testam e documentam sistemas de software para atender às necessidades dos usuários e resolver problemas específicos, utilizando metodologias e tecnologias de desenvolvimento.',
      },
      {
        pathName: 'Banco de Dados',
        pathSummary:
          'Banco de Dados é uma área de Sistemas de Informação que se dedica ao armazenamento, gerenciamento e análise de dados em sistemas computacionais. Os profissionais de banco de dados projetam e implementam estruturas de dados, definem esquemas de banco de dados, escrevem consultas SQL, otimizam o desempenho e garantem a integridade e segurança dos dados.',
      },
      {
        pathName: 'Segurança da Informação',
        pathSummary:
          'Segurança da Informação é uma área de Sistemas de Informação que se dedica à proteção dos dados, sistemas e redes contra ameaças e ataques cibernéticos. Os profissionais de segurança da informação implementam políticas, procedimentos e tecnologias de segurança, realizam análise de riscos, monitoram atividades suspeitas e respondem a incidentes de segurança para garantir a confidencialidade, integridade e disponibilidade das informações.',
      },
      {
        pathName: 'Redes de Computadores',
        pathSummary:
          'Redes de Computadores é uma área de Sistemas de Informação que se dedica ao estudo, projeto, implementação e gerenciamento de sistemas de comunicação entre computadores e dispositivos. Os profissionais de redes de computadores configuram e administram redes locais e de longa distância, definem arquiteturas de rede, protocolos de comunicação, segurança e qualidade de serviço, e garantem a conectividade e disponibilidade dos recursos de rede.',
      },
      {
        pathName: 'Análise de Sistemas',
        pathSummary:
          'Análise de Sistemas é uma área de Sistemas de Informação que se dedica à análise, modelagem e especificação de sistemas de informação para atender às necessidades e requisitos dos usuários e organizações. Os analistas de sistemas identificam problemas, propõem soluções, elaboram requisitos, desenham fluxos de trabalho, prototipam interfaces e colaboram com equipes de desenvolvimento para garantir a entrega de sistemas eficientes e de alta qualidade.',
      },
    ],
  },
};
