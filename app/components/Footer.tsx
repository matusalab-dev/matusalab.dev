import Link from "next/link";
import Logo from "./Logo";
import { SocialIcons } from "./SocialIcons";

const Footer = () => {
  return (
    <footer id="footer" className="pt-32">
      <div className="flex flex-col items-center gap-10">
        <h4 className="text-5xl xs:text-7xl font-normal text-center max-w-[10ch] mx-auto">
          Interested In Working With Me?
        </h4>
        <Link
          href="mailto:www.mtslabrh97@gmail.com"
          className="flex items-center gap-3 px-6 py-3 rounded bg-black text-2xl text-white text-center"
        >
          <span className="w-[0.35rem] h-[0.35rem] rounded-full inline-block bg-white text-white"></span>
          Get In Touch
        </Link>
      </div>

      {/* copy right */}
      <hr className=" divide-black divide-solid divide-x-8 w-full mt-32 bg-black"></hr>
      <div className="mt-6 mb-6 flex flex-col items-center gap-12 sm:flex-row xs:justify-between">
        <h3 className="text-lg">Available for freelance</h3>
        <Logo />
        <div className="h-16 flex flex-col items-end sm:items-end justify-between">
          <SocialIcons styleIcons="xs:flex-row flex xs:justify-between" />
          <p
            className="self-center sm:self-end
          "
          >
            Portfolio &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
