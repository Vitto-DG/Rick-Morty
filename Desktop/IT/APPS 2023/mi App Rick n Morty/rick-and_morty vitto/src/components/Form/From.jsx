import './Form.css'
//import React from 'react';
import validation from './validation'
import { useState } from 'react'

const Form = ({login}) => {
    const [ userData, setUserData ] = useState({
        username:'',
        password:''
        })

    const [ errors, setErrors ] = useState({
        username:'',
        password:''
        })

    const handleInputChange = (event) => {
            setUserData({
                ...userData, [event.target.name]: event.target.value
            });
            setErrors(validation({
                ...userData, [event.target.name]: event.target.value       
            }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
    return(
        <form className="login-box" onSubmit={handleSubmit}>
            <label htmlFor="username">User Name:</label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
            {errors.username && <p>{errors.username}</p>}
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange}/>
            {errors.password && <p>{errors.password}</p>}
            <button>Login</button>
        </form>
    )
}
export default Form;