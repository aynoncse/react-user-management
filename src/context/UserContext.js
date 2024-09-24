import React, { createContext, useReducer, useState } from "react";

import usersData from '../users.json'

export const UserContext = createContext({});

const UsersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [users, setUsers] = useState(usersData);
    const [showAddUserForm, setShowAddUserForm] = useState(false);

    const data = { users, setUsers, showAddUserForm, setShowAddUserForm }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

export default UsersProvider;
