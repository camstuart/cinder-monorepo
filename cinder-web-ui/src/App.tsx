// more advanced routing: https://semaphoreci.com/blog/routing-layer-react
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./layout.tsx";
import Page404 from "./pages/404.tsx";

function App() {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            errorElement: <Page404 />,
            // child route components
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
            ],
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default App