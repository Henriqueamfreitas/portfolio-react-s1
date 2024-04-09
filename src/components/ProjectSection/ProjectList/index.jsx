import styles from "../ProjectList/style.module.css";
import { projects } from "../../../data/projects.js"
import { ProjectCard } from "./ProjectCard/index.jsx";

export const ProjectList = () => {
    return(
        <ul className={styles.ul}>
            {
                projects.map((project, index) => {
                    return(
                        <ProjectCard
                            key={index}
                            name={project.name}
                            description={project.description}
                            ref={null}
                        ></ProjectCard>
                    )
                })
            }
        </ul>
    )
}