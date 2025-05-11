export const ADD_BOOK = 'ADD_BOOK';

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};