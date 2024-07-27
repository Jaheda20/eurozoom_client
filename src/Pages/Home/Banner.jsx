import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const text = "Zoom Across Europe";

const letterAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.5,
        },
    }),
}

const paragraphAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: text.length * 0.08 
        },
    },
};


const Banner = () => {

    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const startAnimations = (controls) => {
        if (isMounted) {
            controls.start("hidden").then(() => {
                controls.start("visible");
            });
        }
    };

    const handleSlideChange = (swiper) => {
        if (swiper.realIndex === 0) {
            startAnimations(controls1);
        } else {
            startAnimations(controls2);
        }
    };

    useEffect(() => {
        if (isMounted) {
            startAnimations(controls1); // Start animations for the first slide on mount
        }
    }, [isMounted, controls1]);

    
    return (
        <>
            <Swiper 
            pagination={true}
            navigation={true} 
            modules={[Pagination, Autoplay, Navigation]} 
            loop={true}
            autoplay={
                {
                    delay: 5000
                }
            }
            className="mySwiper"
            onSlideChange={handleSlideChange}
            >
                <SwiperSlide className="slide">
                    <div className='slide slide1 flex flex-col gap-4 item-center justify-center relative'>
                        <div className="absolute flex items-end justify-center w-full h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)">
                            <div className="text-white pl-20 space-y-4 flex flex-col items-center justify-center text-center pb-24">
                                
                                <h1 className="text-4xl md:text-8xl mb-2">
                                    {text.split("").map((char, index) => (
                                        <motion.span
                                            key={index}
                                            custom={index}
                                            initial="hidden"
                                            animate={controls1}
                                            variants={letterAnimation}
                                            style={{ 
                                                display: 'inline-block',
                                                background: 'linear-gradient(to right, rgb(161, 206, 237), rgb(255, 255, 255))', 
                                                WebkitBackgroundClip: 'text', 
                                                WebkitTextFillColor: 'transparent' 
                                            }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </h1>
                                <motion.p 
                                    initial="hidden"
                                    animate={controls1}
                                    variants={paragraphAnimation}
                                    className="text-xl text-white"
                                >
                                    Making Every Journey across Europe Effortlessly Smooth and Exciting!
                                </motion.p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide className="slide">
                    <div className='slide slide2 flex flex-col gap-4 item-center justify-center relative'>
                        <div className="absolute flex items-end justify-center w-full h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)">
                            <div className="text-white pl-20 space-y-4 flex flex-col items-center justify-center text-center pb-24">
                                
                                <h1 className="text-4xl md:text-8xl mb-2">
                                    {text.split("").map((char, index) => (
                                        <motion.span
                                            key={index}
                                            custom={index}
                                            initial="hidden"
                                            animate={controls2}
                                            variants={letterAnimation}
                                            style={{ 
                                                display: 'inline-block',
                                                background: 'linear-gradient(to right, rgb(161, 206, 237), rgb(255, 255, 255))', 
                                                WebkitBackgroundClip: 'text', 
                                                WebkitTextFillColor: 'transparent' 
                                            }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </h1>
                                <motion.p 
                                    initial="hidden"
                                    animate={controls2}
                                    variants={paragraphAnimation}
                                    className="text-xl text-white"
                                >
                                    Making Every Journey across Europe Effortlessly Smooth and Exciting!
                                </motion.p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;