import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const bookCategories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Thriller'];
const popularBooks = [
  { id: 1, title: 'The Secret Garden' },
  { id: 2, title: 'To Kill a Mockingbird' },
  { id: 3, title: 'Pride and Prejudice' },
];

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to the Online Library</h1>
      <section className="categories">
        <h2>Browse by Category</h2>
        <ul>
          {bookCategories.map((category) => (
            <li key={category}>
              <Link to={`/books/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="popular-books">
        <h2>Popular Books</h2>
        <ul>
          {popularBooks.map((book) => (
            <li key={book.id}>
              <Link to={`/books/details/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default HomePage;