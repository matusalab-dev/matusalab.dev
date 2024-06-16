import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/components/nav/NavBar";
import { NAV_INFO_FREELANCE } from "@/app/constants/navbar";
import { ArrowVector } from "@/public/icons/ArrowVector";
import { Url } from "url";

// interface PageProps {
//   backLink?: Url | "../#project";
//   params: {
//     slug: string;
//   };
// }

const Projects = ({
  backLink = "../#project",
  params,
}: {
  backLink?: string;
  params: {
    slug: string;
  };
}) => {
  const { slug } = params;

  return (
    <section className="inverse full-bleed h-screen">
      <NavBar
        navBar={NAV_INFO_FREELANCE}
        navBarMobile={NAV_INFO_FREELANCE}
        routeIndex={1}
        logoLink="/freelancing"
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
        <div className="flex flex-row justify-between items-center gap-5 sm:items-center">
          <h1 className="capitalize font-medium text-3xl xs:text-4xl sm:text-5xl sm:font-extrabold">
            {slug}
          </h1>
          <Link
            href="www.room-ecommerce.pages.dev"
            target="_blank"
            title="live site"
            className="text-[1rem] text-white w-10 h-10 xs:w-[5.75rem] xs:h-[5.75rem] sm:w-24 sm:h-24 flex justify-center items-center gap-2 rounded-full bg-black"
          >
            <span className="hidden xs:inline">Live site</span>
            <ArrowVector color="white" width="12" height="12" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
