import Forbidden from "./403";
import NotFound from "./404";
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
        ]
    },
]

export default errorRoutes;