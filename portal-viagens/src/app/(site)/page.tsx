import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Bem-vindo ao Portal de Viagens</h1>
      <p>Descubra os destinos mais incríveis para suas próximas férias!</p>
      <Link href="/destinos" className={styles.cta}>
        Explorar Destinos
      </Link>
    </div>
  );
}