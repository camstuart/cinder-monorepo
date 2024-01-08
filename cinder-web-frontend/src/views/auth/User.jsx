import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import useAxiosPrivate from "../../hooks/useAxiosPrivate"

export default function User() {

    const { user, setUser } = useAuth()
    const axiosPrivateInstance = useAxiosPrivate()

    useEffect(() => {
        async function getUser() {
            const { data } = await axiosPrivateInstance.get('auth/user')
            setUser(data)
        }

        getUser()
    }, [])

    return (
        <div>
            <h3>Welcome {user?.username}</h3>
            <h4>{user?.email}</h4>
        </div>
    )
}
