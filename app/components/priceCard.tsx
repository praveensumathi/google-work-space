import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { PricePlans } from "../types/types";
import clsx from "clsx";

const customTheme: CustomFlowbiteTheme["card"] = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white hover:shadow-lg hover:scale-105 transition-all",
    children: "flex h-full flex-col",
  },
};

function PriceCard({ plans, index }: { plans: PricePlans; index: number }) {
  return (
    <Card className="max-w-md" theme={customTheme}>
      <h6
        className={clsx(
          "text-lg font-bold text-white bg-secondary text-center rounded-e-full mr-6 mt-6 py-3",
          { "bg-primary-gradient  text-white": index % 2 != 0 }
        )}
      >
        {plans.heading}
      </h6>
      <div className="card-content px-6">
        <ul className="my-4 space-y-5">
          {plans.options.map((item) => (
            <li className="flex space-x-3" key={item}>
              <svg
                className="h-5 w-5 shrink-0 text-primary dark:text-cyan-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: item }}
              ></span>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="m-6 flex justify-end flex-col h-full">
        <button
          type="button"
          className="font-semibold w-full h-10 justify-center 
          rounded-lg bg-primary-gradient py-2.5 text-center text-sm
           text-white"
        >
          Contact Us
        </button>
      </div> */}
    </Card>
  );
}

export default PriceCard;
