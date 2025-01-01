import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";
import { default as axios } from 'axios';


const Popular = () => {

    const [CardData, setCardData] = useState([]);

    useEffect(() => {
        axios.get('/FakeData.json')
        .then(res => setCardData(res.data)
        )
    }, [])


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-stretch gap-5">
            {/* need to edit keys */}
            {
                CardData.map((card,index) => <Cards key={index} card={card}></Cards>)
            }
            
            
            </div>
            <div className="text-center my-20"><Link to='/all' className="btn btn-info w-full md:w-1/2">Show All Services</Link></div>
        </>
    );
};

export default Popular;