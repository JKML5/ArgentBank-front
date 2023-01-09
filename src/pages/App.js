import MainNav from "../components/MainNav";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import '../css/style.css'

function App() {
  return (
    <>
      <MainNav />
      <main>
        <Hero />
      </main>
      <Features />
      <Footer />
    </>
  );
}

export default App;
