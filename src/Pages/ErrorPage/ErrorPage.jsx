import Lottie from "lottie-react";
import error from "../../assets/error.json"
import { Link } from "react-router-dom";
import { IoArrowUndoCircleSharp } from "react-icons/io5";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">

            <div className="md:w-1/2">
                <Lottie animationData={error} loop={true} />
            </div>
            <Link to="/">
            <button className="px-4 btn mt-10 hover:underline flex items-center gap-2 text-xl hover:text-blue-800 font-bold text-sky-700 bg-gray-300 rounded-xl"> <IoArrowUndoCircleSharp size={30}/>Go back to Home Page</button>
            </Link>
        </div>
    );
};

export default ErrorPage;