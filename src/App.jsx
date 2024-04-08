import { Header } from "./components/Header/index.jsx"
import { BannerSection } from "./components/BannerSection/index.jsx"
import { AboutMeSection } from "./components/AboutMeSection/index.jsx"
import { TechSection } from "./components/TechSection/index.jsx"
import { ProjectSection } from "./components/ProjectSection/index.jsx"
import { Footer } from "./components/Footer/index.jsx"

function App() {

  return (
    <>
      <Header></Header>
      <BannerSection></BannerSection>
      <AboutMeSection></AboutMeSection>
      <TechSection></TechSection>
      <ProjectSection></ProjectSection>
      <Footer></Footer>
    </>
  )
}

export default App
