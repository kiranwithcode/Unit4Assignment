import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProdContext = createContext();

export const ProdContextProvider = ({ children }) => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  const handleOnClick = (el) => {
    setDetails(el);
    navigate("/Details");
  };
  return (
    <ProdContext.Provider value={{ details, handleOnClick }}>
      {children}
    </ProdContext.Provider>
  );
};
