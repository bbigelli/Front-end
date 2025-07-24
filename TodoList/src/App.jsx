import React from 'react';
import { TodoProvider } from './context/TodoContext';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoFilters } from './components/TodoFilters';
import './styles.css';

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;