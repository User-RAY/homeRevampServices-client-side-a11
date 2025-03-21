import { useContext } from "react";
import { GiGearHammer } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context-providers/Auth/AuthContext";
import ThemeContext from "../../context-providers/Theme/ThemeContext";


const Navbar = () => {

    const {user, signout, loading} = useContext(AuthContext);
    const { theme ,toggleMode} = useContext(ThemeContext);

    const handleLogout = () => {
        signout()
        .then(() => {
            
            }).catch(() => {
            
            });
    }  



    const links1 = <>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/all'>Services</NavLink></li>
                    <li><NavLink to='/login'>Log-in</NavLink></li>
                  </>


    const links2 = <>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/all'>Services</NavLink></li>
                    <li>
                    <details>
                    <summary>Dashboard</summary>
                    <ul className="p-2 w-40 z-50 bg-gray-400">
                        <li><NavLink to='/add'>Add Service</NavLink></li>
                        <li><NavLink to='/manage'>Manage Service</NavLink></li>
                        <li><NavLink to='/book'>Booked-Services</NavLink></li>
                        <li><NavLink to='/todo'>Service-To-Do</NavLink></li>
                    </ul>
                    </details>
                    </li>
                </>         
    const Profile = <>
                        <div className="dropdown dropdown-end tooltip tooltip-top" data-tip={user?.displayName }>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full border border-blue-500">
                                <img
                                    alt="Profile picture"
                                    src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box mt-3 p-2 shadow z-50">
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div>
                    </>      
                    
              

    return (
        <div className={`sticky top-0 z-10 py-5  shadow-sm ${theme ? 'text-black bg-white' : 'text-white bg-[#10151c]'}`}>
            <div className=" w-11/12 mx-auto">
                <div className="navbar ">
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
                            className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-[50] mt-3 w-52 p-2 shadow">
                             {
                                loading ? <span className="loading loading-bars loading-md text-blue-500"></span> : user ? links2 : links1
                             }
                            <input type="checkbox"  onClick={toggleMode} className="toggle theme-controller" />
                        </ul>
                        </div>
                        <NavLink to='/' className="btn btn-ghost text-xl"><GiGearHammer className="text-3xl" /> <h1 className="hidden md:inline">HomeRevamp</h1></NavLink>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                    <input type="checkbox"  onClick={toggleMode} className="toggle theme-controller" />
                        <ul className="menu menu-horizontal px-1">
                        {
                                loading ? <span className="loading loading-bars loading-md text-blue-500"></span> : user ? links2 : links1
                        }
                        </ul>
                    </div>
                    {
                        loading ? <span className="loading loading-bars loading-md text-blue-500"></span> : user ? Profile : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;