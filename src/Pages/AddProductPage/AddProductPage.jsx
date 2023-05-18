import { Result } from "postcss";
import { useEffect, useState } from "react";

const AddProductPage = () => {

    useEffect(() => {
        document.title = "Add new product | Vault of marvel"
    }, [])

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [seller, setSeller] = useState("");
    const [email, setEmail] = useState("");
    const [price, setPrice] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [rating, setRating] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");


    console.log(name, image, seller, email, price, subCategory, rating, quantity, description);


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = { name, image, seller, email, price, subCategory, rating, quantity, description }
        console.log(data);

        fetch("http://localhost:5000/toysdata", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
            })

        form.reset();
    }

    return (
        <div className="main-container">
            <h1 className="font-semibold text-4xl text-center text-primary my-12">Add new product</h1>

            <form onSubmit={handleFormSubmit} action="" className="w-2/4 mx-auto flex flex-col gap-3">


                <input onChange={e => setName(e.target.value)} type="text" name="toyName" placeholder="Type toy's name here" className="input input-bordered w-full" />


                <input onChange={e => setImage(e.target.value)} type="text" name="url" placeholder="Insert photo url here" className="input input-bordered w-full" />


                <input onChange={e => setSeller(e.target.value)} type="text" name="name" placeholder="Type seller name here" className="input input-bordered w-full" />


                <input onChange={e => setEmail(e.target.value)} type="email" name="email" placeholder="Type seller email here" className="input input-bordered w-full" />


                <select onChange={e => setSubCategory(e.target.value)} className="select select-bordered w-full">
                    <option disabled selected>Please select a subcategory for your product</option>
                    <option value="Thor">Thor</option>
                    <option value="Iron Man">Iron Man</option>
                    <option value="Captain America">Captain America</option>
                    <option value="Hulk">Hulk</option>
                    <option value="Black Widow">Black Widow</option>
                    <option value="Spider-Man">Spider-Man</option>
                    <option value="Wolverine">Wolverine</option>
                    <option value="Thanos">Thanos</option>
                    <option value="Scarlet Witch">Scarlet Witch</option>
                    <option value="Black Panther">Black Panther</option>
                    <option value="Black Panther">Black Panther</option>
                    <option value="Captain Marvel">Captain Marvel</option>
                    <option value="Guardians of the Galaxy">Guardians of the Galaxy</option>
                    <option value="Doctor Strange">Doctor Strange</option>
                    <option value="Ant-Man">Ant-Man</option>
                </select>


                <input onChange={e => setPrice(e.target.value)} type="number" name="email" placeholder="Type toys price here" className="input input-bordered w-full" />


                <input onChange={e => setRating(e.target.value)} type="number" name="rating" placeholder="Type toys rating here (1-5)" className="input input-bordered w-full" />


                <input onChange={e => setQuantity(e.target.value)} type="number" name="quantity" placeholder="Type available quantity here (1-5)" className="input input-bordered w-full" />


                <input onChange={e => setDescription(e.target.value)} type="text" name="description" placeholder="Type toys description here" className="input input-bordered w-full" />


                <button className='btn border-none bg-primary text-white hover:bg-warning hover:text-neutral w-1/2 mx-auto'>Add Product</button>


            </form>

        </div >
    );
};

export default AddProductPage;