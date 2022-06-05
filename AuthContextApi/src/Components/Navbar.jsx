import { Button } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Status from "./Status";

const Navbar = () => {
  const { isAuthorized, login, logout } = useContext(AuthContext);
  return (
    <div style={{ border: "1px solid" }}>
      <Button
        onClick={() => {
          if (isAuthorized === true) {
            logout();
          } else {
            login("U", "P");
          }
        }}
        colorScheme="blue"
      >
        {isAuthorized ? "Logout" : "Login"}
      </Button>
      <Status></Status>
    </div>
  );
};

export default Navbar;
