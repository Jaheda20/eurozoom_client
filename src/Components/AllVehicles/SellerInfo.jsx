import { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const SellerInfo = ({ vehicle }) => {

    const [showNumber, setShowNumber] = useState(false);


    const handleToggle = () => {
        setShowNumber(!showNumber)
    }
    const maskedNumber = vehicle.private_seller_info?.phone_number.replace(/.(?=.{4})/g, '*');

    return (
        <div className="md:w-1/3 p-4 bg-yellow-300 flex flex-col">

            <div className="flex gap-4">
                <div className="avatar">
                    <div className="w-16 h-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-blue-700 text-lg ">{vehicle.private_seller_info?.name}</h1>
                    <p className="mt-2 text-slate-500">Private Seller</p>
                    <div className="divider"></div>
                    {/* <p className=" text-slate-500 flex items-center gap-2"><MdEmail />
                        {vehicle.private_seller_info?.email}</p> */}

                </div>

            </div>
            <p className="text-blue-700 py-8 flex items-center justify-start gap-4 shadow-xl rounded-lg bg-slate-100 px-4"><BsTelephoneFill size={24} />
                <span className="text-slate-500">
                    {showNumber ? vehicle.private_seller_info?.phone_number : maskedNumber}
                </span>
                <span onClick={handleToggle} className="ml-2 text-blue-700 underline cursor-pointer">
                    {showNumber ? 'Hide Number' : 'Show Number'}
                </span>
            </p>

            <a href={`mailto:${vehicle.private_seller_info?.email}`}>
                <p className="text-blue-700 py-8 flex items-center justify-start gap-4 shadow-xl rounded-lg bg-slate-100 px-4 mt-6"><MdEmail size={24} />
                    <span className="text-slate-500 text-lg ">
                        Email to Seller
                    </span>
                </p>
            </a>
            <Link to={'/contact'}>
                <p className="text-blue-700 py-8 flex items-center justify-start gap-4 shadow-xl rounded-lg bg-slate-100 px-4 mt-6"><FaLocationArrow size={24} />
                    <span className="text-slate-500 text-lg ">
                        Contact us
                    </span>
                </p>
            </Link>


        </div>
    );
};

export default SellerInfo;