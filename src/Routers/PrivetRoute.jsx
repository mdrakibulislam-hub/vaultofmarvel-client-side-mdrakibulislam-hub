import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
// import LoadingSpinner from '../Components/LoadingSpinner';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <p>loading</p>
    }
    if (user) {
        return children;
    }
    else
        return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoute;