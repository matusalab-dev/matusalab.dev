export interface ProjectInfoType {
  title: string;
  imgSrc: string;
  description: string;
  type: string;
  className: string;
  liveUrl: string;
  overview: string;
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
      "The Room project is an e-commerce platform designed to streamline furniture sales, providing a user-friendly interface for browsing and purchasing furniture. It was created to address the challenge of managing diverse product categories and enhancing the online shopping experience for wholesalers with multiple sales branches within the country with features like shopping product by category, hover add-to-cart, detailed product pages, and easy checkout.",
    techStacks: [
      "React",
      "React-Context-Api",
      "React-Hooks",
      "React-Router-Dom-V-6",
      "Tailwind CSS",
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
      "Tailwind CSS",
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
      "Immersive experiences that deliver – Since its founding in 2011, VR Innovators has been pioneering world-class virtual reality projects for premier companies worldwide. As the leader in interactive VR, our award-winning creations have revolutionized businesses by providing digital experiences that align perfectly with their brand identities. By continually pushing the boundaries of innovation, VR Innovators has established itself as the leader in interactive VR, transforming the digital landscape for clients across the globe.",
    techStacks: [
      "HTML 5",
      "CSS 3",
      "CSS Grid Layout",
      "Flex Box Layout",
      "CSS Variables",
      "Javascript",
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
      "Sunnyside is a full-service creative agency dedicated to rapid brand growth through compelling visuals and strategic marketing. We create memorable graphic designs and stunning photography to elevate your brand's image. Our collaborative team ensures your brand connects with the right audience across digital platforms. Partner with us to make your brand stand out and resonate with your target market.",
    techStacks: [
      "HTML 5",
      "CSS 3",
      "SASS",
      "BEM Methodology",
      "CSS Grid Layout",
      "Flex Box Layout",
      "CSS Variables",
      "Javascript",
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
