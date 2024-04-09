import styles from "../ProjectSection/style.module.css";
import { ProjectList } from "./ProjectList/index.jsx";

export const ProjectSection = () => {
    return(
        <section id="projectSection">
            <h2 className="title two secondary">Projetos</h2>
            <ProjectList></ProjectList>
        </section>
    )
}