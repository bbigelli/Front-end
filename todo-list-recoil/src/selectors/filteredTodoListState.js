import { selector } from 'recoil';
import { todoListState } from '../atoms/todoListState';
import { todoListFilterState } from '../atoms/todoListFilterState';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'completed':
        return list.filter((item) => item.isComplete);
      case 'uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
