import React, { useContext } from "react";

import { Container } from "react-bootstrap";
import Users from "./components/Users";
import UserForm from "./components/UserForm";
import UsersProvider, { AppContext } from "./context/AppContext";
import AppInner from "./components/AppInner";

const App = () => {
  return (
    <UsersProvider>
      <AppInner />
    </UsersProvider>
  );
}

export default App;