import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id}=useParams();
    const bookId=parseInt(id);
    const data=useLoaderData();
    const singleBook=data.find(book=>book.bookId===bookId);
    const {bookName, image}=singleBook;

    return (
        <div>
            <img src={image} alt="" />
            <h5>{bookName}</h5>
        </div>
    );
};

export default BookDetails;