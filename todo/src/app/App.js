
import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from '../features/todo/TodoApp';
import store from './store';
import './styles.css'

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
