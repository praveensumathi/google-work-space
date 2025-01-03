import Image from "next/image";
import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { ServiceList } from "../types/types";

const customTheme: CustomFlowbiteTheme["card"] = {
  root: {
    children:
      "flex flex-col rounded-lg border border-gray-200 bg-white hover:shadow-md hover:scale-105 transition-all py-4",
  },
};

function ServiceCard(item: ServiceList) {
  return (
    <Card
      className="max-w-md text-center flex justify-center"
      theme={customTheme}
    >
      <div className="flex flex-col items-center">
        <Image src={item.imageUrl} alt={item.title} width={80} height={80} />
        <div className="font-bold text-sm md:text-lg pt-4 bg-title-gradient bg-clip-text text-transparent">
          {item.title}
        </div>
      </div>
    </Card>
  );
}

export default ServiceCard;
