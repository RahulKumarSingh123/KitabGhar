import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import BestSellers from "./components/BestSellers"
import Footer from "./components/Footer"
import OtherBooks from "./components/OtherBooks"
import Testimonials from "./components/Testimonials"
import "aos/dist/aos.css";
import Aos from "aos"
import { useEffect } from "react"
export default function App() {
  useEffect(()=>{
    Aos.init({
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    Aos.refresh();
  },[]);
  return (
    <div className="min-h-dvh overflow-x-hidden">
      <Navbar></Navbar>
      <Hero></Hero>
      <BestSellers></BestSellers>
      <OtherBooks></OtherBooks>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  )
}