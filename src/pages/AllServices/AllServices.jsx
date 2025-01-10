import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const AllServices = () => {

    window.scrollTo(0, 0);

    const [CardData, setCardData] = useState([]);
    const [initialCardData, setInitialCardData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/all')
        .then(res => {
            setInitialCardData(res.data); 
            setCardData(res.data);
        })
        
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();

        const search = e.target.search.value.trim();
 
        !search ? setCardData(initialCardData) 
        : fetch(`http://localhost:3000/search/${search}`)
        .then(res => res.json())
        .then(data => setCardData(data))
        .catch(() => {return []})
    }

    return (
        <div className="my-16 w-11/12 mx-auto">
            <Helmet>
                <title>AllServices | HomeRevamp</title>
            </Helmet>
            <h1 className="text-5xl my-20 font-bold text-center">All Available Services</h1>
            <div className="w-1/4 mx-auto mb-12">

            <form onSubmit={handleSearch} className="flex flex-col md:flex-row justify-center items-center text-black">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="search" name="search" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                    </svg>
                </label>
                <button className="btn btn-outline text-blue-400 mt-2 md:mt-0 md:ml-2">Search</button>
            </form>
            </div>
            <div className="flex flex-col gap-y-6">
                {
                   (CardData.length >0) ? CardData.map((card,index) => <Card key={index} card={card}></Card>) :
                   <h1 className="text-4xl text-center">No Service Found</h1>
                }
            </div>
        </div>
    );
};

export default AllServices;