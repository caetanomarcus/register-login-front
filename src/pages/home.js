import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {setUserIsLoggedIn } from "../dataflow/reducer";



const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {

        localStorage.removeItem('token');
        navigate('/');
        dispatch(setUserIsLoggedIn(false));
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout} >Logout</button>
        </div>

    )
}

export default Home;