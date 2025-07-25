/** @jsxImportSource @emotion/react */
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import TodoListFilters from './components/TodoListFilters';
import TodoItemCreator from './components/TodoItemCreator';
import TodoList from './components/TodoList';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div css={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
          <h1 css={{ color: theme.colors.primary, textAlign: 'center' }}>Todo List with Recoil</h1>
          <TodoListFilters />
          <TodoItemCreator />
          <TodoList />
        </div>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;