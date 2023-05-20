import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";
import { FaSearch } from "react-icons/fa";
import TableRow from "../../Components/TableRow";
import AllToysTableRow from "../../Components/AllToysTableRow";
import LoadingSpinner from "../../Components/LoadingSpinner";


const AllProducts = () => {

    useEffect(() => {
        document.title = `All toys | Vault of marvel`
    }, [])

    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);
    const [searchtext, setSearchText] = useState("");


    useEffect(() => {
        fetch("https://b7a11-toy-marketplace-server-side-mdrakibulislam-hub.vercel.app/alltoys")
            .then(res => res.json())
            .then(data => { setProducts(data.slice(0, 19)); setLoading(false) })
    }, [])


    const searchHandler = (event) => {
        event.preventDefault()

        fetch(`https://b7a11-toy-marketplace-server-side-mdrakibulislam-hub.vercel.app/alltoys/search/${searchtext}`)
            .then(res => res.json())
            .then(data => { setProducts(data), setLoading(false) })

    }

    const seeAllHandler = () => {
        setLoading(true)
        fetch(`https://b7a11-toy-marketplace-server-side-mdrakibulislam-hub.vercel.app/alltoys`)
            .then(res => res.json())
            .then(data => { setProducts(data); setLoading(false) })
    }


    if (loading) { return (<LoadingSpinner></LoadingSpinner>) }


    return (


        <div className="main-container">


            <div className="flex justify-between flex-wrap my-4 items-center">

                <h1 className="font-semibold text-4xl text-primary my-12">All product</h1>

                <form onSubmit={searchHandler} className="flex items-center gap-2">

                    <input onChange={(e) => setSearchText(e.target.value)} className="px-4 py-3 text-black bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter product name here" type="text" name="searchtext" id="" />

                    <button type="submit" className="btn border-none bg-primary text-white hover:bg-warning hover:text-neutral "><FaSearch></FaSearch></button>
                </form>
            </div>


            {/* product showed on card format bellow */}
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 my-8">
                {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
            </div> */}




            {/* card showed on tabular format bellow */}

            <table className="table w-full rounded-none overflow-scroll">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name & Price</th>
                        <th>Category and Seller</th>
                        <th>Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row */}

                    {products.map(product => <AllToysTableRow key={product._id} product={product}></AllToysTableRow>)}

                </tbody>

            </table>

            {products.length <= 20 && <div className="grid place-content-center"><button onClick={seeAllHandler} className="btn border-none bg-primary text-white hover:bg-warning hover:text-neutral my-8">See All</button></div>}

        </div>
    );
};

export default AllProducts;