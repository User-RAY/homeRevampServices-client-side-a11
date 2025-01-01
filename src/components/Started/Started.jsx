import { TfiWrite } from "react-icons/tfi";
import { MdAddBox } from "react-icons/md";
import { BsBookmarkPlusFill } from "react-icons/bs";


const Started = () => {
    return (
        <div>

            <div className="min-h-96 bg-blue-500 rounded-2xl">
                <h1 className="text-4xl my-20 font-bold text-center pt-8">Getting Started Is Easy!</h1>

                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="flex flex-col justify-center items-center m-6 w-1/3 text-2xl">
                        <TfiWrite className="text-3xl"/>
                        <h2 className="md:w-1/2 text-center my-4">Step 1: Sign Up or Login</h2>
                    </div>

                    <div className="flex flex-col justify-center items-center m-6 w-1/3 text-2xl">
                        <MdAddBox className="text-3xl"/>

                        <h2 className="md:w-1/2 text-center my-4">Step 2: Browse or Add Services</h2>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center m-6 w-1/3 text-2xl">
                        <BsBookmarkPlusFill className="text-3xl"/>
                        <h2 className="md:w-1/2 text-center my-4">Step 3: Book or Manage Services</h2>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Started;