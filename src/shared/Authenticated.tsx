import {createContext, ReactElement, useEffect, useState} from "react";

interface User {
    name: string;
    email: string;
}

const fetchUserFromToken = async (token: string): Promise<User | null> => {
    try {
        const response = await fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching user: ${response.status}`);
        }

        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Failed to fetch user", error);
        return null;
    }
};

const AuthenticatedContext = createContext<User|null>(null);

const AuthenticatedProvider = ({children}: {children: ReactElement}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = sessionStorage.getItem('accessToken');
        if (token) {
            fetchUserFromToken(token).then((fetchedUser) => {
                setUser(fetchedUser);
            });
        }
    }, []);
    return (<AuthenticatedContext.Provider value={user}>{children}</AuthenticatedContext.Provider>)
}

export { AuthenticatedProvider, AuthenticatedContext};