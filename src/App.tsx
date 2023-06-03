import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { BookCreate, BookList } from "./components";
import NorwegianWood from "./assets/norwegian-wood.jpeg";
import KafkaOnTheShore from "./assets/kafka-on-the-shore.jpeg";
import Cover1Q84 from "./assets/1Q84.jpeg";
import DefaultCover from "./assets/image.png";
import { BookType } from "./types";

const mockData: BookType[] = [
  {
    id: "0",
    cover: NorwegianWood,
    title: "Norwegian Wood",
  },
  {
    id: "1",
    cover: KafkaOnTheShore,
    title: "Kafka on the Shore",
  },
  {
    id: "2",
    cover: Cover1Q84,
    title: "1Q84",
  },
];

const AppContainer = styled.div`
  width: 1000px;
  padding: 20px;
  margin: 0 auto;
`;

const AppTitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const App = () => {
  const [books, setBooks] = useState(mockData);

  const handleDeleteBook = (id: string) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const handleCreateBook = (bookTitle: string) => {
    const newBook = {
      id: uuidv4(),
      cover: DefaultCover,
      title: bookTitle,
    };
    setBooks([...books, newBook]);
  };

  return (
    <AppContainer>
      <AppTitle>Reading List</AppTitle>
      <BookList books={books} handleDeleteBook={handleDeleteBook} />
      <BookCreate handleCreateBook={handleCreateBook} />
    </AppContainer>
  );
};
