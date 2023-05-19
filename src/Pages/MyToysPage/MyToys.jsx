import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
    const [products, setProducts] = useState([]);

    const { loading, user } = useContext(AuthContext);


    console.log(user.email);


    useEffect(() => {
        fetch(`http://localhost:5000/alltoys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user])

    useEffect(() => {
        document.title = `My toys | Vault of marvel`
    }, [])

    return (


        <div className="main-container">
            <h1 className="font-semibold text-4xl text-primary my-12">All product</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 my-8">
                {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
            </div>
        </div>)
};

export default MyToys;