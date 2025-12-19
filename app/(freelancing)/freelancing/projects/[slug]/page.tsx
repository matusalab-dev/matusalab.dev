"use client";

import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/components/nav/NavBar";
import { NAV_INFO_FREELANCE } from "@/app/constants/navbar";
import { ArrowVector } from "@/public/icons/ArrowVector";
import Footer from "@/app/components/Footer";
import { FC } from "react";
import { PROJECT_INFO } from "@/app/constants/projects";
import { usePathname } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    backLink?: string;
  };
}

const Projects: FC<PageProps> = ({ params, searchParams }) => {
  const { slug } = params;
  const backLink = searchParams?.backLink || "../#project";
  const currentPath = usePathname();
  console.log("Current Path:", currentPath);

  return (
    <>
      <section className="inverse full-bleed pb-12">
        <NavBar
          navBar={NAV_INFO_FREELANCE}
          navBarMobile={NAV_INFO_FREELANCE}
          routeIndex={1}
          logoLink="/freelancing"
        />

        <div className="flex justify-center flex-col text-4xl md:text-7xl font-thin mt-12 space-y-10">
          <Link
            href={backLink}
            className="text-sm  text-center self-start flex items-center gap-2 space-y-6 md:space-y-8"
          >
            <Image
              src="/mockup/arrow-vector.svg"
              alt="go to more details"
              width="12"
              height="10"
              className="sm:w-6 sm:h-3 -rotate-[135deg]"
            />
            Back to all projects
          </Link>

          {PROJECT_INFO.map((project, index) => {
            if (project.title === slug) {
              return (
                <div key={index}>
                  <div className="space-y-12">
                    <div className="flex flex-row justify-between items-center gap-5 sm:items-center">
                      <h1 className="capitalize font-medium text-4xl xs:text-5xl sm:font-extrabold">
                        {slug}
                      </h1>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        title="live site"
                        className="text-[1rem] text-white w-10 h-10 xs:w-[5.75rem] xs:h-[5.75rem] sm:w-24 sm:h-24 flex justify-center items-center gap-2 rounded-full bg-black"
                      >
                        <span className="hidden xs:inline">Live site</span>
                        <ArrowVector color="white" width="12" height="12" />
                      </a>
                    </div>
                    <div className="flex flex-col space-y-3">
                      <h2 className="capitalize text-2xl sm:text-4xl">
                        Overview
                      </h2>
                      <p className=" max-w-[45ch] text-lg ">
                        {project.overview}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-3">
                      <h3 className="capitalize text-2xl sm:text-4xl">
                        Tech-stacks
                      </h3>
                      <ul className="flex gap-2 flex-wrap text-white text-[1rem] max-w-3xl">
                        {project.techStacks.map(
                          (techStack: string, index: number) => (
                            <li
                              key={++index}
                              className="bg-black px-2 h-6 flex items-center capitalize"
                            >
                              {techStack}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                  <Image
                    src={project.imgSrc}
                    alt="loopstudio landing page project mockup"
                    width={1000}
                    height={600}
                    placeholder="blur"
                    style={{ marginTop: "10rem" }}
                  />
                </div>
              );
            }
          })}
        </div>
      </section>

      <Footer availability="to freelance" logoLink="/freelancing" />
    </>
  );
};

// export async function generateStaticParams() {
//   return PROJECT_INFO.map((project) => ({
//     slug: project.slug,
//   }));
// }

export default Projects;
