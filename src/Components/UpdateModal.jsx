import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const UpdateModal = ({ _id, productName, control, setControl }) => {


    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");

    const handleUpdate = () => {
        const updateData = { price, quantity, description }
        fetch(`https://b7a11-toy-marketplace-server-side-mdrakibulislam-hub.vercel.app/update/${_id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) { toast.success(`Details updated`); }
                setControl(!control)
            })
    }

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
            <label htmlFor={`my-modal-${_id}`} className="modal cursor-pointer">
                <label className="modal-box relative flex flex-col gap-4" htmlFor="">



                    <h1 className='font-semibold text-center text-2xl text-primary'>Update details of {productName}</h1>

                    <input onChange={e => setPrice(e.target.value)} type="number" name="email" placeholder="Type toys price here" className="input input-bordered w-full" />


                    <input onChange={e => setQuantity(e.target.value)} type="number" name="quantity" placeholder="Type available quantity here (1-5)" className="input input-bordered w-full" />


                    <input onChange={e => setDescription(e.target.value)} type="text" name="description" placeholder="Type toys description here" className="input input-bordered w-full" />


                    <button onClick={handleUpdate} className='btn border-none bg-primary text-white hover:bg-warning hover:text-neutral w-1/2 mx-auto'>Update details</button>




                </label>
            </label>
            <Toaster />
        </>
    );
};

export default UpdateModal;