import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuth = false;
const user = {
    activated : false
};
const ProtectedRoute = ({children}) => {
    return !isAuth ? <Navigate to="/authenticate"/>
        : (
            isAuth && !user.activated
                ? <Navigate to="/activate"/>
                : children
        );
}

export default ProtectedRoute;
