import Navbar from "./components/header/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Places from "./sections/Places";
import Footer from "./components/footer/Footer";
import About from "./sections/About";

function App() {
  return (
    <div className="min-h-screen md:flex-col w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Places />
      <Footer />
    </div>
  );
}

export default App;
