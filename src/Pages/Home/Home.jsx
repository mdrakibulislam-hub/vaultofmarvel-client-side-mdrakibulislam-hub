import { useEffect } from "react";
import HomeGallery from "../../Components/HomeGallery";
import HomeProductTabs from "../../Components/HomeProductTabs";

import DiscountCard from "../../Components/DiscountCard";
import ContactsSection from "../../Components/ContactsSection";
import UsersFeedback from "../../Components/UsersFeedback";
import HomeBannger from "../../Components/HomeBannger";

const Home = () => {




    return (
        <>

            <HomeBannger></HomeBannger>
            <div className="main-container">
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