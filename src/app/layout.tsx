import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pontes do Futuro',
  description:
    'Descubra seu caminho no Pontes do Futuro - seu portal de orientação educacional e profissional. Encontre informações sobre faculdades, ENEM, ProUni, FIES, concursos públicos, cursos técnicos e muito mais. Faça um teste vocacional e receba recomendações personalizadas. Explore vídeos curtos com profissionais compartilhando suas experiências. Torne sua jornada educacional mais leve e direcionada conosco.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
