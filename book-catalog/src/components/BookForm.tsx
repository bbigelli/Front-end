import React, { useState } from 'react';
import { Book } from '../interfaces/Book';
import { addBook } from '../services/api';

interface BookFormProps {
  onBookAdded: (book: Book) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onBookAdded }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState<'Lido' | 'Não lido'>('Não lido');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !author.trim()) {
      setError('Preencha todos os campos');
      return;
    }

    try {
      const newBook = { title, author, status };
      const addedBook = await addBook(newBook);
      onBookAdded(addedBook);
      setTitle('');
      setAuthor('');
      setError('');
    } catch (err) {
      console.error('Erro ao adicionar livro:', err);
      setError('Erro ao adicionar livro');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <h2>Adicionar Novo Livro</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Autor:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Status:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as 'Lido' | 'Não lido')}
          >
            <option value="Não lido">Não lido</option>
            <option value="Lido">Lido</option>
          </select>
        </label>
      </div>
      <button type="submit">Adicionar Livro</button>
    </form>
  );
};

export default BookForm;