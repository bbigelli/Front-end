import { TodoProvider } from './context/TodoContext';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Filter } from './components/Filter';
import { Stats } from './components/Stats';

function App() {
  return (
    <TodoProvider>
      <div>
        <h1>Todo List Avançada</h1>
        <TodoForm />
        <Filter />
        <TodoList />
        <Stats />
      </div>
    </TodoProvider>
  );
}

export default App;