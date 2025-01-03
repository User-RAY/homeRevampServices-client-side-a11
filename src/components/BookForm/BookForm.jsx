import PropTypes from 'prop-types';
import Select from 'react-select'

const BookForm = ({card}) => {

    const options = card?.serviceArea?.map(area => ({ value: area, label: area.split('_').map(word => word[0].toUpperCase()+word.slice(1)).join(' ')}),);

    return (
        <div>

            <div className="card bg-base-100 lg:w-3/4 mx-auto">
            <form className="card-body p-0">
                

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Service ID</span>
                </label>
                <input type="text" value="12345" className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Service Name</span>
                </label>
                <input type="text" defaultValue={card.serviceName} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Service Image</span>
                </label>
                <input type="url" defaultValue={card.serviceImage} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Provider Email</span>
                </label>
                <input type="email" defaultValue={card.providerEmail} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Provider Name</span>
                </label>
                <input type="text" defaultValue={card.providerName} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Current User Email</span>
                </label>
                <input type="email" defaultValue={card.providerEmail} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Current User Name</span>
                </label>
                <input type="text" defaultValue={card.providerName} className="input input-bordered" readOnly />
                </div>


                <div className="form-control">
                <label className="label">
                    <span className="label-text text-blue-600">Service Taking Date</span>
                </label>
                <input type="date" className="input input-bordered" required />
                </div>


                <div className="form-control">
                <label className="label">
                    <span className="label-text text-blue-600">Area</span>
                </label>

                <Select options={options} required />
                </div>




                <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text" defaultValue={card.price} className="input input-bordered" readOnly />
                </div>


                <div className="flex justify-center items-center mt-6">
                <button className="btn btn-primary w-1/2">Purchase</button>
                </div>
                
            </form>

            <div className="modal-action justify-center">
                <form method="dialog" className="w-1/2">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn bg-gray-500 w-full">Cancel</button>
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