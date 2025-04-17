"use client";
import Link from "next/link";
import Logo from "../Logo";
import MobileNavBar from "./MobileNavBar";
import { NavBarType } from "@/app/constants/navbar";
import useToggle from "@/app/hooks/useToggle";

const NavBar = ({
  navBar,
  navBarMobile,
  routeIndex,
  logoLink,
}: {
  navBar: NavBarType[];
  navBarMobile: NavBarType[];
  routeIndex: number;
  logoLink: string;
}) => {
  const { isToggled, handleIsToggled } = useToggle();

  return (
    <nav role="navigation" className="flex justify-between items-center pt-6">
      {/* logo */}
      <Logo logoLink={logoLink} />

      {/* nav-bar */}
      <ul
        data-main-navigation
        className="md:w-[25rem] hidden md:flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-12 md:items-center md:justify-center text-sm font-medium tracking-wide"
      >
        {navBar.map((navInfo, index: number) => {
          return (
            <li key={++index} className={navInfo.widthStyle}>
              <Link
                href={navInfo.scrollInto[routeIndex]}
                className="capitalize text-lg font-medium hover:tracking-wider transition-[letter-spacing] ease-out duration-100"
              >
                {navInfo.navTitle}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href="mailto:www.mtslabrh97@gmail.com"
        className="w-[9.75rem] relative hidden md:flex flex-col justify-center items-center after:content-[''] after:w-36 hover:after:mx-auto hover:after:w-[9.75rem] after:transition-[width] after:h-[0.07rem] after:bg-[--color--heading] after:block after:absolute after:top-8 text-xl tracking-wide hover:tracking-wider transition-[letter-spacing] ease-out duration-100"
      >
        <div className="flex">
          Get in touch
          <svg
            className="ml-4 mt-2"
            width="15"
            height="15"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.6047 0.524023L17.3326 0.524024C17.464 0.523951 17.5942 0.549781 17.7156 0.600038C17.837 0.650295 17.9474 0.723993 18.0403 0.816918C18.1332 0.909843 18.2069 1.02017 18.2572 1.1416C18.3074 1.26302 18.3332 1.39317 18.3332 1.52458L18.3332 14.2525C18.3332 14.5179 18.2278 14.7724 18.0401 14.96C17.8525 15.1476 17.598 15.2531 17.3326 15.2531C17.0673 15.2531 16.8128 15.1476 16.6251 14.96C16.4375 14.7724 16.3321 14.5179 16.3321 14.2525L16.3329 3.93847L2.48338 17.788C2.29584 17.9756 2.04149 18.0809 1.77627 18.0809C1.51105 18.0809 1.2567 17.9756 1.06916 17.788C0.881628 17.6005 0.77627 17.3461 0.776271 17.0809C0.776271 16.8157 0.881628 16.5614 1.06916 16.3738L14.9187 2.52425L4.6047 2.52514C4.33933 2.52514 4.08484 2.41972 3.8972 2.23208C3.70956 2.04444 3.60414 1.78994 3.60414 1.52458C3.60414 1.25922 3.70956 1.00472 3.8972 0.817079C4.08484 0.629439 4.33933 0.524023 4.6047 0.524023Z"
              fill="black"
            />
          </svg>
        </div>
      </Link>

      {/* custom hamburger menu */}
      <button
        onClick={handleIsToggled}
        className={`${
          !isToggled ? "flex" : "hidden"
        } group  md:hidden items-center gap-2 sm:gap-3 cursor-pointer`}
      >
        <div className="w-10 h-10 scale-95 group-hover:scale-100 transition-all  rounded-full  flex flex-col items-center bg-black justify-center gap-1">
          <div className="w-4 group-hover:w-5 h-[1.75px] transition-all delay-75 bg-white"></div>
          <div className=" w-2 group-hover:w-3 h-[1.75px] transition-all delay-75 bg-white"></div>
        </div>
        <p className="uppercase font-semibold font-[satoshi]">menu</p>
      </button>

      {/* Mobile navBar */}
      {isToggled && (
        <MobileNavBar
          navBar={navBarMobile}
          toggle={isToggled}
          onToggle={handleIsToggled}
          routeIndex={routeIndex}
          logoLink={logoLink}
        />
      )}
    </nav>
  );
};

export default NavBar;
