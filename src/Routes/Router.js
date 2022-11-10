import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Blog from "../components/Pages/Blog";
import Home from "../components/Pages/Home";
import Service from "../components/Pages/Service";

const router = createBrowserRouter([{
    path: '/', element: <Main></Main>,
    children: [
        { path: '/', element: <Home></Home>},
        {path: '/service', element: <Service></Service>},
        {path: '/blog', element: <Blog></Blog>}

    ]
}])

export default router;