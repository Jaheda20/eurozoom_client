import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

const Banner = () => {
    return (
        <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide className="slide">
                    <div className='slide slide1 flex flex-col gap-4 item-center justify-center relative'>
                        <div className="absolute flex items-end justify-center w-full h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)">
                            <div className="text-white pl-20 space-y-4 flex flex-col items-center justify-center text-center pb-24">
                                <h1 className="text-4xl md:text-8xl mb-2" style={{ 
                                        background: 'linear-gradient(to right, rgb(161, 206, 237), rgb(255, 255, 255))', 
                                        WebkitBackgroundClip: 'text', 
                                        WebkitTextFillColor: 'transparent' 
                                    }}>
                                    Zoom Across Europe 
                                     </h1>
                                <p className="text-xl text-white ">Making Every Journey across Europe Effortlessly Smooth and Exciting!</p>
                            </div>
                        </div>
                        
                        {/* <div className="h-36 px-20 py-4 bg-violet-400 bg-opacity-20 absolute bottom-0 w-full text-white flex justify-between items-center">
                            <h1 className=" text-xl md:text-4xl w-1/2 font-semibold">Your Next Career Awaits: <br />Explore Job Opportunities Now!</h1>
                            <button className="btn">Get Started</button>
                        </div> */}
                    </div>
                    
                </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        
      </Swiper>
    </>
    );
};

export default Banner;