import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/components/nav/NavBar";
import { NAV_INFO_HOME } from "@/app/constants/navbar";

interface PageProps {
  backLink?: string;
  params: {
    slug: string;
  };
}

const ProjectDetails: FC<PageProps> = ({ backLink = "./#project", params }) => {
  const { slug } = params;
  return (
    <div className="inverse full-bleed">
      <NavBar
        navBar={NAV_INFO_HOME}
        navBarMobile={NAV_INFO_HOME}
        routeIndex={1}
        logoLink="/"
      />
      <h1 className="flex justify-center flex-col w-max mr-auto md:mx-right text-center text-4xl md:text-7xl font-[900] mt-8 ">
        <Link
          href={backLink}
          className="text-sm font-thin text-center self-start flex items-center gap-2 mt-2 mb-8 md:mt-6"
        >
          <Image
            src="/mockup/arrow-vector.svg"
            alt="go to more details"
            width="12"
            height="10"
            className=" sm:w-6 sm:h-3 -rotate-[135deg]"
          />
          Back to all projects
        </Link>
        {`My project ${slug}`}
      </h1>
    </div>
  );
};

export default ProjectDetails;
