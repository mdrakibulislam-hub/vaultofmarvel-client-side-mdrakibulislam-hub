import React from 'react';
import { Link } from 'react-router-dom';
import DetailsModal from './DetailsModal';

const AllToysTableRow = ({ product }) => {

    const { _id, image, name, seller, email, subCategory, price, rating, quantity, description } = product;


    return (
        <>
            <tr>

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{price}$</div>
                        </div>
                    </div>
                </td>
                <td>
                    {subCategory}
                    <br />
                    <span className="badge badge-ghost badge-sm">{seller}</span>
                </td>
                <td><p>{quantity} pcs</p></td>
                <th>
                    {/* <Link to={`/product/details/${_id}`}><button className="btn bg-warning text-black hover:text-white border-none btn-xs">Details</button></Link> */}
                    <><label htmlFor={`my-modal-${_id}`} className="btn bg-warning text-black hover:text-white border-none btn-xs">Details</label></>
                </th>
            </tr>

            <DetailsModal product={product}></DetailsModal>
        </>
    );
};

export default AllToysTableRow;