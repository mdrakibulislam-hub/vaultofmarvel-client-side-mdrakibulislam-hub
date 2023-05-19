import React, { useState } from 'react';

const UpdateModal = ({ _id, productName }) => {


    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");

    console.log(name);

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
            <label htmlFor={`my-modal-${_id}`} className="modal cursor-pointer">
                <label className="modal-box relative flex flex-col gap-4" htmlFor="">



                    <h1 className='font-semibold text-center text-2xl text-primary'>Update details of {productName}</h1>

                    <input required onChange={e => setPrice(e.target.value)} type="number" name="email" placeholder="Type toys price here" className="input input-bordered w-full" />


                    <input required onChange={e => setQuantity(e.target.value)} type="number" name="quantity" placeholder="Type available quantity here (1-5)" className="input input-bordered w-full" />


                    <input required onChange={e => setDescription(e.target.value)} type="text" name="description" placeholder="Type toys description here" className="input input-bordered w-full" />


                    <button className='btn border-none bg-primary text-white hover:bg-warning hover:text-neutral w-1/2 mx-auto'>Update details</button>




                </label>
            </label>
        </>
    );
};

export default UpdateModal;