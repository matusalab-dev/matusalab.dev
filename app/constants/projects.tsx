export interface ProjectInfoType {
  title: string;
  imgSrc: string;
  description: string;
  type: string;
  className: string;
  liveUrl: string;
  [key: string]: any;
}

export const PROJECT_INFO: ProjectInfoType[] = [
  {
    title: "room",
    imgSrc: "/projects-mockup/room-desktop-preview.jpg",
    description: " Furniture E-commerce store",
    type: "custom store-front shopify as headless CMS",
    className: "lg:col-[1/5]",

    liveUrl: "https://www.room-ecommerce.pages.dev",
  },
  {
    title: "little-lemon",
    imgSrc: "/projects-mockup/b-mockup-pro-mobile.jpg",
    description: "restaurant table reservation",
    type: "web app",
    className: "md:col-[1/-1] lg:col-[5/-1]",
    liveUrl: "https://www.room-ecommerce.pages.dev",
  },
  {
    title: "loopstudios",
    imgSrc: "/projects-mockup/loopstudios-desktop-preview.jpg",
    description: "eye catching marketing landing page",
    type: "landing page",
    className: "lg:col-[3/-1]",
    liveUrl: "https://www.room-ecommerce.pages.dev",
  },
  {
    title: "sunnyside",
    imgSrc: "/projects-mockup/sunnyside-desktop-preview.jpg",
    description: "high converting landing page",
    type: "landing page",
    className: "lg:col-[1/5]",
    liveUrl: "https://www.room-ecommerce.pages.dev",
  },

  // {
  //   title: "room",
  //   imgSrc: "/projects-mockup/room-desktop-preview.jpg",
  //   description: "Headless Commerce Setup",
  //   type: "Custom Store-front Shopify as headless CMS",
  //   className: "w-full lg:col-[5/-1]",
  // liveUrl:'https://www.room-ecommerce.pages.dev'
  // },
];
