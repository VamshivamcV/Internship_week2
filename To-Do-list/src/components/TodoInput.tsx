import React,{ useState } from "react";

interface TodoInputProps {
    onAdd: (text: string) => void;
}

export default function TodoInput({onAdd}: TodoInputProps){
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} className="flex-1 px-4 py-2 border rounded" placeholder="Add a task..."/>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
        </form>
    );
}