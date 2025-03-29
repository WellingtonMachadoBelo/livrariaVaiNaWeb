import styles from "./queroDoar.module.scss";
import frame from "../../assets/frame.png";
import axios from "axios";
import { useState } from "react";

function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem, setImagem] = useState("");

  const capturaTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const capturaCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const capturaAutor = (e) => {
    setAutor(e.target.value);
  };

  const capturaImagem = (e) => {
    setImagem(e.target.value);
  };

  const enviarDados = async () => {
    const urlApi = "https://livros-doados.onrender.com/doar";

    const dadosEnviar = {
      titulo,
      categoria,
      autor,
      imagem,
    };

    await axios.post(urlApi, dadosEnviar);

    alert("Livros cadastros com sucesso!!!");

    setTitulo("");
    setCategoria("");
    setAutor("");
    setImagem("");
  };

  return (
    <main className={styles.mainQueroDoar}>
      <h2>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </h2>
      <section className={styles.sectionMainQueroDoar}>
        <div className={styles.divOneForm}>
          <img src={frame} alt="imagem de um livro aberto" />
          <p>Informações do Livro</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.divForm}>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Título"
              className={styles.inputForm}
              onChange={capturaTitulo}
              value={titulo}
            />
          </div>
          <div className={styles.divForm}>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Categoria"
              className={styles.inputForm}
              onChange={capturaCategoria}
              value={categoria}
            />
          </div>
          <div className={styles.divForm}>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Autor"
              className={styles.inputForm}
              onChange={capturaAutor}
              value={autor}
            />
          </div>
          <div className={styles.divForm}>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Link da Imagem"
              className={styles.inputForm}
              onChange={capturaImagem}
              value={imagem}
            />
          </div>
          <button
            className={styles.btnForm}
            type="submit"
            onClick={enviarDados}
          >
            Doar
          </button>
        </form>
      </section>
    </main>
  );
}

export default QueroDoar;
