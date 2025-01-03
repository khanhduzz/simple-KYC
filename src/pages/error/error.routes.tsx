import Forbidden from "./403";
import NotFound from "./404";
import CommonError from "./common";
import ErrorPage from "./error";

const errorRoutes = [
    {
        path: 'error',
        element: <ErrorPage />,
        children: [
            {
                path: 'forbidden',
                element: <Forbidden />
            },
            {
                path: 'not-found',
                element: <NotFound />
            },
            {
                path: '*',
                element: <CommonError />
            },
        ]
    },
]

export default errorRoutes;