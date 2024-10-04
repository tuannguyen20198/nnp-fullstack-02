import React, { useState } from 'react';
import { produce } from 'immer';

function AddNewItemForm({ setItems }) {
  const [newItem, setNewItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems(prevItems => produce(prevItems, draft => {
      draft.push(newItem);
    }));
    setNewItem('');
  };
  const handleInput = (e) => { 
    e.preventDefault();
    setNewItem(e.target.value);
   }

  return (
    <div className="new-list-item-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-list-form-input">
          New item:
        </label>
        
        <div className="row">
          <input
            id="new-list-form-input"
            type="text"
            value={newItem}
            onChange={handleInput} // Cập nhật state khi người dùng nhập liệu
          />
          <button type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItemForm;
