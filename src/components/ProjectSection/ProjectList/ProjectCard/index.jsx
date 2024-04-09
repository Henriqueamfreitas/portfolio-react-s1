import styles from "../ProjectCard/style.module.css";
import githubIcon from "../../../../assets/git-icon.png"

export const ProjectCard = ({ name, description, ref }) => {
    return(
        <li className={styles.li}>
            <div>
                <h3 className="title three secondary">{name}</h3>
                <p className="paragraph one secondary">{description}</p>
                <a className="link brand" href={ref}>Saiba mais</a>
            </div>
            <img src={githubIcon} alt="ícone do github em preto e branco" />
        </li>
    )
}