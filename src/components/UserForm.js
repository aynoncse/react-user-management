import React, { useState } from 'react';
import { Form, FormControl, Card, Button } from 'react-bootstrap';
import { useUserContext } from '../hooks/useUserContext'

const UserForm = () => {
    const { addUser, showForm } = useUserContext();

    const [user, setUser] = useState({
        username: '',
        firstname: '',
        lastname: ''
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addUser(user);
    }

    const handleOnChange = (e) => {
        setUser((prevUser) => ({
            ...user,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title className='mb-3'>
                    Add New User
                </Card.Title>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='username'>Username</Form.Label>
                        <FormControl type='text' id='username' name='username' value={user.username} onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='firstname'>First Name</Form.Label>
                        <FormControl type='text' name='firstname' id='firstname' value={user.firstname} onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='lastname'>Last Name</Form.Label>
                        <FormControl type='text' name='lastname' id='lastname' value={user.lastname} onChange={handleOnChange} />
                    </Form.Group>

                    <div className='d-flex justify-content-between gap-5'>
                        <Button type='button' variant='danger' className='flex-grow-1' onClick={() => showForm(false)}>Cancel</Button>
                        <Button type='submit' className='flex-grow-1'>Add</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default UserForm;
