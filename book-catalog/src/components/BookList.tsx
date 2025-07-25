import React, { useEffect, useState } from 'react';
import { Book } from '../interfaces/Book';
import { getBooks, deleteBook, updateBookStatus } from '../services/api';
import BookItem from './BookItem';

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (err) {
        setError('Erro ao carregar livros');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id);
      setBooks(books.filter(book => book._id !== id));
    } catch (err) {
      console.error('Erro ao deletar livro:', err);
    }
  };

  const handleStatusChange = async (id: string, status: 'Lido' | 'Não lido') => {
    try {
      await updateBookStatus(id, status);
      setBooks(books.map(book => 
        book._id === id ? { ...book, status } : book
      ));
    } catch (err) {
      console.error('Erro ao atualizar status:', err);
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="book-list">
      <h2>Catálogo de Livros</h2>
      {books.length === 0 ? (
        <p>Nenhum livro cadastrado.</p>
      ) : (
        books.map(book => (
          <BookItem
            key={book._id}
            book={book}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        ))
      )}
    </div>
  );
};

export default BookList;