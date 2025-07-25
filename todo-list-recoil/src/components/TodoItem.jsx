/** @jsxImportSource @emotion/react */
import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoListState';
import { css } from '@emotion/react';

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div css={css`
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: white;
      border-radius: 8px;
      margin-bottom: 12px;
      box-shadow: ${({ theme }) => theme.shadows.sm};
      transition: all 0.2s;
      &:hover {
        box-shadow: ${({ theme }) => theme.shadows.md};
      }
    `}>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
        css={css`
          width: 20px;
          height: 20px;
          cursor: pointer;
        `}
      />
      <input
        type="text"
        value={item.text}
        onChange={editItemText}
        css={css`
          flex: 1;
          padding: 8px;
          border: none;
          border-bottom: 1px solid #eee;
          font-size: 16px;
          text-decoration: ${item.isComplete ? 'line-through' : 'none'};
          color: ${item.isComplete ? '#888' : 'inherit'};
          &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.primary};
          }
        `}
      />
      <button
        onClick={deleteItem}
        css={css`
          padding: 8px 12px;
          background-color: ${({ theme }) => theme.colors.danger};
          color: white;
          border: none;
          border-radius: 4px;
          font-weight: bold;
          transition: background-color 0.2s;
          &:hover {
            background-color: #d00000;
          }
        `}
      >
        Delete
      </button>
    </div>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;