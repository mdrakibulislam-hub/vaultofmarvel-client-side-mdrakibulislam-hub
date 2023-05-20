import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Provider/AuthProvider';
import TableRow from '../../Components/TableRow';
import LoadingSpinner from '../../Components/LoadingSpinner';


const MyToys = () => {


    useEffect(() => {
        document.title = `My toys | Vault of marvel`
    }, [])


    const [products, setProducts] = useState([]);

    const { loading, user } = useContext(AuthContext);

    const [control, setControl] = useState(true);


    console.log(user.email);


    useEffect(() => {
        fetch(`http://localhost:5000/alltoys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user, control])


    const sortHandler = () => {
        fetch(`http://localhost:5000/alltoys?email=${user.email}&sort=true`)
            .then(res => res.json())
            .then(data => { setProducts(data) })
    }

    if (loading) { return (<LoadingSpinner></LoadingSpinner>) }

    return (

        <div className="overflow-x-auto main-container">

            <button onClick={sortHandler} className='btn border-none bg-primary text-white hover:bg-warning hover:text-neutral mx-auto my-4'>Sort by Price</button>

            <table className="table w-full rounded-none my-8">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name & Price</th>
                        <th>Category and Seller</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row */}

                    {products.map(product => <TableRow key={product._id} product={product} control={control} setControl={setControl}></TableRow>)}

                </tbody>

            </table>


        </div>
    )



};

export default MyToys;