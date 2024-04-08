import portfolioImage from "../../../src/assets/portfolio.png"; 
import styles from "../Header/style.module.css";

export const Header = () => {
    return (
        <header>
            <img className={styles.img} src={portfolioImage} alt="Imagem da logo portfolio escrito em branco" />
            <div>
                <a href="">Sobre</a>
                <a href="">Stack</a>
                <a href="">Projetos</a>
            </div>
            <button>Contato</button>
        </header>
    );
};
