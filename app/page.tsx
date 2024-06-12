import Header from "./components/Header";
import Projects from "./components/Projects";
// import Services from "./components/Services";
import Certifications from "./components/Certifications";
import { NAV_INFO_HOME } from "./constants/navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header headerNavBar={NAV_INFO_HOME} headerNavBarMobile={NAV_INFO_HOME} />
      {/* <Services /> */}
      <Projects />
      <Certifications />
      <Footer />
    </>
  );
}
