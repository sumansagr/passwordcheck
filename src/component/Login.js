import React, { useState } from "react"
import Register from "./Register"

import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

function Login(props) {
    const [userDetails, setuserDetails] = useState({
        email: '',
        password: ''
    })
    const [isEmailValid, setisEmailValid] = useState(true)
    const [emailError, setemailError] = useState('')

    const [isPasswordValid, setisPasswordValid] = useState(true)
    const [passwordError, setpasswordError] = useState('')

    const[type, setType]=useState('type')
    const[icon,setIcon]=useState(eyeOff);

    const login = (event) => {

        event.preventDefault()
   

        const isEmailValid = validateEmail(userDetails.email)
        const isPasswordValid = validatePassword(userDetails.password)

        

        if (isEmailValid && isPasswordValid) {
            // Programatically navigate
            console.log('props', props);
            props.history.push('/home')
        } else 
        {
            console.error('not valid');
        }
    }
    
    
    const mailexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;
    const validateEmail = (email) => {
        if (mailexp.test(email)) {
            setisEmailValid(true)
            setemailError('')
            return true
        } else {
            setisEmailValid(false)
            setemailError('Please enter valid email')
            return false
        }
    }

    const passwordExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    const validatePassword = (password) => {
        if (passwordExp.test(password)) {
            setisPasswordValid(true)
            setpasswordError('')
            return true
        } else {
            setisPasswordValid(false)
            setpasswordError('Please enter valid password')
            return false
        }
    }

    const handleToggle = ()=> {
        if(type==='password'){
            setIcon(eye)
            setType('text')
        }
        else{
            setIcon(eyeOff)
            setType('password')
        }
    }
    
    const handleChange = (event) => {
        console.log(event.target.name);
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy[event.target.name] =
            event.target.value
        setuserDetails(userDetailsCopy)
    }

    return (
       <div className="row login-form-container">
     

       <div className="col-5 login-form-container-2">
       <div className="login-form-style">
     
            <form onSubmit={login} >
                <div>
                    <input type="email" name="email" placeholder="example@gmail.com" onChange={(event) => { handleChange(event)}} value={userDetails.email} /> <br></br>
                    {!isEmailValid ? <span style={{color:'red', fontSize:'14px'}}>{emailError}</span> : null}
                </div>
               
                <div>
                    <input type={type} name="password" placeholder="Enter password" onChange={(event) => { handleChange(event) }} value={userDetails.password} style={{marginLeft:20}} autoComplete="off" /> 
                    <span  className="icon" onClick={handleToggle}><Icon icon={icon}  size={17}/></span> <br></br>
                     {!isPasswordValid ? <span style={{color:'red', fontSize:'14px' }}>{passwordError} </span> : null}
                    
                </div>
               
                <div>
        <input type="submit" value="Login" />
                </div >
            </form>
            <br></br>
            <p>create new account?</p> 
             
        </div>

       </div>
       </div>
    )
}

export default Login
