import Image from "next/image";
import React from "react";

export const FooterIcons = () => {
  return (
    <div className="fixed bottom-2 z-10 cursor-pointer p-5">
      <div>
        <a href="#contact">
          <Image
            src="/menu.png"
            alt="menu"
            width={50}
            height={50}
            className="my-4"
          />
        </a>
      </div>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=7339119231&text=Hi!%20Capzim.%20I%20m%20interested%20in%20Google%20Workspace.%20Kindly%20provide%20me%20more%20information%20for%20the%20same."
          target="blank"
        >
          <Image src="/whatsapp.png" alt="Whatsapp" width={50} height={50} />
        </a>
      </div>
    </div>
  );
};
