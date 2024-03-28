import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="font-bold text-6xl text-center mt-[200px]">This Page is Not Found!</h1>
            <p className="text-xl mt-5 text-center">Please You Can Back Where From You Came</p> <br />
            <Link to={"/"}> <button className="btn btn-error ml-32 lg:ml-[600px]">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;