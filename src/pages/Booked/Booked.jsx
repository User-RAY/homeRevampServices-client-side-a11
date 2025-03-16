import { useContext, useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import AuthContext from "../../context-providers/Auth/AuthContext";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Booked = () => {

    const [load, setLoad] = useState(true);

    const [CardData, setCardData] = useState([]);

    const {user} = useContext(AuthContext)


    

    useEffect(() => {
        axios.get(`https://home-revamp-services-server-side-a11.vercel.app/booked/${user?.email}`, {
            withCredentials: true
        })
        .then(res => {
            setCardData(res.data);
            setLoad(false);
        }
        ).catch(err => {
            console.error(err);
        });
    }, [user?.email])


    return (
        <div className="w-11/12 mx-auto my-16">

            <Helmet>
                <title>Book | HomeRevamp</title>
            </Helmet>

            <h1 className='text-5xl font-bold text-center mb-16'>Your Booked Services</h1>



            <div className="my-8">


                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:place-items-center items-stretch gap-5">


                {
                     load ? <div className="text-center col-span-full"><span className="loading loading-bars loading-lg"></span></div> : (CardData.length > 0) ? CardData.map((card) => <Cards key={card._id} card={card} book={true}></Cards>) : <h1 className='text-4xl font-bold text-center my-16 col-span-3'>You Have Not Booked Any Services</h1>
                }
                
                
                </div>

            </div>
            
        </div>
    );
};

export default Booked;