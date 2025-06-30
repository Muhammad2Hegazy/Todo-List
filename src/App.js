import { useState , useRef } from 'react';
import './App.css';

function App() {
  const [todos , setTodos] = useState([]);
  const inputRef = useRef();

  const hanleAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = {completed: false, text};
    if (text.trim() === "") {
      alert("Please enter a valid item.");
      return;
    }
    setTodos([...todos, newItem]);
    inputRef.current.value = ""; // Clear the input field after adding
  }

  const hanleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const handleDeleteItem = (index) => {  
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
     <h2>To Do List</h2>
     <div className='to-do-container'>
      <ul>
      {todos.map(({text, completed}, index) =>{
        return <div className='remove'>
          <li 
          className={completed ? "done" : ""  }
           key={index}
            onClick={() =>hanleItemDone(index)}>
              {text}
              </li>
              <span
               onClick={() => handleDeleteItem(index)}>
                  ❌
                  </span>
        </div>;
      })}
     </ul>
     <input ref={inputRef} placeholder='Enter Item' />
      <button onClick={hanleAddTodo}>Add</button>
     </div>
    </div>
  );
}

export default App;
