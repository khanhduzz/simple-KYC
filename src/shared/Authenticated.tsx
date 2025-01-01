import { createContext, ReactElement, useEffect, useState } from "react";

interface User {
    name: string;
    email: string;
    role: string,
}

const AuthenticatedContext = createContext<{
    user: User | null;
    loading: boolean;
    setUser: (user: User) => void;
    logOut: () => void;
}>({
    user: null,
    loading: true,
    setUser: () => { },
    logOut: () => {}
});

const AuthenticatedProvider = ({ children }: { children: ReactElement }) => {
    const storedUser = sessionStorage.getItem("user");
    let initialUser: User | null = null;

    if (storedUser) {
        try {
            initialUser = JSON.parse(storedUser);
        } catch (error) {
            console.error("Error parsing user from sessionStorage:", error);
        }
    }

    const [user, setUser] = useState<User | null>(initialUser);
    const [loading, setLoading] = useState<boolean>(true);

    const logOut = () => {
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("user");
        setUser(null);
    };

    // useEffect(() => {
    //     console.log("Check run authenticate");

    //     checkLogin();
    // }, []);

    // const checkLogin = async () => {
    //     const token = sessionStorage.getItem("accessToken");
    //     if (token) {
    //         try {
    //             const response = await fetch("https://dummyjson.com/auth/me", {
    //                 method: "GET",
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             });
    //             const data = await response.json();

    //             const newUser: User = {
    //                 name: data.name,
    //                 email: data.email,
    //             };
    //             setUser(newUser);
    //         } catch (error) {
    //             console.error("Error during login check:", error);
    //             setUser(null);
    //         }
    //     }
    //     setLoading(false);
    // };

    console.log("Authen run");

    return (
        <AuthenticatedContext.Provider value={{ user, loading, setUser, logOut }}>
            {children}
        </AuthenticatedContext.Provider>
    );
};

export { AuthenticatedProvider, AuthenticatedContext };
