import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import './globals.css'
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Hero />
      <Contact/>
      <Footer/>
    </main>
  );
}
