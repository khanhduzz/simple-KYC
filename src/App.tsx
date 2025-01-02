import './App.css';
import { RouterProvider, } from "react-router";
import appRouter from "./app.router";
import { AuthenticatedProvider } from "./shared/Authenticated";
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <AuthenticatedProvider>
                <RouterProvider router={appRouter} />
            </AuthenticatedProvider>
            <ToastContainer />
        </>
    )
}

export default App;