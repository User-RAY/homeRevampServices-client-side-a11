import axios from 'axios';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import Select from 'react-select'
import Swal from 'sweetalert2';
import ThemeContext from '../../context-providers/Theme/ThemeContext';




const UpdateForm = () => {

        // const [CardData, setCardData] = useState({});

        const {id} = useParams();

        const {theme} = useContext(ThemeContext);
        
        const [selectedOptions, setSelectedOptions] = useState([]);

        // useEffect(()=> {
        //     setCardData({});
        //     setCardData(selectedCard);
        // }, [selectedCard])

        // const handleInputChange = (e) => {
        //     const name= e.target.name;
        //     const value= e.target.value;       
        //     const updatedField = {[name]: value}
        //     console.log(updatedField);
            
        //     setCardData((prevData) => ({
        //         ...prevData,
        //         [name]: value,  
        //     }));
            
        // };


        const handleSelect = (select) => {
            setSelectedOptions(select);
          }


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



    const handleUpdate = (e) => {
        e.preventDefault();


        const updateData = {
            serviceName: e.target.serviceName.value,
            serviceImage: e.target.serviceImage.value,
            description: e.target.description.value,
            serviceArea: selectedOptions.map(option => option.value),
            price: e.target.price.value,
        }


        const btn = document.getElementById('close');
        
        axios.patch(`https://home-revamp-services-server-side-a11.vercel.app/update/${id}`, updateData)
        .then(res => {
            if(res.data.modifiedCount){
                e.target.reset();
                btn.click();
                Swal.fire({
                    title: "Congrats",
                    text: "Your Sevice is Updated",
                    icon: "success"
                });
                setSelectedOptions([]); 
        }

        
    })

    }





    return (
        <div className='mb-24'>

                <h1 className='text-5xl my-12 font-bold text-center'>Edit Your Service</h1>

            <div className={`card p-6 ${theme ? 'text-black bg-base-100 ' : 'text-black bg-[#0B192C]'}  w-4/5 lg:w-3/4 mx-auto `}>



                <form className="card-body p-0" onSubmit={handleUpdate}>
                    
                {/* <input type="text" name='id' value={selectedCard?._id || ''} readOnly className="input input-bordered" required/> */}

                    <div className="form-control">
                    <label className="label">
                        <span className={`label-text ${theme ? 'text-black' : 'text-white'}`}>Service Name</span>
                    </label>
                    <input type="text" name='serviceName'   className="input input-bordered" required/>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className={`label-text ${theme ? 'text-black' : 'text-white'}`}>Service Image</span>
                    </label>
                    <input type="url" name='serviceImage'  className="input input-bordered" required/>
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className={`label-text ${theme ? 'text-black' : 'text-white'}`}>Description</span>
                    </label>
                    <input type="text" name='description'   className="input input-bordered" required/>
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className={`label-text ${theme ? 'text-black' : 'text-white'}`}>Service Area</span>
                    </label>

                    <Select options={options} name='area' isMulti value={selectedOptions} onChange={handleSelect} required />
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className={`label-text ${theme ? 'text-black' : 'text-white'}`}>Price</span>
                    </label>
                    <input type="number" name='price' className="input input-bordered" required/>
                    </div>


                    <div className="flex justify-center items-center mt-6">
                    <button className="btn btn-primary w-1/2">Update Service</button>
                    </div>
                    
                </form>

                <NavLink to='/manage' className="btn bg-gray-500 w-1/2 mx-auto my-9" id='close'>Cancel</NavLink>

            </div>
            
        </div>
    );
};

UpdateForm.propTypes = {
    handleUpdate: PropTypes.func,
    handleSelect: PropTypes.func,
    selectedOptions: PropTypes.array,
    selectedCard: PropTypes.object,
}


export default UpdateForm;