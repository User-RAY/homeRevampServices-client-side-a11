import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";


const AllServices = () => {

    const [CardData, setCardData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/all')
        .then(res => setCardData(res.data)
        )
    }, [])

    return (
        <div className="my-16 w-11/12 mx-auto">
            <h1 className="text-5xl my-20 font-bold text-center">All Available Services</h1>
            <div className="flex flex-col gap-y-6">
                {
                    CardData.map((card,index) => <Card key={index} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default AllServices;