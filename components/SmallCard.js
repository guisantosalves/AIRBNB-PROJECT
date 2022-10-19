import React, { Component }  from 'react';
import Image from "next/image";

// fill -> preenche relativamente ao seu componente pai
const SmallCard = ({ img, location, distance }) => {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
        hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
    >
      {/* the left */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" alt="" className="rounded-lg" />
      </div>

      {/* the right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
