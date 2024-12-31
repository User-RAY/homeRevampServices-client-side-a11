import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cards = ({card = {}}) => {

    return (
        <div>

        <div className="card bg-base-100 h-full max-w-96 shadow-xl">
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
                <Link to='/detail' className="btn btn-primary">View Detail</Link>
                </div>
            </div>
            </div>
            
        </div>
    );
};


// Cards.propTypes = {
//     card: PropTypes.object.isRequired,
// }

Cards.propTypes = {
    card: PropTypes.object,
}

export default Cards;

