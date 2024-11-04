import { NAV_INFO_FREELANCE } from "@/app/constants/navbar";
import Certifications from "../../components/Certifications";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projects from "../../components/projects/Projects";
import Services from "../../components/Services";

const Freelancing = () => {
  return (
    <>
      <Header
        headerNavBar={NAV_INFO_FREELANCE}
        headerNavBarMobile={NAV_INFO_FREELANCE}
        navBarRoute={0}
        logoLink="/freelancing"
      />
      <Services />
      <Projects slug="freelancing" />
      <Certifications />
      <Footer availability="for freelance" logoLink="/freelancing" />
    </>
  );
};

export default Freelancing;
