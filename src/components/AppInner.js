import React from 'react';

import { UserContext } from '../context/UserContext';
import { Container } from 'react-bootstrap';
import UserForm from './UserForm';
import Users from './Users';
import { useUserContext } from '../hooks/useUserContext';

const AppInner = () => {

    const { state } = useUserContext(UserContext);

    return (
        <Container className="my-5">
            {
                state.showAddUserForm ?
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