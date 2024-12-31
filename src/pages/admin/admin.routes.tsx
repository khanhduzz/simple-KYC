import { RouteObject } from "react-router";
import Admin from "./admin";
import Submission from "./kyc-submission/submission";
import PersonalInformation from "../user/personal-information/personal-information";
import UserKYC from "../user/kyc/kyc";
import UserFormTabs from "../user/page-tab/merge-tab";

const adminRoutes: RouteObject[] = [
    {
        path: 'admin',
        element: <Admin />,
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
                path: 'kyc-submissions',
                element: <Submission />
            }
        ]
    }
]

export default adminRoutes;