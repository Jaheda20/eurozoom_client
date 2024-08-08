import { useEffect, useState } from "react";
import { FaCarSide, FaTractor, FaTruckMonster } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import VehicleCard from "../../Components/Home/VehicleCard";

const FeaturedProducts = () => {

    const [vehicles, setVehicles] = useState([]);

    useEffect(()=>{
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
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                            vehicles.filter(v => v.category === 'Car').
                            map(vehicle=><VehicleCard 
                            key={vehicle.id}
                            vehicle={vehicle}
                            >
                            </VehicleCard>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                            vehicles.filter(v => v.category === 'Construction').
                            map(vehicle=><VehicleCard 
                            key={vehicle.id}
                            vehicle={vehicle}
                            >
                            </VehicleCard>)
                        }

                    </div>
                </TabPanel>

                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                            vehicles.filter(v => v.category === 'Truck').
                            map(vehicle=><VehicleCard 
                            key={vehicle.id}
                            vehicle={vehicle}
                            >
                            </VehicleCard>)
                        }

                    </div>
                </TabPanel>

                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                            vehicles.filter(v => v.category === 'Bus').
                            map(vehicle=><VehicleCard 
                            key={vehicle.id}
                            vehicle={vehicle}
                            >
                            </VehicleCard>)
                        }

                    </div>
                </TabPanel>
            </Tabs>




        </div>
    );
};

export default FeaturedProducts;