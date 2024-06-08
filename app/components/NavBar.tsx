import Image from "next/image";

const NavBar = ({
  home = "/",
  project = "#project",
  about = "#about",
  contact = "/contact",
}) => {
  return (
    <nav role="mobile-navigation" className=" flex justify-between pt-6">
      {/* logo */}
      <a
        href="/"
        className="flex h-max capitalize leading-7 sm:leading-7 text-3xl font-medium border-b border-gray-700 pb-2"
      >
        Matu
        <br />
        Salab
        {/* <Image
          src="/logo-new.png"
          alt="logo of Matusalab personal website"
          width="100"
          height="100"
          className="w-[4.3rem] h-14 md:w-20 md:h-16 "
        /> */}
      </a>

      {/* nav-bar */}
      <ul
        data-main-navigation
        className="w-16 flex flex-col gap-2 md:w-[20rem] md:flex md:flex-row md:gap-4 md:items-center md:justify-center text-sm font-medium [letter-spacing:1px]"
      >
        <li className="md:w-16">
          <a
            href={home}
            className=" hover:tracking-[1.7px] transition-[letter-spacing] ease-out duration-100"
          >
            HOME
          </a>
        </li>
        <li className="md:w-20">
          <a href={project} className="hover:[letter-spacing:1.7px]">
            PROJECT
          </a>
        </li>
        <li className="md:w-16">
          <a href={about} className=" hover:[letter-spacing:1.7px]">
            ABOUT
          </a>
        </li>
        <li className="md:w-20">
          <a href={contact} className=" hover:[letter-spacing:1.7px]">
            CONTACT
          </a>
        </li>
      </ul>
      <div className="hidden items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-black flex flex-col items-center justify-center gap-2">
          <span className="inline-block w-6 h-[0.15rem] bg-white"></span>
          <span className="inline-block w-6 h-[0.15rem] bg-white"></span>
        </div>
        <p className="uppercase font-semibold font-sans">Menu</p>
      </div>
    </nav>
  );
};

export default NavBar;
