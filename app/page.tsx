import Image from "next/image";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Feature />
      <Footer />
    </main>
  );
}
