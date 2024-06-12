export interface ProjectInfoType {
  title: string;
  imgSrc: string;
  description: string;
  type: string;
  className: string;
  [key: string]: any;
}
export const PROJECT_INFO: ProjectInfoType[] = [
  {
    title: "room",
    imgSrc: "/projects-mockup/room-desktop-preview.jpg",
    description: " Furniture E-commerce store",
    type: "Custom Store-front Shopify as headless CMS",
    className: "lg:col-[1/5]",
  },
  {
    title: "little-lemon",
    imgSrc: "/projects-mockup/b-mockup-pro-mobile.jpg",
    description: "restaurant table reservation",
    type: "web app",
    className: "md:col-[1/-1] lg:col-[5/-1]",
  },
  {
    title: "loopstudios",
    imgSrc: "/projects-mockup/loopstudios-desktop-preview.jpg",
    description: "Eye catching Landing page",
    type: "Landing page",
    className: "lg:col-[3/-1]",
  },
  {
    title: "sunnyside",
    imgSrc: "/projects-mockup/sunnyside-desktop-preview.jpg",
    description: "high converting landing page",
    type: "landing page",
    className: "lg:col-[1/5]",
  },

  // {
  //   title: "room",
  //   imgSrc: "/projects-mockup/room-desktop-preview.jpg",
  //   description: "Headless Commerce Setup",
  //   type: "Custom Store-front Shopify as headless CMS",
  //   className: "w-full lg:col-[5/-1]",
  // },
];
