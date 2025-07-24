import React, { useMemo } from 'react';
import { useTodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

export const TodoList = () => {
  const { todos, filter } = useTodoContext();

  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'pending') return !todo.completed;
      return true;
    });
  }, [todos, filter]);

  return (
    <div>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};