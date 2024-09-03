import Image from "next/image";
import React from "react";

const BusinessInfo = ({ business }) => {
  return (
    <div>
      <Image
        src={business?.image[0]?.url}
        alt={business.name}
        width={150}
        height={200}
        className="rounded-full h-[150px] object-cover"
      />
      <div></div>
    </div>
  );
};

export default BusinessInfo;
