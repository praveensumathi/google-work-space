import PriceCard from "./components/priceCard";
import {
  applications,
  businessPlans,
  educationPlans,
  services,
} from "./utils/util";
import ApplicationCard from "./components/applicationCard";
import SectionTitle from "./components/sectionTitle";
import ServiceCard from "./components/serviceCard";
import { CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import { Banner } from "./components/banner";
import About from "./components/about";
import StickyNavbar from "./components/StickyNavbar";
import clsx from "clsx";
import ContactForm from "./components/contactForm";

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
      <StickyNavbar />
      <div className="relative h-[30vh]">
        <section className="banner-image bg-cover bg-no-repeat bg-center h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <Banner title="Google Workspace" />
        </section>
      </div>
      <div className="container m-auto">
        <section id="#" className="md:px-10 px-4 pb-10">
          <SectionTitle title="Google Workspace Partner/Reseller India" />
          <About />
        </section>
        <section id="service-sections" className="md:px-10 px-4 pb-10">
          <SectionTitle title="We offer a wide range of services, including:" />
          <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {services.map((item) => (
              <ServiceCard {...item} key={item.title} />
            ))}
          </div>
        </section>
        <section id="price-plans" className="md:px-10 px-4 pb-10">
          <SectionTitle title="Find the right plan for your Business." />
          <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {businessPlans.map((item, index) => (
              <PriceCard plans={item} index={index} key={item.heading} />
            ))}
          </div>

          <SectionTitle title="Find the right plan for your Education." />
          <div
            className={clsx(
              "grid grid-rows-1 sm:grid-cols-1 gap-6 place-items-center",
              {
                "md:grid-cols-1": educationPlans.length == 1,
                "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4":
                  educationPlans.length > 1,
              }
            )}
          >
            {educationPlans.map((item, index) => (
              <PriceCard plans={item} index={index} key={item.heading} />
            ))}
          </div>
        </section>
        <section id="application-sections" className="md:px-10 px-4 pb-10">
          <SectionTitle title="Unleash the untapped potential of your beloved apps and take your experience to extraordinary new heights" />
          <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {applications.map((item) => (
              <ApplicationCard {...item} key={item.title} />
            ))}
          </div>
        </section>
      </div>
      <footer className="md:px-10 px-4 pb-10">
        <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          <ContactForm />
          <ContactForm />
        </div>
      </footer>
    </Flowbite>
  );
}
