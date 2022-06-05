import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Status = () => {
  const { isAuthorized } = useContext(AuthContext);
  return <div>Status: {isAuthorized ? "LoggedIN" : "LoggedOut"}</div>;
};

export default Status;
