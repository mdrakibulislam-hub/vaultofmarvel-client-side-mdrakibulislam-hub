import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const HomeProductTabs = () => {


    const [products, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState("gotg")
    console.log(activeTab);

    useEffect(() => {
        fetch(`http://localhost:5000/alltoys/subcatrgory/${activeTab}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [activeTab])

    return (
        <>
            <h1 className="font-semibold text-center text-4xl text-primary my-12">Explore our leatest movie action figures</h1>


            <div className="grid place-content-center">
                <div className="tabs">
                    <span onClick={() => setActiveTab("gotg")} className={`tab tab-lg tab-lifted ${activeTab == "gotg" ? "tab-active" : ""}`}>Guardian of the galaxy</span>
                    <span onClick={() => setActiveTab("thor")} className={`tab tab-lg tab-lifted ${activeTab == "thor" ? "tab-active" : ""}`}>Thor</span>
                    <span onClick={() => setActiveTab("blackpanther")} className={`tab tab-lg tab-lifted ${activeTab == "blackpanther" ? "tab-active" : ""}`}>Black Panther</span>
                    <span onClick={() => setActiveTab("ironman")} className={`tab tab-lg tab-lifted ${activeTab == "ironman" ? "tab-active" : ""}`}>Iron Man</span>
                </div>
            </div>


            <div className="grid grid-cols-3 gap-12 my-8">
                {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
            </div>

        </>
    );
};

export default HomeProductTabs;