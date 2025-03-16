import { useContext, useEffect, useState } from "react";
import CardTodo from "../../components/CardTodo/CardTodo";
import AuthContext from "../../context-providers/Auth/AuthContext";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const ToDo = () => {

    const [load, setLoad] = useState(true);
    const [CardData, setCardData] = useState([]);

    const {user} = useContext(AuthContext)


    

    useEffect(() => {
        axios.get(`https://home-revamp-services-server-side-a11.vercel.app/todo/${user?.email}`, {
            withCredentials: true
        })
        .then(res => {
            setCardData(res.data)
            setLoad(false);
        }
        ).catch(err => {
            console.error(err);
        });
    }, [user?.email])

    return (
        <div className="mt-8 mb-6 w-11/12 mx-auto">

            <Helmet>
                <title>Service-TO-DO | HomeRevamp</title>
            </Helmet>

            <h1 className="text-5xl font-bold text-center my-14 "> Service-To-Do </h1>

            {
                 load ? <div className="mt-14 text-center"><span className="loading loading-bars loading-lg"></span></div> : (CardData.length > 0) ? CardData.map((card) => <CardTodo key={card._id} card={card} book={true}></CardTodo>) : <h1 className=' text-4xl  text-center my-16 col-span-3'>Currently Nobody has Booked Any of your Service</h1>
            }
            
        </div>
    );
};

export default ToDo;