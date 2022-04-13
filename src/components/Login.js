import React, {useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    useSelector,
    useDispatch
} from "react-redux";
import { setUserName,
    setUserEmail,
    setUserPassword,
    setUserConfirmPassword,
    setUserInfo,
    setUserIsLoggedIn,
    setUserIsLoading,
    setUserError,
    setScreen
} from "../dataflow/reducer";



const LoginBox = styled.div`
    width: 30%;
    height: 69%;
    border-radius: 14px;
    box-shadow: 5px 5px 22px 0px #000000;
    background-color: #4cbaa2;
    padding: 16px;
    display: flex ;
    flex-direction: column;
    align-items: center;

`;

const Title = styled.h1`
    text-align: center;
    font-size: 55px;
`;

const Label = styled.label`
    display: flex ;
    flex-direction: column;
    width: 75% ;
    font-size: 20px;
    font-weight: bold;
    color: #000;

`;

const Input = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: solid 1px #e1e1e1;
    padding: 6px ;
`;

const InputBox = styled.div`
    width: 100% ;
    height: 75%; ;
    display:flex ;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Button = styled.button`
    width: 200px;
    padding: 4px ;
    font-size: 28px;
    border-radius: 4px;
    outline: none ;
    border: solid #000 1px;
    cursor: pointer;

    :hover {
        background-color: #e3c3e8;
    }
`;

const Register = styled.button`
    width: fit-content ;
    padding: 4px ;
    outline: none ;
    border: none;
    background: transparent;
    text-decoration: underline;
    margin-top: 4px;
    cursor: pointer ;

`;

const Login = () => {

    const user = useSelector(state => state.user.user);
    const {name, email, password, confirmPassword, isLoggedIn, isLoading, error} = user;
    const dispatch = useDispatch();

    const roles = {
        adm: "624ae16fe339948b7f1cb592",
        user: '624afa12655431b7af776a3f'

    }

    const navigate = useNavigate();

    
    const handleClickLogin = () => {
       axios.post('https://api-login-register-marc.herokuapp.com/auth', {
           email: email,
           password: password,
    }).then(res => {
        if(res.data.acessToken){
            dispatch(setUserInfo(res.data.user));
            dispatch(setUserIsLoggedIn(true));
            dispatch(setUserIsLoading(false));
            localStorage.setItem('token', res.data.acessToken);
            setTimeout(navigate('/home'), 2000);
            
        }
    }).catch(err => {
        dispatch(setUserError(err.response?.data?.message));
        dispatch(setUserIsLoading(false));
    }
           )
    }

    const handleClickChangeScreen = () => {
        dispatch(setScreen("register"));
    }

    useEffect(() => {
        dispatch(setUserEmail(""));
        dispatch(setUserPassword(""));

    }, [])


    return (
        <LoginBox>
        <Title>Login</Title>
        <InputBox>
            <Label>
                Email:
                <Input 
                type="email"
                value={email}
                onChange={(e) => {
                    dispatch(setUserEmail(e.target.value));
                }}
                />
            </Label>
            <Label>
                Senha:
                <Input 
                type="password" 
                value={password}
                onChange={(e) => {
                    dispatch(setUserPassword(e.target.value));
                }}
                />
            </Label>
        </InputBox>
        <Button  onClick={handleClickLogin} >Entrar!</Button>
        <Register onClick={handleClickChangeScreen} >Ir para cadastro</Register>
        </LoginBox>
    )
}

export default Login;