import React from "react";
import Image from "next/image";

const Card = ({ image, isFlipped, onClick }) => {
  return (
    <div
      className="m-2 w-24 h-24 bg-[#151f38] rounded-md cursor-pointer p-1"
      onClick={onClick}
    >
      {isFlipped ? (
        <Image
          src={image}
          alt="Animal"
          width={300}
          height={300}
          className="w-full h-full rounded-md"
          sizes="(max-width: 640px) 300px, 600px"
        />
      ) : (
        <div className="w-full h-full bg-[#304b5f] rounded-md flex items-center justify-center text-white font-bold text-4xl">
          ?
        </div>
      )}
    </div>
  );
};

export default Card;
