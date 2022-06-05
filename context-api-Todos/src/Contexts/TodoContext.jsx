import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [value, setValue] = useState("");

  return (
    <TodoContext.Provider value={{ setValue, value }}>
      {children}
    </TodoContext.Provider>
  );
};
