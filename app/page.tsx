import Image from "next/image";
import Hero from "./components/Hero";
import Package from "./components/Package";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Package />
      <Footer />
    </main>
  );
}
