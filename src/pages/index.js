import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Service from "@/components/Service";
import Qualification from "@/components/Qualification";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="font-serif  mx-auto flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
