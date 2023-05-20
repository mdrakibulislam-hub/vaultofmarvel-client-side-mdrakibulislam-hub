import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const DetailsModal = ({ product }) => {
    const { _id, image, name, seller, email, subCategory, price, rating, quantity, description } = product;
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
            <label htmlFor={`my-modal-${_id}`} className="modal cursor-pointer">
                <label className=" bg-white w-4/5 h-3/4 lg:h-2/4 overflow-scroll rounded-md relative " htmlFor="">




                    <div className='w-full p-8 flex flex-col lg:flex-row gap-16 items-center'>
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





                </label>
            </label>
        </>
    );
};

export default DetailsModal;