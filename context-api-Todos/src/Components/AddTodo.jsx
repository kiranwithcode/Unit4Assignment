import React, { useContext } from "react";
import { useReducer } from "react";
import { TodoContext } from "../Contexts/TodoContext";
import TodoList from "./TodoList";
import styles from "../Components/AddTodo.module.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        todos: [...state.todos, { value: action.value, complited: false }],
      };
    }

    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, complited: !t.complited } : t
        ),
      };

    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo, idx) => idx !== action.idx),
      };

    default: {
      return state;
    }
  }
};

const AddTodo = () => {
  const { value, setValue } = useContext(TodoContext);
  const [{ todos }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });

  return (
    <div>
      <input
        className={styles.inputBox}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
      className={styles.buttunbox}
        onClick={() => {
          dispatch({ type: "ADD_TODO", value });
          setValue("");
        }}
      >
        +
      </button>
      <div>
        <TodoList todos={todos} dispatch={dispatch}></TodoList>
      </div>
    </div>
  );
};

export default AddTodo;
