import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import { Navigate, Outlet } from "react-router";
import Footer from "../components/footer/footer";
import React, { useContext, useEffect } from "react";
import { AuthenticatedContext } from "../shared/Authenticated";

const Pages = () => {
    const isAuthenticated = useContext(AuthenticatedContext)
    console.log("Authen: ", isAuthenticated);
    console.log("Re render");
    return (
        <>
            <Header />

            {isAuthenticated.user ? (
                <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <Sidebar />
                    <div id="main-content"
                        className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                        <main>
                            <Outlet></Outlet>
                            <Footer />
                        </main>
                    </div>
                </div>
            ) : <Navigate to={'/auth/login'} />

            }


        </>
    )
}

export default Pages