import { GiGearHammer } from "react-icons/gi";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    // links if not logged in
    const links1 = <>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/all'>Services</NavLink></li>
                    <li><NavLink>Log-in</NavLink></li>
                  </>

    // links if logged in
    const links2 = <>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/all'>Services</NavLink></li>
                    <li>
                    <details>
                    <summary>Dashboard</summary>
                    <ul className="p-2 w-40 z-50">
                        <li><NavLink to='/add'>Add Service</NavLink></li>
                        <li><NavLink to='/manage'>Manage Service</NavLink></li>
                        <li><NavLink to='/book'>Booked-Services</NavLink></li>
                        <li><NavLink>Service-To-Do</NavLink></li>
                    </ul>
                    </details>
                    </li>
                </>         
    const Profile = <>
                        <div className="dropdown dropdown-end tooltip tooltip-top" data-tip="hello">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow z-50">
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </>                 

    return (
        <div className="mt-8 mb-6 w-11/12 mx-auto">

            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start flex-1">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
                         {
                            links1
                         }   
                    </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost text-xl"><GiGearHammer className="text-3xl" /> <h1 className="hidden md:inline">HomeRevamp</h1></NavLink>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         {
                            links2
                         }
                    </ul>
                </div>
                {
                            Profile
                }
            </div>






        </div>
    );
};

export default Navbar;