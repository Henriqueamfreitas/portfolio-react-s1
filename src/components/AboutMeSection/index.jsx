import styles from "../AboutMeSection/style.module.css";

export const AboutMeSection = () => {
    return(
        <section className={styles.section} id="aboutMeSection">
            <h2 className={`${styles.h2} title two secondary`}>Sobre mim</h2>
            <p className={`${styles.p} paragraph one secondary`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, 
                sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, 
                vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis 
                ac iaculis turpis, at feugiat orci.
            </p>
        </section>
    )
}