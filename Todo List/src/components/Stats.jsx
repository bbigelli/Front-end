import { useContext, useMemo } from 'react';
import { TodoContext } from '../context/TodoContext';

export function Stats() {
  const { todos } = useContext(TodoContext);

  const total = todos.length;
  const completed = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos]
  );
  const pending = total - completed;

  return (
    <div>
      <p>Total: {total}</p>
      <p>Concluídas: {completed}</p>
      <p>Pendentes: {pending}</p>
    </div>
  );
}