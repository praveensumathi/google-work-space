import Image from "next/image";
import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { ApplicationList } from "../types/types";

const customTheme: CustomFlowbiteTheme["card"] = {
  root: {
    children:
      "flex h-full flex-col p-4 hover:pl-4 transition-all hover:border-primary hover:rounded-md",
  },
};

function ApplicationCard(item: ApplicationList) {
  return (
    <Card className="max-w-md cursor-pointer rounded-lg " theme={customTheme}>
      <div className="flex gap-3 items-center">
        <Image src={item.imageUrl} alt={item.title} width={40} height={40} />
        <div className="font-extrabold text-lg bg-title-gradient bg-clip-text text-transparent">
          {item.title}
        </div>
      </div>
      <div className="text-base font-normal leading-tight mt-5">
        {item.description}
      </div>
    </Card>
  );
}

export default ApplicationCard;
