import { useContext } from "react";
import { AuthContext } from "../../Provider/FirebaseProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <span>Loading..........</span>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;