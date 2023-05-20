import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner";
import Aos from "aos";
import 'aos/dist/aos.css';

const HomeProductTabs = () => {

    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState("gotg")
    console.log(activeTab);

    useEffect(() => {

        Aos.init();
    }, [])

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-mdrakibulislam-hub.vercel.app/alltoys/subcatrgory/${activeTab}`)
            .then(res => res.json())
            .then(data => { setProducts(data); setLoading(false) })
    }, [activeTab])




    if (loading) { return (<LoadingSpinner></LoadingSpinner>) }

    return (
        <>
            <h1 className="font-semibold text-center text-4xl text-primary my-12">Explore our leatest movie action figures</h1>


            <div className="grid place-content-center">
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom" className="tabs">
                    <span onClick={() => setActiveTab("gotg")} className={`tab tab-lg tab-lifted ${activeTab == "gotg" ? "tab-active" : ""}`}>Guardian of the galaxy</span>
                    <span onClick={() => setActiveTab("thor")} className={`tab tab-lg tab-lifted ${activeTab == "thor" ? "tab-active" : ""}`}>Thor</span>
                    <span onClick={() => setActiveTab("blackpanther")} className={`tab tab-lg tab-lifted ${activeTab == "blackpanther" ? "tab-active" : ""}`}>Black Panther</span>
                    <span onClick={() => setActiveTab("ironman")} className={`tab tab-lg tab-lifted ${activeTab == "ironman" ? "tab-active" : ""}`}>Iron Man</span>
                </div>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 my-8">
                {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
            </div>

        </>
    );
};

export default HomeProductTabs;