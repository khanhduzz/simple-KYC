import { createContext, ReactElement, useEffect, useState } from "react";

interface User {
    name: string;
    email: string;
    role: string,
}

const AuthenticatedContext = createContext<{
    user: User | null;
    loading: boolean;
    setUser: (user: User | null) => void;
}>({
    user: null,
    loading: true,
    setUser: () => { },
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

    console.log("Authen run");

    return (
        <AuthenticatedContext.Provider value={{ user, loading, setUser }}>
            {children}
        </AuthenticatedContext.Provider>
    );
};

export { AuthenticatedProvider, AuthenticatedContext };
