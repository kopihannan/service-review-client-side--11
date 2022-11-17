import AddReview from "../../components/AddReview/AddReview";
import Login from "../../components/Login/Login";
import MyReview from "../../components/MyReviews/MyReview";
import Register from "../../components/Register/Register";
import ServiceDetails from "../../components/ServiceDetailsAndReviews/ServiceDetails";
import AllServiceFoods from "../../components/Services/AllServiceFoods";
import ServicesFood from "../../components/Services/ServicesFood";
import PrivateRoute from "../PrivateRouter/PrivateRoute";


const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../components/Home/Home");
const { default: Main } = require("../../components/Main/Main");

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {path: '/',element: <Home></Home>},
            {path: '/foods', element: <ServicesFood></ServicesFood>},
            {path: '/all-foods', element: <AllServiceFoods></AllServiceFoods>},
            {path: '/login', element: <Login></Login>},
            {path: '/register', element: <Register></Register>},
            {path: '/my-review', element: <PrivateRoute><MyReview></MyReview> </PrivateRoute>},
            {path: '/add-review', element: <PrivateRoute><AddReview></AddReview></PrivateRoute>},
            {path: '/food-details/:id', element:<ServiceDetails></ServiceDetails>,
            loader: async ({ params }) => {
                return fetch(`http://localhost:5000/foods/${params.id}`);
            },}
        ]
    }
])

export default router;