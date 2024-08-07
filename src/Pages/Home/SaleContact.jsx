import { Link } from 'react-router-dom';
import './saleContactStyle.css';

const SaleContact = () => {
    return (

        <div className="w-full bg-blue-700 ">
            <div className='w-full flex flex-col md:flex-row justify-between items-center text-white mt-20 overflow-hidden'>
                <div className="md:w-1/2 md:mx-32 p-4 md:p-0 ">

                    <h1 className="text-3xl lg:text-4xl font-bold md:leading-9 text-slate-200 pt-8">Something to Sell?</h1>
                    <hr className='w-8 border-2 border-blue-200 animate-ping' />

                    <p className="mt-7 text-slate-200">
                        We’ve got you covered! Our dedicated team can connect you with motivated buyers who are actively searching for what you’re offering. 
                        <br />
                        Don’t let your items sit idle—let us streamline the selling process for you and turn your goods into cash quickly and efficiently!

                    </p>
                    
                    <div className="pt-6 pb-6 ">

                        <Link to="/contact">
                            <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-lg text-blue-800 bg-blue-200 rounded-lg group">
                                <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-slate-400 group-hover:w-full "></span>
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-blue-400"></span>
                                <span className="relative flex items-center gap-2">
                                    Contact us</span>
                            </button>

                        </Link>

                    </div>

                </div>
                <div className="h-full md:w-1/3 md:relative">
                    <img
                        src="https://optimumdrivinggroup.co.uk/wp-content/uploads/2023/06/Lorry-driver-3.jpg"
                        alt="Car"
                        className=""
                    />
                    <div className="absolute top-0 left-0 w-1/2 h-full clip-path-triangle-left bg-blue-700"></div>
                </div>
                
            </div>


        </div>
    );
};

export default SaleContact;


