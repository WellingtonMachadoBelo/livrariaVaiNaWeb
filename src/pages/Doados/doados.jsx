import styles from "./doados.module.scss";
import bookCover from "../../assets/bookCover.png";

function Doados() {
  return (
    <main className={styles.mainDoados}>
      <h2>Livros Doados</h2>
      <section className={styles.sectionMainDoados}>
        <article className={styles.articleDoados}>
          <img src={bookCover} alt="imagem da capa de um livro doado" />
          <h3>O protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>
        <article className={styles.articleDoados}>
          <img src={bookCover} alt="imagem da capa de um livro doado" />
          <h3>O protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>
      </section>
    </main>
  );
}

export default Doados;
