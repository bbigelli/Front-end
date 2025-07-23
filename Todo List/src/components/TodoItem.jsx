import { memo, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoItem = memo(({ todo }) => {
  const { toggleTodo, removeTodo } = useContext(TodoContext);

  console.log(`Renderizando item: ${todo.text}`);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Remover</button>
    </li>
  );
});