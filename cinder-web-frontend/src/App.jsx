import './App.css'
import Home from "./views/Home.jsx";
import AuthMiddleware from './middleware/Auth';
import Login from "./views/auth/Login.jsx";
import PersistLogin from "./components/PersistLogin.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Register from "./views/auth/Register.jsx";
import User from "./views/auth/User.jsx";
import Navbar from "./components/Navbar.jsx";
import TimeLine from "./views/TimeLine.jsx";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<PersistLogin />}>
                <Route index exact element={<Home />}></Route>
                <Route path='/auth'>
                    <Route path='login' element={<Login />}></Route>
                    <Route path='register' element={<Register />}></Route>
                    <Route path='user' element={<AuthMiddleware />}>
                        <Route index element={<User />}></Route>
                    </Route>
                </Route>
                <Route path='/timeline' element={<AuthMiddleware />}>
                    <Route index element={<TimeLine />}></Route>
                </Route>
            </Route>
            <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>
    </>
  )
}

export default App
