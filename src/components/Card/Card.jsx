import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({card = {}}) => {



    return (
        <div>

        <div className="card bg-base-100 h-full w-9/12 mx-auto shadow-xl">
            <figure>
                <img
                src={card.serviceImage}
                alt="photo" 
                className='object-cover h-48 md:h-96 w-full'/>
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
                <h2 className="card-title">Service: {card.serviceName}</h2>
                <p>Description: {card.description}</p>

                <h2 className="font-bold">Price: {card.price}$</h2>
                <h2 className="font-bold">Area: {card?.serviceArea?.map(area =>area.split('_').map(word => word[0].toUpperCase()+ word.slice(1)).join(' ')+', ')}</h2>
                <div className="card-actions justify-end">

                <Link to='/detail' className="btn btn-primary">View Detail</Link>
                </div>
            </div>
            </div>
            
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
}

export default Card;