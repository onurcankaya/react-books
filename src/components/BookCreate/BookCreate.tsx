import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./BookCreate.module.scss";

type BookCreateProps = {
  handleCreateBook: (bookTitle: string) => void;
};

export const BookCreate = ({ handleCreateBook }: BookCreateProps) => {
  const [bookTitle, setBookTitle] = useState("");

  const handleBookTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCreateBook(bookTitle);
    setBookTitle("");
  };

  return (
    <div>
      <div className={styles.bookCreateTitle}>Add a Book</div>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          size="small"
          onChange={handleBookTitleChange}
          value={bookTitle}
        />
        <Button variant="contained" size="medium">
          Submit
        </Button>
      </form>
    </div>
  );
};
