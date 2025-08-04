import styles from "./footer.module.css";
const Footer = () => {
    return(
        <footer className={styles.footer}> 
            <p className={styles.footer__text} >© 2025 Cinelista. Todos os direitos reservados.</p>
        </footer>
    );
}
export default Footer;