import Image from "next/image";

import { SocialIcons } from "./SocialIcons";
import { HeaderCopyTypes } from "../constants/header";

import authorImage from "../../public/portfolio-hero.jpg";
import MarqueeSection from "./MarqueeSection";
import Link from "next/link";

const HeroSection = ({
  headerCopyright,
  selectedTag,
  selectedHeadline,
}: {
  headerCopyright: HeaderCopyTypes;
  selectedTag: number;
  selectedHeadline: number;
}) => {
  return (
    <section className="sm:max-w-2xl sm:mx-auto lg:max-w-full grid grid-cols-1 gap-x-24 lg:gap-x-36 sm:hero-grid sm:gap-x-16 mt-32 lg:mt-28 space-y-16 lg:space-y-0">
      <div className="sm:col-span-full lg:col-[3/-1] lg:row-[1/-1]">
        <h1 className="text-[4.25rem] leading-none font-bold text-[--color--heading] md:flex md:flex-col md:justify-start md:gap-4 lg:gap-8 xs:text-[17.8vw] md:text-[14vw] lg:text-[10vw] sm:leading-[0.875] ">
          <div className="relative md:flex md:items-start md:justify-start">
            <span className="inline absolute left-1 -top-[0.12rem] xs:left-2 sm:left-3 sm:-top-3 font-normal text-[3vw] xs:text-[2.8vw] sm:text-[2.6vw] lg:text-[1.6vw] tracking-widest">
              {headerCopyright.tags[selectedTag]}
            </span>
            {headerCopyright.headline[selectedHeadline]}
          </div>
          {/* <ReactIcons /> */}
          <div className="md:flex md:items-end justify-start ">Developer</div>
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

        <a
          href="https://drive.google.com/file/d/101Ou5yxRY29pDgBHsU3AGx_a-SkuGiRo/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="w-[12.5rem] mt-10 text-[--color--black] text-xl font-medium antialiased relative flex flex-col justify-center items-center after:content-[''] after:w-full hover:after:mx-auto hover:after:w-[12.5rem] after:transition-[width] after:h-[0.09rem] after:bg-[--color--heading] after:block after:absolute after:top-9 tracking-wide hover:tracking-wider transition-[letter-spacing] ease-out duration-100"
        >
          <div className="flex items-center">
            View My Resume
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
        </a>
      </div>
      <div className="flex flex-col xs:flex-row gap-6 sm:gap-4 lg:gap-10 sm:col-span-full lg:col-[1/3] lg:ml-0 lg:row-[1/-1]">
        <SocialIcons styleIcons="flex xs:flex-col order-1 xs:-order-1" />

        <Image
          src={authorImage}
          alt="picture of author"
          width="580"
          height="500"
          priority
          placeholder="blur"
          className="xs:ml-auto lg:mx-0 xs:w-[24.5rem] lg:w-[30rem] scale-100"
        />

        {/* <MarqueeSection /> */}
      </div>
    </section>
  );
};

export default HeroSection;
