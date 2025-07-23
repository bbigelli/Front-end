import { createContext, useState, useMemo } from 'react';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'active':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const value = useMemo(
    () => ({
      todos,
      filteredTodos,
      filter,
      addTodo,
      toggleTodo,
      removeTodo,
      setFilter,
    }),
    [todos, filteredTodos, filter]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}