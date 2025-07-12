import type {Todo} from '../types';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({ todos, onToggle, onDelete}: TodoListProps){
    return (
        <ul className='space-y-2'>
            {todos.map(todo => (
                <li key={todo.id} className='flex justify-between items-center bg-gray-100 p-2 rounded'>
                    <span onClick={() => onToggle(todo.id)} className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                        {todo.text}
                    </span>
                    <button onClick={()=> onDelete(todo.id)} className='text-red-500'>🗑️</button>
                </li>
            ))}
        </ul>
    );
}