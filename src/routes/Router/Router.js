import ServicesFood from "../../components/Services/ServicesFood";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../components/Home/Home");
const { default: Main } = require("../../components/Main/Main");

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {path: '/',element: <Home></Home>},
            {path: '/foods', element: <ServicesFood></ServicesFood>}
        ]
    }
])

export default router;