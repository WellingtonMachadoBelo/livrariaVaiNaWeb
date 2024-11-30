import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./header.module.scss";

import Inicio from "../../pages/Inicio/inicio";
import Doados from "../../pages/Doados/doados";
import QueroDoar from "../../pages/Quero_Doar/queroDoar";

import logo from "../../assets/logo.png";
import search from "../../assets/search.png";

function header() {
  return (
    <BrowserRouter>
      <header className={styles.boxHeader}>
        <section className={styles.boxSectionHeader}>
          <img src={logo} alt="imagem de um livro; logo do site" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={styles.navMain}>
          <ul className={styles.boxNav}>
            <li>
              <Link to="/" className={styles.text}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/doados" className={styles.text}>
                Livros Doados
              </Link>
            </li>
            <li>
              <Link to="/queroDoar" className={styles.text}>
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>
        <section className={styles.sectionInput}>
          <input type="text" placeholder="O que procurar?" />
          <button>
            <img src={search} alt="imagem de uma lupa" />
          </button>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/doados" element={<Doados />} />
        <Route path="/queroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default header;
