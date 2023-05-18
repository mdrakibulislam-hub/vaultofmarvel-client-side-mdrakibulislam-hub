import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Rating from '../../Components/Rating';

const ProductDetailsPage = () => {



    const product = useLoaderData();
    console.log(product);
    const { _id, image, name, seller, email, subCategory, price, rating, quantity, description } = product;

    useEffect(() => {
        document.title = `${name} | Vault of marvel`
    }, [name])

    return (
        <>
            <div className='main-container'>
                <div className='my-20 flex flex-col lg:flex-row gap-16 items-center'>
                    <img className='rounded-md' src={image} alt="" />
                    <div className='flex flex-col gap-2'>
                        <h1 className="font-semibold text-4xl text-primary my-2">{name}</h1>
                        <p>Sold by: {seller} </p>
                        <p>Mail: {email}</p>
                        <p>Sub-category: {subCategory}</p>
                        <p>Price: {price}$</p>
                        <div className='flex gap-2'>Rating: <Rating>{rating}</Rating> {rating}</div>
                        <p>Quantity: {quantity}</p>
                        <p>Description: {description}</p>
                        <Link className='btn border-none bg-primary text-white hover:bg-warning hover:text-neutral w-40'><button>Add to cart</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsPage;