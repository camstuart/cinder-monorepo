import { useContext, useDebugValue } from "react";
import AuthContext from "../store/store-context.tsx";


export default function useAuth() {
    // @ts-ignore
    const { auth } = useContext(AuthContext)

    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")

    return useContext(AuthContext)
}