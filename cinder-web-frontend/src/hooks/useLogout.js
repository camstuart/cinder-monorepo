import useAuth from "./useAuth"
import { axiosPrivateInstance } from "../axios"

export default function useLogout() {
    const { setUser, setAccessToken, setCSRFToken } = useAuth()

    const logout = async () => {
        try {
            const response = await axiosPrivateInstance.get("auth/logout")

            setAccessToken(null)
            setCSRFToken(null)
            setUser({})

        } catch (error) {
            console.error('logout failed:', error)
        }
    }

    return logout
}