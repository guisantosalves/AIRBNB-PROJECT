import Image from "next/image";

// fill -> preenche relativamente ao seu componente pai
const SmallCard = ({img, location, distance}) => {
    
    return(
        <div>
            {/* the left */}
            <div className="relative h-16 w-16">
                <Image 
                    src={img}
                    layout="fill"
                    alt=""
                    className="rounded-lg"
                />
            </div>

            {/* the right */}
            <div className="flex">
                <h2>{location}</h2>
                <h3>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard;