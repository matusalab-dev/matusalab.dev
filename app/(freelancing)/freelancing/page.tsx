import { NAV_INFO_FREELANCE } from "@/app/constants/navbar";
import Certifications from "../../components/Certifications";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projects from "../../components/projects/Projects";
import Services from "../../components/Services";
import { HEADER_COPYRIGHT } from "@/app/constants/header";

const Freelancing = () => {
  return (
    <div>
      <Header
        headerNavBar={NAV_INFO_FREELANCE}
        headerNavBarMobile={NAV_INFO_FREELANCE}
        headerCopyright={HEADER_COPYRIGHT[1]}
        navBarRoute={0}
        selectedTag={1}
        selectedHeadline={1}
        logoLink="/freelancing"
      />
      <Services />
      <Projects slug="freelancing" />
      <Certifications />
      <Footer availability="for freelance" />
    </div>
  );
};

export default Freelancing;
