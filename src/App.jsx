import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Projects from "./sections/projects/Project";
import Services from "./sections/services/Services";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import SpinningLoadder from "./components/loadder/SpinningLoadder";
import { useState, useEffect } from "react";




function App(){
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
      }, 3000);
  }, []);

   if(loading){
    return(
      <div className="h-screen w-full flex justify-center items-center">
      <SpinningLoadder loading = {loading}/>
      </div>
    );
   }
  return(
    <>

    <Home />
    <About/>
    <Projects/>
    <Services/>
    <Contact />
    <Footer/>
    
    </>
  )
}

export default App