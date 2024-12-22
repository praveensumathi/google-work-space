import PriceCard from "./components/priceCard";
import { applications, businessPlans } from "./utils/util";
import ApplicationCard from "./components/applicationCard";
import SectionTitle from "./components/sectionTitle";

export default function Home() {
  return (
    <div className="container-md">
      <section id="price-plans" className="md:px-10 px-4 pb-20">
        <SectionTitle title="Find the right plan for your business." />
        <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {businessPlans.map((item, index) => (
            <PriceCard plans={item} index={index} key={item.heading} />
          ))}
        </div>
      </section>
      <section id="application-sections" className="md:px-10 px-4 pb-20">
        <SectionTitle title="Unleash the untapped potential of your beloved apps and take your experience to extraordinary new heights" />
        <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {applications.map((item) => (
            <ApplicationCard {...item} key={item.title} />
          ))}
        </div>
      </section>
    </div>
  );
}
