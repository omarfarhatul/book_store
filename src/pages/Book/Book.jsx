import React, { use } from 'react';

const Book = ({ singleBook }) => {
    // const data=use(bookPromise);
    // console.log(data);

    const { bookName, author, image }=singleBook;

    return (
        <div className="card bg-base-300 w-96 md:w-90 shadow-sm mx-auto mb-10 border p-5">
            <figure className="p-5 border bg-gray-800 rounded-xl">
                <img
                    src={image}
                    alt="Shoes"
                    className="h-42 rounded-xl"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Book;