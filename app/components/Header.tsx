import Image from "next/image";
import NavBar from "./nav/NavBar";
import { SocialIcons } from "./SocialIcons";
import { NavBarType } from "../constants/navbar";
import { HeaderCopyTypes } from "../constants/header";
import authorImage from "../../public/portfolio-hero.jpg";
const Header = ({
  headerNavBar,
  headerNavBarMobile,
  headerCopyright,
  navBarRoute,
  selectedTag,
  selectedHeadline,
  logoLink,
}: {
  headerNavBar: NavBarType[];
  headerNavBarMobile: NavBarType[];
  headerCopyright: HeaderCopyTypes;
  navBarRoute: number;
  selectedTag: number;
  selectedHeadline: number;
  logoLink: string;
}) => {
  return (
    <header id="header" className="pb-24 inverse full-bleed">
      {/* nav-section */}
      <NavBar
        navBar={headerNavBar}
        navBarMobile={headerNavBarMobile}
        routeIndex={navBarRoute}
        logoLink={logoLink}
      />
      {/* hero-section */}
      <section className="sm:max-w-2xl sm:mx-auto lg:max-w-full grid grid-cols-1 gap-x-24 lg:gap-x-36 sm:hero-grid sm:gap-x-16 mt-32 lg:mt-44 space-y-16 lg:space-y-0">
        <div className="sm:col-span-full lg:col-[3/-1] lg:row-[1/-1]">
          <h1 className="text-[3.5rem] leading-none font-bold text-[--color--heading] md:flex md:flex-col md:justify-start md:gap-4 lg:gap-8 xs:text-[17.8vw] md:text-[14vw] lg:text-[10vw] sm:leading-[0.875] ">
            <div className="relative md:flex md:items-start md:justify-start">
              <span className="inline absolute left-1 -top-[0.12rem] xs:left-2 sm:left-3 sm:-top-3 font-normal text-[2.6vw] xs:text-[2.8vw] sm:text-[2.6vw] lg:text-[1.6vw] sm:font-normal tracking-widest">
                {headerCopyright.tags[selectedTag]}
              </span>
              {headerCopyright.headline[selectedHeadline]}
            </div>
            {/* <ReactIcons /> */}
            <div className=" md:flex md:items-end justify-start">Developer</div>
          </h1>
          <div className="flex flex-col gap-0 xs:gap-8 xs:flex-row items-start xs:items-center justify-between mt-12 space-y-16 xs:space-y-0">
            <p className="text-lg font-medium text-[--color--grey]  max-w-[37ch]">
              {headerCopyright.description}
            </p>
            <Image
              src="/rotary-star.svg"
              alt="decoration"
              width={30}
              height={30}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col xs:flex-row gap-6 sm:gap-4 lg:gap-10 sm:col-span-full lg:col-[1/3] lg:ml-0 lg:row-[1/-1]">
          <SocialIcons styleIcons="flex xs:flex-col order-1 xs:-order-1" />

          <Image
            src={authorImage}
            alt="picture of author"
            width="480"
            height="500"
            priority
            placeholder="blur"
            className="xs:ml-auto lg:mx-0 xs:w-[24.5rem] lg:w-[30rem] scale-100"
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
