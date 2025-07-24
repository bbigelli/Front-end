import React, { memo } from 'react';
import { useTodoContext } from '../context/TodoContext';

const TodoItem = memo(({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoContext();

  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
    </div>
  );
});

export default TodoItem;