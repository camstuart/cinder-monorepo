import { Routes, Navigate, Route } from 'react-router-dom'
// import './App.css';

import Layout from "./layout.tsx";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import PersistLogin from "./components/PersistLogin.tsx";
import Login from "./pages/Auth/Login.tsx";
import Register from "./pages/Auth/Register.tsx";
import AuthMiddleware from "./middleware/Auth.tsx";
import User from "./pages/Auth/User.tsx";



function App() {
    return <>
        <Layout />
        <Routes>
            <Route path='/' element={<PersistLogin />}>
                <Route index element={<HomePage />}></Route>
                <Route path='/about' element={<AboutPage />}></Route>
                <Route path='/auth'>
                    <Route path='login' element={<Login />}></Route>
                    <Route path='register' element={<Register />}></Route>
                    <Route path='user' element={<AuthMiddleware />}>
                        <Route index element={<User />}></Route>
                    </Route>
                </Route>
            </Route>
            <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>
    </>
}

export default App;



// // more advanced routing: https://semaphoreci.com/blog/routing-layer-react
// import {
//     createBrowserRouter,
//     RouterProvider,
// } from "react-router-dom"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Layout from "./layout.tsx";
// import Page404 from "./pages/404.tsx";
// import SignInPage from "./pages/SignIn.tsx";
//
// function App() {
//
//     const router = createBrowserRouter([
//         {
//             element: <Layout />,
//             errorElement: <Page404 />,
//             children: [
//                 {
//                     path: "/",
//                     element: <Home />,
//                 },
//                 {
//                     path: "/about",
//                     element: <About />,
//                 },
//                 {
//                     path: "/sign-in",
//                     element: <SignInPage />,
//                 },
//             ],
//         },
//     ])
//
//     return (
//         <RouterProvider router={router} />
//     )
// }
//
// export default App