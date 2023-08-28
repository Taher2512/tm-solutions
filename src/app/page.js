import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import "./globals.css";
import Footer2 from "./components/Footer2";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer2 />
    </main>
  );
}
