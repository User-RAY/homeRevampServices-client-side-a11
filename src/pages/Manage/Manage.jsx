import { useContext, useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import axios from "axios";
import AuthContext from "../../context-providers/Auth/AuthContext";
import Swal from 'sweetalert2'

const Manage = () => {

        const [CardData, setCardData] = useState([]);

        const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:3000/manage/${user.email}`)
        .then(res => setCardData(res.data)
        )
    }, [user])


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/manage/${id}`)
                .then(res => {
                    if(res.data.deletedCount){
                        setCardData(CardData.filter(p => p._id !== id))
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Service has been deleted.",
                            icon: "success"
                          });
                    }
                })
            }
          });

        

      }


    
    return (
        <div className="mt-8 mb-6 w-11/12 mx-auto">
            <h1 className='text-5xl font-bold text-center my-28'>Manage Your Added Service</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:place-items-center items-stretch">

            {
                CardData.map((card) => <Cards key={card._id} man={true} card={card} handleDelete={handleDelete}></Cards>)
            }
            </div>
        </div>
    );
};

export default Manage;