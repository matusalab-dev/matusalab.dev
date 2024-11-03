import { CERTIFICATIONS } from "../constants/certifications";

const Certifications = () => {
  return (
    <section className="pt-32 text-[--color--grey]">
      <h3 className=" text-3xl tracking-widest uppercase bg-white z-50">
        Certifications
      </h3>
      {CERTIFICATIONS.map((certs, index) => (
        <div key={++index} className="mt-8 max-w-96">
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
    </section>
  );
};

export default Certifications;
