import React from 'react';
import Layout from "../components/layout";
import {useAuth} from "../context/authContext";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

const Auth = () => {
    const {isRegister, setIsRegister} = useAuth();
    return (
        <Layout>
            <Title>{isRegister ? "Sign Up" : "Log In"}</Title>
        </Layout>
    );
};

export default Auth;
