import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const { error, status } = useRouteError()
    console.log(error);
    return (
        <div className='min-h-screen grid place-content-center'>

            <div className='flex flex-col gap-2 justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>

                <h1 className='font-bold text-[10rem] text-primary'>{status}</h1>
                <p className='text-xl text-gray-600'>{error.message}</p>
                <Link className='mt-8' to="/"><button className="btn border-none bg-primary text-white hover:bg-warning hover:text-neutral w-full">Back to Homepage</button></Link>
            </div>



        </div>
    );
};

export default ErrorElement;