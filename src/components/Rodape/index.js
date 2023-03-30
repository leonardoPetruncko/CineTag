import styles from "./Rodape.module.css"

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <h2 className={styles.texto}>Desenvolvido por <a>Leonardo Petruncko</a></h2>
        </footer>
    )
}