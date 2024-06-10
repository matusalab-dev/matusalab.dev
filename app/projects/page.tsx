import Link from "next/link";
import NavBar from "../components/NavBar";

const page = () => {
  return (
    <div className="inverse full-bleed h-screen">
      {" "}
      <NavBar />
      <h1 className="flex justify-center flex-col w-max mr-auto md:mx-auto text-center text-4xl md:text-7xl font-[900] mt-8 capitalize">
        Project details
        <Link
          href="/"
          className="text-sm font-thin text-center self-start mt-2 md:mt-6"
        >
          go back Home
        </Link>
      </h1>
    </div>
  );
};

export default page;
