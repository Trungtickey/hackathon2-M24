import React, { useState } from 'react'

interface TodoInputProps {
  addTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTodo(newTask);
      setNewTask('');
    }
  };
  return (
    <div className="todo-input">
      <input type="text" placeholder='New Todo' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
    <br />
      <button onClick={handleAddTask}>Add new task</button>
    </div>
  );
};

export default TodoInput
