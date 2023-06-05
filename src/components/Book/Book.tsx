import { useState } from 'react';
import { BookType } from '../../types';
import Button from '@mui/material/Button';
import styles from './Book.module.scss';

type BookProps = {
  book: BookType;
  handleDeleteBook: (id: string) => void;
  handleEditBookTitle: (book: BookType, newTitle: string) => void;
};

export const Book = ({
  book,
  handleDeleteBook,
  handleEditBookTitle,
}: BookProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState(book.title);

  const handleToggleEdit = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  };

  const handleBookTitleSave = (e: React.FormEvent) => {
    e.preventDefault();
    handleEditBookTitle(book, newBookTitle);
    setIsEditing(false);
  };

  const handleBookTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBookTitle(e.target.value);
  };

  return (
    <div>
      <div className={styles.buttonsContainer}>
        <Button variant='contained' size='small' onClick={handleToggleEdit}>
          Edit
        </Button>
        <Button
          variant='contained'
          size='small'
          onClick={() => handleDeleteBook(book.id)}
        >
          Delete
        </Button>
      </div>
      <img
        className={styles.bookCover}
        src={book.cover}
        alt={`${book.title} cover`}
      />
      {isEditing ? (
        <form onSubmit={handleBookTitleSave}>
          <input value={newBookTitle} onChange={handleBookTitleChange} />
          <Button variant='contained' onClick={handleBookTitleSave}>
            Save
          </Button>
        </form>
      ) : (
        <div>{newBookTitle}</div>
      )}
    </div>
  );
};
