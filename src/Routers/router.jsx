import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";

const router = createBrowserRouter([
    {
        "path": "/",
        element: <Main></Main>,
        children: [
            { "path": "/", element: <Home></Home> },
            { "path": "/product/details/:id", element: <ProductDetailsPage></ProductDetailsPage>, loader: (req, res) => fetch(`http://localhost:5000/alltoys/toys/${req.params.id}`) },
        ]
    },
]);

export default router;