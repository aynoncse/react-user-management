import React from 'react';
import { Table } from 'react-bootstrap';
import User from './User';

const Users = ({ users }) => {


    return (
        <>
            <Table striped bordered>
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
                </tbody>
            </Table>
        </>
    );
}

export default Users;
