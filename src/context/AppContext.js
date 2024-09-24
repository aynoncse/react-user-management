import React, { createContext, useState } from "react";

import usersData from '../users.json'

export const AppContext = createContext({});

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState(usersData);
    const [showAddUserForm, setShowAddUserForm] = useState(false);

    const data = { users, setUsers, showAddUserForm, setShowAddUserForm }

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
};

export default UsersProvider;
