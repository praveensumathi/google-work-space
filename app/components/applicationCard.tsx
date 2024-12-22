import Image from "next/image";
import { applications } from "../utils/util";
import { Card } from "flowbite-react";
import { ApplicationList } from "../types/types";

function ApplicationCard(item: ApplicationList) {
  return (
    <Card className="p-4">
      <Image src={item.imageUrl} alt={item.title} width={60} height={60} />
      <div className="fw-extrabold text-4xl pt-2 bg-title-gradient bg-clip-text text-transparent">
        {item.title}
      </div>
      <div className="fw-extrabold font-800 text-2xl py-2 text-primary-gradient">
        {item.description}
      </div>
    </Card>
  );
}

export default ApplicationCard;
