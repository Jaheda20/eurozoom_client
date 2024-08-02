import { Link, NavLink } from "react-router-dom";

const AboutCover = () => {
    return (
        <div
            className="hero h-[700px]"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(21, 21, 21, 0.65), rgba(21, 21, 21, 0.65)), 
                                  url('https://i.ibb.co/fXSqw74/photo-1596792598780-6777ec5b57ee-q-80-w-1469-auto-format-fit-crop-ixlib-rb-4-0.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
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
                        About Us
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
                            <NavLink to="/about" className={({ isActive }) =>
                                `text-white ${isActive ? 'text-blue-300 font-bold' : 'text-white hover:text-gray-100'}`
                            }>About
                            </NavLink>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutCover;