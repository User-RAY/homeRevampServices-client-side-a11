import Banner from "../../components/Banner/Banner";
import Popular from "../../components/Popular/Popular";


const Home = () => {
    return (
        <div>

            <Banner></Banner>

            <div className="mt-14 mb-6 w-11/12 mx-auto">
            <h1 className="text-5xl my-20 font-bold text-center">Popular Services</h1>
                <Popular></Popular>
            </div>

        </div>
    );
};

export default Home;