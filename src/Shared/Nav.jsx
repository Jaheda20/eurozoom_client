// import { NavLink } from "react-router-dom";


// const Nav = () => {

//     const navOptions = <>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/about">About us</NavLink></li>
//         <li><NavLink to="/contact">Contact us</NavLink></li>
//     </>

//     return (
//         <div className="navbar fixed top-0 left-1/2 transform -translate-x-1/2 bg-slate-400 text-white z-10 w-full max-w-7xl bg-opacity-20">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </div>
//                     <ul
//                         tabIndex={0}
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                         {navOptions}
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-4xl gap-0">
//                     Euro
//                     <span className="">Zoom</span>
//                 </a>
//             </div>
//             <div className="navbar-end hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1 text-lg font-semibold">
//                     {navOptions}
//                 </ul>
//             </div>
            
//         </div>

//     );
// };

// export default Nav;



import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const top = window.scrollY;
            setScrolled(top > 50); // Adjust threshold as needed
        };

        window.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navOptions = (
        <>
            <li>
                <NavLink to="/" className={`nav-link ${scrolled ? 'text-slate-500 font-bold' : 'text-white'}`}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={`nav-link ${scrolled ? 'text-slate-500 font-bold' : 'text-white'}`}>
                    About us
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={`nav-link ${scrolled ? 'text-slate-500 font-bold' : 'text-white'}`}>
                    Contact us
                </NavLink>
            </li>
        </>
    );

    return (
        <div
            className={`navbar fixed top-0 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-7xl bg-slate-400 transition-colors bg-opacity-10 duration-300`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <a className={`btn btn-ghost text-4xl gap-0 ${scrolled ? 'text-black' : 'text-white'}`}>
                    Euro
                    <span className="">Zoom</span>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className={`menu menu-horizontal px-1 text-lg font-semibold ${scrolled ? 'text-slate-700' : 'text-white'}`}>
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default Nav;
