import Image from "next/image";
import Link from "next/link";
import { PROJECT_INFO, ProjectInfoType } from "../../constants/projects";

export const ProjectCard = ({
  projectInfo,
  slug = "/",
  index,
}: {
  projectInfo: ProjectInfoType;
  slug?: string;
  index: number;
}) => {
  const { title, className, imgSrc, type, description } = projectInfo;

  return (
    <div key={index} className={`${className} group flex flex-col`}>
      <Link href={`${slug}/projects/${title}`} className="self-start">
        <Image
          src={imgSrc}
          width={1200}
          height={1200}
          alt={title}
          className="rounded-[0.1rem] md:transition-[border-radius] md:ease-in-out md:hover:rounded-3xl"
          placeholder="blur"
        />
        <div className="flex flex-col gap-6 md:flex-row justify-between mt-6 text-[--color--heading] text-sm">
          <div className="flex flex-col">
            <p className="text-sm sm:text-[1rem] text-[--color--heading]">
              0{++index}
            </p>
            <h2 className="my-2 text-2xl sm:my-4 capitalize  sm:text-3xl font-medium capitalize [letter-spacing:2px] text-black">
              {title.replace("-", " ")}
            </h2>
            <h3 className="text-xs sm:text-sm uppercase font-light [letter-spacing:2.7px]">
              {type}
              {/* Headless Commerce Setup */}
            </h3>
            <h4 className="text-xs sm:text-sm tracking-wider capitalize leading-snug mt-[0.2rem] text-pretty font-thin">
              {description}
            </h4>
          </div>
          <Image
            src="/mockup/arrow-vector.svg"
            alt="go to more details"
            width="20"
            height="20"
            className="w-3 h-6 sm:w-4 sm:h-7 self-start"
          />
        </div>
      </Link>
      <div className="relative">
        <hr className="absolute h-[0.125rem] inset-0 w-full mt-10 bg-black/50"></hr>
        <hr className="absolute h-[0.125rem] inset-0 mt-10 bg-red w-0 group-hover:w-full group-hover:bg-black/100 transition-all duration-500"></hr>
      </div>
    </div>
  );
};

const Projects = ({ slug = "/" }: { slug?: string }) => {
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
        <section className="mt-16 grid grid-cols-1 grid-rows-[min-content] gap-y-32 lg:grid-cols-6 lg:grid-rows-[min] lg:gap-x-6 lg:gap-y-24">
          {PROJECT_INFO.map((projectInfo, index) => (
            <ProjectCard
              projectInfo={projectInfo}
              index={index}
              slug={slug}
              key={index}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Projects;
