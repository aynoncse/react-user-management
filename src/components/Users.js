import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';

import User from './User';
import { UserContext } from '../context/UserContext';

const Users = () => {

    const { users, showForm } = useContext(UserContext);

    const handleOnClick = () => {
        showForm(true);
    }

    return (
        <>
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                <h4>Users</h4>
                <Button variant="primary" onClick={handleOnClick}> Add New </Button>
            </div>

            <Table striped bordered responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th className='text-end'>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((user) => <User key={user.id} user={user} />)
                    }
                    {
                        users.length === 0 && <tr><td className='text-center' colSpan="100%">No user yet</td></tr>
                    }
                </tbody>
            </Table>
        </>

    );
}

export default Users;
