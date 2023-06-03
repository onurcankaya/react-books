import { useState } from "react";
import styled from "styled-components";
import { BookType } from "../types";

type BookProps = {
  book: BookType;
  handleDeleteBook: (id: string) => void;
};

const BookCover = styled.img`
  height: 300px;
  width: auto;
  margin-bottom: 10px;
`;

const BookTitle = styled.div`
  font-size: 16px;
  text-align: center;
`;

const BookEditForm = styled.form``;

const BookEditInput = styled.input`
  font-size: 16px;
`;

const BookEditSave = styled.button`
  display: block;
`;

export const Book = ({ book, handleDeleteBook }: BookProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [bookTitle, setBookTitle] = useState(book.title);

  const handleToggleEdit = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  };

  const handleBookTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookTitle(e.target.value);
  };

  const handleBookTitleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div>
      <div>
        <button onClick={handleToggleEdit}>Edit</button>
        <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
      </div>
      <BookCover src={book.cover} alt="" />
      {isEditing ? (
        <BookEditForm>
          <BookEditInput value={bookTitle} onChange={handleBookTitleChange} />
          <BookEditSave onClick={handleBookTitleSave}>Save</BookEditSave>
        </BookEditForm>
      ) : (
        <BookTitle>{bookTitle}</BookTitle>
      )}
    </div>
  );
};
