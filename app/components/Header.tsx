import Image from "next/image";
import NavBar from "./nav/NavBar";
import { SocialIcons } from "./SocialIcons";
import { NavBarType } from "../constants/navbar";

const Header = ({
  headerNavBar,
  headerNavBarMobile,
}: {
  headerNavBar: NavBarType[];
  headerNavBarMobile: NavBarType[];
}) => {
  return (
    <header id="header" className="pb-24 bg-[--color--bg] inverse full-bleed">
      {/* nav-section */}
      <NavBar navBar={headerNavBar} navBarMobile={headerNavBarMobile} />
      {/* hero-section */}
      <section className="sm:max-w-2xl sm:mx-auto lg:max-w-full grid grid-cols-1 gap-x-24 lg:gap-x-36 sm:hero-grid sm:gap-x-16 mt-32 lg:mt-44 space-y-20 lg:space-y-0">
        <div className="sm:col-span-full lg:col-[3/-1] lg:row-[1/-1]">
          <h1 className="text-[3.5rem] leading-none font-bold text-[--color--heading] md:flex md:flex-col md:justify-start md:gap-4 lg:gap-8 xs:text-[17.8vw] md:text-[14vw] lg:text-[10vw] sm:leading-[0.875] ">
            <div className="relative md:flex md:items-start md:justify-start">
              <span className="hidden xs:inline absolute left-1 -top-[0.12rem] xs:left-2 sm:left-3 sm:-top-3 font-normal text-[2.8vw] sm:text-[2.6vw] lg:text-[1.6vw] sm:font-normal tracking-widest">
                React
              </span>
              {/* Front-end */}
              Shopify
            </div>
            {/* <ReactIcons /> */}
            <div className=" md:flex md:items-end justify-start">Developer</div>
          </h1>
          <div className="flex flex-col xs:flex-row justify-between gap-6 mt-12">
            <p className="text-lg font-medium text-[--color--grey]  max-w-[37ch]">
              for small to medium sized business owners who prioritize customer
              needs and who struggle to build their digital presence.
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
        <div className="flex flex-col xs:flex-row gap-10 sm:gap-2 lg:gap-10 sm:col-span-full lg:col-[1/3] lg:ml-0 lg:row-[1/-1]">
          <SocialIcons styleIcons="flex xs:flex-col order-1 xs:-order-1" />

          <Image
            src="/portfolio-hero.jpg"
            alt="profile image of Matusalab"
            width="440"
            height="510"
            // fill
            priority
            // loading="lazy"
            className="xs:ml-auto lg:mx-0"
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
