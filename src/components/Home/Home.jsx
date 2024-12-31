/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import banner from "../../../src/imgae/pngwing 1.jpeg"
import Books from "../Books/Books";
import { Helmet } from "react-helmet";
import Author from "../Author/Author";
const Home = () => {
    const blogs = [
        {
            id: 1,
            title: "Top 10 Books of 2024",
            excerpt:
                "Discover the most captivating reads of the year, handpicked by our editorial team.",
            image: "https://i.ibb.co.com/Q8xSRkp/Books-1.jpg",
            link: "#",
        },
        {
            id: 2,
            title: "Author Spotlight: Jane Doe",
            excerpt:
                "An exclusive interview with Jane Doe on her latest bestseller and writing process.",
            image: "https://i.ibb.co.com/jhQw6Rd/Books-4.jpg",
            link: "#",
        },
        {
            id: 3,
            title: "How to Build a Reading Habit",
            excerpt:
                "Practical tips to help you make reading a joyful and consistent part of your life.",
            image: "https://i.ibb.co.com/8XJr03N/Books-5.jpg",
            link: "#",
        },
    ];
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
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
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                                    <a
                                        href={blog.link}
                                        className="text-blue-500 hover:text-blue-700 font-bold"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Author></Author>
        </div>

    );
};

export default Home;