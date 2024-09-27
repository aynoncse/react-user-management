import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/usersReducer";

export const UserContext = createContext({});

const UsersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        users: state.users,
        showAddUserForm: state.showAddUserForm,
        showForm: (status) => dispatch({ type: 'SHOW_ADD_USER_FORM', payload: status }),
        addUser: (newUser) => dispatch({ type: 'ADD_USER', payload: newUser }),
        deleteUser: (id) => dispatch({ type: 'DELETE_USER', payload: id }),
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default UsersProvider;
