import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Certifications from "./components/Certifications";
import FooterSection from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* <Services /> */}
      <Projects />
      <Certifications />
      <FooterSection />
    </>
  );
}
