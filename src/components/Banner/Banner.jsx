import React from 'react';
import bookimage from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bookimage}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='mx-10'>
                    <h1 className="text-3xl font-bold mb-6">Books to freshen up your booksshelf</h1>
                    <button className="btn btn-primary">View the List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;