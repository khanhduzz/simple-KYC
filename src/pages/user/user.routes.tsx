import { Navigate, RouteObject } from "react-router";
import { lazy, Suspense } from "react";
import LoadingData from "../../components/loading";

const PersonalInformation = lazy(() => import("./personal-information/personal-information"));
const UserKYC = lazy(() => import("./kyc/kyc"));
const User = lazy(() => import("./user"));
const UserFormTabs = lazy(() => import("./page-tab/merge-tab"));
const UserProfile = lazy(() => import("./profile/user-profile"));

const userRoutes: RouteObject[] = [
    {
        path: 'user',
        element: (
            <Suspense fallback={<LoadingData />}>
                <User />,
            </Suspense>),
        children: [
            {
                path: "",
                element: <Navigate to="profile" replace />,
            },
            {
                path: ':id/pi',
                element: <PersonalInformation disable={false} />
            },
            {
                path: ':id/kyc',
                element: <UserKYC disable={false} />
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