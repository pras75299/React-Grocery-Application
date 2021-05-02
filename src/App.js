import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      // display alert
      showAlert(true, 'danger', 'please enter value')
    } else if(name && isEditing){
      // work on edit functionality
    } else{
      showAlert(true, 'success', 'item added to the list')
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList(...list, newItem);
      setName('');
    }

  };

  const showAlert = (show=false, type="", msg="") => {
    setAlert({ show: show, type: type, msg: msg});
  }

  const clearList = () => {
    showAlert(true, 'danger', 'Empty List');
    setList([]);
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Grocery Application</h3>
        <div className="form-control">
          <input
            type="text"
            className="geocery"
            placeholder="e.g. Eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
      <div className="geocery-container">
        <List items={list}/>
        <button className="clear-btn" onClick={clearList}>Clear Items</button>
      </div>
      )}
    </section>
  );
}

export default App;
