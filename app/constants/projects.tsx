import roomMockup from "@/public/mockup/room-desktop-preview.jpg";
import littleLemonMockup from "@/public/mockup/mockup for little-lemon project.png";
import loopstudiosMockup from "@/public/mockup/loopstudios-desktop-preview.jpg";
// import sunnysideMockup from "@/public/mockup/sunnyside-desktop-preview.jpg";
import TaxiTeraMockup from "@/public/mockup/taxi-tera-project-mockup.png";
import gebeyaShopMockup from "@/public/mockup/gebeya-shop-desktop-mockup.png";
import MhurMockup from "@/public/mockup/mhur-LMS.png";

export interface ProjectInfoType {
  title: string;
  imgSrc: any;
  description: string;
  type: string;
  className: string;
  liveUrl: string;
  overview: string;
  [key: string]: any;
}

export const PROJECT_INFO: ProjectInfoType[] = [
  {
    id: 1,
    title: "Mhur",
    imgSrc: MhurMockup,
    description: "Learning Management System",
    // type: "custom store-front shopify as headless CMS",
    type: "Web App",
    className: "lg:col-[1/5]",

    liveUrl: "https://mhur.vercel.app/",
    githubUrl: "https://github.com/matusalab-dev/mhur",
    overview:
      "Mhur is a Learning Management System (LMS) designed to facilitate online learning and course management. It provides a user-friendly interface for both instructors and students, enabling seamless course creation, enrollment, and progress tracking. With features like multimedia content support, Mhur enhances the online learning experience.",
    techStacks: [
      "Next.js",
      "Tailwind CSS",
      "Next-video",
      "swiper.js",
      "Rechart.js",
      "App router",
      "Mux for video streaming",
    ],
  },
  {
    id: 2,
    title: "taxi-tera",
    imgSrc: TaxiTeraMockup,
    description:
      "Taxt-Tera is a web app that helps you find the best taxi stand",
    // type: "custom store-front shopify as headless CMS",
    type: "Web App",
    className: "lg:col-[5/-1]",
    story:
      "The story of this project begins, When I first moved to my capital city Addis Ababa, navigating the maze of taxi stands quickly became one of my biggest challenges. Every time I needed to meet friends or visit local clients, I found myself wandering, unsure of which taxi stand would get me closest to my destination. The frustration grew when I realized that many trips required hopping between multiple taxi stands, adding layers of confusion to an already puzzling process. To make matters worse, I often had to rely on the kindness of strangers, stopping to ask for directions or advice on which taxi stand to head to next. It felt inefficient, disorganized, and at times overwhelming. The turning point came one day when I overheard someone else asking the same question I’d been asking myself: “Which taxi stands will take me where I need to go?” That was my lightbulb moment. This wasn’t just my problem—it was a shared struggle for many people, even those who had lived in the city for years. It struck me that something as fundamental as getting from point A to point B shouldn’t feel like solving a riddle. That’s when I realized I had the opportunity to build a solution: a web app that optimizes routes and recommends the right taxi stands using tools like the Gebeta Maps API(for localized data) and LeafletJS. This project isn’t just about solving my problem—it’s about creating a tool that simplifies life for countless others navigating the city.",
    liveUrl: "https://taxi-tera.vercel.app/",
    githubUrl: "https://github.com/matusalab-dev/taxi-tera",
    overview:
      "Your Smart City Companion Taxt-Tera, a cutting-edge web app will Leverages Open routes service API and LeafletJS as tiles to optimize your taxi stand choices. - By integrating real-time traffic data, we ensure you reach your destination efficiently, saving you time and reducing stress.",
    techStacks: [
      "React",
      "React-Context-Api",
      "React-Hooks",
      "React-Router-Dom-V-6",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
    status: "under dev't",
  },
  {
    id: 3,
    title: "room",
    imgSrc: roomMockup,
    description: "Furniture E-commerce store",
    // type: "custom store-front shopify as headless CMS",
    type: "Web App",
    className: "lg:col-[1/5]",

    liveUrl: "https://room-store-two.vercel.app/",
    githubUrl: "https://github.com/matusalab-dev/room",
    overview:
      "The Room project is an e-commerce platform designed to streamline furniture sales, providing a user-friendly interface for browsing and purchasing furniture. It was created to address the challenge of managing diverse product categories and enhancing the online shopping experience for merchants with multiple sales branches within the country with features like shopping product by category, hover add-to-cart, detailed product pages, and easy checkout.",
    techStacks: [
      "React",
      "React-Context-Api",
      "React-Hooks",
      "React-Router-Dom-V-6",
      "Tailwind CSS",
    ],
  },
  {
    id: 4,
    title: "little-lemon",
    imgSrc: littleLemonMockup,
    description: "restaurant table reservation",
    type: "web app",
    className: "md:col-[1/-1] lg:col-[5/-1]",
    liveUrl: "https://little-lemon-eosin.vercel.app/",
    githubUrl:
      "https://github.com/matusalab-dev/Little-Lemon-Table-Reservation-Web-App",
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
  // {
  //   id: 3,
  //   title: "Exclusive",
  //   imgSrc: gebeyaShopMockup,
  //   description: "store for multiple categories of products",
  //   type: "Web app",
  //   className: "lg:col-[3/-1]",
  //   liveUrl: "https://gebeya-alpha.vercel.app/",
  //   githubUrl: "https://github.com/matusalab-dev/gebeya",

  //   overview:
  //     "Exclusive is a fully responsive e-commerce web application built using Next.js and TailwindCSS, showcasing my ability to create modern, user-friendly interfaces with advanced functionality.",
  //   techStacks: [
  //     "Next.js 14",
  //     "ContextAPI",
  //     "Tailwind CSS",
  //     "React-query(Tan-stack query)",
  //     "FetchAPI",
  //     "Rest API",
  //   ],
  // },
  {
    id: 5,
    title: "gebeya-shop",
    imgSrc: gebeyaShopMockup,
    description: "store for multiple categories of products",
    type: "Web app",
    className: "lg:col-[3/-1]",
    liveUrl: "https://gebeya-alpha.vercel.app/",
    githubUrl: "https://github.com/matusalab-dev/gebeya",

    overview:
      "Gebeya Shop is a fully responsive e-commerce web application built using Next.js and TailwindCSS, showcasing my ability to create modern, user-friendly interfaces with advanced functionality.",
    techStacks: ["Next.js 14", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "loopstudios",
    imgSrc: loopstudiosMockup,
    description: "eye catching landing page",
    type: "landing page",
    // className: "lg:col-[3/-1]",
    className: "lg:col-[1/5]",

    liveUrl: "https://loopstudios-theta-sable.vercel.app/",
    githubUrl: "https://github.com/matusalab-dev/loopstudios-landing-page",

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

  // {
  //   id: 5,
  //   title: "sunnyside",
  //   imgSrc: sunnysideMockup,
  //   description: "high converting landing page",
  //   type: "landing page",
  //   // className: "lg:col-[1/5]",
  //   className: "md:col-[1/-1] lg:col-[5/-1]",

  //   liveUrl: "https://sunnyside-jade.vercel.app/",
  //   githubUrl: "https://github.com/matusalab-dev/sunnyside-agency-landing-page",
  //   overview:
  //     "Sunnyside is a full-service creative agency dedicated to rapid brand growth through compelling visuals and strategic marketing. We create memorable graphic designs and stunning photography to elevate your brand's image. Our collaborative team ensures your brand connects with the right audience across digital platforms. Partner with us to make your brand stand out and resonate with your target market.",
  //   techStacks: [
  //     "HTML 5",
  //     "CSS 3",
  //     "SASS",
  //     "BEM Methodology",
  //     "CSS Grid Layout",
  //     "Flex Box Layout",
  //     "CSS Variables",
  //     "Javascript",
  //   ],
  // },
];
