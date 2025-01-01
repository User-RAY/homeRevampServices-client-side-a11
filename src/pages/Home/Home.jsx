import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Choose from "../../components/Choose/Choose";
import FAQ from "../../components/FAQ/FAQ";
import Popular from "../../components/Popular/Popular";
import Started from "../../components/Started/Started";
import Statistics from "../../components/Statistics/Statistics";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    window.scrollTo(0, 10);

    useEffect(() => {
        AOS.init({
            duration: 2000, 
            easing: 'ease',   
        });
        
        return () => {
            AOS.refresh();
        };
        }, [])

    return (
        <div>

            <Banner></Banner>

            <div className="mt-14 mb-6 w-11/12 mx-auto">
                <h1 className="text-5xl my-20 font-bold text-center">Popular Services</h1>
                <Popular></Popular>
            </div>

            <div className="mt-14 mb-6" data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="text-4xl mt-20 mb-10 font-bold text-center">Why Choose HomeRevamp?</h1>
                <Choose></Choose>
            </div>

            
            <div className="mt-14 mb-6 w-11/12 mx-auto" data-aos="flip-left">
                <Started></Started>
            </div>

            <div className="mt-14 mb-6 w-11/12 mx-auto">
                <h1 className="text-5xl my-20 font-bold text-center">Got Questions? We&apos;ve Got Answers!</h1>
                <FAQ></FAQ>
            </div>

            <div className="my-14 w-11/12 mx-auto" data-aos="zoom-in">
                <h1 className="text-4xl mt-20 mb-6 font-bold text-center">Our Achievements</h1>
                <Statistics></Statistics>
            </div>

        </div>
    );
};

export default Home;