import React from 'react';

const ProductCard = ({ product }) => {

    const { _id, image, name, seller, email, subCategory, price, rating, quantity, description } = product;

    return (
        <div className='border-2 border-gray-300 p-4 rounded-md flex flex-col'>
            <img className='rounded-md' src={image} alt="" />
            <h1 className='className="font-semibold text-2xl text-primary'>{name}</h1>
            <p>{price}$</p>
            <p>{rating}</p>
            <button className='btn'>View Details</button>
        </div>
    );
};

export default ProductCard;