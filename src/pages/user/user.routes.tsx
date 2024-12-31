import { RouteObject } from "react-router";
import PersonalInformation from "./personal-information/personal-information";
import UserKYC from "./kyc/kyc";
import User from "./user";
import UserFormTabs from "./page-tab/merge-tab";
import UserProfile from "./profile/user-profile";

const userRoutes: RouteObject[] = [
    {
        path: 'user',
        element: <User />,
        children: [
            {
                path: ':id/pi',
                element: <PersonalInformation />
            },
            {
                path: ':id/kyc',
                element: <UserKYC />
            },
            {
                path: ':id/merge',
                element: <UserFormTabs />
            },
            {
                path: 'profile',
                element: <UserProfile />
            }
        ]
    }
]

export default userRoutes;