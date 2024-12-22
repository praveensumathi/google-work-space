import Image from "next/image";
import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { ServiceList } from "../types/types";

const customTheme: CustomFlowbiteTheme["card"] = {
  root: {
    children: "flex h-full flex-col py-4",
  },
};

function ServiceCard(item: ServiceList) {
  return (
    <Card className="text-center" theme={customTheme}>
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
