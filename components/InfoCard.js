import * as React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import HeartFill from "./utils/icons";
import { StarIcon } from "@heroicons/react/24/solid";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {

  const [selectHeart, setSelectHeart] = React.useState(false)
  const click = (val) => {
    setSelectHeart(false)
  }
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl"/>
      </div>

      <div className="flex flex-col flex-grow pl-5">
        {/* justify-between -> justify-content */}
        <div className="flex justify-between">
          <p>{location}</p>
            {selectHeart === true ? (
              <HeartFill click={click}/>
            ) : (
              <HeartIcon className="h-7 w-7 cursor-pointer" onClick={()=>setSelectHeart(true)}/>
            )}
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" /> {/* the line */}
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end">
          <p className="flex items-center">
            <StarIcon className="h-5 w-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
