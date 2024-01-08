import React, { useState, createContext, ReactNode } from 'react';

// Define a type for the AuthContext state
type AuthContextType = {
    user: never; // Replace 'any' with a more specific type if possible
    setUser: React.Dispatch<React.SetStateAction<never>>; // Same here
    accessToken: string | null;
    setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
    refreshToken: string | null;
    setRefreshToken: React.Dispatch<React.SetStateAction<string | null>>;
    csrftoken: string | null;
    setCSRFToken: React.Dispatch<React.SetStateAction<string | null>>;
};

// Create a default context value
const defaultContextValue: AuthContextType = {
    user: {},
    setUser: () => {},
    accessToken: null,
    refreshToken: null,
    csrftoken: null,
    setAccessToken: () => {},
    setRefreshToken: () => {},
    setCSRFToken: () => {}
};

// Create the context with the default value
export const AuthContext = createContext<AuthContextType>(defaultContextValue);

// Define a type for the props of AuthContextProvider
type AuthContextProviderProps = {
    children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<never>({}); // Replace 'any' with a more specific type if possible
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [csrftoken, setCSRFToken] = useState<string | null>(null);

    return (
        <AuthContext.Provider value={{
            user, setUser,
            accessToken, setAccessToken,
            refreshToken, setRefreshToken,
            csrftoken, setCSRFToken
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
