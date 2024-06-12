import Link from "next/link";
import NavBar from "../components/nav/NavBar";
import { NAV_INFO_FREELANCE, NAV_INFO_HOME } from "../constants/navbar";
import Image from "next/image";

const Projects = ({ backLink = "/#project" }) => {
  return (
    <div className="inverse full-bleed h-screen">
      <NavBar navBar={NAV_INFO_HOME} navBarMobile={NAV_INFO_FREELANCE} />
      <h1 className="flex justify-center flex-col w-max mr-auto md:mx-right text-center text-4xl md:text-7xl font-[900] mt-8 ">
        <Link
          href={backLink}
          className="text-sm font-thin text-center self-start flex items-center gap-2 mt-2 mb-8 md:mt-6"
        >
          <Image
            src="/projects-mockup/arrow-vector.svg"
            alt="go to more details"
            width="12"
            height="10"
            className=" sm:w-6 sm:h-3 -rotate-[135deg]"
          />
          Back to all projects
        </Link>
        Project details
      </h1>
    </div>
  );
};

export default Projects;
