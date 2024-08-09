import {books} from "./Hero";
import BooksCard from "./BooksCard"
export default function BestSellers(){
    return(
        <div className="min-h-lvh flex flex-col gap-10 dark:bg-slate-800 dark:text-white" >
            <div className="h-1/5 flex flex-col justify-center items-center mt-7" data-aos={"zoom-in"}>
                <h3 className="text-md font-semibold text-primary" >Top Choice</h3>
                <hr className="bg-gray-400 h-[3px] w-[700px] m-1"></hr>
                <h1 className="text-3xl font-bold text-darksecondary mb-2 ">Our Best Sellers</h1>
                <hr className="bg-gray-400 h-[3px] w-[900px] mb-2"></hr>
                <p className="text-sm font-medium text-gray-400 text-center">Discover World's Best Novels,Poems,Thrillers and Drama and delve into</p>
                <p className="text-sm font-medium text-gray-400"> a world of amazement and thoughtfullness...</p>
            </div>
            <div className="min-h-4/5 flex justify-center items-center gap-8 flex-wrap" data-aos="zoom-in">
                {books.map((book)=>(<BooksCard image={book.image} title={book.title} author={book.author} about={book.about}></BooksCard>))}
            </div>
        </div>
    )
}