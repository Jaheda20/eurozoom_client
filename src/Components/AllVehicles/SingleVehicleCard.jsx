import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaPhoneAlt, FaRoad } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiEngineFill, PiLineVerticalThin } from "react-icons/pi";


const SingleVehicleCard = ({ vehicles }) => {

    return (
        <>
            <style>
                {`
                .custom-shape {
                    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 100%);
                }
                `}
            </style>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="">
                    <img src={vehicles.image} alt="" className="md:w-64" />
                </div>
                {/* info */}
                <div className="flex-1">
                    <div className="flex justify-between">
                        <h1 className="font-semibold text-blue-700 text-xl">{vehicles.brand}
                            <br /> <span className="font-semibold text-slate-700 text-2xl"> {vehicles.name}</span>
                        </h1>
                        <div className="custom-shape bg-blue-700">
                            <h2 className=" text-white font-bold px-6 py-2 text-center text-xl">SEK {vehicles.price}</h2>
                        </div>

                    </div>

                    <div className="mt-8 w-full flex">
                        <div className="flex gap-2">
                            <p className="text-slate-500"><BsFillFuelPumpFill /></p>
                            <div>
                                <p className="uppercase text-slate-500 text-xs"> Fuel Type</p>
                                <p className="text-slate-700 font-bold text-xs">
                                    {vehicles.features?.find(feature => feature.startsWith("Fuel:"))?.replace("Fuel:", "").trim() || "not available"}</p>

                            </div>

                        </div>
                        <div className="flex items-center">
                            <PiLineVerticalThin size={40} />
                        </div>

                        <div className="flex gap-2">
                            <p className="text-slate-500"><PiEngineFill />
                            </p>
                            <div>
                                <p className="uppercase text-slate-500 text-xs"> Engine</p>
                                <p className="text-slate-700 font-bold text-xs">
                                    {vehicles.engine}</p>

                            </div>

                        </div>
                        <div className="flex items-center">
                            <PiLineVerticalThin size={40} />
                        </div>

                        <div className="flex gap-2">
                            <p className="text-slate-500"><FaRoad />

                            </p>
                            <div>
                                <p className="uppercase text-slate-500 text-xs"> Mileage</p>
                                <p className="text-slate-700 font-bold text-xs">
                                    {vehicles.features?.find(feature => feature.startsWith("Mileage:"))?.replace("Mileage:", "").trim() || "not available"}</p>

                            </div>

                        </div>
                        <div className="flex items-center">
                            <PiLineVerticalThin size={40} />
                        </div>

                        <div className="flex gap-2">
                            <p className="text-slate-500"><FaMapMarkerAlt />

                            </p>
                            <div>
                                <p className="uppercase text-slate-500 text-xs"> Location</p>
                                <p className="text-slate-700 font-bold text-xs">
                                    {vehicles.location}</p>

                            </div>

                        </div>




                    </div>

                    {/* contact person */}
                    <div className="mt-8 flex gap-4">
                        <div className="avatar">
                            <div className="w-16 h-16 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div>
                            <p className="text-slate-500">Private Seller:
                                <span className="text-blue-700"> {vehicles.private_seller_info?.name}</span>
                            </p>
                            <p className="text-blue-700 flex items-center gap-3"> <MdEmail />

                                <span className="text-slate-700">
                                    {vehicles.private_seller_info?.email}
                                </span>
                            </p>
                            {/* <p className="text-blue-700 flex items-center gap-3"> <FaPhoneAlt />
                                <span className="text-slate-700">
                                    {vehicles.private_seller_info?.phone_number}
                                </span>
                            </p> */}
                        </div>

                    </div>

                </div>
            </div>
            <div className="w-full my-12">
                <div className="divider"></div>
            </div>
        </>
    );
};

export default SingleVehicleCard;