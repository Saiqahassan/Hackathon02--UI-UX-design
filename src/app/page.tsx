import NewCeramics from "@/components/Ceramics";
import Datafetch from "@/components/Datafetch";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <Datafetch/>
      <NewCeramics/>
      <Products/>
      
    </div>
  )
}
      