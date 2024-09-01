import React, { useState } from 'react';
import '../styles/App.css';

function ToDoList() {
  // this is the state to manage the list of items and the current input
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  // Function to add a new item
  const addItem = () => {
    if (input) { // add only if input is not empty
      setItems([...items, input]); // Adding items
      setInput(''); // Clearing the input field after adding
    }
  };

  // this is the function to remove item from teh list
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index)); 
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new item" // Placeholder text for the input
        />
        <button className="add-button" onClick={addItem}>Add</button> {/* Button for adding the item */}
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} {}
            <button className="remove-button" onClick={() => removeItem(index)}>Remove</button> {/*button for removing the item */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
