import Image from "next/image";
import { applications } from "../utils/util";
import { Card } from "flowbite-react";
import { ApplicationList, ServiceList } from "../types/types";

function ServiceCard(item: ServiceList) {
    return (
        <Card className="p-4 flex flex-col items-center justify-center text-center h-full">
            <div className="flex flex-col items-center">
                <Image src={item.imageUrl} alt={item.title} width={80} height={80} />
                <div className="font-bold text-2xl pt-4 bg-title-gradient bg-clip-text text-transparent">
                    {item.title}
                </div>
            </div>
        </Card>

    );
}

export default ServiceCard;
