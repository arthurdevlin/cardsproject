import Navbar from "./components/header/Navbar";
import Hero from "./sections/hero section/Hero";
import Blantyre from "./sections/Blantyre"; 

function App() {
  return (
    <div className="min-h-screen md:flex-col   w-full">
       <Navbar />
      <Hero /> 
      <Blantyre />
    </div>
  );
}

export default App;
