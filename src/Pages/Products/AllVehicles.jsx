import { useEffect, useState } from "react";

const AllVehicles = () => {

    const [allVehicles, setAllVehicles] = useState([]);

    useEffect(() => {
        fetch('/vehicle.json')
        .then(res => res.json())
        .then(data => setAllVehicles(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center w-full text-center my-20">
                <h3 className="font-extrabold text-lg text-blue-800 uppercase">Explore All Vehicles</h3>
                <h1 className="text-3xl lg:text-5xl font-bold mt-6 md:leading-9 text-slate-600">Discover Our Full Range of Vehicles</h1>
                
            </div>
        </div>
    );
};

export default AllVehicles;