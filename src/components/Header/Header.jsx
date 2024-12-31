import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/"><a href="">Home</a></NavLink></li>
                        <li><NavLink to="listedBook"><a href="">Listed Book</a></NavLink></li>
                        <li><NavLink to="readPage"><a href="">Pages to Read</a></NavLink></li>
                        <li><NavLink to="article"><a href="">Article</a></NavLink></li>
                        <li><NavLink to="more"><a href="">More</a></NavLink></li>
                <div className="">
                    <a className="btn bg-[#23BE0A]">Sign in</a>
                    <a className="btn bg-[#59C6D2]">Sign up</a>
                </div>
                    </ul>
                    </div>
                    <a className=" hover:cursor-pointer ml-5  text-xl">The Guardian Books </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/"><a href="">Home</a></NavLink></li>
                        <li><NavLink to="listedBook"><a href="">Listed Book</a></NavLink></li>
                        <li><NavLink to="readPage"><a href="">Pages to Read</a></NavLink></li>
                        <li><NavLink to="article"><a href="">Article</a></NavLink></li>
                        <li><NavLink to="more"><a href="">More..</a></NavLink></li>
                    </ul>
                </div>
                </div>
        </div>
    );
};

export default Header;