import React from 'react';
import { useTodoContext } from '../context/TodoContext';

export const TodoFilters = () => {
  const { filter, setFilter } = useTodoContext();

  return (
    <div>
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
        Todas
      </button>
      <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
        Concluídas
      </button>
      <button onClick={() => setFilter('pending')} disabled={filter === 'pending'}>
        Pendentes
      </button>
    </div>
  );
};