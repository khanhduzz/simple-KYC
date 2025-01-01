import { Navigate, RouteObject } from "react-router";
import PersonalInformation from "./personal-information/personal-information";
import UserKYC from "./kyc/kyc";
import User from "./user";
import UserFormTabs from "./page-tab/merge-tab";
import UserProfile from "./profile/user-profile";
import NotFound from "../error/404";

const userRoutes: RouteObject[] = [
    {
        path: 'user',
        element: <User />,
        children: [
            {
                path: "",
                element: <Navigate to="profile" replace />,
            },
            {
                path: ':id/pi',
                element: <PersonalInformation disable={false}/>
            },
            {
                path: ':id/kyc',
                element: <UserKYC disable={false}/>
            },
            {
                path: ':id/merge',
                element: <UserFormTabs />
            },
            {
                path: 'profile',
                element: <UserProfile />
            },
        ]
    }
]

export default userRoutes;