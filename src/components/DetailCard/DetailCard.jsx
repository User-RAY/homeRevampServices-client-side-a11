import PropTypes from "prop-types";
import BookForm from "../BookForm/BookForm";
import { useContext } from 'react';
import ThemeContext from '../../context-providers/Theme/ThemeContext';


const DetailCard = ({card = {}, book = false}) => {

    window.scrollTo(0, 0);

    const {theme} = useContext(ThemeContext);
    
    return (
        <div className="w-11/12 mx-auto">



      {   !book ? <>
                <div className="my-12">
                        <h1 className="text-5xl text-center font-bold">Service Provider Info</h1>
                        <div className="my-12 flex flex-col justify-center items-center">
                            <img src={card.providerImage} alt="" className='object-cover h-48 w-48 rounded-2xl' />

                            <div className="text-xl max-w-xs">
                                <h2 className="font-semibold my-4">Name: <span className="font-normal">{card.providerName}</span></h2>
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
                                    <button className="btn btn-primary mt-2 w-1/2 lg:w-full lg:my-0" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book Now</button>
                                </div>
                            </div>
                    </div>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}

                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                            <div className={`modal-box !max-w-none ${theme ? 'text-black bg-base-100 ' : 'text-black bg-[#0B192C]'}`}>
                                <h3 className={`font-bold text-2xl text-center ${theme ? 'text-black' : 'text-white'}`}>Confirm Your Service Booking (Input Service Date & Area)</h3>
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <BookForm card={card}></BookForm>
                            </div>
                        </dialog>
                </>

            :
                <>
                    <h1 className="text-5xl text-center font-bold mt-10">Booking Details</h1>
                    
                    <div className="my-12 grid grid-cols-1 lg:grid-cols-2 items-center">
                        <img src={card.serviceImage} alt="" className='object-cover h-48 md:h-96 w-full rounded-2xl justify-self-center lg:justify-self-start' />
                            <div className="h-full flex flex-col justify-around lg:ml-8">
                                <div className="flex items-center my-2 lg:my-0">
                                    <h2>Sevice Provider Name:  {card.providerName}</h2>
                                </div>
                                <h1 className="text-4xl font-semibold">{card.serviceName}</h1>
                                <p className="font-semibold my-2 lg:my-0">Booking Date: {card.bookDate}</p>
                                <p className="font-semibold my-2 lg:my-0">Selected Sevice Area: {card.serviceArea}</p>
                                <h2 className="font-medium">Price: {card.price}$</h2>
                                <div className="card-actions flex-col md:flex-row w-full">
                                    <h2>Status:<span className="btn btn-info ml-2 lg:my-0">{card.serviceStatus}</span></h2>

                                </div>
                            </div>
                    </div>
                </>

      }









        </div>
    );
};


DetailCard.propTypes = {
    card: PropTypes.object,
    book: PropTypes.bool,
}

export default DetailCard;