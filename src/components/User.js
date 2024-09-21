import React from 'react';
import { Button } from 'react-bootstrap';

const User = ({ user, onDeleteUser }) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>@{user.username}</td>
            <td className='text-end'>
                <Button variant="primary">Edit</Button>
                <Button variant="danger ms-2" onClick={() => onDeleteUser(user.id)}>Delete</Button>
            </td>
        </tr>
    );
}

export default User;
