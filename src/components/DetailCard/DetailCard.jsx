import PropTypes from "prop-types";


const DetailCard = ({card = {}}) => {
    console.log(card?.serviceImage);


    
    return (
        <div className="w-11/12 mx-auto">

            <div className="my-12">
                <h1 className="text-5xl text-center font-bold">Service Provider Info</h1>
                <div className="my-12 flex flex-col justify-center items-center">
                    <img src={card.providerImage} alt="" className='object-cover h-48 w-48 rounded-2xl' />

                    <div className="text-xl">
                        <h2 className="font-semibold my-4">Name: <span className="font-normal">{card.providerName}</span></h2>
                        <h2 className="font-semibold">Service Area: <span className="font-normal">{card.serviceArea}</span></h2>
                    </div>
                </div>
            </div>
            
            <div className="divider"></div>

            <h1 className="text-5xl text-center font-bold">Service Details</h1>
            <div className="my-12 grid grid-cols-1 lg:grid-cols-2 items-center">

                <img src={card.serviceImage} alt="" className='object-cover h-48 md:h-96 w-full rounded-2xl justify-self-center lg:justify-self-start' />

                    <div className="h-full flex flex-col justify-around lg:ml-8">
                        <div className="flex items-center my-2 lg:my-0">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar w-auto mr-2">
                                    <div className="w-9 rounded-full">
                                        <img
                                            alt="provider image"
                                            src={card.providerImage}
                                            />
                                    </div>
                            </div>
                            <h2>{card.providerName}</h2>
                        </div>
                        <h1 className="text-4xl font-semibold">{card.serviceName}</h1>
                        <p className="font-semibold my-2 lg:my-0">{card.description}</p>
                        <h2 className="font-medium">Price: {card.price}$</h2>
                        <div className="card-actions justify-center">
                            <button to='/detail' className="btn btn-primary mt-2 w-1/2 lg:w-full lg:my-0">Book Now</button>
                        </div>
                    </div>

            </div>



        </div>
    );
};


DetailCard.propTypes = {
    card: PropTypes.object,
}

export default DetailCard;