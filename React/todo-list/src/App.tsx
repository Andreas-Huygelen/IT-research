import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

interface list {
  id: number;
  item: string;
}

function App() {
  //Voor de constante maken we gebruik van de usestate. 
  const [toDoList, setToDoList] = useState<list[]>([])
  const [newItem, setNewItem] = useState<string>('')

  //Functie om de waarde van newItems teveranderen bij elke aanpassing.
  const handleChangeValue = (event:any) => {
    setNewItem(event.target.value)
  }

  //Functie om een nieuwe item aan de lijst toetevoegen.
  const handleAddToList = () => {
    if (newItem !== ''){
      const Item:list = {id:toDoList.length+1, item:newItem}
      setToDoList([...toDoList, Item])
      setNewItem('')
    }
  }

  //Functie om een item te verwijderen van de lijst.
  const handleDelete = (id: number): void => {
    const updatedTodoList: list[] = toDoList.filter(listItem => listItem.id !== id);
    setToDoList(updatedTodoList);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input type="text" value={newItem} onChange={handleChangeValue} />
        <button onClick={handleAddToList}>Add Item</button>
      </div>
      <ol className="List">
        {toDoList.map(todo => (
          <TodoList key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ol>
    </div>
  );
}

export default App;
