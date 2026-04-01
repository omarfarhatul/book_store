import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, image } = singleBook;

    const handleMarkAsRead=id=>{
        //  Store with Id
        // where to storedJ0
        // array or collection
        // if book already exist the show a alart
        // if book not exist then puush in the collection or array

        addToStoredDB(id);
    }

    return (
        <div className='border-2 w-2/5 mx-auto text-center py-5'>
            <img className='w-40 mx-auto' src={image} alt="book_image" />
            <h5>{bookName}</h5>

            <button onClick={()=>handleMarkAsRead(id)} className="btn btn-active btn-accent mx-1">Mark as Read</button>
            <button className="btn btn-active btn-info">Add to WishList</button>
        </div>
    );
};

export default BookDetails;