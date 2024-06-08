import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Canvas from "./components/Canvas";

export default function Home() {
  return (
    <>
      <Header />
      {/* <hr className="w-full mt-10 bg-black"></hr> */}
      <Projects />
    </>
  );
}
