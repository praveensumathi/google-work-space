import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { benefitsOfWorkSpaces } from "../utils/util";

const customTheme: CustomFlowbiteTheme["card"] = {
  root: {
    children:
      "flex flex-col rounded-lg border border-gray-200 hover:scale-100 bg-white hover:shadow-md p-6",
  },
};

function Benefits() {
  return (
    <Card theme={customTheme}>
      {benefitsOfWorkSpaces.map((item, index) => (
        <ul className="list-disc list-inside">
          <li
            className="pb-6"
            key={index + "-benefits"}
            dangerouslySetInnerHTML={{ __html: item }}
          ></li>
        </ul>
      ))}
    </Card>
  );
}

export default Benefits;
