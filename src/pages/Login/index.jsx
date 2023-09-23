import React from 'react';
// import { Container, Title, Input, Button, LinkWrapper, StyledLink } from './styles';

const Login = () => {
    return (
        <Container>
            <Title>Login</Title>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button>Login</Button>
            <LinkWrapper>
                Don't have an account? <StyledLink to="/register">Create one</StyledLink>
            </LinkWrapper>
        </Container>
    );
}

export default Login;
