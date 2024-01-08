import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

const AuthMiddleware: FC = () => {
    const { accessToken } = useAuth();
    const location = useLocation();

    return accessToken ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}

export default AuthMiddleware;