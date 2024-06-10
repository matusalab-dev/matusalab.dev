import Image from "next/image";
import Link from "next/link";

const PROJECT_INFO = [
  {
    title: "room",
    imgSrc: "/projects-mockup/room-desktop-preview.jpg",
    description: " Furniture E-commerce store",
    type: "Custom Store-front Shopify as headless CMS",
    className: "lg:col-[1/5]",
  },
  {
    title: "little-lemon",
    imgSrc: "/projects-mockup/b-mockup-pro-mobile.jpg",
    description: "restaurant table reservation",
    type: "web app",
    className: "md:col-[1/-1] lg:col-[5/-1]",
  },
  {
    title: "loopstudios",
    imgSrc: "/projects-mockup/loopstudios-desktop-preview.jpg",
    description: "Eye catching Landing page",
    type: "Landing page",
    className: "lg:col-[3/-1]",
  },
  {
    title: "sunnyside",
    imgSrc: "/projects-mockup/sunnyside-desktop-preview.jpg",
    description: "high converting landing page",
    type: "landing page",
    className: "lg:col-[1/5]",
  },

  // {
  //   title: "room",
  //   imgSrc: "/projects-mockup/room-desktop-preview.jpg",
  //   description: "Headless Commerce Setup",
  //   type: "Custom Store-front Shopify as headless CMS",
  //   className: "w-full lg:col-[5/-1]",
  // },
];

const Projects = () => {
  return (
    <main id="project" className="w-full">
      <div className="  text-black py-20">
        <h2 className="text-[3.7rem] font-medium leading-tight xs:text-[6.8rem] sm:text-[7.5rem]">
          Projects
          <span className="text-lg ml-2 font-medium">
            /{PROJECT_INFO.length}
          </span>
        </h2>

        {/* projects grid */}
        <section className="mt-16 flex flex-col gap-16 lg:grid lg:grid-cols-6 lg:grid-rows-[min] lg:gap-x-6 lg:gap-y-24">
          {PROJECT_INFO.map((projectInfo, index) => (
            <div key={projectInfo.title} className={projectInfo.className}>
              <Image
                src={projectInfo.imgSrc}
                width={1200}
                height={1200}
                alt={projectInfo.title}
                className=" rounded-[0.1rem] md:transition-[border-radius] md:ease-in-out md:hover:rounded-3xl"
              />
              <Link href="/projects" className="self-start">
                <div className="flex flex-col gap-6 md:flex-row justify-between mt-6 text-[--color--grey] text-sm">
                  <div className="flex flex-col">
                    <p className="text-[1rem]">0{++index}</p>
                    <h2 className="my-4 text-3xl font-medium capitalize [letter-spacing:2px] text-black">
                      {projectInfo.title}
                    </h2>
                    <h3 className="text-xs uppercase font-light [letter-spacing:2.7px]">
                      {projectInfo.type}
                      {/* Headless Commerce Setup */}
                    </h3>
                    <h4 className="text-sm tracking-wider text-[--color--grey] leading-snug mt-[0.2rem] text-pretty font-thin">
                      {projectInfo.description}
                    </h4>
                  </div>
                  <Image
                    src="/projects-mockup/arrow-vector.svg"
                    alt="go to more details"
                    width="20"
                    height="20"
                    className="w-3 h-3 sm:w-4 sm:h-4  self-start "
                  />
                </div>
              </Link>
              <hr className="w-full mt-10 bg-black"></hr>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Projects;
