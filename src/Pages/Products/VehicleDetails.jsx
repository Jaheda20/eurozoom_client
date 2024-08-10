import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../Shared/Footer";
import DetailsNav from "./DetailsNav";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const VehicleDetails = () => {

    const vehicles = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const vehicle = vehicles.find(vehicle => vehicle.id === idInt)

    return (
        <div>
            <DetailsNav></DetailsNav>

            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row mt-20 gap-10">
                <div className="md:w-2/3 bg-slate-100 p-4">
                <img src={vehicle.image} alt="" className=""/>
                    <div className="flex items-center justify-between text-2xl">
                        <h1>{vehicle.brand} {vehicle.name}</h1>
                        <h1>SEK {vehicle.price}</h1>
                    </div>

                </div>

                <div className="md:w-1/3 bg-slate-100 p-4">
                    <div className="flex gap-4">
                        <div className="avatar">
                            <div className="w-16 h-16 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-blue-700 text-lg ">Marie Andersson</h1>
                            <p className="mt-2 text-slate-500">Private Seller</p>
                            <p className=" text-slate-500 flex items-center gap-2"><MdEmail />
                            marie@gmail.com</p>
                            <p className=" text-slate-500 flex items-center gap-2"><BsTelephoneFill />
                            +46 76 846 2248</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>

        </div>
    );
};

export default VehicleDetails;