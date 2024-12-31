import HomeComponent from "./home/HomeComponent";
import userRoutes from "./user/user.routes";
import Pages from "./pages";
import authRoutes from "./auth/auth.routes";
import adminRoutes from "./admin/admin.routes";


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
        ]
    },

]

export default pageRoutes;