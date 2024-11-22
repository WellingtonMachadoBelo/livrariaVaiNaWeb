import style from "./Inicio.module.scss"
import imgMain from "../../assets/imgBackgroundMain.png"
import community from "../../assets/community.png"
import wisdom from "../../assets/wisdom.png"
import together from "../../assets/together.png"
import equality from "../../assets/equality.png"

function Inicio(){
    return(
    <main className={style.boxMain}>
      <section className={style.sectionOneMain}>
       <img src={imgMain} alt="imagem de uma pessoa segurando livros"/>
       <div className={style.divTextMain}>
        <h3>
         VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO
        </h3>
       </div>
     </section>
     <section className={style.sectionTwoMain}>
        <h2 className={style.h2SectionTwoMain}>
        Por que devo doar?
        </h2>
        <div className={style.divSectionTwoMain}> 
          <div>
            <img src={community} alt="um icone de um circulo de pessoas, simbolizando compartilhamento"/>
            <p>
            Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.
            </p>
          </div>
          <div>
            <img src={wisdom} alt="um icone de uma pessoa lendo um livro, simbolizando adquirindo sabedoria"/>
            <p>
            Estimula o hábito da leitura e o aprendizado contínuo.
            </p>
          </div>
          <div>
            <img src={together} alt="um icone de união entre as pessoas, simbolizando o fornecimento de sabedoria"/>
            <p>
            Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.
            </p>
          </div>
          <div>
           <img src={equality} alt="um icone de uma balança, simbolizando que todos são iguais "/>
           <p>
           Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.
           </p>
          </div>
        </div>
     </section>
    </main>    
    )
}



export default Inicio;

