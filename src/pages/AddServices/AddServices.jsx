import Select from 'react-select'
import { default as axios } from 'axios';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import AuthContext from "../../context-providers/Auth/AuthContext";
import { Helmet } from 'react-helmet-async';
import ThemeContext from '../../context-providers/Theme/ThemeContext';


const AddServices = () => {

    const [selectedOptions, setSelectedOptions] = useState([]);

    const {theme} = useContext(ThemeContext);

    const {user} = useContext(AuthContext)

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

      const handleSelect = (select) => {
        setSelectedOptions(select);
      }


      const handleAdd = (e) => {
        e.preventDefault();

        const serviceData = {
            serviceName: e.target.name.value,
            serviceImage: e.target.img.value,
            description: e.target.des.value,
            serviceArea: selectedOptions.map(option => option.value),
            price: e.target.price.value,
            providerName: user.displayName,
            providerImage: user.photoURL,
            providerEmail: user.email
        }
        
        axios.post('https://home-revamp-services-server-side-a11.vercel.app/add', serviceData)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    title: "Congrats",
                    text: "Your Sevice is Added",
                    icon: "success"
                  });
                e.target.reset();
                setSelectedOptions([]);  
        }
    })

      }


    return (
        <div className='my-14'>

            <Helmet>
                <title>AddServices | HomeRevamp</title>
            </Helmet>

            <h1 className='text-5xl font-bold text-center'>Add Your Service</h1>

             <div className={`card ${theme ? 'text-black bg-base-100 ' : 'text-black bg-[#0B192C]'} w-4/5 lg:w-3/4 mx-auto p-6 mt-6`}>
            <form className="card-body p-0" onSubmit={handleAdd}>
                

                <div className="form-control">
                <label className="label">
                    <span className={`label-text ${theme ? 'text-black' : 'text-white'}`}>Service Name</span>
                </label>
                <input type="text" name='name'  className={`input input-bordered ${theme ? 'text-black' : 'text-white bg-[#182d49]'}`} required/>
                </div>

                <div className="form-control">
                <label className="label">
                    <span className={`label-text ${theme ? 'text-black' : 'text-white'}`}>Service Image</span>
                </label>
                <input type="url" name='img'  className={`input input-bordered ${theme ? 'text-black' : 'text-white bg-[#182d49]'}`} required/>
                </div>


                <div className="form-control">
                <label className="label">
                    <span className={`label-text ${theme ? 'text-black' : 'text-white'}`}>Description</span>
                </label>
                <input type="text" name='des'  className={`input input-bordered ${theme ? 'text-black' : 'text-white bg-[#182d49]'}`} required/>
                </div>


                <div className="form-control">
                <label className="label">
                    <span className={`label-text ${theme ? 'text-black' : 'text-white'}`}>Service Area</span>
                </label>

                <Select options={options} name='area' isMulti required value={selectedOptions}  styles={{
    control: (provided) => ({
      ...provided,
      backgroundColor: theme ? 'transparent' : '#182d49', 
      color: theme ? 'black' : 'white', 
    }),  menu: (provided) => ({
        ...provided,
        backgroundColor: theme ? 'white' : '#182d49', 
        color: theme ? 'black' : 'white',
      }),    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? (theme ? '#f0f0f0' : '#304a71') : (theme ? 'white' : '#182d49'), 
        color: state.isFocused ? (theme ? 'black' : 'white') : (theme ? 'black' : 'white'), 
        cursor: 'pointer', 
      })
  }}  onChange={handleSelect} />
                </div>


                <div className="form-control">
                <label className="label">
                    <span className={`label-text ${theme ? 'text-black' : 'text-white'}`}>Price</span>
                </label>
                <input type="number" name='price' className={`input input-bordered ${theme ? 'text-black' : 'text-white bg-[#182d49]'}`} required/>
                </div>


                <div className="flex justify-center items-center mt-6">
                <button className="btn btn-primary w-1/2">Add Service</button>
                </div>
                
            </form>
            </div>

            
        </div>
    );
};

export default AddServices;