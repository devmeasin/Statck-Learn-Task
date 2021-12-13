import { Navigate } from 'react-router-dom';

const isAuth = false;
const user = {
    activated : false
};
const SemiProtectedRoute = ({ children }) => {
    return (
       !isAuth ?  <Navigate to="/authenticate"/> 
       : 
       (isAuth && !user.activated ?  children : <Navigate to="/rooms"/>)
    )
}

export default SemiProtectedRoute;
