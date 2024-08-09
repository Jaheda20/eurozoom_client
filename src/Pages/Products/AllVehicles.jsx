import { useEffect, useState } from "react";

const AllVehicles = () => {

    const [allVehicles, setAllVehicles] = useState([]);

    useEffect(() => {
        fetch('/vehicle.json')
            .then(res => res.json())
            .then(data => setAllVehicles(data))
    }, [])

    console.log(allVehicles)

    return (
        <div className="max-w-7xl mx-auto w-full ">
            <div className="flex flex-col items-center justify-center w-full text-center my-20">
                <h3 className="font-extrabold text-lg text-blue-800 uppercase">Explore All Vehicles</h3>
                <h1 className="text-3xl lg:text-5xl font-bold mt-6 md:leading-9 text-slate-600">Discover Our Full Range of Vehicles</h1>
            </div>

            <div className="w-full md:flex gap-6">
                <div className="w-1/3 bg-slate-100">
                    <h1>Filter and search functionalities </h1>
                </div>

                <div className="md:w-2/3 bg-slate-100 p-4">
                    <div className="flex items-center justify-between mb-10">
                    <div>
                    <form className="flex items-center justify-center ">
                    <label className="input input-bordered flex items-center gap-2 my-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="w-72" name="search"  placeholder="Search by Keyword" />
                    </label>
                </form>
                    </div>
                    
                    <div className="flex items-center gap-3 ">
                        <p className="text-slate-500 uppercase ">Sort By: </p>
                        <select name="sort" id="sort" className='border bg-slate-50 p-2 rounded-lg text-slate-500'>
                            <option value="">Price: Highest first</option>
                            <option value="">Price: Lowest first</option>
                            <option value="">Mileage: Highest first</option>
                            <option value="">Mileage: Lowest first</option>
                        </select>

                    </div>
                    </div>
                    <hr className="mb-20 border-dashed" />


                    {
                        allVehicles.map(vehicles =>
                            <div key={vehicles.id}>
                                <div className="flex flex-col md:flex-row w-full gap-4 mb-6">
                                    <img src={vehicles.image} alt="" className="w-96" />
                                    <div className="space-y-4 flex-1 px-2">
                                        <div className="flex items-center justify-between">
                                            <p className="text-lg font-semibold text-slate-500">{vehicles.location}</p>
                                            <p className="text-lg font-semibold text-slate-500">Ref. no. {vehicles.id} </p>

                                        </div>

                                        <h1 className="text-2xl font-semibold text-blue-800">{vehicles.brand} {vehicles.name}</h1>
                                        <h1 className="text-2xl font-semibold text-slate-700">SEK {vehicles.price} (Ex VAT)</h1>
                                    </div>
                                </div>

                            </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default AllVehicles;