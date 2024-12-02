import style from "./Inicio.module.scss";
import community from "../../assets/community.png";
import wisdom from "../../assets/wisdom.png";
import together from "../../assets/together.png";
import equality from "../../assets/equality.png";

function Inicio() {
  return (
    <main>
      <section className={style.sectionOneMain}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={style.sectionTwoMain}>
        <div>
          <h3>Por que devo doar?</h3>
        </div>
        <section className={style.sectionThreeMain}>
          <article>
            <img
              src={community}
              alt="um icone de um circulo de pessoas, simbolizando compartilhamento"
            />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </article>
          <article>
            <img
              src={wisdom}
              alt="um icone de uma pessoa lendo um livro, simbolizando adquirindo sabedoria"
            />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>
          <article>
            <img
              src={together}
              alt="um icone de união entre as pessoas, simbolizando o fornecimento de sabedoria"
            />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </article>
          <article>
            <img
              src={equality}
              alt="um icone de uma balança, simbolizando que todos são iguais "
            />
            <p>Garante que todo tenham oportunidades de aprendizado.</p>
          </article>
        </section>
      </section>
    </main>
  );
}

export default Inicio;
