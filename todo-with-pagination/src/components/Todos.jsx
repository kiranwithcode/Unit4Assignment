import React, { useEffect, useState } from "react";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setnewTodo] = useState("");
  const saveInfo = () => {
    // This function will call api to update it's value in the backend
    fetch("http://localhost:3004/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        value: newTodo,
        isCompleted: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([...todos, data]);
        setnewTodo("");
      });
  };
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(0)
  useEffect(() => {
    axios
      .get(`http://localhost:3004/todos?_page=${page}&_limit=${limit}`)
      .then((r) => {
        setTodos(r.data);
        setTotal(Number(r.headers["x-total-count"]));
      });
  }, [page, limit]);

  return (
    <div>
      Todos
      <div>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={({ target }) => setnewTodo(target.value)}
          />
          <button onClick={saveInfo}>+</button>
        </div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.id} - {todo.value}</div>
        ))}
        <button
          disabled={page <= 1}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          Prev
        </button>
        <select onChange={(e) => {setLimit(Number(e.target.value))}}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <button disabled={total < page*{limit}} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Todos;
