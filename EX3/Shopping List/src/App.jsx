import React,{useState} from 'react';

import AddNewItemForm from './AddNewItemForm';

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <ol className="shopping-list">
          {items.length === 0 ? (
            <li>Ko có danh sách</li>
          ) : (
            items.map((item, index) => <li key={index}>{item}</li>)
          )}
        </ol>
      </div>
      <AddNewItemForm setItems={setItems}/>
    </div>
  );
}

export default App;