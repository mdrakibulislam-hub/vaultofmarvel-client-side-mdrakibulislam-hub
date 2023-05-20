import React from 'react';

const BlogsCard = ({ blog }) => {
    const { _id, qustion, answar } = blog
    return (
        <div className='bg-white p-3 shadow rounded-md'>
            <h1 className='text-2xl font-semibold text-neutral'>{qustion}</h1>
            <p className='mt-2'>{answar}</p>
        </div>
    );
};

export default BlogsCard;