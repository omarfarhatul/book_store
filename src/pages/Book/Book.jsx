import React, { use } from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    // const data=use(bookPromise);
    // console.log(data);

    const { bookName, author, image, rating, category, tags, 
    yearOfPublishing, bookId }=singleBook;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-300 w-96 md:w-90 shadow-sm mx-auto mb-10 border p-5">
            <figure className="p-5 border bg-gray-800 rounded-xl">
                <img
                    src={image}
                    alt="Shoes"
                    className="h-42 rounded-xl"/>
            </figure>
            <div className="card-body items-center text-center">
                    <div className='flex gap-10'>
                        {
                            tags.map(tag=><button>{tag}</button>)
                        }
                    </div>
                <h2 className="card-title">
                    {bookName}
                    </h2>
                <div className='flex gap-10'>
                    <div className='badge badge-secondary'>{author}</div>
                    <div className='badge badge-secondary'>{yearOfPublishing}</div>
                </div>
                <p>Young Scout witnesses racial injustice in the American South as her father defends falsely accused Black man</p>
                <div className="flex gap-25 border-t-1 border-dashed pt-2">
                    <button className="btn btn-primary">{category}</button>
                    <div className='badge badge-outline my-auto p-3'>{rating} <FaRegStarHalfStroke /></div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;