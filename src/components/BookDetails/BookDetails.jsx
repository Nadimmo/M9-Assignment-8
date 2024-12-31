import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveToBookCart, saveToBookWishList } from "../../utilitis/locatstorage";
import { useState } from "react";
// react toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId === idInt);
    const { image, author, rating, review, yearOfPublishing, publisher, totalPages, category, tags, bookName } = book;
    const [bookAdd, setBookAdd] = useState(false);
    const [wishlistAdd, setWishListsAdd] = useState(false);

    const handlerBook = () => {
        saveToBookCart(idInt);
        if (!bookAdd) {
            setBookAdd(true);
            toast('You have applied successfully');
        } else {
            toast('You have already applied');
        }
    };

    const handlerBook2 = () => {
        saveToBookWishList(idInt);
        if (!wishlistAdd) {
            setWishListsAdd(true);
            toast('You have applied successfully');
        } else {
            toast('You have already applied');
        }
    };

    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen">
            <h1 className="text-3xl font-bold text-center py-4">Book Details</h1>

            <div className="hero bg-white shadow-lg rounded-lg   p-6 lg:p-10">
                <div className="hero-content flex flex-col lg:flex-row">
                    <img src={image} className="lg:w-[340px] lg:h-[420px] rounded-lg shadow-xl hover:scale-105 transition-transform duration-300" />
                    <div className="lg:ml-8">
                        <h1 className="text-4xl font-bold mb-2 text-blue-700 hover:text-blue-900 transition-colors duration-300">{bookName}</h1>
                        <p className="text-xl border-b-2 mt-2 pb-4 border-dotted border-gray-300">Writer: <span className="font-medium text-gray-700">{author}</span></p>
                        <p className="text-lg border-b-2 mt-2 pb-4 border-dotted border-gray-300">Category: <span className="font-medium text-gray-700">{category}</span></p>
                        <p className="py-6 text-gray-700">Review: {review}</p>
                        <div className="flex justify-between mt-2 border-b-2 pb-4 border-dotted border-gray-300">
                            <p className="text-green-600">#{tags[0]}</p>
                            <p className="ml-2 text-green-600">#{tags[1] || tags[0]}</p>
                        </div>
                        <div className="text-xl mt-4">
                            <p>Number of Pages: <span className="font-bold text-gray-800">{totalPages}</span></p>
                            <p>Publisher: <span className="font-bold text-gray-800">{publisher}</span></p>
                            <p>Year of Publishing: <span className="font-bold text-gray-800">{yearOfPublishing}</span></p>
                            <p>Rating: <span className="font-bold text-yellow-500">{rating}</span></p>
                        </div>
                        <div className="mt-6 flex">
                            <Link>
                                <button 
                                    onClick={handlerBook} 
                                    className="btn bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300 px-4 py-2 rounded-md mr-2">
                                    Read
                                </button>
                            </Link>
                            <Link>
                                <button 
                                    onClick={handlerBook2}  
                                    className="btn bg-green-500 text-white hover:bg-green-700 transition-colors duration-300 px-4 py-2 rounded-md">
                                    Wishlist
                                </button>
                            </Link>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
