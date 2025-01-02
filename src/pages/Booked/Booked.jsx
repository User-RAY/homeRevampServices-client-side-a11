import Cards from "../../components/Cards/Cards";

const Booked = () => {
    return (
        <div className="my-16">

            <h1 className='text-5xl font-bold text-center my-16'>Your Booked Services</h1>

            <h1 className='text-5xl font-bold text-center my-16 hidden'>YOU HAVE NOT BOOKED ANY SERVICES</h1>

            <div className="my-8">


                <div className="grid grid-cols-1 md:grid-cols-3 place-items-center items-stretch gap-5">

                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                
                
                </div>

            </div>
            
        </div>
    );
};

export default Booked;