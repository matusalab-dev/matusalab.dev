const SERVICES = [
  {
    heading: "headless commerce setup",
    description:
      "By decoupling your frontend from Shopify’s backend,  build a fast, fully customized site that boosts SEO, integrates with third-party tools, and delivers a unique, branded shopping experience.",
  },
  {
    heading: "Shopify Theme customization",
    description:
      "offer personalized theme customization and bug-fixing services to help your store stand out and run smoothly",
  },
  {
    heading: "Payment gateway integration",
    description:
      "seamlessly integrate your business with popular, secured and fast payment gateways like  Stripe, PayPal, and many others",
  },
  {
    heading: "Store setup",
    description:
      "covering theme customization, product listing, payment integration, and essential app installs. everything you need for a smooth launch. Focus on your business while I handle the details.",
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
