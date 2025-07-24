import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

export const TodoForm = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicione uma tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};