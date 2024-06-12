import { NAV_INFO_FREELANCE } from "@/app/constants/navbar";
import Certifications from "../../components/Certifications";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Services from "../../components/Services";

const Freelancing = () => {
  return (
    <div>
      <Header
        headerNavBar={NAV_INFO_FREELANCE}
        headerNavBarMobile={NAV_INFO_FREELANCE}
      />
      <Services />
      <Projects projectRoute="/freelancing/projects" />
      <Certifications />
      <Footer availability="for freelance" />
    </div>
  );
};

export default Freelancing;
