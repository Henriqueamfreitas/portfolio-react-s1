import banner from "../../assets/banner-img.png"
import styles from "../BannerSection/style.module.css";

export const BannerSection = () => {
    return(
        <section>
            <div>
                <span>Henrique Annicchino</span>
                <h2>Bem vindo ao meu portfólio</h2>
                <span>Uma frase interessante sobre mim</span>
                <button>Saiba mais</button>
            </div>
            <img src={banner} alt="" />
        </section>
    )
}