import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect } from 'react';
import UpdateForm from '../UpdateForm/UpdateForm';

const Cards = ({card = {}, man = false}) => {

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
                src={card.serviceImage}
                alt="photo" 
                className='object-cover h-56 w-96'/>
            </figure>
            <div className="card-body">
                <div className="flex items-center">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-9 rounded-full">
                                <img
                                    alt="provider image"
                                    src={card.providerImage}
                                     />
                            </div>
                    </div>
                    <h2>{card.providerName}</h2>
                </div>
                <h2 className="card-title">{card.serviceName}</h2>
                <p>{card.description}</p>

                <h2 className="font-bold">Price: {card.price}$</h2>
                <div className="card-actions justify-end">

                {
                    man ? <>
                            <button className='btn btn-primary px-6' onClick={()=>document.getElementById('my_modal_5').showModal()}>
                                Edit
                            </button>
                            <button className='btn btn-error'>
                                delete
                            </button>
                         </> : <Link to='/detail' className="btn btn-primary">View Detail</Link>
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
                    <UpdateForm></UpdateForm>
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
}

export default Cards;

