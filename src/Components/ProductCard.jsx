import React, { useEffect } from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';

const ProductCard = ({ product }) => {

    useEffect(() => {

        Aos.init();
    }, [])

    const { _id, image, name, seller, email, subCategory, price, rating, quantity, description } = product;

    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className='border-2 border-red-200 p-4 rounded-md flex flex-col gap-2'>
            <img className='rounded-md' src={image} alt="" />
            <h1 className='font-semibold text-2xl text-primary'>{name}</h1>
            <p className='text-xl'>Price: <span className='font-bold'>{price}$</span></p>
            <div className='flex gap-2 items-center text-lg'><Rating>{rating}</Rating> {rating}</div>
            <Link to={`/product/details/${_id}`} className='btn border-none bg-primary text-white hover:bg-warning hover:text-neutral'><button>View Details</button></Link>
        </div >
    );
};

export default ProductCard;