import React, { useEffect } from 'react';
import BlogsCard from '../../Components/BlogsCard';

const Blog = () => {


    useEffect(() => {
        document.title = `Blog | Vault of marvel`
    }, [])

    const blogs = [
        {
            _id: 1,
            qustion: "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
            answar: "An access token is a credential that proves you have permission to access certain resources. It acts like a digital key to unlock protected areas.  A refresh token is a special token that allows you to obtain a new access token when the current one expires. It's like having a backup key to get a fresh one without re-authenticating.Access tokens are typically stored in memory, while refresh tokens should be stored in a more secure location, such as an HTTP-only cookie or secure platform-specific storage."
        },
        {
            _id: 2,
            qustion: "Compare SQL and NoSQL databases?",
            answar: "SQL databases are like organized filing cabinets. They have a fixed structure, use a specific language (SQL) to communicate, and work well for structured data with defined relationships.NoSQL databases are like a big storage box. They have a flexible structure, uses various query languages, and can handle different types of data without a schema. In summary, SQL databases are structured and suitable for organized data, while NoSQL databases are flexible and can handle diverse data types."
        },
        {
            _id: 3,
            qustion: "What is express js? What is Nest JS?",
            answar: "Express.js is a popular web application framework for Node.js. It provides a set of features and tools to build web applications and APIs easily. With Express.js, developers can handle routing, middleware, and request/response handling efficiently.NestJS, on the other hand, is a progressive TypeScript framework for building scalable and efficient server-side applications. It is built on top of Express.js and adds more structure and additional features to enhance productivity. "
        },
        {
            _id: 4,
            qustion: "What is express js? What is Nest JS?",
            answar: "MongoDB's aggregate is a powerful feature that allows for advanced data processing and analysis within the database. It provides a way to perform complex operations, such as filtering, grouping, sorting, and aggregating data, using a pipeline of stages. "
        }
    ]

    return (
        <div className='main-container'>
            <h1 className="font-semibold text-center text-4xl text-primary my-12">Some qustion and answars about web devlopment</h1>

            <div className='grid gap-4 my-8'>
                {
                    blogs.map(blog => <BlogsCard key={blog._id} blog={blog}></BlogsCard>)
                }
            </div>

        </div>
    );
};

export default Blog;