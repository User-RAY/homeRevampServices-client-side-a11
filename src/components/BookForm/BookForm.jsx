import axios from 'axios';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import Select from 'react-select'
import Swal from 'sweetalert2';
import AuthContext from '../../context-providers/Auth/AuthContext';

const BookForm = ({card}) => {

    const [selectedOptions, setSelectedOptions] = useState([]);
    
    const {user} = useContext(AuthContext)

    const options = card?.serviceArea?.map(area => ({ value: area, label: area.split('_').map(word => word[0].toUpperCase()+word.slice(1)).join(' ')}),);


    const handleSelect = (select) => {
        setSelectedOptions(select);
      }

    const handleBook = (e) => {

        e.preventDefault();

        const defaultStatus = 'pending';

        const bookData = {
            serviceID: e.target.serviceID.value,
            serviceName: e.target.serviceName.value,
            serviceImage: e.target.serviceImage.value,
            serviceArea: selectedOptions.value,
            price: e.target.price.value,
            providerName: e.target.providerName.value,
            providerEmail: e.target.providerEmail.value,
            userEmail: e.target.userEmail.value,
            userName: e.target.userName.value,
            bookDate: e.target.bookDate.value,
            serviceStatus: defaultStatus,
        }


        const btn = document.getElementById('close');
        
        
        axios.post('https://home-revamp-services-server-side-a11.vercel.app/book', bookData)
        .then(res => {
            if(res.data.insertedId){
                e.target.reset();
                setSelectedOptions([]);  
                btn.click();
                Swal.fire({
                    title: "Congrats",
                    text: "Your Sevice is Added",
                    icon: "success"
                  });

                
            }
        })
        
    }

    return (
        <div>

            <div className="card bg-base-100 lg:w-3/4 mx-auto">
            <form className="card-body p-0" onSubmit={handleBook}>
                

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Service ID</span>
                </label>
                <input type="text" name='serviceID' defaultValue={card._id} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Service Name</span>
                </label>
                <input type="text" name='serviceName' defaultValue={card.serviceName} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Service Image</span>
                </label>
                <input type="url" name='serviceImage' defaultValue={card.serviceImage} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Provider Email</span>
                </label>
                <input type="email" name='providerEmail' defaultValue={card.providerEmail} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Provider Name</span>
                </label>
                <input type="text" name='providerName' defaultValue={card.providerName} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Current User Email</span>
                </label>
                <input type="email" name='userEmail' defaultValue={user.email} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Current User Name</span>
                </label>
                <input type="text" name='userName' defaultValue={user.displayName} className="input input-bordered" readOnly />
                </div>


                <div className="form-control">
                <label className="label">
                    <span className="label-text text-blue-600">Service Taking Date</span>
                </label>
                <input type="date" name='bookDate' className="input input-bordered" required />
                </div>


                <div className="form-control">
                <label className="label">
                    <span className="label-text text-blue-600">Area</span>
                </label>

                <Select options={options} name='area' value={selectedOptions} onChange={handleSelect} required />
                </div>




                <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text" name='price' defaultValue={card.price} className="input input-bordered" readOnly />
                </div>


                <div className="flex justify-center items-center mt-6">
                <button className="btn btn-primary w-1/2">Purchase</button>
                </div>
                
            </form>

            <div className="modal-action justify-center">
                <form method="dialog" className="w-1/2">
                    {/* if there is a button in form, it will close the modal */}
                    <button id='close' className="btn bg-gray-500 w-full">Cancel</button>
                </form>
            </div>
            </div>

            
        </div>
    );
};

BookForm.propTypes = {
    card: PropTypes.object,
}

export default BookForm;