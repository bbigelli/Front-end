import styles from '../styles/Layout.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Portal de Viagens. Todos os direitos reservados.</p>
    </footer>
  );
}