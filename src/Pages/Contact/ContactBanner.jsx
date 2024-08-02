import { NavLink } from "react-router-dom";

const ContactBanner = () => {
    return (
        // <div
        //     className="hero h-[700px]"
        //     style={{
        //         backgroundImage: "url(https://i.ibb.co/mDdqnd3/photo-1488510665058-33ce2e6ab561-q-80-w-1632-auto-format-fit-crop-ixlib-rb-4-0.jpg)",
        //     }}>
        //     {/* <div className="hero-overlay bg-opacity-65"></div> */}
        //     <div className="hero-content text-neutral-content text-center">
        //         <div className="max-w-md">
        //             <h1 className="mb-5 text-7xl font-semibold"
        //             style={{ 
        //                 display: 'inline-block',
        //                 background: 'linear-gradient(to right, rgb(161, 206, 237), rgb(255, 255, 255))', 
        //                 WebkitBackgroundClip: 'text', 
        //                 WebkitTextFillColor: 'transparent' 
        //             }}
        //             >Contact Us</h1>
                    
        //         </div>
        //     </div>
        // </div>
        <div
            className="hero h-[700px]"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(21, 21, 21, 0.65), rgba(21, 21, 21, 0.65)), 
                                  url('https://i.ibb.co/mDdqnd3/photo-1488510665058-33ce2e6ab561-q-80-w-1632-auto-format-fit-crop-ixlib-rb-4-0.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="hero-content text-neutral-content text-center flex flex-col">
                <div className="max-w-md">
                    <h1 
                        className="mb-5 text-5xl md:text-7xl font-semibold"
                        style={{ 
                            display: 'inline-block',
                            background: 'linear-gradient(to right, rgb(161, 206, 237), rgb(255, 255, 255))', 
                            WebkitBackgroundClip: 'text', 
                            WebkitTextFillColor: 'transparent' 
                        }}
                    >
                        Contact Us
                    </h1>
                </div>
                <div className="breadcrumbs text-xl">
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) =>
                                `text-white ${isActive ? 'text-blue-300 font-bold' : 'text-white hover:text-gray-100'}`
                            }>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) =>
                                `text-white ${isActive ? 'text-blue-300 font-bold' : 'text-white hover:text-gray-100'}`
                            }>Contact
                            </NavLink>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;