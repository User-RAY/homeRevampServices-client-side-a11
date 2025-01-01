import { MdVerified } from "react-icons/md";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { MdMoreTime } from "react-icons/md";
import { MdMobileFriendly } from "react-icons/md";



const Choose = () => {
    return (
        <div>

            <div className="h-[30rem] flex flex-col md:flex-row relative">

                <div className="bg-gray-700 md:w-1/2 h-full grid grid-rows-2 items-center justify-center">

                    <div className="flex items-center"> 
                        <h2 className="text-2xl text-white">Verified Professionals</h2> 
                        <MdVerified className="text-6xl text-white" /> 
                    </div>
                    
                    <div className="flex items-center justify-self-end">
                        <h2 className="text-2xl text-white">Affordable Pricing</h2> 
                        <AiTwotoneDollarCircle className="text-6xl" />
                    </div>

                </div>

                <img src="https://i.ibb.co.com/pdm89jv/uzho4pi6.png" alt=""  className="hidden h-[30rem] lg:inline absolute left-[calc(50%-102px)] "/>

                <div className="bg-blue-500 md:w-1/2 h-full grid grid-rows-2 items-center justify-center">

                    <div className="flex items-center">
                        <MdMoreTime className="text-6xl " /> 
                        <h2 className="text-2xl">24/7 Availability</h2>
                    </div>

                    <div className="flex items-center">
                        <MdMobileFriendly className="text-6xl"/> 
                        <h2 className="text-2xl">User-Friendly Interface</h2>
                    </div>

                </div>
                
            </div>

        </div>
    );
};

export default Choose;