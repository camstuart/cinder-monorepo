import {useEffect, useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import useAuth from "../hooks/useAuth.js";
import useAxiosPrivate from "../hooks/useAxiosPrivate.js";
import useLogout from "../hooks/useLogout.js";


export default function Navbar() {

    const { user, setUser } = useAuth()
    const axiosPrivateInstance = useAxiosPrivate()
    const navigate = useNavigate()
    const logout = useLogout()
    const [loading, setLoading] = useState(false)

    async function onLogout() {
        setLoading(true)

        await logout()
        setLoading(false)
        navigate('/')
    }

    useEffect(() => {
        async function getUser() {
            const { data } = await axiosPrivateInstance.get('auth/user')
            setUser(data)
        }

        getUser()
    }, [])

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'><NavLink className={'nav-link'} to={'/'}>Home</NavLink></li>
                        {user?.email ? (
                            <>
                                <li className='nav-item'><NavLink className={'nav-link'} to={'/timeline'}>Timeline</NavLink></li>
                                <li className='nav-item'><NavLink className={'nav-link'} to={'/auth/user'}>User</NavLink>
                                </li>
                                <button disabled={loading} type='button' onClick={onLogout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <li className='nav-item'><NavLink className={'nav-link'}
                                                                  to={'/auth/login'}>Login</NavLink></li>
                                <li className='nav-item'><NavLink className={'nav-link'}
                                                                  to={'/auth/register'}>Register</NavLink></li>
                            </>
                        )}

                    </ul>
                </div>
            </div>

        </nav>
    )
}
