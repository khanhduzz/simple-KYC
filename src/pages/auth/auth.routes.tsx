import { RouteObject } from "react-router";
import Login from "./login/Login";
import ResetPassword from "./reset-password/reset-password";
import Auth from "./auth";
import SignUp from "./sign-up/sign-up";
import Logout from "./logout/logout";

const authRoutes: RouteObject[] = [
    {
        path: 'auth',
        element: <Auth/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'sign-up',
                element: <SignUp/>
            },
            {
                path: 'reset-password',
                element: <ResetPassword/>
            },
            {
                path: 'logout',
                element: <Logout />
            }
        ]

    }
]

export default authRoutes;