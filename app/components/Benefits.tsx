import { benefitsOfWorkSpaces } from "../utils/util";

function Benefits() {
  return (
    <>
      {benefitsOfWorkSpaces.map((item) => (
        <ul className="list-disc list-inside">
          <li dangerouslySetInnerHTML={{ __html: item }}></li>
        </ul>
      ))}
    </>
  );
}

export default Benefits;
