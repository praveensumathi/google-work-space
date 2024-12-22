import Image from "next/image";
import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { ServiceList } from "../types/types";

const customTheme: CustomFlowbiteTheme["card"] = {
    root: {
        children:
            "flex flex-col rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg hover:scale-105 transition-all py-4",
    },
};

function About() {
    return (
        <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 items-center">
            <div className="flex justify-center">
                <Image src="/google-workspace.png" alt="google-workspace" width={400} height={400} />
            </div>
            <div className="text-justify font-normal leading-loose text-gray-500">
                <p>
                    Looking for a Google Workspace Premier partner or reseller in India? Look no further than Digisoft!
                    <b> Call us now on +91 987654321 </b> to get started. We are a certified Google Workspace Premier partner and have been providing services in India with the tools they need to succeed.
                </p>
                <p className="mt-5">
                    <b>Digisoft is an authorized Google Workspace and Google for Education partner or reseller in India.</b>
                </p>
            </div>
        </div>
    );
}

export default About;
