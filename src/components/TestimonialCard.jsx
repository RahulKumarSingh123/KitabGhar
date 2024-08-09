import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

export default function TestimonialCard({image,name,review}){
    return(
        <div className="h-80 w-64 flex flex-col p-4 bg-blue-400 rounded-3xl gap-3">
            <div className="flex justify-center items-center ">
                <img src={image} className="h-32 w-32 rounded-full"></img>
            </div>
            <div className="flex flex-col gap-4 p-2">
                <p className="font-semibold text-center">{name}</p>
                <p className="font-normal">"{review}"</p>
            </div>
        </div>
    )
}