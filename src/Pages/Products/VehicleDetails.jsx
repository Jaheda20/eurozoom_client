import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../../Shared/Footer";
import DetailsNav from "./DetailsNav";
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

                    <div className="md:w-2/3 p-4 md:p-0">
                    <div className="breadcrumbs text-slate-500 mb-10">
                            <ul>
                                <li> <Link to={'/'}>Home</Link></li>
                                <li><a>{vehicle.category}</a></li>
                                <li>{vehicle.brand} {vehicle.name}</li>
                            </ul>
                        </div>                     
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

                </div>
                <Footer></Footer>

            </div>

        </>

    );
};

export default VehicleDetails;