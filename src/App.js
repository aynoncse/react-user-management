import React, { useState } from "react";

import allUsers from './users.json'
import Users from "./components/Users";
import { Container } from "react-bootstrap";

function App() {
  const [users, setUsers] = useState(allUsers);

  return (
    <Container className="my-5">
      <h4 className="mb-3">Users</h4>
      <Users users={users} />
    </Container>
  );
}

export default App;
