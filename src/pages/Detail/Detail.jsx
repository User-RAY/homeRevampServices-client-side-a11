import axios from "axios";
import { useEffect, useState } from "react";
import DetailCard from "../../components/DetailCard/DetailCard";


const Detail = () => {

    const [CardData, setCardData] = useState([]);

    useEffect(() => {
        axios.get('/FakeData.json')
        .then(res => setCardData(res.data)
        )
    }, [])


    return (
        <div>
            {
                CardData ? <DetailCard card={CardData[1]}></DetailCard> : null
            }
            
        </div>
    );
};

export default Detail;