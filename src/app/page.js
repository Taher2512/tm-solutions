import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Hero />
    </main>
  );
}
