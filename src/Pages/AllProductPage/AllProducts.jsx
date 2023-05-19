import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";
import { FaSearch } from "react-icons/fa";


const AllProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/alltoys")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        document.title = `All toys | Vault of marvel`
    }, [])

    return (


        <div className="main-container">


            <div className="flex justify-between items-center">

                <h1 className="font-semibold text-4xl text-primary my-12">All product</h1>

                <div className="flex items-center gap-2">

                    <input className="px-4 py-3 text-black bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter product name here" type="text" name="searchtext" id="" />

                    <button className="btn border-none bg-primary text-white hover:bg-warning hover:text-neutral "><FaSearch></FaSearch></button>
                </div>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 my-8">
                {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
            </div>
        </div>
    );
};

export default AllProducts;