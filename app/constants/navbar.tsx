export interface NavBarType {
  navTitle: string;
  widthStyle: string;
  scrollInto: string;
  [key: string]: any;
}

export const NAV_INFO_HOME: NavBarType[] = [
  {
    navTitle: "projects",
    widthStyle: "w-16",
    scrollInto: "#project",
  },
  {
    navTitle: "about",
    widthStyle: "w-12",
    scrollInto: "#about",
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
    scrollInto: "#project",
  },
  {
    navTitle: "services",
    widthStyle: "w-16",
    scrollInto: "#services",
  },
  {
    navTitle: "about",
    widthStyle: "w-12",
    scrollInto: "#about",
  },
  //   {
  //     navTitle: "contact",
  //     widthStyle: "w-16",
  //     scrollInto: "#contact",
  //   },
];
