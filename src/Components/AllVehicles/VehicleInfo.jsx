import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCar, FaRoad } from "react-icons/fa";
import { FaCarSide, FaGear } from "react-icons/fa6";
import { PiEngineFill } from "react-icons/pi";
import { SiTicktick } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { VscLayoutSidebarLeft, VscLayoutSidebarRight } from "react-icons/vsc";

const VehicleInfo = ({ vehicle }) => {

    return (
        <div className="mt-14">
            {/* row 1 */}
            <div className="w-full grid md:grid-cols-3 gap-6 px-4">
                <div className="">
                    <div className="flex items-center w-full">
                        <p className="text-blue-700 md:mr-4 mr-8"><FaCar size={20} />
                        </p>
                        <p className="text-slate-500 md:mr-12 mr-20">Make</p>
                        <h2 className="text-slate-700 text-lg font-bold">{vehicle.brand}</h2>
                    </div>
                    <div className="divider w-full"></div>
                </div>

                <div className="">
                    <div className="flex items-center">
                        <p className="text-blue-700 md:mr-4 mr-8"><FaCarSide size={20} />
                        </p>
                        <p className="text-slate-500 md:mr-6 mr-20">Model</p>
                        <h2 className="text-slate-700 text-lg font-bold">{vehicle.name}</h2>

                    </div>
                    <div className="divider w-full"></div>
                </div>

                <div className="">
                    <div className="flex items-center">
                        <p className="text-blue-700 md:mr-4 mr-8"><SlCalender size={20} />
                        </p>
                        <p className="text-slate-500 md:mr-12 mr-24">Year</p>
                        <h2 className="text-slate-700 text-lg font-bold">{vehicle.year}</h2>

                    </div>
                    <div className="divider w-full"></div>
                </div>
            </div>

            {/* row 2 */}
            <div className="w-full grid md:grid-cols-3 gap-6 px-4">
                <div className="">
                    <div className="flex items-center w-full">
                        <p className="text-blue-700 md:mr-4 mr-8"><BsFillFuelPumpFill size={20} />
                        </p>
                        <p className="text-slate-500 md:mr-12 mr-24">Fuel</p>
                        <h2 className="text-slate-700 text-lg font-bold">{vehicle.features?.find(feature => feature.startsWith("Fuel:"))?.replace("Fuel:", "").trim() || "not available"}</h2>
                    </div>
                    <div className="divider w-full"></div>
                </div>

                <div className="">
                    <div className="flex items-center">
                        <p className="text-blue-700 md:mr-4 mr-8"><PiEngineFill size={20} />
                        </p>
                        <p className="text-slate-500 md:mr-6 mr-20">Engine</p>
                        <h2 className="text-slate-700 text-lg font-bold">{vehicle.engine}</h2>

                    </div>
                    <div className="divider w-full"></div>
                </div>

                <div className="">
                    <div className="flex items-center">
                        <p className="text-blue-700 md:mr-4 mr-8"><FaRoad size={20} />
                        </p>
                        <p className="text-slate-500 md:mr-6 mr-20">Mileage</p>
                        <h2 className="text-slate-700 text-lg font-bold">{vehicle.features?.find(feature => feature.startsWith("Mileage:"))?.replace("Mileage:", "").trim() || "not available"}</h2>

                    </div>
                    <div className="divider w-full"></div>
                </div>
            </div>

            {/* row 3 */}
            <div className="w-full grid md:grid-cols-3 gap-6 px-4">
                <div className="">
                    <div className="flex items-center w-full">
                        <p className="text-blue-700 md:mr-4 mr-8"><VscLayoutSidebarLeft size={20} />
                        </p>
                        <p className="text-slate-500 md:mr-6 mr-20">Exterior</p>
                        <h2 className="text-slate-700 text-lg font-bold">{vehicle.exterior}</h2>
                    </div>
                    <div className="divider w-full md:hidden"></div>
                </div>

                <div className="">
                    <div className="flex items-center">
                        <p className="text-blue-700 md:mr-4 mr-8"><VscLayoutSidebarRight size={20} />
                        </p>
                        <p className="text-slate-500 md:mr-6 mr-20">Interior</p>
                        <h2 className="text-slate-700 text-lg font-bold">{vehicle.interior}</h2>

                    </div>
                    <div className="divider w-full md:hidden"></div>
                </div>

                <div className="">
                    <div className="flex items-center">
                        <p className="text-blue-700 md:mr-4 mr-8"><FaGear size={20} />
                        </p>
                        <p className="text-slate-500 md:mr-6 mr-20">Gearbox</p>
                        <h2 className="text-slate-700 text-lg font-bold">{vehicle.features?.find(feature => feature.startsWith("Gearbox:"))?.replace("Gearbox:", "").trim() || "not available"}</h2>

                    </div>
                    <div className="divider w-full md:hidden"></div>
                </div>
            </div>
            <hr className="border-4 my-14 border-blue-700" />
            
            <div className="mb-14">
                <h2 className="text-2xl font-bold text-slate-700">Features</h2>
                <div className="mt-6 space-y-2">
                    <p className="text-blue-700 flex items-center gap-4"> <SiTicktick size={20}/>
                        <span className="text-slate-700 text-lg font-semibold"> Height:
                            <span className="ml-2">{vehicle.features?.find(feature => feature.startsWith("Height:"))?.replace("Height:", "").trim() || "not available"}</span>
                            
                        </span>
                    </p>
                    <p className="text-blue-700 flex items-center gap-4"> <SiTicktick size={20}/>
                        <span className="text-slate-700 text-lg font-semibold">Length:
                            <span className="ml-2">
                            {vehicle.features?.find(feature => feature.startsWith("Length:"))?.replace("Length:", "").trim() || "not available"}
                            </span>
                            
                        </span>
                    </p>
                    <p className="text-blue-700 flex items-center gap-4"> <SiTicktick size={20}/>
                        <span className="text-slate-700 text-lg font-semibold">Width:
                            <span className="ml-2">
                            {vehicle.features?.find(feature => feature.startsWith("Width:"))?.replace("Width:", "").trim() || "not available"}
                            </span>
                            
                        </span>
                    </p>
                    <p className="text-blue-700 flex items-center gap-4"> <SiTicktick size={20}/>
                        <span className="text-slate-700 text-lg font-semibold"> Operating Weight:
                            <span className="ml-2">
                            {vehicle.features?.find(feature => feature.startsWith("Operating_Weight:"))?.replace("Operating_Weight:", "").trim() || "not available"}
                            </span>
                            
                        </span>
                    </p>
                    <p className="text-blue-700 flex items-center gap-4"> <SiTicktick size={20}/>
                        <span className="text-slate-700 text-lg font-semibold"> Load Weight: 
                            <span className="ml-2">{vehicle.features?.find(feature => feature.startsWith("Load_Weight:"))?.replace("Load_Weight:", "").trim() || "not available"}</span>
                            
                        </span>
                    </p>
                    <p className="text-blue-700 flex items-center gap-4"> <SiTicktick size={20}/> 
                        <span className="text-slate-700 text-lg font-semibold">Total Weight:
                            <span className="ml-2">
                            {vehicle.features?.find(feature => feature.startsWith("Total_Weight:"))?.replace("Total_Weight:", "").trim() || "not available"}
                                </span> 
                            
                        </span>
                    </p>
                </div>
            </div>
            <hr className="border-4 my-14 border-blue-700" />


        </div>
    );
};

export default VehicleInfo;