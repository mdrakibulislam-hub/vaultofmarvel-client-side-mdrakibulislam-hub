import { useEffect } from "react";
import HomeGallery from "../../Components/HomeGallery";
import banner from "../../assets/home-banner.webp"
import HomeProductTabs from "../../Components/HomeProductTabs";

const Home = () => {

    useEffect(() => {
        document.title = "Homepage | Vault of marvel"
    }, [])

    return (
        <>
            <div className="main-container">
                <img className="mx-auto w-full lg:rounded-b-md" src={banner} alt="" />
                <HomeGallery></HomeGallery>
                <HomeProductTabs></HomeProductTabs>
            </div>
        </>
    );
};

export default Home;