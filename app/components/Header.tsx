"use client";
import NavBar from "./nav/NavBar";
import { NavBarType } from "../constants/navbar";
import { HEADER_COPYRIGHT, HeaderCopyTypes } from "../constants/header";
import HeroSection from "./HeroSection";
import { usePathname } from "next/navigation";

const Header = ({
  headerNavBar,
  headerNavBarMobile,
  navBarRoute,
  logoLink,
}: {
  headerNavBar: NavBarType[];
  headerNavBarMobile: NavBarType[];
  navBarRoute: number;
  logoLink: string;
}) => {
  const currentPathname = usePathname();
  const freelancePathname = "/freelancing";
  return (
    <header id="header" className="pb-24 inverse full-bleed">
      {/* nav-section */}
      <NavBar
        navBar={headerNavBar}
        navBarMobile={headerNavBarMobile}
        routeIndex={navBarRoute}
        logoLink={logoLink}
      />
      {/* hero-section */}
      {currentPathname === freelancePathname ? (
        <HeroSection
          headerCopyright={HEADER_COPYRIGHT[1]}
          selectedHeadline={1}
          selectedTag={1}
        />
      ) : (
        <HeroSection
          headerCopyright={HEADER_COPYRIGHT[0]}
          selectedHeadline={0}
          selectedTag={2}
        />
      )}
    </header>
  );
};

export default Header;
