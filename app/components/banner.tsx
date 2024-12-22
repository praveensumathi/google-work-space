import React from "react";

export const Banner = ({ title }: { title: string }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-6xl text-shadow relative text-white font-extrabold leading-tight text-shadow-custom ">
        {title}
      </h2>
    </div>
  );
};
