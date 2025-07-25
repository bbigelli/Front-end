import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../selectors/filteredTodoListState';
import TodoItem from './TodoItem';

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default TodoList;