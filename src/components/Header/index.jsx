import portfolioImage from "../../../src/assets/portfolio.png"; 
import styles from "../Header/style.module.css";

export const Header = () => {
    return (
        <header>
            <img className={styles.img} src={portfolioImage} alt="Imagem da logo portfolio escrito em branco" />
            <div>
                <a className="paragraph three secondary" href="#aboutMeSection">Sobre</a>
                <a className="paragraph three secondary" href="#techSection">Stack</a>
                <a className="paragraph three secondary" href="#projectSection">Projetos</a>
            </div>
            <button className="paragraph three secondary">Contato</button>
        </header>
    );
};
