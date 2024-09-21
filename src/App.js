import React, { useState } from "react";

import Users from "./components/Users";
import { Container } from "react-bootstrap";
import UserForm from "./components/UserForm";
import { UsersContext } from "./context/UsersContext";

function App() {
  const [users, setUsers] = useState([]);
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  return (
    <UsersContext.Provider value={{ users, setUsers, showAddUserForm, setShowAddUserForm }}>
      <Container className="my-5">
        {
          showAddUserForm ?
            <div className="mb-5">
              <UserForm />
            </div>
            :
            <Users />
        }
      </Container>
    </UsersContext.Provider>
  );
}

export default App;
