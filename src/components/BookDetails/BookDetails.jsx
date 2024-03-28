import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveToBookCart, saveToBookWishList } from "../../utilitis/locatstorage";
import { useState } from "react";
// react toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
const BookDetails = () => {
    const books = useLoaderData()
    const {bookId} = useParams()
    const idInt = parseInt(bookId)
    const book = books.find(book => book.bookId === idInt)
    // console.log(book)
    const {image, author, rating, review, yearOfPublishing, publisher, totalPages , category, tags, bookName} = book
    const [bookAdd, setBookAdd] = useState(false);
    const [wishlistAdd, setWishListsAdd] = useState(false)

    const handlerBook = ()=>{
        saveToBookCart(idInt)
        // toast condition
        if (!bookAdd) {
            setBookAdd(true);
            toast('You have applied successfully');
        } else {
            toast('You have already applied'); // Alert toast if clicked again
        }

    }
    const handlerBook2 = ()=>{
        saveToBookWishList(idInt)
        // toast condition
        if (!wishlistAdd) {
            setWishListsAdd(true);
            toast('You have applied successfully');
        } else {
            toast('You have already applied'); // Alert toast if clicked again
        }

    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Book Details</h1>
            <br />

            <div>
                <div className="hero  bg-base-200 lg:p-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className=" lg:w-[340px] lg:h-[420px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="text-2xl border-b-2 mt-2 pb-4 border-dotted border-gray-300">Writer : {author}</p>
                        <p className="text-lg border-b-2 mt-2 pb-4 border-dotted border-gray-300">{category}</p>                    
                        <p className="py-6">Review : {review}</p>
                        <div className="flex justify-between mt-2 border-b-2  pb-4 border-dotted border-gray-300">
                            <p className="text-[#23BE0A]">#{tags[0]}</p>
                            <p className="ml-2 text-[#23BE0A]">#{tags[0]}</p>
                        </div>
                        <div className="text-xl">
                            <p>Number of Page : <span className="font-bold">{totalPages}</span> </p>
                            <p>Publisher : <span className="font-bold">{publisher}</span></p>
                            <p>Year of Publishing : <span className="font-bold">{yearOfPublishing}</span></p>
                            <p>Rating : <span className="font-bold">{rating}</span></p>
                        </div>
                        <div className="mt-4">
                            <Link><button onClick={handlerBook} className="btn border-2 border-sky-200 lg:w-[15%] bg-opacity-0">Read</button></Link>
                            <Link><button onClick={handlerBook2}  className="btn hover:text-black text-white border-sky-200 lg:w-[15%] ml-2 bg-[#50B1C9]">Wishlist</button></Link>
                        </div> 
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;