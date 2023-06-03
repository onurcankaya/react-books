import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
        <TextField
          className="add-book-input"
          label="Title"
          variant="outlined"
          onChange={handleBookTitleChange}
          value={bookTitle}
        />
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
};
