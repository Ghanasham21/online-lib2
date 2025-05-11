import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { bookData } from '../data/books'; // Assuming you create this file
import './BookDetails.css';

function BookDetails() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const book = bookData.find((book) => book.id === parseInt(bookId));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details-page">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Rating: {book.rating}/5</p>
      <button onClick={() => navigate('/books')}>Back to Browse</button>
    </div>
  );
}

export default BookDetails;