import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";

const AllProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/alltoys")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (


        <div className="main-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 my-8">
                {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
            </div>
        </div>
    );
};

export default AllProducts;