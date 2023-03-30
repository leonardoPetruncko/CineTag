import styles from "./Rodape.module.css"

export default function Rodape() {
    return (
        <footer>
            <h2 className={styles.rodape}>Desenvolvido por <a className={styles.name}> Leonardo Petruncko </a></h2>
        </footer>
    )
}