import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import { Navigate, Outlet, useLocation } from "react-router";
import Footer from "../components/footer/footer";
import { useContext } from "react";
import { AuthenticatedContext } from "../shared/Authenticated";

const Pages = () => {
    const isAuthenticated = useContext(AuthenticatedContext);
    const location = useLocation();

    if (!isAuthenticated.user) {
        return <Navigate to="/auth/login" replace />;
    }

    if (location.pathname === "/pages") {
        const userRole = isAuthenticated.user.role;
        if (userRole === "admin") {
            return <Navigate to="/pages/admin" replace />;
        } else if (userRole === "user") {
            return <Navigate to="/pages/user" replace />;
        }
    }

    return (
        <>
            <Header />
            <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <Sidebar />
                <div
                    id="main-content"
                    className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
                >
                    <main>
                        <Outlet />
                        <Footer />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Pages;
