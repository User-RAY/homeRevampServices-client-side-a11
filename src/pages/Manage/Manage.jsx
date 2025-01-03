import Cards from "../../components/Cards/Cards";


const Manage = () => {
    return (
        <div className="mt-8 mb-6 w-11/12 mx-auto">
            <h1 className='text-5xl font-bold text-center my-28'>Manage Your Added Service</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:place-items-center items-stretch">
                <Cards man={true}></Cards>
                <Cards man={true}></Cards>
                <Cards man={true}></Cards>
            </div>
        </div>
    );
};

export default Manage;