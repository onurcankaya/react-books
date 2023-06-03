import styled from "styled-components";
import { Book } from "./Book";
import { BookType } from "../types";

type BookListProps = {
  books: BookType[];
  handleDeleteBook: (id: string) => void;
};

const BookListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 80px;
`;

export const BookList = ({ books, handleDeleteBook }: BookListProps) => {
  return (
    <BookListWrapper>
      {books.map((book) => (
        <Book key={book.id} book={book} handleDeleteBook={handleDeleteBook} />
      ))}
    </BookListWrapper>
  );
};
