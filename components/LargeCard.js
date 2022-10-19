import React, { Component }  from 'react';
import Image from "next/image";

const LargeCard = ({ img, title, desctiption, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          alt=""
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-3xl mb-3 w-64">{title}</h3>
        <p>{desctiption}</p>

        <button
          className="text-sm text-white bg-gray-900 rounded-lg
            px-4 py-2 mt-5"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
