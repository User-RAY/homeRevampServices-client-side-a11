import Select from 'react-select'

const CardTodo = () => {


    const options = [
        { value: 'pending', label: 'Pending' },
        { value: 'working', label: 'Working' },
        { value: 'completed', label: 'Completed' },
      ];


    return (
        <div className="w-3/4 mx-auto my-6">

            <div className="card card-side flex-col md:flex-row bg-base-100 shadow-xl">
            <figure>
                <img
                src="https://i.ibb.co.com/cCpVV68/Sanborns-Electrical-Repair-1.webp"
                alt="Movie" className="object-cover h-full w-52" />
            </figure>
            <div className="card-body lg:flex-row justify-between items-center">
                <div>
                    <h2 className="card-title">Electrical Fixes</h2>
                    <p>Booked by: Jane Smith</p>
                    <p>Service Taking Date: 4 Jan 2025</p>
                    <p>Area: Dhaka</p>
                </div>
                <form>
                    <div className="card-actions grid grid-cols-1 md:grid-cols-3 items-center">
                       <div className='flex items-center justify-end col-span-2 mt-6 md:mt-0'>
                           <p className='mr-2 flex-grow-0'>Status:</p> <Select className='w-36' options={options} defaultValue={options[0]} required  />
                       </div>
                        <button className='btn btn-primary w-1/2 mt-6 md:w-auto md:mt-0'>Update Status</button>
                    </div>

                </form>
            </div>
            </div>
                        
        </div>
    );
};

export default CardTodo;