import { CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import PriceCard from "./components/priceCard";
import { applications, businessPlans } from "./utils/util";
import ApplicationCard from "./components/applicationCard";

const customTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      children: "flex h-full flex-col",
    },
  },
};

export default function Home() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="container-md">
        <section id="price-plans">
          {/* <header>
            <h1 className="text-2xl font-semibold primary-gradient">
              Find the right plan for your business.
            </h1>
            <h5>Google Workspace (Formerly G Suite)</h5>
          </header> */}
          <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  p-4 md:p-10">
            {businessPlans.map((item, index) => (
              <PriceCard plans={item} index={index} key={item.heading} />
            ))}
          </div>
        </section>
        <section id="application-sections">
          <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4  p-4 md:p-10">
            {applications.map((item) => (
              <ApplicationCard {...item} />
            ))}
          </div>
        </section>
      </div>
    </Flowbite>
  );
}
