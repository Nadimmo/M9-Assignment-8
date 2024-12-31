/* eslint-disable react/prop-types */
import { MdContactPage } from "react-icons/md";
import { BiGroup } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const WishlistBookDetails = ({ wishlist }) => {
  const { image, author, rating, yearOfPublishing, publisher, totalPages, category, tags, bookName, bookId } = wishlist;

  return (
    <div className="p-5">
      <div className="hero relative right-7 lg:right-0 lg:p-10">
        <div className="hero-content flex-col lg:flex-row border border-gray-300 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 w-[320px] lg:w-[100%]">
          <img
            src={image}
            alt="Book Cover"
            className="rounded-lg shadow-lg lg:mr-20 bg-gray-100  hover:scale-105 transition-transform duration-300"
          />
          <div className="p-5 lg:p-0">
            <h1 className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300">{bookName}</h1>
            <p className="text-lg mt-2 text-gray-600">Writer: <span className="font-medium">{author}</span></p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <p className="font-bold text-gray-700">Tag:</p>
                <p className="text-[#23BE0A] ml-4">#{tags[0]}</p>
              </div>
              <div className="flex items-center">
                <CiLocationOn className="text-2xl text-gray-600" />
                <p className="ml-4 text-gray-700">Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-4 border-b border-dotted border-gray-300 pb-4">
              <p className="flex items-center mr-5">
                <BiGroup className="text-2xl text-gray-600" />
                <span className="font-bold text-gray-800 ml-2">{publisher}</span>
              </p>
              <p className="flex items-center">
                <MdContactPage className="text-2xl text-gray-600" />
                <span className="font-bold text-gray-800 ml-2">{totalPages} pages</span>
              </p>
            </div>

            <div className="lg:grid grid-cols-3 gap-4 mt-5">
              <p className="text-[#328EFF] bg-[#328EFF] bg-opacity-15 py-2 px-4 rounded-3xl text-center shadow-md hover:bg-[#328EFF] hover:text-white transition-colors duration-300">
                Category: <span>{category}</span>
              </p>
              <p className="text-[#FFAC33] bg-[#FFAC33] bg-opacity-15 py-2 px-4 rounded-3xl text-center shadow-md hover:bg-[#FFAC33] hover:text-white transition-colors duration-300 lg:mt-0 mt-2">
                Rating: {rating}
              </p>
              <Link to={`/books/${bookId}`}>
                <p className="bg-[#23BE0A] py-2 px-4 rounded-3xl text-white text-center shadow-md hover:bg-green-700 transition-colors duration-300  lg:mt-0 mt-2">
                  View Details
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistBookDetails;
