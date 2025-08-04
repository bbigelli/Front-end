import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>Portal de Viagens</Link>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/destinos">Destinos</Link>
      </div>
    </nav>
  );
}