/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookId, author, rating, category, tags, bookName } = book;

  return (
    <div className="lg:p-4  lg:w-full lg:mt-0 mt-4">
      <div className="p-6 lg:h-[500px] shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 rounded-lg">
        <Link to={`/books/${bookId}`}>
          <figure>
            <img
              src={image}
              alt="Book Cover"
              className="mt-4 rounded-lg  mx-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </figure>
        </Link>
        <div className="mt-10">
          <div className="lg:grid grid-cols-2 gap-4">
            <p className="text-sm text-white bg-blue-500 p-2 lg:mt-0 mt-2 rounded-2xl shadow-md hover:bg-blue-700 transition-colors duration-300">
              #{tags[0]}
            </p>
            <p className="text-sm text-white bg-green-500 p-2 lg:mt-0 mt-2 rounded-2xl shadow-md hover:bg-green-700 transition-colors duration-300">
              #{tags[1] || tags[0]}
            </p>
          </div>
          <h1 className="card-title text-xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300 mt-6">
            {bookName}
          </h1>
          <p className="text-lg text-gray-600 border-b-2 pb-4 border-dotted border-gray-300">
            Writer: <span className="font-medium">{author}</span>
          </p>
          <div className="lg:grid grid-cols-2 mt-6">
            <p className="text-lg text-gray-700 font-medium">{category}</p>
            <p className="text-lg flex items-center text-yellow-500">
              <FaRegStar className="mr-1" /> Rating: {rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
