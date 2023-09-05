import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from './userContext';
export default function UserState(props) {

    const host = "http://localhost:5000";
    let navigate=useNavigate();

    const loginUser = async (email, password) => {
        const response = await fetch(`${host}/auth/login`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json();
        if (json.success) {
            setMainUser(json.user);
            sessionStorage.setItem('token', json.authToken);
            sessionStorage.setItem('userId', json.user._id);
            navigate("/");
        }
        else {
            console.log(json.error);
            alert("Invalid credentials")
        }
    }

    return (
        <UserContext.Provider value={{ loginUser }}>
          {props.children}
        </UserContext.Provider>
      )
}