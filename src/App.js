import React, { useState } from "react";

import Users from "./components/Users";
import { Container } from "react-bootstrap";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [showAddUserForm, setShowAddUserForm] = useState(false);


  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  const handelCancelAddingNewUser = () => {
    setShowAddUserForm(false);
  }

  const handleAddNewUser = (user) => {
    setUsers((prevUsers) => {
      const id = !prevUsers.length ? 1 : prevUsers.slice(-1)[0].id + 1;
      return [
        ...prevUsers,
        { id, ...user }
      ]
    });
    setShowAddUserForm(true);
  }

  return (
    <Container className="my-5">
      {
        showAddUserForm ?
          <div className="mb-5">
            <UserForm onCancelAdd={handelCancelAddingNewUser} onAddUser={handleAddNewUser} />
          </div>

          :
          <Users users={users} onDeleteUser={handleDeleteUser} onAddUser={setShowAddUserForm} />
      }
    </Container>
  );
}

export default App;
