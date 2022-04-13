import React, {useEffect} from "react";
import styled from "styled-components";
import Register from "../components/Register";
import Login from "../components/Login";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E1E1E1;
    color: #fff;
`;

const LoginRegister = ({user}) => {

    const screen = useSelector(state => state.user.screen);
    const navigate = useNavigate();

    const login = "login"
    const register = "register"


  

    useEffect(() => {
        if(user){
            navigate('/home');
          
        }
    }, [user])

    return(
        <Container>
            {screen === login ? <Login /> : <Register />}
        </Container>
    )
}

export default LoginRegister;