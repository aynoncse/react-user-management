import usersData from '../users.json';

export const initialState = {
    users: usersData,
    showAddUserForm: false,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "SHOW_ADD_USER_FORM":
            return {
                ...state,
                showAddUserForm: true,
            };
        case "ADD_USER":
            action.payload.id = !state.users.length ? 1 : state.users.slice(-1)[0].id + 1;

            return {
                ...state,
                showAddUserForm: false,
                users: [...state.users, action.payload]
            };

        case "DELETE_USER":
            const filteredUsers = state.users.filter((user) => user.id !== action.payload);
            return {
                ...state,
                users: filteredUsers
            };
        case "CANCEL_ADD_USER":
            return {
                ...state,
                showAddUserForm: false
            }
        default:
            return state;
    }
}