import { useContext } from "react";
import PropTypes from 'prop-types';
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../Provider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ children }) => {
    const [isAdmin, isPending] = useAdmin();
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading || isPending) {
        return <span>Loading..........</span>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
};
AdminRoutes.propTypes = {
    children: PropTypes.node
}
export default AdminRoutes;