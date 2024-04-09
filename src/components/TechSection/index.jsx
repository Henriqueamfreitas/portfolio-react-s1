import styles from "../TechSection/style.module.css";
import { TechList } from "./TechList/index.jsx";

export const TechSection = () => {
    return(
        <section className={styles.section} id="techSection">
            <h2 className="title two secondary">Tecnologias</h2>
            <TechList></TechList>
        </section>
    )
}