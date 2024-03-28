/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import banner from "../../../src/imgae/pngwing 1.jpeg"
import Books from "../Books/Books";
const Home = () => {
    return (
        <div>
            <div className="mx-4 lg:border bg-white rounded-xl">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={banner} className="lg:max-w-sm rounded-lg shadow-2xl" />
                        <div>
                        <h1 className="text-5xl font-bold">Books to freshen <br /> up your bookshelf</h1>
                        <p className="py-6">Exploring the Foundations A Comprehensive Review of 'Introduction to Psychology' offers an insightful examination of key concepts, theories, and research methods. With clear explanations and engaging examples, this textbook serves as an indispensable resource for students embarking on their journey into the fascinating realm of psychology.  </p>
                        <Link to="/listedBook"> <button className="btn hover:text-black bg-[#23BE0A] text-white">View The List</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <Books></Books>
        </div>
       
    );
};

export default Home;