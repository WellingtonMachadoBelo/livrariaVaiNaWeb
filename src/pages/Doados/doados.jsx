import styles from "./doados.module.scss";
import bookCover from "../../assets/bookCover.png";
import axios from "axios";
import { useState, useEffect } from "react";

function Doados() {
  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    const response = await axios.get(
      "https://livros-doados.onrender.com/livros"
    );

    setLivros(response.data);
  };

  useEffect(() => {
    getLivros();
  }, []);

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
        {livros.map((item) => (
          <article className={styles.articleDoados} key={item.id}>
            <img src={item.image - url} alt="" />
            <h3>{item.titulo}</h3>
            <p>{item.categoria}</p>
            <p>{item.autor}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Doados;
