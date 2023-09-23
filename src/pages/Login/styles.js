import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #2c2c4d;  /* roxo escuro */
`;

export const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 250px;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    background-color: white;
    color: #2c2c4d;  /* roxo escuro */
`;

export const Button = styled.button`
    width: 250px;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: #2c2c4d;  /* roxo escuro */
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #1a1a2e;  /* tom mais escuro de roxo para hover */
    }
`;

export const LinkWrapper = styled.p`
    margin-top: 20px;
    color: white;
`;

export const StyledLink = styled.a`
    color: #2c2c4d;  /* roxo escuro */
    text-decoration: none;
    margin-left: 5px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
