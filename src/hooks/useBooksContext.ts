import { useContext } from 'react';
import { BooksContext } from '../context/books';

export function useBooksContext() {
  return useContext(BooksContext);
}
