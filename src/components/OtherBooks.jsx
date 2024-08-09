import BooksCard from "./BooksCard.jsx";

//Books api fetch

let Books = [];


const url = 'https://all-books-api.p.rapidapi.com/getBooks';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'c04a440d4fmsh07f3133c0eb15ffp1cb33bjsn28b1ec16eb9c',
        'x-rapidapi-host': 'all-books-api.p.rapidapi.com'
    }
};

function getBooks(){

    try {
        const response = await fetch(url, options);
        Books = await response.json();
        console.log(Books);
    } catch (error) {
        console.error(error);
    }
}
getBooks();

export default function OtherBooks() {
    console.log(Books);

    return (
        <div className="min-h-lvh flex flex-col gap-10 dark:bg-slate-800 dark:text-white" >
            <div className="h-1/5  flex flex-col justify-center items-center mt-7" data-aos={"zoom-in"}>
                <hr className="bg-gray-400 h-[3px] w-[700px] m-1"></hr>
                <h1 className="text-3xl font-bold text-blue-700 mb-2">Explore More Books</h1>
                <hr className="bg-gray-400 h-[3px] w-[900px] mb-2"></hr>
                <p className="text-sm font-medium text-gray-400">Diverse Collections of Books</p>
            </div>
            <div className="min-h-4/5 flex justify-center items-center gap-8  flex-wrap " data-aos="slide-right">
                {Books.slice(0, 8).map((book) => (<BooksCard image={book.bookImage} title={book.bookTitle} author={book.bookAuthor} about={book.bookDescription}></BooksCard>))}
            </div>
        </div>
    )
}
