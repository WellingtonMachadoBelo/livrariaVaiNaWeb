import styles from "./footer.module.scss";

import face from "../../assets/iconeFace.png";
import twiter from "../../assets/iconeX.png";
import youtube from "../../assets/iconeYouTube.png";
import linkedin from "../../assets/iconeLinkedin.png";
import instagram from "../../assets/iconeInstagram.png";

function Footer() {
  return (
    <footer>
      <section className={styles.sectionOneFooter}>
        <h2>4002-8922</h2>
        <nav className={styles.navFooter}>
          <a href="https://www.facebook.com/">
            <img src={face} alt="icone do facebook" />
          </a>
          <a href="https://twitter.com/">
            <img src={twiter} alt="icone twiter" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={youtube} alt="icone youTube" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src={linkedin} alt="icone linkedin" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="icone instagram" />
          </a>
        </nav>
      </section>
      <section className={styles.sectionTwoFooter}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  );
}

export default Footer;
