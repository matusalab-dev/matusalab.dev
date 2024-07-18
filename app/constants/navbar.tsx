export interface NavBarType {
  logoLink?: string;
  navTitle: string;
  widthStyle: string;
  scrollInto: string[];
  [key: string]: any;
}

export const NAV_INFO_HOME: NavBarType[] = [
  {
    navTitle: "projects",
    widthStyle: "w-16",
    scrollInto: ["#project", "../#project"],
  },
  {
    navTitle: "about",
    widthStyle: "w-12",
    scrollInto: ["#about", "../#about"],

    // logoLink: "./freelancing",
  },
  //   {
  //     navTitle: "contact",
  //     widthStyle: "w-16",
  //     scrollInto: "#contact",
  //   },
];

export const NAV_INFO_FREELANCE: NavBarType[] = [
  {
    navTitle: "projects",
    widthStyle: "w-16",
    scrollInto: ["#project", "../#project"],
    logoLink: "./freelancing",
  },
  {
    navTitle: "services",
    widthStyle: "w-16",
    scrollInto: ["#services", "../#services"],
    logoLink: "./freelancing",
  },
  {
    navTitle: "about",
    widthStyle: "w-12",
    scrollInto: ["#about", "../#about"],
    logoLink: "./freelancing",
  },
  //   {
  //     navTitle: "contact",
  //     widthStyle: "w-16",
  //     scrollInto: "#contact",
  //   },
];
