import React, { useContext } from "react";

import { Container } from "react-bootstrap";
import UsersProvider, { UserContext } from "./context/UserContext";
import AppInner from "./components/AppInner";

const App = () => {
  return (
    <UsersProvider>
      <AppInner />
    </UsersProvider>
  );
}

export default App;