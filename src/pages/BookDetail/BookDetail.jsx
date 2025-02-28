import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../../components/DetailCard/DetailCard";
import { Helmet } from "react-helmet-async";


const BookDetail = () => {
    const [CardData, setCardData] = useState({});

    const { id } = useParams();    

    useEffect(() => {
        axios.get(`https://home-revamp-services-server-side-a11.vercel.app/book/${id}`, {
            withCredentials: true
        })
        .then(res => setCardData(res.data)
        )
    }, [id])


    


    return (
        <div>
            <Helmet>
                <title>Booking Details | HomeRevamp</title>
            </Helmet>
            {
                CardData ? <DetailCard card={CardData} book={true}></DetailCard> : null
            }
            
        </div>
    );
};

export default BookDetail;