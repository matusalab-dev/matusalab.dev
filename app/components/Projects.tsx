import Image from "next/image";
import Link from "next/link";
import { title } from "process";

const PROJECT_INFO = [
  {
    title: "room",
    imgSrc: "/projects-mockup/room-desktop-preview.jpg",
    description: " Furniture E-commerce store",
    type: "Custom Store-front Shopify as headless CMS",
  },
  {
    title: "loopstudios",
    imgSrc: "/projects-mockup/loopstudios-desktop-preview.jpg",
    description: "Eye catching Landing page",
    type: "Landing page",
  },
  {
    title: "sunnyside",
    imgSrc: "/projects-mockup/sunnyside-desktop-preview.jpg",
    description: "high converting landing page",
    type: "landing page",
  },
  {
    title: "little-lemon",
    imgSrc: "/projects-mockup/littlelemon-desktop-preview.jpg",
    description: "restaurant table reservation",
    type: "web app",
  },
];

const Projects = () => {
  return (
    <main id="project" className="w-full">
      <div className="  text-black py-20 px-[30px]">
        <h2 className="text-[3.7rem] font-medium leading-tight xs:text-[6.8rem] sm:text-[7.5rem]">
          Projects<span className="text-lg ml-2 font-medium">/5</span>
        </h2>

        {/* projects grid */}
        <section className="mt-16 flex flex-col gap-14 lg:grid lg:grid-cols-6 lg:grid-rows-[min] lg:gap-x-8 lg:gap-y-16">
          <div className=" lg:col-[1/5]">
            <Image
              src="/projects-mockup/room-desktop-preview.jpg"
              // src="/projects-mockup/b-mockup-pro-mobile.jpg"
              width={1200}
              height={1200}
              alt="mockup of room furniture store project"
              className="md:rounded-md md:transition-[border-radius] md:ease-in-out md:hover:rounded-3xl"
            />
            <Link href="/projects" className="self-start">
              <div className="flex flex-col gap-6 md:flex-row justify-between mt-6 text-[--color--grey] text-sm">
                <div className="flex flex-col">
                  <p className="text-[1rem]">01</p>
                  <h2 className="my-4 text-3xl font-medium [letter-spacing:2px] text-black">
                    Room
                  </h2>
                  <h3 className="text-xs uppercase font-light [letter-spacing:2.7px]">
                    Furniture E-commerce store
                    {/* Headless Commerce Setup */}
                  </h3>
                  <h4 className="text-sm tracking-wider text-[--color--grey] leading-snug mt-[0.2rem] text-pretty font-thin">
                    Develop headless commerce solutions using Shopify as the
                    backend with a custom frontend.
                  </h4>
                </div>
                <Image
                  src="/projects-mockup/arrow-vector.svg"
                  alt="go to more details"
                  width="20"
                  height="20"
                  className="w-4 h-4 self-start "
                />
              </div>
            </Link>
            <hr className="w-full mt-10 bg-black"></hr>
          </div>

          <div className="md:col-[1/-1] lg:col-[5/-1]">
            <Image
              src="/projects-mockup/loopstudios-desktop-preview.jpg"
              // src="/projects-mockup/b-mockup-pro-redish.jpg"
              width={1200}
              height={1200}
              alt="mockup of loopstudios furniture store project"
              className="md:rounded-md md:transition-[border-radius] md:ease-in-out md:hover:rounded-3xl"
            />

            <Link href="/projects" className="self-start">
              <div className="flex justify-between mt-6 text-[--color--grey] text-sm">
                <div className="flex flex-col">
                  <p className="text-[1rem]">02</p>
                  <h2 className="my-4 text-3xl font-medium [letter-spacing:2px] text-black">
                    Loopstudios
                  </h2>
                  <h3 className="text-xs uppercase font-light [letter-spacing:2.7px]">
                    Eye catching landing page
                    {/* Headless Commerce Setup */}
                  </h3>
                  <h4 className="text-sm tracking-wider text-[--color--grey] leading-snug mt-[0.2rem] text-pretty font-thin">
                    high converting landing page with SEO optimized
                  </h4>
                </div>
                <Image
                  src="/projects-mockup/arrow-vector.svg"
                  alt="go to more details"
                  width="20"
                  height="20"
                  className="w-4 h-4 self-start "
                />
              </div>
            </Link>
            <hr className="w-full mt-10 bg-black"></hr>
          </div>

          <div className="lg:col-[3/-1]">
            <Image
              //   src="/projects-mockup/little-lemon-desktop-preview.png"
              src="/projects-mockup/b-mockup-pro.jpg"
              width={1200}
              height={1200}
              alt="mockup of room furniture store project"
              className="md:rounded-md md:transition-[border-radius] md:ease-in-out md:hover:rounded-3xl"
            />
            <Link href="/projects" className="self-start">
              <div className="flex justify-between mt-6 text-[--color--grey] text-sm">
                <div className="flex flex-col">
                  <p className="text-[1rem]">03</p>
                  <h2 className="my-4 text-3xl font-medium [letter-spacing:2px] text-black">
                    Mac
                  </h2>
                  <h3 className="text-xs uppercase font-light [letter-spacing:2.7px]">
                    Furniture E-commerce store
                    {/* Headless Commerce Setup */}
                  </h3>
                  <h4 className="text-sm tracking-wider text-[--color--grey] leading-snug mt-[0.2rem] text-pretty font-thin">
                    Develop headless commerce solutions using Shopify as the
                    backend with a custom frontend.
                  </h4>
                </div>
                <Image
                  src="/projects-mockup/arrow-vector.svg"
                  alt="go to more details"
                  width="20"
                  height="20"
                  className="w-4 h-4 self-start "
                />
              </div>
            </Link>
            <hr className="w-full mt-10 bg-black"></hr>
          </div>

          <div className="lg:col-[1/5]">
            <Image
              src="/projects-mockup/sunnyside-desktop-preview.jpg"
              width={1200}
              height={1200}
              alt="mockup of room furniture store project"
              className="md:rounded-md md:transition-[border-radius] md:ease-in-out md:hover:rounded-3xl"
            />
            <Link href="/projects" className="self-start">
              <div className="flex justify-between mt-6 text-[--color--grey] text-sm">
                <div className="flex flex-col">
                  <p className="text-[1rem]">04</p>
                  <h2 className="my-4 text-3xl font-medium [letter-spacing:2px] text-black">
                    Sunnyside
                  </h2>
                  <h3 className="text-xs uppercase font-light [letter-spacing:2.7px]">
                    We are creatives
                    {/* Headless Commerce Setup */}
                  </h3>
                  <h4 className="text-sm tracking-wider text-[--color--grey] leading-snug mt-[0.2rem] text-pretty font-thin">
                    Develop headless commerce solutions using Shopify as the
                    backend with a custom frontend.
                  </h4>
                </div>
                <Image
                  src="/projects-mockup/arrow-vector.svg"
                  alt="go to more details"
                  width="20"
                  height="20"
                  className="w-4 h-4 self-start "
                />
              </div>
            </Link>
            <hr className="w-full mt-10 bg-black"></hr>
          </div>

          <div className="w-full lg:col-[5/-1]">
            <Image
              src="/projects-mockup/room-desktop-preview.jpg"
              width={1200}
              height={1200}
              alt="mockup of room furniture store project"
              className="md:rounded-md md:transition-[border-radius] md:ease-in-out md:hover:rounded-3xl"
            />
            <Link href="/projects" className="self-start">
              <div className="flex justify-between mt-6 text-[--color--grey] text-sm">
                <div className="flex flex-col">
                  <p className="text-[1rem]">05</p>
                  <h2 className="my-4 text-3xl font-medium [letter-spacing:2px] text-black">
                    Sunnyside
                  </h2>
                  <h3 className="text-xs uppercase font-light [letter-spacing:2.7px]">
                    We are creatives
                    {/* Headless Commerce Setup */}
                  </h3>
                  <h4 className="text-sm tracking-wider text-[--color--grey] leading-snug mt-[0.2rem] text-pretty font-thin">
                    Develop headless commerce solutions using Shopify as the
                    backend with a custom frontend.
                  </h4>
                </div>
                <Image
                  src="/projects-mockup/arrow-vector.svg"
                  alt="go to more details"
                  width="20"
                  height="20"
                  className="w-4 h-4 self-start "
                />
              </div>
            </Link>
            <hr className="w-full mt-10 bg-black"></hr>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Projects;
