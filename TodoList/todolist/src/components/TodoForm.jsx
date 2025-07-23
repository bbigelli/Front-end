import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { useInput } from '../hooks/useInput';

export function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const { value, onChange, reset } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Adicione uma nova tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}