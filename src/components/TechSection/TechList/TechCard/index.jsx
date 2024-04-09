import styles from "../TechCard/style.module.css";

export const TechCard = ({ img, name }) => {
    return(
        <li className={styles.li}>
            <img src={img} alt="símbolo da tecnologia" />
            <p className="title three secondary">{name}</p>
        </li>
    )
}