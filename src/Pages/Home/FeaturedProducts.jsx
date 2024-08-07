import { FaCarSide, FaTractor, FaTruckMonster } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const FeaturedProducts = () => {
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
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>




        </div>
    );
};

export default FeaturedProducts;