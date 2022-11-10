import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Blog from "../components/Pages/Blog";
import Details from "../components/Pages/Details";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Service from "../components/Pages/Service";
import SignUp from "../components/Pages/SignUp";

const router = createBrowserRouter([{
    path: '/', element: <Main></Main>,
    children: [
        { path: '/', element: <Home></Home> },
        { path: '/login', element: <Login></Login> },
        { path: '/service', element: <Service></Service> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/signup', element: <SignUp></SignUp> },
        {
            path: '/service/:id', element: <Details></Details>,
            loader: async ({ params }) => {
                return fetch(`https://server-vromon.vercel.app/service/${params.id}`);
            },
        },

    ]
}])

export default router;