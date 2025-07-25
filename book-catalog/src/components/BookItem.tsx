import React from 'react';
import { Book } from '../interfaces/Book';
import { deleteBook, updateBookStatus } from '../services/api';

interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: 'Lido' | 'Não lido') => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onDelete, onStatusChange }) => {
  const handleStatusChange = () => {
    const newStatus = book.status === 'Lido' ? 'Não lido' : 'Lido';
    onStatusChange(book._id!, newStatus);
  };

  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>Autor: {book.author}</p>
      <p>
        Status: 
        <button 
          onClick={handleStatusChange}
          className={book.status === 'Lido' ? 'read' : 'unread'}
        >
          {book.status}
        </button>
      </p>
      <button onClick={() => onDelete(book._id!)}>Remover</button>
    </div>
  );
};

export default BookItem;