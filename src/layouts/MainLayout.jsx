import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/footer/footer";
import { HelmetProvider } from 'react-helmet-async';
import { useContext } from "react";
import ThemeContext from "../context-providers/Theme/ThemeContext";

const MainLayout = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div>
            <HelmetProvider>
            <div className={`${theme ? 'text-black' : 'text-white bg-gradient-to-b from-black via-gray-900 to-gray-800'}`}>

                <Navbar></Navbar>
                <div className="min-h-[80vh]">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
            </HelmetProvider>
        </div>
    );
};

export default MainLayout;