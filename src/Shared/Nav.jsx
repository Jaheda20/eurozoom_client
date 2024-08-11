import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navOptions = (
        <>
            <li>
                <NavLink to="/" className="nav-link text-white">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className="nav-link text-white">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/vehicles" className="nav-link text-white">
                    Vehicles
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="nav-link text-white">
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        <div
            className="navbar absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-7xl bg-transparent transition-colors duration-300"
        >
            <div className="navbar-start">
                <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
                    <div className="dropdown text-slate-100">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
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
                        {
                            isOpen && (
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    {navOptions}
                                </ul>
                            )
                        }

                    </div>
                </OutsideClickHandler>

                <Link to={'/'} className="btn btn-ghost text-4xl gap-0 text-white">
                    Euro
                    <span className="">Zoom</span>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold text-white">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default Nav;
