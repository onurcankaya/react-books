import { Book } from '../Book/Book';
import { BookType } from '../../types';
import styles from './BookList.module.scss';

type BookListProps = {
  books: BookType[];
  handleDeleteBook: (id: string) => void;
  handleEditBookTitle: (book: BookType, bookTitle: string) => void;
};

export const BookList = ({
  books,
  handleDeleteBook,
  handleEditBookTitle,
}: BookListProps) => {
  return (
    <div className={styles.bookListContainer}>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          handleDeleteBook={handleDeleteBook}
          handleEditBookTitle={handleEditBookTitle}
        />
      ))}
    </div>
  );
};
