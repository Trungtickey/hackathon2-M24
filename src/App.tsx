import React from 'react'
import TodoList from './component/TodoList'
import './App.css'


const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Todo Application</h1>
      <TodoList/>
    </div>
  );
};

export default App
