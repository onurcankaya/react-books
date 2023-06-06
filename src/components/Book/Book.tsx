import { useState } from 'react';
import Button from '@mui/material/Button';

import { useBooksContext } from '../../hooks/useBooksContext';
import { BookType } from '../../types';

import styles from './Book.module.scss';

type BookProps = {
  book: BookType;
};

export const Book = ({ book }: BookProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState(book.title);

  const { editBookTitle, deleteBook } = useBooksContext();

  const handleToggleEdit = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  };

  const handleBookTitleSave = (e: React.FormEvent) => {
    e.preventDefault();
    editBookTitle(book, newBookTitle);
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
          onClick={() => deleteBook(book.id)}
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
