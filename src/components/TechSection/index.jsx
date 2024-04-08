import styles from "../TechSection/style.module.css";
import { TechList } from "./TechList/index.jsx";

export const TechSection = () => {
    return(
        <section id="techSection">
            <h2>Tecnologias</h2>
            <TechList></TechList>
        </section>
    )
}