import { memo, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const Filter = memo(() => {
  const { filter, setFilter } = useContext(TodoContext);

  console.log('Renderizando filtro');

  return (
    <div>
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
        Todas
      </button>
      <button onClick={() => setFilter('active')} disabled={filter === 'active'}>
        Pendentes
      </button>
      <button
        onClick={() => setFilter('completed')}
        disabled={filter === 'completed'}
      >
        Concluídas
      </button>
    </div>
  );
});