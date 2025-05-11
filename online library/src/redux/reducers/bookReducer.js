import { ADD_BOOK } from '../actions/bookActions';
import { bookData as initialBookData } from '../../data/books'; // Import initial data

const initialState = {
  books: initialBookData,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

export default bookReducer;