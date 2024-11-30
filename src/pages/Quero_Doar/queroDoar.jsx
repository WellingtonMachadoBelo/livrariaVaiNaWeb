import styles from "./queroDoar.module.scss";
import frame from "../../assets/frame.png";

function QueroDoar() {
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
        <form>
          <div className={styles.divForm}>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Título"
              className={styles.inputForm}
            />
          </div>
          <div className={styles.divForm}>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Categoria"
              className={styles.inputForm}
            />
          </div>
          <div className={styles.divForm}>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Autor"
              className={styles.inputForm}
            />
          </div>
          <div className={styles.divForm}>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Link da Imagem"
              className={styles.inputForm}
            />
          </div>
          <button className={styles.btnForm} type="submit">
            Doar
          </button>
        </form>
      </section>
    </main>
  );
}

export default QueroDoar;
