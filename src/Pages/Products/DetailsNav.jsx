import { NavLink } from "react-router-dom";

const DetailsNav = () => {
    const navOptions = (
        <>
            <li>
                <NavLink to="/" className="nav-link text-slate-700">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className="nav-link text-slate-700">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/vehicles" className="nav-link text-slate-700">
                    Vehicles
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="nav-link text-slate-700">
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        <div
            className="navbar max-w-7xl mx-auto w-full"
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
                <a className="btn btn-ghost text-4xl gap-0 text-slate-700">
                    Euro
                    <span className="">Zoom</span>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold text-white">
                    {navOptions}
                </ul>
            </div>
        </div>
    )
};

export default DetailsNav;