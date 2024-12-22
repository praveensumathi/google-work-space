import React from "react";

export const Banner = ({ title }: { title: string }) => {
  return (
    <div className="text-center">
      <h2 className="md:text-[60px] text-[30px] text-white font-extrabold leading-tight text-shadow-custom ">
        {title}
      </h2>
    </div>
  );
};
