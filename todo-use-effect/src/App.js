import React,{ useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos,setTodos] = useState([])

  const handleOnChange = (e) => {
    setNewTodo(e.target.value)
  };

  const handleOnclick = (value) => {
    fetch("http://localhost:8080/todos",{
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({
        "text": value,
        "done": false
      })
    })
    .then(res => res.json())
    .then(data => {
      setTodos([...todos,data])
      setNewTodo("")})
  };
  useEffect(()=>{
    fetch("http://localhost:8080/todos")
    .then(res => res.json())
    .then(data => setTodos(data))
  },[]);


  return (
    <div className="App">
      <h1>ToDo App Using API and useEffect</h1>
      <div>
        <input  type="text"
                placeholder='Add New Todo'
                onChange={handleOnChange}
                value={newTodo}
        />
        <button onClick={()=>handleOnclick(newTodo)}>ADD</button>
      </div>
      <div>
        {
          todos.map((el)=>{
            return <div key={el.id}>{el.text}</div>
          })
        }
      </div>
    </div>
  );
}

export default App;
