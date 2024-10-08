import { motion } from "framer-motion";
import './vehicleCard.css';
import { FaRoad } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";

const VehicleCard = ({ vehicle }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="card"
        >
            <Link to={`/vehicle/${vehicle.id}`}>
                <div className="bg-base-100 hover:border w-96 p-4">
                    <figure className="relative md:h-48 rounded-sm w-full">
                        <img
                            src={vehicle.image}
                            alt=""
                            className="md:h-48 w-full scale-95" />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-20 scale-95"></div>               
                        {/* <div className="absolute inset-0"></div> */}

                    </figure>
                    <div className="my-3 px-2 flex justify-between gap-2">
                        <h2 className="text-xl font-bold text-slate-700 w-3/5">{vehicle.brand} {vehicle.name}</h2>
                        <div className="custom-shape bg-blue-700 w-2/5">
                        <h2 className=" text-white font-bold px-4 py-3 text-center">SEK {vehicle.price}</h2>

                        </div>
                        {/* <h2 className="bg-blue-700 text-white px-2 py-1 rounded custom-shape">SEK {vehicle.price}</h2> */}

                    </div>
                    <hr className="mt-4 mb-2 border" />
                    <div className="flex items-center justify-between px-2 text-slate-400">

                        <p className="flex items-center gap-2">
                            {vehicle.features?.find(feature => feature.startsWith("Gearbox:"))?.replace("Gearbox:", "").trim() || "Gearbox not available"}
                            <FaGear />

                        </p>
                        <p className="flex items-center gap-2">
                            {vehicle.features?.find(feature => feature.startsWith("Mileage:"))?.replace("Mileage:", "").trim() || "Mileage not available"}
                            <FaRoad />
                        </p>
                    </div>



                </div>

            </Link>
            
        </motion.div>
    );
};

export default VehicleCard;