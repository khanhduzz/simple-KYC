import { useContext, useEffect } from "react";
import { AuthenticatedContext } from "../../../shared/Authenticated";
import { Navigate, useNavigate } from "react-router";
import { showSuccessToast } from "../../../utils/toastUtils";

const Logout = () => {
    const { setUser } = useContext(AuthenticatedContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Need to call api here, but I make it simple with dummyjson
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("user");
        setUser(null);
        navigate("/auth/login");
        showSuccessToast("Logout successfully!")
    }, [])

    return null;
}

export default Logout;