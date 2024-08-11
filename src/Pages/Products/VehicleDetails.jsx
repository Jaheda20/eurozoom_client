import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../Shared/Footer";
import DetailsNav from "./DetailsNav";
import { MdEmail } from "react-icons/md";
import { BsFillFuelPumpFill, BsTelephoneFill } from "react-icons/bs";
import { FaCar, FaCarSide, FaRoad } from "react-icons/fa";
import { VscLayoutSidebarLeft, VscLayoutSidebarRight } from "react-icons/vsc";
import { PiEngineFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { FaGear } from "react-icons/fa6";
import VehicleInfo from "../../Components/AllVehicles/VehicleInfo";
import SellerInfo from "../../Components/AllVehicles/SellerInfo";

const VehicleDetails = () => {

    const vehicles = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const vehicle = vehicles.find(vehicle => vehicle.id === idInt)

    return (
        <>
            <style>
                {`
                .custom-shape {
                    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 100%);
                }
                `}
            </style>


            <div>
                <DetailsNav></DetailsNav>

                <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row  mt-20 gap-10 ">
                    <div className="md:w-2/3 p-4">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-blue-700 text-xl font-semibold">{vehicle.brand}
                                <br />
                                <span className="text-slate-700 font-bold text-3xl">{vehicle.name}</span>
                            </h1>
                            <h1 className="custom-shape bg-blue-700 px-8 py-5 text-slate-100 text-2xl text-center">SEK {vehicle.price}</h1>
                        </div>
                        <img src={vehicle.image} alt="" className="w-full" />

                        <VehicleInfo vehicle={vehicle}></VehicleInfo>
                        
                    </div>
                    <SellerInfo vehicle={vehicle}></SellerInfo>



                    {/* <div className="md:w-1/3 bg-slate-100 p-4">
                        <div className="flex gap-4">
                            <div className="avatar">
                                <div className="w-16 h-16 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold text-blue-700 text-lg ">{vehicle.private_seller_info?.name}</h1>
                                <p className="mt-2 text-slate-500">Private Seller</p>
                                <p className=" text-slate-500 flex items-center gap-2"><MdEmail />
                                    {vehicle.private_seller_info?.email}</p>
                                <p className=" text-slate-500 flex items-center gap-2"><BsTelephoneFill />
                                    {vehicle.private_seller_info?.phone_number}</p>
                            </div>
                        </div>
                    </div> */}

                </div>
                <Footer></Footer>

            </div>

        </>

    );
};

export default VehicleDetails;