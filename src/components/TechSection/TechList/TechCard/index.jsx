import styles from "../TechCard/style.module.css";

export const TechCard = ({ img, name }) => {
    return(
        <li>
            <img src={img} alt="símbolo da tecnologia" />
            <p>{name}</p>
        </li>
    )
}