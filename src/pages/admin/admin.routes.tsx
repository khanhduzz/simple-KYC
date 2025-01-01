import { Navigate, RouteObject } from "react-router";
import Admin from "./admin";
import Submission from "./kyc-submission/submission";
import PersonalInformation from "../user/personal-information/personal-information";
import UserKYC from "../user/kyc/kyc";
import UserFormTabs from "../user/page-tab/merge-tab";
import NotFound from "../error/404";

const adminRoutes: RouteObject[] = [
    {
        path: 'admin',
        element: <Admin />,
        children: [
            {
                path: "",
                element: <Navigate to="kyc-submissions" replace />,
            },
            {
                path: ':id/pi',
                element: <PersonalInformation disable={true}/>
            },
            {
                path: ':id/kyc',
                element: <UserKYC disable={true}/>
            },
            {
                path: ':id/merge',
                element: <UserFormTabs />
            },
            {
                path: 'kyc-submissions',
                element: <Submission />
            },
        ]
    }
]

export default adminRoutes;