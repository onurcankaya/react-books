import { useEffect } from 'react';

import { BookCreate, BookList } from './components';
import { useBooksContext } from './hooks/useBooksContext';

import styles from './App.module.scss';

export const App = () => {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className={styles.appContainer}>
      <div className={styles.appTitle}>Reading List</div>
      <BookList />
      <BookCreate />
    </div>
  );
};
