import axios from 'axios';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import Select from 'react-select'
import Swal from 'sweetalert2';
import ThemeContext from '../../context-providers/Theme/ThemeContext';


const CardTodo = ({card = {}}) => {


     const [selectedOptions, setSelectedOptions] = useState({})

     const {theme} = useContext(ThemeContext);

     const options = [
        { value: 'pending', label: 'Pending' },
        { value: 'working', label: 'Working' },
        { value: 'completed', label: 'Completed' },
      ];

     useEffect(() => {
        if (card.serviceStatus) {
          const initialOption = options.find(option => option.value === card.serviceStatus);
          setSelectedOptions(initialOption);
        }
      }, []);
     



      const handleSelect = (select) => {
        setSelectedOptions(select);
        // console.log(selectedOptions);
      }

      const handleStatus = (e) => {
        e.preventDefault();


        const updateStatus = {
            serviceStatus: selectedOptions.value,
        }

        
        axios.patch(`https://home-revamp-services-server-side-a11.vercel.app/status/${card._id}`, updateStatus)
        .then(res => {
            if(res.data.modifiedCount){
                Swal.fire({
                    title: "Success",
                    text: "Status is Updated",
                    icon: "success"
                });
        }

        
        })
      }



    return (
        <div className="w-3/4 mx-auto my-6">

            <div className="card card-side flex-col md:flex-row shadow-xl">
            <figure>
                <img
                src={card.serviceImage}
                alt="Movie" className="object-cover h-full w-52" />
            </figure>
            <div className="card-body lg:flex-row justify-between items-center">
                <div>
                    <h2 className="card-title">{card.serviceName}</h2>
                    <p>Booked by: {card.userName}</p>
                    <p>Service Taking Date: {card.bookDate}</p>
                    <p>Area: {card.serviceArea}</p>
                </div>
                <form onSubmit={handleStatus}>
                    <div className="card-actions grid grid-cols-1 md:grid-cols-3 items-center">
                       <div className='flex items-center justify-end col-span-2 mt-6 md:mt-0'>
                           <p className='mr-2 flex-grow-0'>Status:</p> <Select className='w-36' options={options} value={selectedOptions} onChange={handleSelect} styles={{
    control: (provided) => ({
      ...provided,
      backgroundColor: theme ? 'transparent' : '#182d49', 
      color: theme ? 'black' : 'black', 
    }), singleValue: (provided) => ({
        ...provided,
        color: theme ? 'black' : 'white', 
      }),    menu: (provided) => ({
        ...provided,
        backgroundColor: theme ? 'white' : '#182d49', 
        color: theme ? 'black' : 'white',
      }),    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? (theme ? '#f0f0f0' : '#304a71') : (theme ? 'white' : '#182d49'), 
        color: state.isFocused ? (theme ? 'black' : 'white') : (theme ? 'black' : 'white'), 
        cursor: 'pointer', 
      }),
  }} required  />
                       </div>
                        <button className='btn btn-primary w-1/2 mt-6 md:w-auto md:mt-0'>Update Status</button>
                    </div>

                </form>
            </div>
            </div>
                        
        </div>
    );
};

CardTodo.propTypes = {
    card: PropTypes.object,

}

export default CardTodo;