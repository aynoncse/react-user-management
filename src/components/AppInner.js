import React from 'react';

import { AppContext } from '../context/AppContext';
import { Container } from 'react-bootstrap';
import UserForm from './UserForm';
import Users from './Users';
import { useAppContext } from '../hooks/useAppContext';

const AppInner = () => {

    const { showAddUserForm } = useAppContext(AppContext);

    return (
        <Container className="my-5">
            {
                showAddUserForm ?
                    <div className="mb-5">
                        <UserForm />
                    </div>
                    :
                    <Users />
            }
        </Container>
    );
}

export default AppInner;
