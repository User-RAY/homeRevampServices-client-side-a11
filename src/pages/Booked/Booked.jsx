import { useContext, useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import AuthContext from "../../context-providers/Auth/AuthContext";
import axios from "axios";

const Booked = () => {

    const [CardData, setCardData] = useState([]);

    const {user} = useContext(AuthContext)


    

    useEffect(() => {
        axios.get(`http://localhost:3000/booked/${user?.email}`)
        .then(res => setCardData(res.data)
        ).catch(err => {
            console.error(err);
        });
    }, [user?.email])


    return (
        <div className="w-11/12 mx-auto my-16">

            <h1 className='text-5xl font-bold text-center my-16'>Your Booked Services</h1>



            <div className="my-8">


                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:place-items-center items-stretch gap-5">


                {
                    (CardData.length > 0) ? CardData.map((card) => <Cards key={card._id} card={card} book={true}></Cards>) : <h1 className='text-5xl font-bold text-center my-16 col-span-3'>YOU HAVE NOT BOOKED ANY SERVICES</h1>
                }
                
                
                </div>

            </div>
            
        </div>
    );
};

export default Booked;