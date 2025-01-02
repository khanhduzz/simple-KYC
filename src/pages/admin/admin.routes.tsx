import { Navigate, RouteObject } from "react-router";
import { lazy, Suspense } from "react";
import LoadingData from "../../components/loading";

const Submission = lazy(() => import("./kyc-submission/submission"));
const UserKYC = lazy(() => import("../user/kyc/kyc"));
const Admin = lazy(() => import("./admin"));
const UserFormTabs = lazy(() => import("../user/page-tab/merge-tab"));
const PersonalInformation = lazy(() => import("../user/personal-information/personal-information"))

const adminRoutes: RouteObject[] = [
    {
        path: 'admin',
        element: (
            <Suspense fallback={<LoadingData />}>
                <Admin />
            </Suspense>
        ),
        children: [
            {
                path: "",
                element: <Navigate to="submissions" replace />,
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
                path: 'submissions',
                element: <Submission />
            },
        ]
    }
]

export default adminRoutes;