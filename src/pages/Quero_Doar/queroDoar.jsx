import styles from "./queroDoar.module.scss"
import frame from "../../assets/frame.png"



function QueroDoar(){
    return(
    <main className={styles.mainQueroDoar}>
      <p className={styles.paragrafMain}>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
     <section className={styles.sectionMainQueroDoar}>  
     <div className={styles.divOneForm}>
     <img src={frame} alt="imagem de um livro aberto"/>
     <p>Informações do Livro</p>
     </div>
      <form >
       <div className={styles.divForm}>
         <input type="text" id="nome" name="nome" placeholder="Cidade"  className={styles.inputForm}/>
        </div>
        <div className={styles.divForm}>
         <input type="text" id="nome" name="nome" placeholder="Telefone" className={styles.inputForm}/>
        </div>
        <div className={styles.divForm}>
         <input type="text" id="nome" name="nome" placeholder="E-mail" className={styles.inputForm}/>
        </div>
        <div className={styles.divForm}>
         <input type="text" id="nome" name="nome" placeholder="Nome" className={styles.inputForm}/>
      </div>
      <button className={styles.btnForm}>
        <p>Doar</p>
      </button>
     </form>
     </section>  
    </main>
    );
  }
  


export default QueroDoar