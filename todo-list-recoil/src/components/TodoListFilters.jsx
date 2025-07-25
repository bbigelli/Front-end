/** @jsxImportSource @emotion/react */
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../atoms/todoListFilterState';
import { css } from '@emotion/react';

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div css={css`
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      gap: 12px;
    `}>
      <span css={css`
        font-weight: bold;
      `}>Filter:</span>
      <select
        value={filter}
        onChange={updateFilter}
        css={css`
          padding: 8px 12px;
          border-radius: 4px;
          border: 1px solid #ddd;
          background-color: white;
          cursor: pointer;
          &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.primary};
          }
        `}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}

export default TodoListFilters;