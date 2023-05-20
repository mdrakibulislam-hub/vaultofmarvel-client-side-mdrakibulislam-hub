import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
import AllProducts from "../Pages/AllProductPage/AllProducts";
import AddProductPage from "../Pages/AddProductPage/AddProductPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import PrivetRoute from "./PrivetRoute";
import MyToys from "../Pages/MyToysPage/MyToys";
import ErrorElement from "../Components/ErrorElement";

const router = createBrowserRouter([
    {
        "path": "/",
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            { "path": "/", element: <Home></Home> },
            { "path": "/product/details/:id", element: <PrivetRoute><ProductDetailsPage></ProductDetailsPage></PrivetRoute>, loader: (req, res) => fetch(`http://localhost:5000/alltoys/toys/${req.params.id}`) },
            { "path": "/alltoys", element: <AllProducts></AllProducts> },
            { "path": "/mytoys", element: <PrivetRoute><MyToys></MyToys></PrivetRoute> },
            { "path": "/addproduct", element: <PrivetRoute><AddProductPage></AddProductPage></PrivetRoute> },
            { "path": "/login", element: <Login></Login> },
            { "path": "/signup", element: <Registration></Registration> },
            { "path": "/forgetpassword", element: <ForgetPassword></ForgetPassword> },
        ]
    },
]);

export default router;