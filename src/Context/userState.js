import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from './userContext';
export default function UserState(props) {

    const host = "http://localhost:5000";
    let navigate=useNavigate();
    const [mainUser, setMainUser] = useState({ name: "",email:"",date:""});
    const [notes, setNotes] = useState(notesInitial);

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

        const getMainUser = async () => {
            const response = await fetch("http://localhost:5000/auth/getuser", {
                method: "GET",
                headers: { "Content-type": "application/json",
                "auth-token":
                localStorage.getItem('token'), 
                },
            })
            const json = await response.json();
            console.log(json)
            setMainUser(json);
        }
    }

    const getNotes = async () => {
        //API CALL
        const response = await fetch("http://localhost:5000/notes/fetchallnotes", {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    
    
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    
      };

    return (
        <UserContext.Provider value={{ loginUser,mainUser,getMainUser,getNotes,notes }}>
          {props.children}
        </UserContext.Provider>
      )
}