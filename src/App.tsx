import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { BookCreate, BookList } from './components';
import DefaultCover from './assets/image.png';
import { BookType } from './types';
import axios from 'axios';

import styles from './App.module.scss';

export const App = () => {
  const [books, setBooks] = useState<BookType[]>([]);

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:3001/books');
    const jsonData = await response.json();
    setBooks(jsonData);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  const handleCreateBook = async (bookTitle: string) => {
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

  const handleEditBookTitle = async (book: BookType, newTitle: string) => {
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

  const handleDeleteBook = async (id: string) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const booksUpdated = books.filter((book) => book.id !== id);
    setBooks(booksUpdated);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.appTitle}>Reading List</div>
      <BookList
        books={books}
        handleEditBookTitle={handleEditBookTitle}
        handleDeleteBook={handleDeleteBook}
      />
      <BookCreate handleCreateBook={handleCreateBook} />
    </div>
  );
};
