import styles from "../TechList/style.module.css";
import { TechCard } from "./TechCard/index.jsx";
import { technologies } from "../../../data/technologies.js";

export const TechList = () => {
    return (
        <ul>
            {
                technologies.map((technology, index) => {
                    return (
                        <TechCard
                            img={technology.img}
                            index={index}
                            name={technology.name}
                        >
                        </TechCard>
                    )
                })
            }
        </ul>
    )
}