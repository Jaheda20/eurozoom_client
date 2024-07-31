import { Link } from "react-router-dom";

const HomeAbout = () => {
    return (
        <div className="hero h-[800px] bg-fixed"
            style={{
                backgroundImage: ` 
                              url('https://i.ibb.co/DQJssSk/i-Stock-1279002529-1024x683-1-1024x570.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'dimgray',
                backgroundBlendMode: 'multiply'

            }} >
            <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between gap-20">
                <div className="hidden md:block md:w-1/2">
                    <img src="https://i.ibb.co/DQJssSk/i-Stock-1279002529-1024x683-1-1024x570.jpg" alt="" />
                </div>
                <div className="p-4 md:w-1/2">
                    <h3 className="font-extrabold text-lg text-blue-200">About us</h3>
                    <h1 className="text-3xl lg:text-4xl font-bold mt-2 md:leading-9 text-slate-200">Safeguarding Your Vehicle, Every Mile of the Way</h1>
                    <br />
                    <hr className='w-8 border-2 border-blue-700 animate-ping' />
                    <p className="mt-7 text-slate-200">
                        At EuroZoom, we are dedicated to making your transportation across Europe effortless, efficient, and reliable. With our comprehensive range of services, we ensure that your vehicles reach their destinations safely and on time.

                    </p>

                    <div className="mt-10 mb-20 ">

                        <Link to="/about">
                            <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-lg text-white bg-blue-800 rounded-lg group">
                                <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-slate-600 group-hover:w-full "></span>
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                <span className="relative flex items-center gap-2">
                                    View Details</span>
                            </button>

                        </Link>


                    </div>
                </div>

            </div>


        </div>
    );
};

export default HomeAbout;