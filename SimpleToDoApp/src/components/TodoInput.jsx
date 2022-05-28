import React, { useState } from 'react';
import styles from '../styles/TodoInput.module.css';

const TodoInput = (props) => {
  const [query, setQuery] = useState("");
  
  const changeHandler = (event) => {
    setQuery(event.target.value);
  } 
  const clickHandler = () => {
    // console.log(query);
    if(query.length>0)
    {
      props.addNew(query);
    }
    
    let x = '';
    setQuery(x);
  };
  return (
    <div className={styles.inputBox}>
      <input 
        placeholder='Enter New Todo'
        type="text"
        value={query}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>+</button>
    </div>
  )
}

export default TodoInput