import React, { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';

const UsersFeedback = () => {

    useEffect(() => {

        Aos.init();
    }, [])

    return (
        <div data-aos="fade-up" className='main-container my-24'>
            <h1 className='font-semibold text-center text-4xl text-primary my-12'>What Kids Are Saying About Us</h1>


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center'>

                <div className='flex flex-col gap-4 justify-between items-center'>
                    <img className='w-2/6 mx-auto rounded-full' src="https://i.ibb.co/ScK9TFm/harry.jpg" alt="" />
                    <p className='text-sm'> &quot; I absolutely love playing with my Marvel toys! The details and quality are amazing. I have action figures of all my favorite heroes like Iron Man, Spider-Man, and Captain America. The toys are so realistic, and I can even pose them in different action positions. It feels like I am part of the Marvel universe when I play with them. I spend hours creating epic battles and adventures. These toys are a must-have for any Marvel fan! &quot;</p>
                    <p className='font-semibold text-xl'>- Ryan, 5</p>
                </div>


                <div className='flex flex-col gap-4 justify-between items-center'>
                    <img className='w-2/6 mx-auto rounded-full' src="https://i.ibb.co/xg88WVs/peter.jpg" alt="" />
                    <p className='text-sm'>&quot; Marvel toys are awesome! I have a Hulk Smash action figure, and it is super fun to smash things with him. The toy is really sturdy, and it does not break easily, even when I play rough. I also have a Black Widow figure with lots of cool accessories like her batons and guns. I love reenacting scenes from the movies and creating my own stories. The Marvel toys let my imagination run wild, and I can not get enough of them! &quot;</p>
                    <p className='font-semibold text-xl'>- Harry, 8</p>
                </div>

                <div className='flex flex-col gap-4 justify-between items-center'>
                    <img className='w-2/6 mx-auto rounded-full' src="https://i.ibb.co/f1wVqxh/ryan.jpg" alt="" />
                    <p className='text-sm'>&quot; Playing with Marvel toys is the best! I have a set of Avengers action figures, and they are my favorite toys. The characters look just like in the movies, and they have cool costumes. I love making them fight against the bad guys and save the world. The toys are easy to hold and move around, and they have different articulation points, so I can make them do different poses. It is like having my own superhero team! Whenever my friends come over, we have epic Marvel battles, and it is so much fun! &quot;</p>
                    <p className='font-semibold text-xl'>- Peter, 7</p>
                </div>



            </div>
        </div>
    );
};

export default UsersFeedback;