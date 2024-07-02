import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import '../App.css'

interface Todo {
    id: number;
    name: string;
    completed: boolean;
  }
  
  const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
    const addTodo = (name: string) => {
      setTodos([...todos, { id: Date.now(), name, completed: false }]);
    };
  
    const toggleComplete = (id: number) => {
      setTodos(todos.map(todo => (
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )));
    };
  
    const deleteTodo = (id: number) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
  
    const deleteDoneTasks = () => {
      setTodos(todos.filter(todo => !todo.completed));
    };
  
    const deleteAllTasks = () => {
      setTodos([]);
    };
  
    return (
      <div className="todo-list">
        <TodoInput addTodo={addTodo} />
        <div className="tasks">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo.name}
              completed={todo.completed}
              toggleComplete={() => toggleComplete(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          ))}
        </div>
        <button onClick={deleteDoneTasks}>Delete done tasks</button>
        <button onClick={deleteAllTasks}>Delete all tasks</button>
      </div>
    );
  };

export default TodoList
