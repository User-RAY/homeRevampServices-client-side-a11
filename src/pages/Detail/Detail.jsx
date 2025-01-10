import axios from "axios";
import { useEffect, useState } from "react";
import DetailCard from "../../components/DetailCard/DetailCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Detail = () => {

    const [CardData, setCardData] = useState({});

    const { id } = useParams();    

    useEffect(() => {
        axios.get(`http://localhost:3000/detail/${id}`, {
            withCredentials: true
        })
        .then(res => setCardData(res.data)
        )
    }, [id])


    return (
        <div>
            <Helmet>
                <title>ServiceDetail | HomeRevamp</title>
            </Helmet>
            {
                CardData ? <DetailCard card={CardData}></DetailCard> : null
            }
            
        </div>
    );
};

export default Detail;