import React from 'react';

const TableRow = ({ product }) => {

    const { _id, image, name, seller, email, subCategory, price, rating, quantity, description } = product;


    return (
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
            <td><button className="btn bg-warning border-none text-black hover:text-white btn-xs">↑ Update</button></td>
            <th>
                <button className="btn bg-primary text-white border-none btn-xs">X Delete</button>
            </th>
        </tr>
    );
};

export default TableRow;