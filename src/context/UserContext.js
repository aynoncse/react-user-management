import React, { createContext, useReducer, useState } from "react";
import { initialState, reducer } from "../reducer/usersReducer";

export const UserContext = createContext({});

const UsersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const data = { state, dispatch }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

export default UsersProvider;
