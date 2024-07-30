import deliveryImg from '/truck.jpg';
import intImg from '/int.jpg';
import fastImg from '/fast.jpg';
import delImg from '/del.jpg';

const Services = () => {
    <style>
        {`
          .group:hover .scale-50 {
            transform: scale(1);
          }
        `}
    </style>


    return (
        <div className="max-w-7xl mx-auto flex flex-col w-full items-center my-20">
            <h3 className="font-extrabold text-lg text-blue-800">What we offer</h3>
            <h1 className="text-3xl lg:text-4xl font-bold mt-2 md:leading-9 text-slate-600">Tailored Transportation Solutions</h1>

            <div className="mt-14 w-full grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center group">
                    <div className="relative p-4 bg-base-100 w-56 h-56 rounded-full flex items-center justify-center ">
                        <div className="absolute inset-0 border-8 border-blue-700 rounded-full transform transition-transform duration-500 group-hover:scale-100 scale-50"></div>
                        <img src={delImg} alt="delivery" className="w-36 relative z-10 rounded-full" />
                    </div>
                    <h4 className="mt-6 text-xl font-semibold text-slate-700">Door-to-Door Delivery</h4>
                    <p className='text-center mt-4'>We provide convenient door-to-door vehicle delivery, ensuring your car is picked up and delivered right to your specified locations without any hassle</p>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="relative p-4 bg-base-100 w-56 h-56 rounded-full flex items-center justify-center">
                        <div className="absolute inset-0 border-8 border-blue-700 rounded-full transform transition-transform duration-500 group-hover:scale-100 scale-50"></div>
                        <img src={fastImg} alt="delivery" className="w-36 relative z-10 rounded-full" />
                    </div>
                    <h4 className="mt-6 text-xl font-semibold text-slate-700">International Shipping</h4>
                    <p className='text-center mt-4'>We offer seamless international vehicle shipping services, handling all logistics, customs, and regulations to ensure a smooth delivery process</p>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="relative p-4 bg-base-100 w-56 h-56 rounded-full flex items-center justify-center group">
                        <div className="absolute inset-0 border-8 border-blue-700 rounded-full transform transition-transform duration-500 group-hover:scale-100 scale-50"></div>
                        <img src={intImg} alt="delivery" className="w-36 relative z-10 rounded-full" />
                    </div>
                    <h4 className="mt-6 text-xl font-semibold text-slate-700">Expedited Shipping</h4>
                    <p className='text-center mt-4'>Our expedited shipping service ensures your vehicle is delivered quickly, meeting tight schedules and urgent deadlines</p>
                </div>
            </div>


        </div>
    );
};

export default Services;
