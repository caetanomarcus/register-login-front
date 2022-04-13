import React, {useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
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



const RegisterBox = styled.div`
    width: 35%;
    height: 80%;
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
    width: 200px ;
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

const Login = styled.button`
    width: fit-content ;
    padding: 4px ;
    outline: none ;
    border: none;
    background: transparent;
    text-decoration: underline;
    margin-top: 4px;
    cursor: pointer ;

`;


const Register = () => {

    const user = useSelector(state => state.user.user);
    const {name, email, password, confirmPassword, isLoggedIn, isLoading, error} = user;
    const dispatch = useDispatch();

    const roles = {
        adm: "624ae16fe339948b7f1cb592",
        user: '624afa12655431b7af776a3f'

    }

    
    const handleClickRegister = () => {
        const userData = {
            name,
            email,
            password,
            role: roles.adm
        }
       
        dispatch(setUserIsLoading(true));
        axios.post("https://api-login-register-marc.herokuapp.com/registration", userData)
        .then(res => {
            dispatch(setUserIsLoading(false));
            dispatch(setUserIsLoggedIn(true));
            dispatch(setUserInfo(res.data));
            dispatch(setScreen("login"));
        })
        .catch(err => {
            dispatch(setUserIsLoading(false));
            dispatch(setUserError(err.message));
        })
    }

    const handleClickChangeScreen = () => {
        dispatch(setScreen("login"));
    }

    useEffect(() => {
        dispatch(setUserEmail(""));
        dispatch(setUserPassword(""));

    }, [])


    return (
        <RegisterBox>
        <Title>Cadastro</Title>
        <InputBox>
            <Label>
                Nome:
                <Input 
                type="text"
                value={name}
                onChange={(e) => {
                    dispatch(setUserName(e.target.value));
                }}
                />
            </Label>
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
            <Label>
                Confirmar Senha:
                <Input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => {
                    dispatch(setUserConfirmPassword(e.target.value));
                }}
                />
            </Label>
        </InputBox>
        <Button  onClick={handleClickRegister} >Cadastrar!</Button>
        <Login onClick={handleClickChangeScreen} >Ir para Login</Login>
        </RegisterBox>
    )
}

export default Register;