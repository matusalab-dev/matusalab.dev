import Image from "next/image";
import Link from "next/link";
import { PROJECT_INFO } from "../../constants/projects";

const Projects = ({ slug = "/" }: { slug: string }) => {
  return (
    <main id="project" className="w-full">
      <div className="text-black py-20">
        <h2 className="text-[3.7rem] font-medium leading-tight xs:text-[6.8rem] sm:text-[7.5rem]">
          Projects
          <span className="text-lg ml-2 font-medium">
            /{PROJECT_INFO.length}
          </span>
        </h2>

        {/* projects grid */}
        <section className="mt-16 flex flex-col gap-16 lg:grid lg:grid-cols-6 lg:grid-rows-[min] lg:gap-x-6 lg:gap-y-24">
          {PROJECT_INFO.map((projectInfo, index) => (
            <div
              key={projectInfo.title}
              className={`${projectInfo.className} `}
            >
              <Image
                src={projectInfo.imgSrc}
                width={1200}
                height={1200}
                alt={projectInfo.title}
                className=" rounded-[0.1rem] md:transition-[border-radius] md:ease-in-out md:hover:rounded-3xl"
              />
              <Link
                href={`${slug}/projects/${projectInfo.title}`}
                className="self-start"
              >
                <div className="flex flex-col gap-6 md:flex-row justify-between mt-6 text-[--color--grey] text-sm">
                  <div className="flex flex-col">
                    <p className="text-sm sm:text-[1rem]">0{++index}</p>
                    <h2 className="my-2 sm:my-4 text-2xl sm:text-3xl font-medium capitalize [letter-spacing:2px] text-black">
                      {projectInfo.title}
                    </h2>
                    <h3 className="text-xs sm:text-sm uppercase font-light [letter-spacing:2.7px] text-[--color--heading] antialiased">
                      {projectInfo.type}
                      {/* Headless Commerce Setup */}
                    </h3>
                    <h4 className="text-xs sm:text-sm tracking-wider  text-[--color--grey] antialiased capitalize leading-snug mt-[0.2rem] text-pretty font-thin">
                      {projectInfo.description}
                    </h4>
                  </div>
                  <Image
                    src="/mockup/arrow-vector.svg"
                    alt="go to more details"
                    width="20"
                    height="20"
                    className="w-3 h-6 sm:w-4 sm:h-7  self-start "
                  />
                </div>
              </Link>
              <hr className="divide-opacity-100 divide-dotted mt-10 bg-black"></hr>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Projects;
