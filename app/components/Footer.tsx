import Link from "next/link";
import Logo from "./Logo";
import { SocialIcons } from "./SocialIcons";

const Footer = ({
  availability = "to work",
  logoLink,
}: {
  availability?: string;
  logoLink: string;
}) => {
  return (
    <footer id="footer" className="pt-40 pb-4">
      <div className="flex flex-col items-center gap-10">
        <h4 className="text-5xl xs:text-7xl font-normal text-center max-w-[10ch] mx-auto">
          Interested In Working With Me?
        </h4>

        <Link
          href="mailto:www.mtslabrh97@gmail.com"
          className=" text-[--color--black] text-2xl font-medium antialiased relative flex flex-col justify-center items-center after:content-[''] after:w-[10.5rem] hover:after:mx-auto hover:after:w-[11rem] after:transition-[width] after:h-[0.09rem] after:bg-[--color--heading] after:block after:absolute after:top-9 tracking-wide hover:tracking-wider transition-[letter-spacing] ease-out duration-100"
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
      </div>

      {/* copy right */}
      <hr className=" divide-black divide-solid divide-x-8 w-full mt-32 bg-black"></hr>
      <div className="mt-6 mb-6 flex flex-col items-start gap-12 sm:flex-row xs:justify-between">
        <div className="mb-6 sm:mb-0 h-12 sm:h-24 gap-3 sm:space-y-0  flex flex-col items-start sm:items-start justify-between text-lg">
          <h3 className="">Available {availability}</h3>
          <div className="flex flex-col gap-0">
            <Link href="tel:+251914220188" className="p-0">
              Tel: <span className="text-[1rem]">+251914220188</span>
            </Link>
            <Link href="mailto:www.mtslabrh97@gmail.com" className="p-0">
              Email: <span className="text-[1rem]">mtslabrh97@gmail.com</span>
            </Link>
          </div>
        </div>
        <Logo logoLink={logoLink} />
        <div className="h-16 sm:h-24 flex flex-col items-end justify-between">
          <SocialIcons styleIcons="xs:flex-row flex xs:justify-between" />
          <p className="self-start sm:self-end">
            Portfolio &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
