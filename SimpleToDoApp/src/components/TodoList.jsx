import React, {useState} from 'react'
import styles from '../styles/TodoList.module.css'
const todoList = (props) => {
    let arr = props.list;

  return (
    <div className={styles.listBox}>
        <div >
            {
                arr.map((el,i)=> {
                    return (
                        <div key={el.id} className={el.isChecked ? styles.innerBox:styles.innerBoxC}>
                            <h2 style={{textDecoration: el.isChecked ? 'line-through':'none'}}>         
                                {el.name}
                            </h2>
                            <div className={styles.complete} onClick={()=>props.chengeChecked(i)}/>                          
                            <button className={styles.delete} onClick={()=>props.deleteTodo(el)}>X</button>
                        </div>
                    )
                })
            }           
        </div>
    </div>
  )
}

export default todoList