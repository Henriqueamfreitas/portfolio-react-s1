import styles from "../Footer/style.module.css";
import whatsappLogo from "../../assets/whatsapp-icon.png"
import linkedinLogo from "../../assets/linkedin-icon.png"
import githubLogo from "../../assets/github-icon.png"

export const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Contato</h2>
                <a href="">
                    <img src={whatsappLogo} alt="ícone whatsapp" />
                </a>
                
                <a href="">
                    <img src={linkedinLogo} alt="ícone linkedin" />
                </a>
                
                <a href="">
                    <img src={githubLogo} alt="ícone github" />
                </a>
            </div>
            <p>Todos os direitos reservados - Henrique Annicchino</p>
        </footer>
    );
};
