import styles from "./doados.module.scss"
import download from "../../assets/download1.png"

function Doados(){
    return(
        <main className={styles.mainDoados}>
            <p className={styles.paragrafOneMain}>
             Livros Doados   
            </p>
          <section className={styles.sectionMainDoados}>
          <div className={styles.divLivrosDoados}>
            <img src={download} alt="imagem da capa de um livro doado"/>
            <p>O protagonista</p>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </div>
          <div className={styles.divLivrosDoados}>
            <img src={download} alt="imagem da capa de um livro doado"/>
            <p>A lagoa azul</p>
            <p>Joaquim Teixeira</p>
            <p>Romance</p>
          </div>
          <div className={styles.divLivrosDoados}>
            <img src={download} alt="imagem da capa de um livro doado"/>
            <p>O pianista</p>
            <p>Frederick Shua</p>
            <p>Guerra</p>
          </div>
          <div className={styles.divLivrosDoados}>
            <img src={download} alt="imagem da capa de um livro doado"/>
            <p>O pianista</p>
            <p>Frederick Shua</p>
            <p>Guerra</p>
          </div>
         
          </section>
        </main>
    )
}


export default Doados;