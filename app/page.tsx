import Header from "./components/Header";
import Projects from "./components/projects/Projects";
// import Services from "./components/Services";
// import Certifications from "./components/Certifications";
import { NAV_INFO_HOME } from "./constants/navbar";
import Footer from "./components/Footer";
import { HEADER_COPYRIGHT } from "./constants/header";

export default function Home() {
  return (
    <>
      <Header
        headerNavBar={NAV_INFO_HOME}
        headerNavBarMobile={NAV_INFO_HOME}
        headerCopyright={HEADER_COPYRIGHT[0]}
        navBarRoute={0}
        selectedHeadline={0}
        selectedTag={0}
        logoLink="/"
      />
      <Projects slug="." />
      {/* <Certifications /> */}
      <Footer logoLink="/" />
    </>
  );
}
