import styles from "../ProjectCard/style.module.css";
import githubIcon from "../../../../assets/git-icon.png"

export const ProjectCard = ({ name, description, ref }) => {
    return(
        <li>
            <div>
                <h3>{name}</h3>
                <img src={githubIcon} alt="ícone do github em preto e branco" />
            </div>
            <p>{description}</p>
            <a href={ref}>Saiba mais</a>
        </li>
    )
}