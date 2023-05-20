import React, { useEffect } from 'react';
import heros from '../assets/hero-group.webp';
import logo from '../assets/logo.svg';
import Aos from "aos";
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const HomeBannger = () => {

    useEffect(() => {
        document.title = "Homepage | Vault of marvel";
        Aos.init();
    }, [])

    return (
        <div className='bg-black py-16'>
            <div data-aos="fade-up" className='main-container grid md:grid-cols-2 justify-center items-center'>
                <div>
                    <img src={logo} alt="" />
                    <h1 className='font-semibold text-5xl text-white leading-[4rem] my-4'>Unleash Your Inner Hero with Marvel Toys!</h1>
                    <p className='text-white text-lg my-4'>Unlock the Power of Imagination and Embark on Epic Adventures with Marvel Toys - Where Heroes Rise, Villains Fall, and Endless Marvelous Moments Await</p>
                    <Link to="/alltoys"><button className="btn border-none bg-primary text-white hover:bg-warning hover:text-neutral ">Buy Now</button></Link>
                </div>
                <img className='w-full' src={heros} alt="" />
            </div>
        </div>
    );
};

export default HomeBannger;