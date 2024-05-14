import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Início</li>
        <li>Explorar Áreas</li>
        <li>Encontre seu Caminho</li>
      </ul>
      <div>
        <Link href='https://www.unifoa.edu.br/'>LOGO UNIFOA</Link>
        <Link href='https://www.instagram.com/unifoa'>LOGO INSTAGRAM</Link>
        <Link href='https://www.instagram.com/medvr.79'>LOGO INSTAGRAM</Link>
      </div>
    </nav>
  );
};
