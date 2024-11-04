import Image from "next/image";
import Link from "next/link";
import logo from "@/public/mockup/Matusalab-logo.png";

const Logo = ({
  logoLink = "/",
  styleSuffix,
  onToggle,
}: {
  logoLink?: string;
  styleSuffix?: string;
  onToggle?: () => void;
}) => {
  return (
    <Link
      onClick={onToggle}
      href={logoLink}
      className="flex flex-col w-min capitalize leading-7 sm:leading-7 text-2xl sm:text-3xl font-medium"
    >
      <span className="tracking-wider">Matu </span>
      <span
        className={`w-min bg-[--color--heading] text-[--color--bg] px-[0.375rem] sm:px-2  sm:py-[0.15rem] sm:mt-1 ${styleSuffix}`}
      >
        salab
      </span>
    </Link>
  );
};

export default Logo;
