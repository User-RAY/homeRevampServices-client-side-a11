import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>ErrorPage | HomeRevamp</title>
            </Helmet>
            <h1 className="text-5xl text-center">404, Sorry an Error Occured</h1>
            <div className="flex justify-center items-center">
                <Link to='/'><button className="btn">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;