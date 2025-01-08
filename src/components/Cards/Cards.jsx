import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect, useState } from 'react';



const Cards = ({card = {}, man = false, handleDelete, book = false}) => {


    const [CardData, setCardData] = useState(card);


    useEffect(()=> {
        setCardData(card);
    },[card])

    useEffect(() => {
        AOS.init({
          duration: 2000, 
          easing: 'ease',   
        });
      
        return () => {
          AOS.refresh();
        };
      }, []);







    return (
        <div>

        <div className="card bg-base-100 h-full max-w-96 shadow-xl" data-aos="fade-up">
            <figure>
                <img
                src={CardData.serviceImage}
                alt="photo" 
                className='object-cover h-56 w-96'/>
            </figure>
            <div className="card-body max-w-96">
                <div className="flex items-center">
                    {  !book ? <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-9 rounded-full">
                                    <img
                                        alt="provider image"
                                        src={CardData.providerImage}
                                        />
                                </div>
                        </div> : <h2 className='font-medium mr-2'>Provider Name: </h2>
                    }
                    <h2>{CardData.providerName}</h2>
                </div>
                <h2 className="card-title">{CardData.serviceName}</h2>
                <p>{CardData.description}</p>

                <h2 className="font-bold">Price: {CardData.price}$</h2>
                <div className="card-actions justify-end">

                {
                    man ? <>
                            <Link to={`/update/${CardData._id}`}>
                                <button className='btn btn-primary px-6'>
                                    Edit
                                </button>
                            </Link>
                            <button className='btn btn-error' onClick={() => handleDelete(card._id)}>
                                delete
                            </button>
                         </> : book ? <Link to={`/book/${card._id}`} className="btn btn-primary">View Detail</Link> : <Link to={`/services/${card._id}`} className="btn btn-primary">View Detail</Link>
                }
                </div>
            </div>
            </div>



            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box !max-w-none">
                    <h3 className="font-bold text-2xl text-center">Edit your Added Service</h3>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                </div>
            </dialog>

            
        </div>
    );
};


// Cards.propTypes = {
//     card: PropTypes.object.isRequired,
// }

Cards.propTypes = {
    card: PropTypes.object,
    man: PropTypes.bool,
    book: PropTypes.bool,
    handleDelete: PropTypes.func,
}

export default Cards;

