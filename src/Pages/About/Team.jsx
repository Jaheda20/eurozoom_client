import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';


const Team = () => {
    return (
        <div className="max-w-7xl w-full mx-auto my-20">
            <div className="flex flex-col items-center justify-center mb-14">

                <h3 className="font-extrabold text-lg text-blue-800">OUR TEAM</h3>
                <h1 className="text-3xl lg:text-4xl font-bold mt-2 md:leading-9 text-slate-600">The Faces of EuroZoom</h1>
                <br />
                <hr className='w-20 border-2 border-blue-700 animate-ping' />

            </div>

            
                <Swiper navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                    loop={true}
                    autoplay={
                        {
                            delay: 5000
                        }}>
                    <SwiperSlide>
                        <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="bg-base-200 w-96">
                            <div>
                                <img src="https://i.ibb.co/nQqfqHJ/photo-1438761681033-6461ffad8d80-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" className="w-96"/>
                            </div>
                            <div className="my-10 flex flex-col items-center space-y-2">
                                <h2 className="text-2xl font-bold text-slate-600">Jenny Anderson</h2>
                                <h4 className="text-lg text-slate-500 font-semibold">Director</h4>
                            </div>
                            <hr className="border border-slate-600" />
                            <div className="flex items-center justify-between my-10 px-4">
                                <p className="flex items-center gap-2">
                                <FaPhone className="text-blue-700" />
                                +46763456789
                               </p>
                               <p className="flex items-center gap-2">
                               <MdEmail className="text-blue-700" />
                                dfrec@gmail.com
                               </p>
                            </div>
                        </div>
                        <div className="bg-base-200 w-96">
                            <div>
                                <img src="https://i.ibb.co/nQqfqHJ/photo-1438761681033-6461ffad8d80-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" className="w-96"/>
                            </div>
                            <div className="my-10 flex flex-col items-center space-y-2">
                                <h2 className="text-2xl font-bold text-slate-600">Jenny Anderson</h2>
                                <h4 className="text-lg text-slate-500 font-semibold">Director</h4>
                            </div>
                            <hr className="border border-slate-600" />
                            <div className="flex items-center justify-between my-10 px-4">
                                <p className="flex items-center gap-2">
                                <FaPhone className="text-blue-700" />
                                +46763456789
                               </p>
                               <p className="flex items-center gap-2">
                               <MdEmail className="text-blue-700" />
                                dfrec@gmail.com
                               </p>
                            </div>
                        </div>
                        <div className="bg-base-200 w-96">
                            <div>
                                <img src="https://i.ibb.co/nQqfqHJ/photo-1438761681033-6461ffad8d80-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" className="w-96"/>
                            </div>
                            <div className="my-10 flex flex-col items-center space-y-2">
                                <h2 className="text-2xl font-bold text-slate-600">Jenny Anderson</h2>
                                <h4 className="text-lg text-slate-500 font-semibold">Director</h4>
                            </div>
                            <hr className="border border-slate-600" />
                            <div className="flex items-center justify-between my-10 px-4">
                                <p className="flex items-center gap-2">
                                <FaPhone className="text-blue-700" />
                                +46763456789
                               </p>
                               <p className="flex items-center gap-2">
                               <MdEmail className="text-blue-700" />
                                dfrec@gmail.com
                               </p>
                            </div>
                        </div>


                        
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="bg-base-200 w-96">
                            <div>
                                <img src="https://i.ibb.co/nQqfqHJ/photo-1438761681033-6461ffad8d80-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" className="w-96"/>
                            </div>
                            <div className="my-10 flex flex-col items-center space-y-2">
                                <h2 className="text-2xl font-bold text-slate-600">Jenny Anderson</h2>
                                <h4 className="text-lg text-slate-500 font-semibold">Director</h4>
                            </div>
                            <hr className="border border-slate-600" />
                            <div className="flex items-center justify-between my-10 px-4">
                                <p className="flex items-center gap-2">
                                <FaPhone className="text-blue-700" />
                                +46763456789
                               </p>
                               <p className="flex items-center gap-2">
                               <MdEmail className="text-blue-700" />
                                jenny@gmail.com
                               </p>
                            </div>
                        </div>
                        <div className="bg-base-200 w-96">
                            <div>
                                <img src="https://i.ibb.co/nQqfqHJ/photo-1438761681033-6461ffad8d80-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" className="w-96"/>
                            </div>
                            <div className="my-10 flex flex-col items-center space-y-2">
                                <h2 className="text-2xl font-bold text-slate-600">Jenny Anderson</h2>
                                <h4 className="text-lg text-slate-500 font-semibold">Director</h4>
                            </div>
                            <hr className="border border-slate-600" />
                            <div className="flex items-center justify-between my-10 px-4">
                                <p className="flex items-center gap-2">
                                <FaPhone className="text-blue-700" />
                                +46763456789
                               </p>
                               <p className="flex items-center gap-2">
                               <MdEmail className="text-blue-700" />
                                dfrec@gmail.com
                               </p>
                            </div>
                        </div>
                        <div className="bg-base-200 w-96">
                            <div>
                                <img src="https://i.ibb.co/nQqfqHJ/photo-1438761681033-6461ffad8d80-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" className="w-96"/>
                            </div>
                            <div className="my-10 flex flex-col items-center space-y-2">
                                <h2 className="text-2xl font-bold text-slate-600">Jenny Anderson</h2>
                                <h4 className="text-lg text-slate-500 font-semibold">Director</h4>
                            </div>
                            <hr className="border border-slate-600" />
                            <div className="flex items-center justify-between my-10 px-4">
                                <p className="flex items-center gap-2">
                                <FaPhone className="text-blue-700" />
                                +46763456789
                               </p>
                               <p className="flex items-center gap-2">
                               <MdEmail className="text-blue-700" />
                                dfrec@gmail.com
                               </p>
                            </div>
                        </div>


                        
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    
                </Swiper>
        

        </div >
    );
};

export default Team;