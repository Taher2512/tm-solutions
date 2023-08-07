import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import './globals.css'
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Hero />
      <Contact/>
      <Footer/>
    </main>
  );
}
