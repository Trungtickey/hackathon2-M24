import React from 'react'

interface TodoItemProps {
    todo: string;
    completed: boolean;
    toggleComplete: () => void;
    deleteTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, completed, toggleComplete, deleteTodo }) => {
  return (
    <div className="todo-item">
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{todo}</span>
      <input type="checkbox" checked={completed} onChange={toggleComplete} />
      <button onClick={toggleComplete}>✏️</button>
      <button onClick={deleteTodo}>🗑️</button>
    </div>
  )
}

export default TodoItem
