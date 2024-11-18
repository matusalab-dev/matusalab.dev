import Image from "next/image";

import roomMockup from "@/public/mockup/room-desktop-preview.jpg";
import littleLemonMockup from "@/public/mockup/mockup for little-lemon project.png";
import loopstudiosMockup from "@/public/mockup/loopstudios-desktop-preview.jpg";
import sunnysideMockup from "@/public/mockup/sunnyside-desktop-preview.jpg";
import mockupMobile from "@/public/mockup/b-mockup-pro-mobile.jpg";

const MarqueeSection = () => {
  return (
    <div className="marquee-wrap relative flex flex-row justify-normal items-start gap-2 w-full max-w-[550px] h-[740px] overflow-auto">
      <div className="marquee-overlay absolute z-[9] h-[220px] -top-[1px] bottom-auto left-0 right-0 bg-[linear-gradient(180deg, var(--color--dark), rgba(20, 20, 20, .6) 43%, rgba(20, 20, 20, 0))]"></div>
      <div
        style={{
          transform:
            "translate3d(0px, -12.1975%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="marquee-column column-one w-1/2 items-start justify-center gap-[20px] flex"
      >
        <div className="marquee flex flex-col gap-[20px]">
          <div className="marquee-item flex flex-col justify-center items-center gap-[20px] overflow-y-auto">
            <div className="marquee-image-wrap  rounded-[12px] w-full h-[410px] overflow-hidden">
              <Image
                src={mockupMobile}
                width="300"
                height="500"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 44vw, (max-width: 991px) 257.578125px, 264px"
                alt=""
                className="marquee-image  object-cover w-full h-full"
              />
            </div>
            <div className="marquee-image-wrap rounded-[12px] w-full h-[410px] overflow-hidden">
              <Image
                src={littleLemonMockup}
                width="300"
                height="500"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 44vw, (max-width: 991px) 257.578125px, 264px"
                alt=""
                className="marquee-image object-cover w-full h-full"
              />
            </div>
            <div className="marquee-image-wrap rounded-[12px] w-full h-[410px] overflow-hidden">
              <Image
                src={roomMockup}
                width="300"
                height="500"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 44vw, (max-width: 991px) 257.578125px, 264px"
                alt=""
                className="marquee-image object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="marquee-item flex flex-col justify-center items-center gap-[20px]">
            <div className="marquee-image-wrap rounded-[12px] w-full h-[410px] overflow-hidden">
              <Image
                src={loopstudiosMockup}
                width="300"
                height="500"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 44vw, (max-width: 991px) 257.578125px, 264px"
                alt=""
                className="marquee-image object-cover w-full h-full"
              />
            </div>
            <div className="marquee-image-wrap rounded-[12px] w-full h-[410px] overflow-hidden">
              <Image
                src={mockupMobile}
                width="300"
                height="500"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 44vw, (max-width: 991px) 257.578125px, 264px"
                alt=""
                className="marquee-image object-cover w-full h-full"
              />
            </div>
            <div className="marquee-image-wrap rounded-[12px] w-full h-[410px] overflow-hidden">
              <Image
                src={littleLemonMockup}
                width="300"
                height="500"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 44vw, (max-width: 991px) 257.578125px, 264px"
                alt=""
                className="marquee-image object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          transform:
            "translate3d(0px, -37.8025%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="marquee-column column-two w-1/2 items-start justify-center gap-[20px] flex"
      >
        <div className="marquee reverse flex flex-col gap-[20px] ">
          <div className="marquee-item flex flex-col justify-center items-center gap-[20px] overflow-y-auto">
            <div className="marquee-image-wrap rounded-[12px] w-full h-[410px] overflow-hidden">
              <Image
                src={roomMockup}
                loading="lazy"
                width="300"
                height="500"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 44vw, (max-width: 991px) 257.578125px, 264px"
                alt=""
                className="marquee-image object-cover w-full h-full"
              />
            </div>
            <div className="marquee-image-wrap rounded-[12px] w-full h-[410px] overflow-hidden">
              <Image
                src={loopstudiosMockup}
                width="300"
                height="500"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 44vw, (max-width: 991px) 257.578125px, 264px"
                alt=""
                className="marquee-image object-cover w-full h-full"
              />
            </div>
            <div className="marquee-image-wrap rounded-[12px] w-full h-[410px] overflow-hidden">
              <Image
                src={littleLemonMockup}
                width="300"
                height="500"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 44vw, (max-width: 991px) 257.578125px, 264px"
                alt=""
                className="marquee-image object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="marquee-overlay bottom top-auto bottom-[-1px] left-0 right-0 bg-[linear-gradient(0deg, var(--color--dark), rgba(20, 20, 20, .6) 48%, rgba(20, 20, 20, 0))]"></div>
    </div>
  );
};

export default MarqueeSection;
