import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/components/nav/NavBar";
import { NAV_INFO_FREELANCE } from "@/app/constants/navbar";
import { ArrowVector } from "@/public/icons/ArrowVector";
import Footer from "@/app/components/Footer";
import { FC } from "react";

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
              src="/projects-mockup/arrow-vector.svg"
              alt="go to more details"
              width="12"
              height="10"
              className="sm:w-6 sm:h-3 -rotate-[135deg]"
            />
            Back to all projects
          </Link>
          <div className="flex flex-row justify-between items-center gap-5 sm:items-center">
            <h1 className="capitalize font-medium text-4xl xs:text-5xl sm:font-extrabold">
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
          <div className="flex flex-col space-y-4">
            <h2 className="capitalize text-3xl sm:text-4xl">Overview</h2>
            <p className=" max-w-[45ch] text-lg ">
              The primary goal of this project is to develop a compelling and
              visually appealing digital presence, modern, user-friendly and
              responsive website that effectively showcase.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h3>Tech-stacks</h3>
            <div className="flex gap-2">
              <p className="bg-black text-white self-start text-xl px-2 py-0">
                React
              </p>
              <p className="bg-black text-white self-start text-xl px-2 py-0">
                Formik
              </p>
              <p className="bg-black text-white self-start text-xl px-2 py-0">
                React-router
              </p>
              <p className="bg-black text-white self-start text-xl px-2 py-0">
                React
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer availability="to freelance" />
    </>
  );
};

export default Projects;
