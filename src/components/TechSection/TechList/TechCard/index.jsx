import styles from "../TechCard/style.module.css";

export const TechCard = ({ img, name, index }) => {
    return(
        <li key={index}>
            <img src={img} alt="símbolo da tecnologia" />
            <p>{name}</p>
        </li>
    )
}