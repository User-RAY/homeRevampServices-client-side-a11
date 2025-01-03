import PropTypes from 'prop-types';
import { useContext } from 'react';
import AuthContext from '../context-providers/Auth/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext);

    const location = useLocation();
    

    if (loading) {
        return (<div className='h-[80vh'><div className="flex justify-center items-center h-full"><span className="loading loading-bars loading-lg"></span></div></div>)
    }
    

    if(user){
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}


export default PrivateRoute;