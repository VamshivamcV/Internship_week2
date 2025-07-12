import { useState, useEffect } from "react";
import type {Todo} from './types';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Filters from "./components/Filters";

function App() {
  const [todos, setTodos] = useState<Todo[]>(()=>{
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) as Todo[] : [];
  });
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(
      todo => todo.id === id ? {...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filterTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4"> To-Do List</h1>
        <TodoInput onAdd={addTodo}/>
        <Filters filter={filter} setFilter={setFilter}/>
        <TodoList todos={filterTodos} onToggle={toggleTodo} onDelete={deleteTodo}/>
      </div>
    </div>
  );
}

export default App;
