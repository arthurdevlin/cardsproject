import Navbar from "./components/header/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Places from "./sections/Places";

function App() {
  return (
    <div className="min-h-screen md:flex-col w-full">
      <Navbar />
      <Hero />
      <Services />
      <Places />
    </div>
  );
}

export default App;
