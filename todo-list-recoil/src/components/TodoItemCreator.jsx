/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoListState';
import { css } from '@emotion/react';

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div css={css`
      display: flex;
      gap: 8px;
      margin-bottom: 24px;
    `}>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        css={css`
          flex: 1;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
          &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.primary};
          }
        `}
      />
      <button
        onClick={addItem}
        css={css`
          padding: 12px 24px;
          background-color: ${({ theme }) => theme.colors.primary};
          color: white;
          border: none;
          border-radius: 4px;
          font-weight: bold;
          transition: background-color 0.2s;
          &:hover {
            background-color: ${({ theme }) => theme.colors.secondary};
          }
        `}
      >
        Add
      </button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;