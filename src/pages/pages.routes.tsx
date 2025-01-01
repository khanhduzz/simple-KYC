import HomeComponent from "./home/HomeComponent";
import userRoutes from "./user/user.routes";
import Pages from "./pages";
import adminRoutes from "./admin/admin.routes";
import errorRoutes from "./error/error.routes";
import NotFound from "./error/404";
import { Navigate } from "react-router";


const pageRoutes = [
    {
        path: 'pages',
        element: <Pages/>,
        children: [
            {
                path: 'home',
                element: <HomeComponent/>
            },
            ...userRoutes,
            ...adminRoutes,
            ...errorRoutes,
            {
                path: '*',
                element: <Navigate to="error/not-found" replace />,
            },
        ]
    },
]

export default pageRoutes;