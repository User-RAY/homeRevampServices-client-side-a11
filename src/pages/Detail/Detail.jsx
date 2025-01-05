import axios from "axios";
import { useEffect, useState } from "react";
import DetailCard from "../../components/DetailCard/DetailCard";
import { useParams } from "react-router-dom";


const Detail = () => {

    const [CardData, setCardData] = useState({});

    const { id } = useParams();    

    useEffect(() => {
        axios.get(`http://localhost:3000/detail/${id}`)
        .then(res => setCardData(res.data)
        )
    }, [id])


    return (
        <div>
            {
                CardData ? <DetailCard card={CardData}></DetailCard> : null
            }
            
        </div>
    );
};

export default Detail;