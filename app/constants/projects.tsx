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
    imgSrc: "/mockup/room-desktop-preview.jpg",
    description: " Furniture E-commerce store",
    type: "custom store-front shopify as headless CMS",
    className: "lg:col-[1/5]",

    liveUrl: "https://room-store-two.vercel.app/",
    overview:
      "The room Project is an e-commerce platform designed to streamline furniture sales, providing a user-friendly interface for browsing and purchasing furniture. It was created to address the challenge of managing diverse product categories and enhancing the online shopping experience for wholesalers with multiple sales branches within the country with features like Product category section hover add-to-cart, detailed product pages, and easy checkout.",
    techStacks: [
      "React",
      "React-Context-Api",
      "React-Hooks",
      "React-Router-Dom-V-6",
    ],
  },
  {
    title: "little-lemon",
    imgSrc: "/mockup/b-mockup-pro-mobile.jpg",
    description: "restaurant table reservation",
    type: "web app",
    className: "md:col-[1/-1] lg:col-[5/-1]",
    liveUrl: "https://little-lemon-eosin.vercel.app/",
    overview:
      "Little-Lemon Table Reservation Web App is a user-friendly solution designed to streamline the dining experience. Users can effortlessly browse available tables, select preferred time slots, and make reservations with ease.",
    techStacks: [
      "React",
      "React-Context-Api",
      "React-Hooks",
      "React-Router-Dom-V-6",
      "Formik Library",
    ],
  },
  {
    title: "loopstudios",
    imgSrc: "/mockup/loopstudios-desktop-preview.jpg",
    description: "eye catching marketing landing page",
    type: "landing page",
    className: "lg:col-[3/-1]",
    liveUrl: "https://loopstudios-theta-sable.vercel.app/",
    overview:
      "The primary goal of this project is to develop a compelling and visually appealing digital presence, modern, user-friendly and responsive website that effectively showcase.",
    techStacks: [
      "HTML 5",
      "CSS 3",
      "CSS GRID Layout",
      "Flex Box Layout",
      "CSS Varibles",
      "JAVASCRIPT",
    ],
  },

  {
    title: "sunnyside",
    imgSrc: "/mockup/sunnyside-desktop-preview.jpg",
    description: "high converting landing page",
    type: "landing page",
    className: "lg:col-[1/5]",
    liveUrl: "https://sunnyside-jade.vercel.app/",
    overview:
      "The primary goal of this project is to develop a compelling and visually appealing digital presence, modern, user-friendly and responsive website that effectively showcase.",
    techStacks: [
      "HTML 5",
      "CSS 3",
      "SASS",
      "BEM Methodology",
      "CSS GRID Layout",
      "Flex Box Layout",
      "CSS Varibles",
      "JAVASCRIPT",
    ],
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
