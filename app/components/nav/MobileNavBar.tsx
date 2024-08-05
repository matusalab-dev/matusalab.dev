import Link from "next/link";
import Logo from "../Logo";
import { NavBarType } from "@/app/constants/navbar";

const MobileNavBar = ({
  navBar,
  toggle,
  onToggle,
  routeIndex,
  logoLink,
}: {
  toggle: boolean;
  onToggle?: () => void;
  navBar: NavBarType[];
  routeIndex: number;
  logoLink: string;
}) => {
  return (
    <nav
      role="navigation"
      data-main-navigation
      className={`${
        !toggle ? "hidden" : "flex"
      } z-[100] w-full h-screen sm:w-[85%] absolute top-0 right-0 md:hidden flex-col items-start justify-between bg-black text-white px-8 py-10`}
    >
      {/* logo */}
      <div className="w-full flex justify-between">
        <Logo
          logoLink={logoLink}
          onToggle={onToggle}
          styleSuffix="bg-white text-black"
        />
        {/* nav-list */}
        <button
          onClick={onToggle}
          className="flex gap-2 items-center justify-end uppercase text-xl font-semibold"
        >
          <span className="block w-10 sm:w-16 h-[0.12rem] bg-white"></span>
          close
        </button>
      </div>

      <ul className="w-full flex flex-col items-start justify-center gap-6 sm:gap-8 capitalize text-3xl sm:text-4xl text-white font-medium  tracking-wide">
        {navBar.map((navInfo, index: number) => {
          return (
            <li key={++index} className={navInfo.widthStyle} onClick={onToggle}>
              <Link
                href={navInfo.scrollInto[routeIndex]}
                className="hover:tracking-wider transition-[letter-spacing] ease-out duration-100"
              >
                {navInfo.navTitle}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href="mailto:www.mtslabrh97@gmail.com"
        className="w-52 hover:w-[13.85rem] mr-auto sm:w-60 sm:hover:w-64 text-3xl sm:text-4xl relative self-start flex flex-col justify-center items-center after:content-[''] after:w-52 hover:after:w-[13.85rem]  sm:after:w-60 hover:after:mx-auto sm:hover:after:w-64 after:transition-[width] after:h-[0.07rem] after:bg-white after:block after:absolute after:top-12 tracking-wide hover:tracking-wider transition-all ease-out duration-100"
      >
        <div className="flex">
          Get in touch
          <svg
            className="ml-4 mt-3"
            width="15"
            height="15"
            viewBox="0 0 19 19"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.6047 0.524023L17.3326 0.524024C17.464 0.523951 17.5942 0.549781 17.7156 0.600038C17.837 0.650295 17.9474 0.723993 18.0403 0.816918C18.1332 0.909843 18.2069 1.02017 18.2572 1.1416C18.3074 1.26302 18.3332 1.39317 18.3332 1.52458L18.3332 14.2525C18.3332 14.5179 18.2278 14.7724 18.0401 14.96C17.8525 15.1476 17.598 15.2531 17.3326 15.2531C17.0673 15.2531 16.8128 15.1476 16.6251 14.96C16.4375 14.7724 16.3321 14.5179 16.3321 14.2525L16.3329 3.93847L2.48338 17.788C2.29584 17.9756 2.04149 18.0809 1.77627 18.0809C1.51105 18.0809 1.2567 17.9756 1.06916 17.788C0.881628 17.6005 0.77627 17.3461 0.776271 17.0809C0.776271 16.8157 0.881628 16.5614 1.06916 16.3738L14.9187 2.52425L4.6047 2.52514C4.33933 2.52514 4.08484 2.41972 3.8972 2.23208C3.70956 2.04444 3.60414 1.78994 3.60414 1.52458C3.60414 1.25922 3.70956 1.00472 3.8972 0.817079C4.08484 0.629439 4.33933 0.524023 4.6047 0.524023Z"
              fill="white"
            />
          </svg>
        </div>
      </Link>

      {/* <Link href="tel: +251914220188" className="block text-white text-xl">
          Tel: +251914220188
        </Link>
        <Link
          href="mailto:www.mtslabrh97@gmail.com"
          className="block text-white text-xl"
        >
          Email: mtslabrh97@gmail.com
        </Link> */}
    </nav>
  );
};

export default MobileNavBar;
