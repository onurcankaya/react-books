import { useState } from "react";
import styled from "styled-components";

type BookCreateProps = {
  handleCreateBook: (bookTitle: string) => void;
};

const BookCreateTitle = styled.div`
  margin-bottom: 20px;
`;

export const BookCreate = ({ handleCreateBook }: BookCreateProps) => {
  const [bookTitle, setBookTitle] = useState("");

  const handleBookTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setBookTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCreateBook(bookTitle);
    setBookTitle("");
  };

  return (
    <div>
      <BookCreateTitle>Add a Book</BookCreateTitle>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Title: </label>
        <input type="text" onChange={handleBookTitleChange} value={bookTitle} />
        <button>Submit</button>
      </form>
    </div>
  );
};
