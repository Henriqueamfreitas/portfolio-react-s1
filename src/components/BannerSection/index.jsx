import banner from "../../assets/banner-img.png"
import styles from "../BannerSection/style.module.css";

export const BannerSection = () => {
    return(
        <section className={styles.section}>
            <div className={styles.div}>
                <div>
                    <span className="paragraph two brand">Henrique Annicchino</span>
                    <h2 className="title one secondary">Bem vindo ao meu portfólio</h2>
                </div>
                <span className="paragraph one secondary">Uma frase interessante sobre mim</span>
                <button className={`button paragraph three secondary`}>Saiba mais</button>
            </div>
            <img className={styles.img} src={banner} alt="Imagem de computadores" />
        </section>
    )
}