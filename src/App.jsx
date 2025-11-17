import NavBar from './components/NavBar.jsx'
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Showcase from "./components/Showcase.jsx";
import Performance from "./components/Performance.jsx";
import Footer from "./components/Footer.jsx";
import Features from "./components/Features.jsx";
import Highlights from "./components/Highlights.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            {/*<Features />*/}
            {/*<Highlights />*/}
            {/*<Footer />*/}
        </>
    )
}
export default App
