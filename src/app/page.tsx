import NewCeramics from "@/components/Ceramics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <Footer/>
      <NewCeramics/>
      <Products/>
      
    </div>
  )
}
      