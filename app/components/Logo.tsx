import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex flex-col w-min capitalize leading-7 sm:leading-7 text-3xl font-medium"
    >
      <span className=" tracking-wide">Matu </span>
      {/* <br className="-mt-10 p-0" /> */}
      <span className="w-min bg-[--color--heading] text-[--color--bg] px-1 py-[0.15rem] mt-1">
        salab
      </span>
      {/* <Image
    src="/logo-new.png"
    alt="logo of Matusalab personal website"
    width="100"
    height="100"
    className="w-[4.3rem] h-14 md:w-20 md:h-16 "
  /> */}
    </Link>
  );
};

export default Logo;
