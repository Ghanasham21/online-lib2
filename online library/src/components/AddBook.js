import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/actions/bookActions';
import './AddBook.css';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }
    if (!author.trim()) {
      newErrors.author = 'Author is required';
      isValid = false;
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }
    if (!category.trim()) {
      newErrors.category = 'Category is required';
      isValid = false;
    }
    if (!rating.trim()) {
      newErrors.rating = 'Rating is required';
      isValid = false;
    } else if (isNaN(Number(rating)) || Number(rating) < 1 || Number(rating) > 5) {
      newErrors.rating = 'Rating must be a number between 1 and 5';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newBook = {
        id: Date.now(), // Simple unique ID
        title,
        author,
        description,
        category,
        rating: parseFloat(rating),
      };
      dispatch(addBook(newBook));
      navigate('/books');
    }
  };

  return (
    <div className="add-book-page">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && <p className="error">{errors.author}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {errors.category && <p className="error">{errors.category}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating (1-5):</label>
          <input
            type="text"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          {errors.rating && <p className="error">{errors.rating}</p>}
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;