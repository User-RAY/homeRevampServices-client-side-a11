import Select from 'react-select'



const UpdateForm = () => {

    const options = [
        { value: 'new_york', label: 'New York' },
        { value: 'los_angeles', label: 'Los Angeles' },
        { value: 'chicago', label: 'Chicago' },
        { value: 'houston', label: 'Houston' },
        { value: 'phoenix', label: 'Phoenix' },
        { value: 'san_francisco', label: 'San Francisco' },
        { value: 'seattle', label: 'Seattle' },
        { value: 'boston', label: 'Boston' },
        { value: 'miami', label: 'Miami' },
        { value: 'denver', label: 'Denver' }
      ];


    return (
        <div>

            <div className="card bg-base-100 w-4/5 lg:w-3/4 mx-auto">
                <form className="card-body p-0">
                    

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text"  className="input input-bordered" required/>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Image</span>
                    </label>
                    <input type="url"  className="input input-bordered" required/>
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text"  className="input input-bordered" required/>
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Area</span>
                    </label>

                    <Select options={options} required />
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number"  className="input input-bordered" required/>
                    </div>


                    <div className="flex justify-center items-center mt-6">
                    <button className="btn btn-primary w-1/2">Update Service</button>
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

export default UpdateForm;