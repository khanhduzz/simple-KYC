// import Header from "../components/header/header";
// import Sidebar from "../components/sidebar/sidebar";
// import { Navigate, Outlet } from "react-router";
// import Footer from "../components/footer/footer";
// import React, { useContext, useEffect } from "react";
// import { AuthenticatedContext } from "../shared/Authenticated";

// const Pages = () => {
//     const isAuthenticated = useContext(AuthenticatedContext)
//     console.log("Authen: ", isAuthenticated);
//     console.log("Re render");

//     // if (!isAuthenticated.user) {
//     //     return <Navigate to="/auth/login" />;
//     // }

//     // if (isAuthenticated.user.role === "admin") {
//     //     return <Navigate to="/pages/admin" replace />;
//     // }

//     // if (isAuthenticated.user.role === "user") {
//     //     return <Navigate to="/pages/user" replace />;
//     // }

//     return (
//         <>
//             <Header />
//             {isAuthenticated.user ? (
//                 <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
//                     <Sidebar />
//                     <div id="main-content"
//                         className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
//                         <main>
//                             <Outlet></Outlet>
//                             <Footer />
//                         </main>
//                     </div>
//                 </div>
//             ) : <Navigate to={'/auth/login'} />
//             }
//         </>
//     )
// }

// export default Pages


import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import { Navigate, Outlet, useLocation } from "react-router";
import Footer from "../components/footer/footer";
import React, { useContext } from "react";
import { AuthenticatedContext } from "../shared/Authenticated";

const Pages = () => {
    const isAuthenticated = useContext(AuthenticatedContext);
    const location = useLocation();

    if (!isAuthenticated.user) {
        // Redirect to login if not authenticated
        return <Navigate to="/auth/login" replace />;
    }

    // Role-based navigation for the base `/pages` route
    if (location.pathname === "/pages") {
        const userRole = isAuthenticated.user.role;
        if (userRole === "admin") {
            return <Navigate to="/pages/admin" replace />;
        } else if (userRole === "user") {
            return <Navigate to="/pages/user" replace />;
        }
    }

    // Render the layout for other routes
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
