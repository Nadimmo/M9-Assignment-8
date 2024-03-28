/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    // console.log(book)
    const {image, bookId, author, rating, category, tags, bookName} = book
    return (
        <div>
            <div className="card p-6 h-[500px] shadow-xl">
           <Link to={`/books/${bookId}`}><figure> <img  src={image} alt="Books"className="mt-4" /></figure></Link> 
            <div className="card-body">
                <div className="flex justify-between">
                    <p className=" btn w-[22%] border-sky-200 rounded-2xl">{tags[0]}</p>
                    <p className="border-2 btn w-[20%] border-sky-200 rounded-2xl ml-2">{tags[0]}</p>
                </div>
                <h2 className="card-title text-xl font-bold">{bookName}</h2>
                <p className="text-lg border-b-2 pb-4 border-dotted border-gray-300">Writer : {author}</p>
                <div className="flex justify-between">
                    <p className="text-lg">{category}</p>
                    <p className="text-lg flex"> <span className="relative top-1 right-1"><FaRegStar /></span> Raing{rating}</p>
                </div>
            </div>
            </div><br />
        </div>
    );
};

export default Book;