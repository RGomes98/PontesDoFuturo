import type { Career } from '@/types/CareerProfiler';
import { cloneElement } from 'react';

import EnvironmentalEngineering from '@/assets/images/svgs/careers/engenharia_ambiental.svg?react';
import ProductionEngineering from '@/assets/images/svgs/careers/engenharia_de_producao.svg?react';
import InformationSystems from '@/assets/images/svgs/careers/sistemas_de_informacao.svg?react';
import ElectricalEngineering from '@/assets/images/svgs/careers/engenharia_eletrica.svg?react';
import MechanicalEngineering from '@/assets/images/svgs/careers/engenharia_mecanica.svg?react';
import BiologicalSciences from '@/assets/images/svgs/careers/ciencias_biologicas.svg?react';
import CivilEngineering from '@/assets/images/svgs/careers/engenharia_civil.svg?react';
import PhysicalEducation from '@/assets/images/svgs/careers/educacao_fisica.svg?react';
import Accounting from '@/assets/images/svgs/careers/ciencias_contabeis.svg?react';
import Administration from '@/assets/images/svgs/careers/administracao.svg?react';
import Dentistry from '@/assets/images/svgs/careers/odontologia.svg?react';
import Nutrition from '@/assets/images/svgs/careers/nutricao.svg?react';
import Nursing from '@/assets/images/svgs/careers/enfermagem.svg?react';
import Medicine from '@/assets/images/svgs/careers/medicina.svg?react';
import Design from '@/assets/images/svgs/careers/design.svg?react';
import Law from '@/assets/images/svgs/careers/direito.svg?react';

export const useCareerImageComponent = (career: Career, className: string) => {
  const components: Record<Career, JSX.Element> = {
    Design: <Design />,
    Direito: <Law />,
    Nutrição: <Nutrition />,
    Medicina: <Medicine />,
    Enfermagem: <Nursing />,
    Odontologia: <Dentistry />,
    Administração: <Administration />,
    'Ciências Contábeis': <Accounting />,
    'Educação Física': <PhysicalEducation />,
    'Engenharia Civil': <CivilEngineering />,
    'Ciências Biológicas': <BiologicalSciences />,
    'Sistemas de Informação': <InformationSystems />,
    'Engenharia Elétrica': <ElectricalEngineering />,
    'Engenharia Mecânica': <MechanicalEngineering />,
    'Engenharia de Produção': <ProductionEngineering />,
    'Engenharia Ambiental': <EnvironmentalEngineering />,
  };

  return { careerImage: cloneElement(components[career], { className }) };
};
