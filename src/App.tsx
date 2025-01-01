import React from 'react';
import './App.css';
import {RouterProvider, } from "react-router";
import appRouter from "./app.router";
import {AuthenticatedProvider} from "./shared/Authenticated";

function App() {
    return (
        <AuthenticatedProvider>
            <RouterProvider router={appRouter} />

        </AuthenticatedProvider>
    )
}

export default App;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Pages from "./pages/pages";
// import Admin from "./pages/admin/admin";
// import User from "./pages/user/user";
// import PersonalInformation from "./pages/user/personal-information/personal-information";
// import UserKYC from "./pages/user/kyc/kyc";
// import Submission from "./pages/admin/kyc-submission/submission";

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 {/* Main Pages component handles authentication and redirects */}
//                 <Route path="/" element={<Pages />}>
//                     {/* Admin Routes */}
//                     <Route path="admin" element={<Admin />}>
//                         {/* Admin-specific pages */}
//                         <Route path=":id/pi" element={<PersonalInformation disable={true} />} />
//                         <Route path=":id/kyc" element={<UserKYC disable={true} />} />
//                         <Route path="kyc-submissions" element={<Submission />} />
//                     </Route>

//                     {/* User Routes */}
//                     <Route path="user" element={<User />}>
//                         {/* User-specific pages */}
//                         <Route path=":id/pi" element={<PersonalInformation disable={false} />} />
//                         <Route path=":id/kyc" element={<UserKYC disable={false} />} />
//                     </Route>
//                 </Route>
//             </Routes>
//         </Router>
//     );
// };

// export default App;
