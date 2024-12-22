import PriceCard from "./components/priceCard";
import { applications, businessPlans, services } from "./utils/util";
import ApplicationCard from "./components/applicationCard";
import SectionTitle from "./components/sectionTitle";
import ServiceCard from "./components/serviceCard";
import { CustomFlowbiteTheme, Flowbite } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      base: "hover:shadow-lg hover:scale-105 transition-all",
    },
  },
};

export default function Home() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="container m-auto">
        <section id="price-plans" className="md:px-10 px-4 pb-16">
          <SectionTitle title="Find the right plan for your business." />
          <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-10">
            {businessPlans.map((item, index) => (
              <PriceCard plans={item} index={index} key={item.heading} />
            ))}
          </div>
        </section>
        <section id="application-sections" className="md:px-10 px-4 pb-16">
          <SectionTitle title="Unleash the untapped potential of your beloved apps and take your experience to extraordinary new heights" />
          <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {applications.map((item) => (
              <ApplicationCard {...item} key={item.title} />
            ))}
          </div>
        </section>
        <section id="service-sections" className="md:px-10 px-4 pb-16">
          <SectionTitle title="We offer a wide range of services, including:" />
          <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {services.map((item) => (
              <ServiceCard {...item} key={item.title} />
            ))}
          </div>
        </section>
      </div>
    </Flowbite>
  );
}
