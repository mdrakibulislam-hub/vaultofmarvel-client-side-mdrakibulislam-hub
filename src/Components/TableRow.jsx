import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UpdateModal from './UpdateModal';

const TableRow = ({ product, control, setControl }) => {

    const { _id, image, name, seller, email, subCategory, price, rating, quantity, description } = product;

    const [toyPrice, setToyPrice] = useState("");
    const [toyQuantity, setToyQuantity] = useState("");
    const [toyDescription, setToyDescription] = useState("");


    const handleDelete = () => {
        fetch(`http://localhost:5000/alltoys/toys/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setControl(!control)

            })
    }


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
                <td><><label htmlFor={`my-modal-${_id}`} className="btn bg-warning border-none text-black hover:text-white btn-xs">↑ Update</label></></td>
                <th>
                    <button onClick={handleDelete} className="btn bg-primary text-white border-none btn-xs">X Delete</button>
                </th>
            </tr>


            <UpdateModal _id={_id} productName={name} control={control} setControl={setControl}></UpdateModal>

        </>
    );
};

export default TableRow;