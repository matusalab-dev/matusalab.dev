const SERVICES = [
  {
    heading: "headless commerce setup",
    description:
      "Crafting distinct brand identities and guidelines for lasting recognition in competitive markets, ensuring authenticity and resonance with your target audience",
  },
  {
    heading: "Shopify Theme customization",
    description:
      "Crafting distinct brand identities and guidelines for lasting recognition in competitive markets, ensuring authenticity and resonance with your target audience",
  },
  {
    heading: "Payment gateway integration",
    description:
      "seamlessly integrate your business with popular, secured and fast payment gateways like PayPal, Stripe, TeleBirr, Mpessa and many others",
  },
  {
    heading: "Store setup",
    description:
      "Setting up distinct brand identities and guidelines for lasting recognition in competitive markets",
  },
  //   {
  //     heading: "Managing store",
  //     description:
  //       "Crafting distinct brand identities and guidelines for lasting recognition in competitive markets, ensuring authenticity and resonance with your target audience",
  //   },
];

const Services = () => {
  return (
    <section
      id="services"
      className="my-32 flex flex-col xl:flex-row xl:justify-between gap-12"
    >
      <h2 className="uppercase basis-2/12 tracking-widest text-3xl text-[--color--grey]">
        What I Do
      </h2>

      <div className="basis-9/12 grid gap-24 grid-cols-1 md:grid-cols-2">
        {SERVICES.map((service, index) => (
          <div
            key={++index}
            className="flex flex-col justify-between gap-12 xs:gap-20 border-l-[--color--grey] border-l-[0.5px]  pl-4 xs:pl-6"
          >
            <div>
              <p className="text-[--color--grey]">0{++index}</p>
              <h3 className="text-3xl xs:text-4xl capitalize mt-2">
                {service.heading}
              </h3>
            </div>
            <p className="max-w-[25ch] text-lg xs:text-xl">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
