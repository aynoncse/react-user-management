import React, { useState } from "react";

import allUsers from './users.json'
import Users from "./components/Users";
import { Container } from "react-bootstrap";

function App() {
  const [users, setUsers] = useState(allUsers);

  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  return (
    <Container className="my-5">
      <h4 className="mb-3">Users</h4>

      <Users users={users} onDeleteUser={handleDeleteUser} />
    </Container>
  );
}

export default App;
