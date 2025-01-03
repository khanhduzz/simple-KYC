import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthenticatedContext } from "../../shared/Authenticated";

const User = () => {
    const isAuthenticated = useContext(AuthenticatedContext)

    if (!(isAuthenticated.user?.role === 'user')) {
        return <Navigate to="/pages/error/forbidden" replace />;
    }
    return (
        <Outlet />
    )
}

export default User;