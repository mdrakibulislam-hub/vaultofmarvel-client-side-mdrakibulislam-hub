import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
import AllProducts from "../Pages/AllProductPage/AllProducts";
import AddProductPage from "../Pages/AddProductPage/AddProductPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";

const router = createBrowserRouter([
    {
        "path": "/",
        element: <Main></Main>,
        children: [
            { "path": "/", element: <Home></Home> },
            { "path": "/product/details/:id", element: <ProductDetailsPage></ProductDetailsPage>, loader: (req, res) => fetch(`http://localhost:5000/alltoys/toys/${req.params.id}`) },
            { "path": "/alltoys", element: <AllProducts></AllProducts> },
            { "path": "/addproduct", element: <AddProductPage></AddProductPage> },
            { "path": "/login", element: <Login></Login> },
            { "path": "/signup", element: <Registration></Registration> },
            { "path": "/forgetpassword", element: <ForgetPassword></ForgetPassword> },
        ]
    },
]);

export default router;