import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const { _id, image, name, seller, email, subCategory, price, rating, quantity, description } = product;

    return (
        <div className='border-2 border-gray-300 p-4 rounded-md flex flex-col gap-2'>
            <img className='rounded-md' src={image} alt="" />
            <h1 className='font-semibold text-2xl text-primary'>{name}</h1>
            <p className='text-xl'>Price: <span className='font-bold'>{price}$</span></p>
            <p className='flex gap-2 items-center text-lg'><Rating>{rating}</Rating> {rating}</p>
            <Link to={`/product/details/${_id}`} className='btn border-none bg-primary text-white hover:bg-warning hover:text-neutral'><button>View Details</button></Link>
        </div >
    );
};

export default ProductCard;