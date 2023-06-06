import { createContext, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import noop from 'lodash/noop';

import DefaultCover from '../assets/image.png';
import { BookType } from '../types';

type ProviderProps = {
  children: React.ReactNode;
};

export const BooksContext = createContext<{
  books: BookType[];
  fetchBooks: () => void;
  createBook: (bookTitle: string) => void;
  editBookTitle: (book: BookType, newTitle: string) => void;
  deleteBook: (id: string) => void;
}>({
  books: [],
  fetchBooks: noop,
  createBook: noop,
  editBookTitle: noop,
  deleteBook: noop,
});

export const BooksProvider = ({ children }: ProviderProps) => {
  const [books, setBooks] = useState<BookType[]>([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }, []);

  const createBook = async (bookTitle: string) => {
    const newBook = {
      id: uuidv4(),
      cover: DefaultCover,
      title: bookTitle,
    };

    const response = await axios.post('http://localhost:3001/books', newBook);
    const bookCreated = response.data;
    const booksUpdated = [...books, bookCreated];
    setBooks(booksUpdated);
  };

  const editBookTitle = async (book: BookType, newTitle: string) => {
    const { id } = book;
    const bookUpdated = {
      ...book,
      title: newTitle,
    };
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      ...bookUpdated,
    });

    const booksUpdated = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });

    setBooks(booksUpdated);
  };

  const deleteBook = async (id: string) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const booksUpdated = books.filter((book) => book.id !== id);
    setBooks(booksUpdated);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        createBook,
        editBookTitle,
        deleteBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
