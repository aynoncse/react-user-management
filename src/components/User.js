import React from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import { useUserContext } from '../hooks/useUserContext'

const User = ({ user }) => {

    const { deleteUser } = useUserContext(UserContext);

    const handleDelete = (id) => {
        deleteUser(id);
    }

    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>@{user.username}</td>
            <td className='text-end'>
                <Button variant="primary">Edit</Button>
                <Button variant="danger ms-2" onClick={() => handleDelete(user.id)}>Delete</Button>
            </td>
        </tr>
    );
}

export default User;
