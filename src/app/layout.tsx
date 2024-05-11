import { Wix_Madefor_Text, Libre_Baskerville } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Pontes do Futuro',
  description:
    'Descubra seu caminho no Pontes do Futuro - seu portal de orientação educacional e profissional. Encontre informações sobre faculdades, ENEM, ProUni, FIES, concursos públicos, cursos técnicos e muito mais. Faça um teste vocacional e receba recomendações personalizadas. Explore vídeos curtos com profissionais compartilhando suas experiências. Torne sua jornada educacional mais leve e direcionada conosco.',
};

const wixMadeforText = Wix_Madefor_Text({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-wix-madefor-text',
  fallback: ['system-ui', 'sans-serif'],
  weight: ['400', '500', '600', '700', '800'],
});

const libreBaskerville = Libre_Baskerville({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  fallback: ['system-ui', 'sans-serif'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${wixMadeforText.variable} ${libreBaskerville.variable}`}>{children}</body>
    </html>
  );
}
