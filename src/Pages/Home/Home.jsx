import { useEffect } from "react";
import HomeGallery from "../../Components/HomeGallery";
import banner from "../../assets/home-banner.webp"
import HomeProductTabs from "../../Components/HomeProductTabs";
import Aos from "aos";
import 'aos/dist/aos.css';
import DiscountCard from "../../Components/DiscountCard";
import ContactsSection from "../../Components/ContactsSection";
import UsersFeedback from "../../Components/UsersFeedback";

const Home = () => {

    useEffect(() => {
        document.title = "Homepage | Vault of marvel";
        Aos.init();
    }, [])


    return (
        <>
            <div className="main-container">
                <img data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className="mx-auto w-full lg:rounded-b-md" src={banner} alt="" />
                <HomeGallery></HomeGallery>
                <HomeProductTabs></HomeProductTabs>
                <DiscountCard></DiscountCard>
                <UsersFeedback></UsersFeedback>
                <ContactsSection></ContactsSection>
            </div>
        </>
    );
};

export default Home;