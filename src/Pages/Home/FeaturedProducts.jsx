import { useEffect, useState } from "react";
import { FaCarSide, FaTractor, FaTruckMonster } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import VehicleCard from "../../Components/Home/VehicleCard";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch('/vehicle.json')
            .then(res => res.json())
            .then(data => setVehicles(data))
    }, [])


    return (
        <div className="max-w-7xl mx-auto w-full mt-24 mb-20">
            <div className="w-full flex flex-col items-center justify-center ">
                <h3 className="font-extrabold text-lg text-blue-800">Top Choices</h3>
                <h1 className="text-3xl lg:text-4xl font-bold mt-2 md:leading-9 text-slate-600">Discover Our Featured Picks for This Month</h1>
                <br />
                <hr className='w-20 border-2 border-blue-700 animate-ping' />
            </div>

            <Tabs>
                <div className="px-10 py-10">
                    <div className="flex items-center justify-center">
                        <TabList>
                            <Tab>
                                <div className="flex items-center space-x-2 text-lg font-semibold text-slate-600">
                                    <FaCarSide size={20} className="text-blue-800" />
                                    <span>Car</span>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="flex items-center space-x-2 text-lg font-semibold text-slate-600">
                                    <FaTractor size={20} className="text-blue-800" />
                                    <span>Construction</span>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="flex items-center space-x-2 text-lg font-semibold text-slate-600">
                                    <FaTruckMonster size={20} className="text-blue-800" />
                                    <span>Truck</span>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="flex items-center space-x-2 text-lg font-semibold text-slate-600">
                                    <TbBus size={20} className="text-blue-800" />
                                    <span>Bus</span>
                                </div>
                            </Tab>

                        </TabList>

                    </div>
                </div>


                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            vehicles.filter(v => v.category === 'Car').
                                map(vehicle => <VehicleCard
                                    key={vehicle.id}
                                    vehicle={vehicle}
                                >
                                </VehicleCard>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            vehicles.filter(v => v.category === 'Construction').
                                map(vehicle => <VehicleCard
                                    key={vehicle.id}
                                    vehicle={vehicle}
                                >
                                </VehicleCard>)
                        }

                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            vehicles.filter(v => v.category === 'Truck').
                                map(vehicle => <VehicleCard
                                    key={vehicle.id}
                                    vehicle={vehicle}
                                >
                                </VehicleCard>)
                        }

                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            vehicles.filter(v => v.category === 'Bus').
                                map(vehicle => <VehicleCard
                                    key={vehicle.id}
                                    vehicle={vehicle}
                                >
                                </VehicleCard>)
                        }

                    </div>
                </TabPanel>
            </Tabs>

            <div className="flex items-center justify-center my-20">
                <Link to="/vehicles">
                    <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-lg text-white bg-blue-800 rounded-lg group">
                        <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-slate-600 group-hover:w-full "></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span className="relative flex items-center gap-2">
                            Show all</span>
                    </button>

                </Link>
            </div>


        </div>
    );
};

export default FeaturedProducts;