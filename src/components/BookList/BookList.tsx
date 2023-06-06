import { Book } from '../Book/Book';
import { useBooksContext } from '../../hooks/useBooksContext';

import styles from './BookList.module.scss';

export const BookList = () => {
  const { books } = useBooksContext();

  return (
    <div className={styles.bookListContainer}>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};
