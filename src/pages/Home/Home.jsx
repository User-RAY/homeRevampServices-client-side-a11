import Banner from "../../components/Banner/Banner";
import Choose from "../../components/Choose/Choose";
import FAQ from "../../components/FAQ/FAQ";
import Popular from "../../components/Popular/Popular";
import Started from "../../components/Started/Started";
import Statistics from "../../components/Statistics/Statistics";


const Home = () => {
    return (
        <div>

            <Banner></Banner>

            <div className="mt-14 mb-6 w-11/12 mx-auto">
                <h1 className="text-5xl my-20 font-bold text-center">Popular Services</h1>
                <Popular></Popular>
            </div>

            <div className="mt-14 mb-6">
                <h1 className="text-4xl mt-20 mb-10 font-bold text-center">Why Choose HomeRevamp?</h1>
                <Choose></Choose>
            </div>

            
            <div className="mt-14 mb-6 w-11/12 mx-auto">
                <Started></Started>
            </div>

            <div className="mt-14 mb-6 w-11/12 mx-auto">
                <h1 className="text-5xl my-20 font-bold text-center">Got Questions? We&apos;ve Got Answers!</h1>
                <FAQ></FAQ>
            </div>

            <div className="mt-14 mb-6 w-11/12 mx-auto">
                <h1 className="text-5xl my-20 font-bold text-center">Our Achievements</h1>
                <Statistics></Statistics>
            </div>

        </div>
    );
};

export default Home;