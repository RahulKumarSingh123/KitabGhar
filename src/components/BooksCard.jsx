import { FaCartShopping } from "react-icons/fa6";

export default function BooksCard({title,image,about,author}){
    return(
        <div className="flex mt-32 m-8 flex-col justify-center items-center h-[310px] w-[300px] rounded-2xl p-7 shadow-lg shadow-sky-300  bg-white dark:bg-slate-800 dark:text-white hover:bg-blue-800 hover:text-white group hover:scale-105 duration-150">
            <img src={image} className="h-44 w-40 -translate-y-20 rounded-lg"></img>
            <h3 className="-translate-y-20 text-center font-bold text-xl mt-3 ">{title}</h3>
            <h4 className="-translate-y-20 text-right text-md font-medium text-opacity-40">-- {author}</h4>
            <p className="-translate-y-20 text-sm mt-3 text-slate-600 group-hover:text-gray-300">{about.slice(0,about.indexOf('.')+1)}</p>
            <button className="-translate-y-20 flex pr-4 pl-4 p-2 mt-5 text-white font-medium rounded-full hover:scale-105 justify-center gap-2 items-center bg-darksecondary group-hover:bg-white group-hover:text-blue-800">Add to Cart<FaCartShopping></FaCartShopping></button>
        </div>
    )
}