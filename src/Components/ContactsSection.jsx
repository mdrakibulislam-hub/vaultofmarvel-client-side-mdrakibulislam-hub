import React, { useEffect } from 'react';
import mailIcon from './../assets/mail-icon.png';
import phoneIcon from './../assets/phone-icon.png';
import Aos from "aos";
import 'aos/dist/aos.css';

const ContactsSection = () => {
    useEffect(() => {

        Aos.init();
    }, [])
    return (
        <div data-aos="fade-up" className='main-container my-24'>


            <div className='grid mx-8 md:grid-cols-2 gap-8'>


                <div className='flex flex-col gap-4 my-auto'>

                    <h1 className='font-semibold text-primary text-3xl mb-8'>Send Us Your Feedback</h1>

                    <div className='flex gap-2 items-center'>
                        <img src={mailIcon} alt="" />
                        <div>
                            <p>E-mail us</p>
                            <h1 className='font-bold text-2xl'>hello@rakib.pro</h1>
                        </div>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <img src={phoneIcon} alt="" />
                        <div>
                            <p>Phone / WhatsApp</p>
                            <h1 className='font-bold text-2xl'>01571-252327</h1>
                        </div>
                    </div>
                </div>

                <div className='my-auto'>
                    <h1 className='font-bold text-4xl text-primary'>👋 Say Hi!</h1>
                    <input className='mt-6 block border-b-2 w-8/12 p-3 outline-none' type="email" name="" id="" placeholder='Enter your email here' />

                    <textarea className='mt-6 block border-b-2 w-8/12 p-3 outline-none' name="" id="" cols="30" rows="3" placeholder='Enter your feedback here...'></textarea>
                    <button className='btn border-none bg-primary text-white hover:bg-warning hover:text-neutral my-4 w-1/4'>Send</button>
                </div>


            </div>

        </div>
    );
};

export default ContactsSection;