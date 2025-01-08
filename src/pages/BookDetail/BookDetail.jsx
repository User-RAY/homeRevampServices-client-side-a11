import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../../components/DetailCard/DetailCard";


const BookDetail = () => {
    const [CardData, setCardData] = useState({});

    const { id } = useParams();    

    useEffect(() => {
        axios.get(`http://localhost:3000/book/${id}`)
        .then(res => setCardData(res.data)
        )
    }, [id])


    return (
        <div>
            {
                CardData ? <DetailCard card={CardData} book={true}></DetailCard> : null
            }
            
        </div>
    );
};

export default BookDetail;