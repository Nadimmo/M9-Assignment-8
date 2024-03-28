/* eslint-disable react/prop-types */
import { MdContactPage } from "react-icons/md";
import { BiGroup } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const ReadBookDetails = ({readBook}) => {
    // console.log(displayBook)
        const {image, author, rating, yearOfPublishing, publisher, totalPages , category, tags, bookName} = readBook

    return (
        <div>
            <div className="hero relative right-7 lg:right-0 lg:p-10">
            <div className="hero-content flex-col lg:flex-row border-2 border-gray-300 rounded-xl  w-[320px] lg:w-[100%]">
                    <img src={image} className="rounded-lg shadow-2xl lg:mr-36 bg-base-200" />
                    <div >
                        <h1 className="text-xl font-bold">{bookName}</h1>
                        <p className="text-lg  mt-2">Writer : {author}</p>
                        <div className="mt-2 lg:flex">
                            <div className="lg:flex">
                                <p className="font-bold text-black ml-5 lg:ml-0">Tag</p>
                                <p className="text-[#23BE0A] ml-4">#{tags[0]}</p>
                            </div>
                            <div className="lg:flex">
                                <p className=" text-[#23BE0A] ml-4">#{tags[0]}</p>
                                <p className="flex ml-4"> <span className="text-2xl"><CiLocationOn />
                                </span > Year of Publishing : <span className="font-bold ">{yearOfPublishing}</span></p>
                            </div>
                            
                        </div>

                        <div className=" lg:flex mt-3 border-b-2  pb-4 border-dotted border-gray-300">
                            <p className="flex ml-5 lg:ml-0"> <span className="text-2xl"><BiGroup /></span> 
                            <span className="font-bold ml-2"> {publisher}</span></p>

                            <p className="ml-5 flex"> <span className="text-2xl"><MdContactPage /></span> 
                            <span className="font-bold ml-2">{totalPages}</span> </p>
                        </div>
            
                        <div className="text-lg grid grid-cols-2 lg:grid-cols-3 mt-5">
                            <p className="text-[#328EFF] btn bg-[#328EFF] bg-opacity-15 rounded-3xl">Category : <span>{category}</span> </p>
                            <p className="ml-5  btn  text-[#FFAC33]  bg-[#FFAC33] bg-opacity-15 rounded-3xl">Rating : {rating}</p>
                            <Link to={`/books/${readBook.bookId}`}><p className="mt-5 ml-16 w-[100%] lg:ml-5 lg:mt-0 btn bg-[#23BE0A] rounded-3xl text-white">View Details</p></Link>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};

export default ReadBookDetails;