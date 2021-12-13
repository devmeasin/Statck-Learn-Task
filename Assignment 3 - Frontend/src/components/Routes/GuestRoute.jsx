import { Navigate } from 'react-router-dom';

const isAuth = false;

const GuestRoute = ({ children }) => {
    return !isAuth ? children :  <Navigate to="/rooms"/>;
}

export default GuestRoute;
