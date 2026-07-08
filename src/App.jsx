import Navbar from "./components/header/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

function App() {
  return (
    <div className="min-h-screen md:flex-col w-full">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
