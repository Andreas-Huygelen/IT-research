import React from 'react';
import './TodoList.css'

interface TodoItemProps {
  todo: {
    id: number;
    item: string;
  };
  onDelete: (id: number) => void;
}

const TodoList = ({ todo, onDelete }: TodoItemProps): JSX.Element => {
  const handleDelete = (): void => {
    onDelete(todo.id);
  };

  return (
    <li>
        <div className='ListItem'>
            <span>{todo.item}</span>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </li>
  );
};

export default TodoList;