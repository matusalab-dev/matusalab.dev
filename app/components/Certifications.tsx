const CERTIFICATIONS = [
  {
    course: "Introduction to Front-end development",
    offeredBy: "Meta",
    startDate: "2023",
    endDate: "current",
  },
  {
    course: "Principles of UI/UX Design",
    offeredBy: "Meta",
    startDate: "2023",
    endDate: "current",
  },
  {
    course: "HTML & CSS",
    offeredBy: "Meta",
    startDate: "2023",
    endDate: "current",
  },
  {
    course: "react advanced",
    offeredBy: "Meta",
    startDate: "2023",
    endDate: "current",
  },
  {
    course: "Javascript",
    offeredBy: "Meta",
    startDate: "2023",
    endDate: "current",
  },
];

const Certifications = () => {
  return (
    <section className="pt-32 text-[--color--grey]">
      <h3 className=" text-3xl tracking-widest uppercase bg-white z-50">
        Certifications
      </h3>
      {CERTIFICATIONS.map((certs) => (
        <div className="mt-8 max-w-96">
          <h4 className="capitalize text-black text-xl">{certs.course}</h4>
          <div className="mt-1 flex justify-between">
            <p>Taught by {certs.offeredBy}</p>
            <p className="capitalize">
              {certs.startDate} - {certs.endDate}
            </p>
          </div>
          <hr className="w-full divide-black divide-solid divide-x-8 max-w-full mt-4 xs:mt-5 bg-black"></hr>
        </div>
      ))}
      {/* <div className="mt-6 max-w-72">
        <h4 className="capitalize text-black text-xl">
          Principles of UI/UX Design
        </h4>
        <div className="mt-1 flex justify-between max-w-72">
          <p>Taught by Meta</p>
          <p>2020-current</p>
        </div>
        <hr className="w-full divide-black divide-solid divide-x-8 max-w-full mt-5 bg-black"></hr>
      </div> */}
    </section>
  );
};

export default Certifications;
