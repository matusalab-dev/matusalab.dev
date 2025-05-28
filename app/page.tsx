import Header from "./components/Header";
import Projects from "./components/projects/Projects";
// import Services from "./components/Services";
// import Certifications from "./components/Certifications";
import { NAV_INFO_HOME } from "./constants/navbar";
import Footer from "./components/Footer";
import { HEADER_COPYRIGHT } from "./constants/header";
import Certifications from "./components/Certifications";

export default function Home() {
  return (
    <>
      <Header
        headerNavBar={NAV_INFO_HOME}
        headerNavBarMobile={NAV_INFO_HOME}
        navBarRoute={0}
        logoLink="/"
      />
      <Projects slug="." />
      <Certifications />
      {/* <Footer logoLink="/" /> */}
    </>
  );
}
