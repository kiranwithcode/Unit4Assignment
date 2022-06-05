import React from "react";
import styles from "../Components/TodoList.module.css";

const TodoList = ({ todos, dispatch }) => {
  return (
    <div className={styles.box}>
      {todos.map((el, idx) => (
        <div className={styles.todoBox}
          key={idx}
          style={{ textDecoration: el.complited ? "line-through" : "" }}
          onClick={() => dispatch({ type: "TOGGLE_TODO", idx })}
          onDoubleClick={() => dispatch({ type: "REMOVE_TODO", idx })}
        >
          {el.value}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
