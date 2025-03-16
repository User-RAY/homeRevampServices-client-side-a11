import { useContext, useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import axios from "axios";
import AuthContext from "../../context-providers/Auth/AuthContext";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";

const Manage = () => {

        const [load, setLoad] = useState(true);

        const [CardData, setCardData] = useState([]);


        const { user } = useContext(AuthContext);

        

    useEffect(() => {
        axios.get(`https://home-revamp-services-server-side-a11.vercel.app/manage/${user.email}`, {
            withCredentials: true
        })
        .then(res => {
            setCardData(res.data)
            setLoad(false);
        }
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
                axios.delete(`https://home-revamp-services-server-side-a11.vercel.app/manage/${id}`)
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
            <Helmet>
                <title>Manage Services | HomeRevamp</title>
            </Helmet>
            <h1 className='text-5xl font-bold text-center mt-14 mb-28'>Manage Your Added Service</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:place-items-center items-stretch">

            {
                 load ? <div className="text-center col-span-full"><span className="loading loading-bars loading-lg"></span></div> : CardData.map((card) => <Cards key={card._id} man={true} card={card} handleDelete={handleDelete}></Cards>)
            }
            </div>
        </div>
    );
};

export default Manage;