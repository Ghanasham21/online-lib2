import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { bookData } from '../data/books'; // Assuming you create this file
import './BrowseBooks.css';

function BrowseBooks() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    let books = bookData;
    if (category) {
      books = books.filter((book) => book.category.toLowerCase() === category.toLowerCase());
    }
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      books = books.filter(
        (book) =>
          book.title.toLowerCase().includes(lowerSearchTerm) ||
          book.author.toLowerCase().includes(lowerSearchTerm)
      );
    }
    setFilteredBooks(books);
  }, [category, searchTerm]);

  return (
    <div className="browse-books-page">
      <h2>Browse Books</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="book-list">
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <Link to={`/books/details/${book.id}`}>View Details</Link>
          </li>
        ))}
        {filteredBooks.length === 0 && <p>No books found in this category or matching your search.</p>}
      </ul>
    </div>
  );
}

export default BrowseBooks;