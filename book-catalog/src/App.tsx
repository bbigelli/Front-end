import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import { Book } from './interfaces/Book';
import './styles.css';

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const handleBookAdded = (newBook: Book) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="app">
      <h1>Meu Catálogo de Livros</h1>
      <div className="container">
        <BookForm onBookAdded={handleBookAdded} />
        <BookList />
      </div>
    </div>
  );
};

export default App;