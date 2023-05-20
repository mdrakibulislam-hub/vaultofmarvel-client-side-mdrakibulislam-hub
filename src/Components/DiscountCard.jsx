import React, { useEffect } from 'react';
import disneyCard from '../assets/disney-card.webp';
import Aos from "aos";
import 'aos/dist/aos.css';

const DiscountCard = () => {

    useEffect(() => {

        Aos.init();
    }, [])

    return (
        <div data-aos="fade-up" className='grid md:grid-cols-2 items-center px-6 py-4 my-24 bg-primary rounded-md'>
            <div className='flex flex-col gap-2'>
                <button className="btn w-3/6 border-none bg-white text-black hover:bg-warning hover:text-neutral mx-auto">Get our membership card</button>
                <p className='text-white text-center'>And secure flat 20% Discount on any amount of purchase.</p>
            </div>
            <img src={disneyCard} alt="" />
        </div>
    );
};

export default DiscountCard;