import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/components/nav/NavBar";
import { NAV_INFO_HOME } from "@/app/constants/navbar";
import { ArrowVector } from "@/public/icons/ArrowVector";

interface PageProps {
  backLink: string;
  params: {
    slug: string;
  };
}

const Projects = ({ backLink = "../#project", params }: PageProps) => {
  const { slug } = params;

  return (
    <section className="inverse full-bleed h-screen">
      <NavBar
        navBar={NAV_INFO_HOME}
        navBarMobile={NAV_INFO_HOME}
        routeIndex={1}
      />
      <div className="flex justify-center flex-col text-4xl md:text-7xl font-thin mt-8">
        <Link
          href={backLink}
          className="text-sm  text-center self-start flex items-center gap-2 mt-2 mb-8 md:mt-6"
        >
          <Image
            src="/projects-mockup/arrow-vector.svg"
            alt="go to more details"
            width="12"
            height="10"
            className="sm:w-6 sm:h-3 -rotate-[135deg]"
          />
          Back to all projects
        </Link>
        <div className="flex justify-between items-center">
          <h1 className="capitalize text-5xl font-black">{slug}</h1>
          <Link
            href="www.room-ecommerce.pages.dev"
            target="_blank"
            className="text-[1rem] text-white w-24 h-24 flex justify-center items-center gap-2 rounded-full bg-black"
          >
            Live site
            <ArrowVector color="white" width="12" height="12" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
