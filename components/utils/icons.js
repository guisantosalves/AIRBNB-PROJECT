import * as React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function HeartFill({click}){
    return(
        <>
            <HeartIcon className="h-7 w-7 cursor-pointer" onClick={()=>click(false)}/>
        </>
    )
}