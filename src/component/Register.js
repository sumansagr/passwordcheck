import React, { useState } from "react"

import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

function Register(props) {

    const [userDetails, setuserDetails] = useState({
        fname:"",
        lname:"",
        email: '',
        password: '',
        cpassword:"",
        date:"",
        gender:""
    })

    const [isFnameValid,setisFnameValid] = useState("true")
    const [fnameError, setfnameError] = useState("")

    const [isLnameValid,setisLnameValid] = useState("true")
    const [lnameError, setlnameError] = useState("")
     
    const [isEmailValid, setisEmailValid] = useState(true)
    const [emailError, setemailError] = useState('')

    const [isPasswordValid, setisPasswordValid] = useState(true)
    const [passwordError, setpasswordError] = useState('')


    const [isCPasswordValid, setisCPasswordValid] = useState(true)
    const [cpasswordError, setcpasswordError] = useState('')

    const [isDateValid,setisDateValid] = useState("true")
    const [dateError, setdateError] = useState("")

    const[isGenderValid,setisGenderValid]= useState(true)
    const[genderError,setgenderError] = useState("")


    const[type, setType]=useState('type')
    const[icon,setIcon]=useState(eyeOff);



    const register= (event)=> {
        event.preventDefault()
        console.log(userDetails);   

        const isFnameValid = validateFirstName(userDetails.fname)
        const isLnameValid = validateLastName(userDetails.lname)
        const isEmailValid = validateEmail(userDetails.email)
        const isPasswordValid = validatePassword(userDetails.password)
        const isCPasswordValid = validateConfirmPassword(userDetails.cpassword)
        const isDateValid = validateDate(userDetails.date)
        // const isGenderValid = validateGender(userDetails.gender)



        if (isFnameValid && isLnameValid && isEmailValid && isPasswordValid  && isCPasswordValid  &&isDateValid) {
            // Programatically navigate
            console.log('props', props);
            props.history.push('/home')
        } else 
        {
            console.error('not valid');
        }
    }


    

    //* Firstname
    const expr = /^[a-zA-Z_]{3,15}$/;

    const validateFirstName = (fname) => {
        if (fname && expr.test(fname)) {
            setisFnameValid(true)
            setfnameError('')
            return true
        } else {
            setisFnameValid(false)
            setfnameError('Please enter your first name.')
            return false
        }
    }

    
    //* LastName

    const validateLastName = (lname) => {
        if (lname && expr.test(lname) ) {
           setisLnameValid(true)
           setlnameError('')
            return true
        } else {
           setisLnameValid(false)
           setlnameError('Please enter your last name.')
            return false
        }
    }


     //* email

    const mailexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;

        const validateEmail = (email) => {
            if (mailexp.test(email)) {
                setisEmailValid(true)
                setemailError('')
                return true
            } else {
                setisEmailValid(false)
                setemailError('Please enter an email address.')
                return false
            }
        }


    //* password
    const passwordExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        const validatePassword = (password) => {
            if (passwordExp.test(password) ) {
                setisPasswordValid(true)
                setpasswordError('')
                return true
            } else {
                setisPasswordValid(false)
                setpasswordError('Please enter a password.')
                return false
            }
        }


    //* cpassword

        const validateConfirmPassword = (cpassword,password) => {
            if ((cpassword===userDetails.password ) && cpassword !="") {
                setisCPasswordValid(true)
               setcpasswordError('')
                return true
            } else {
                setisCPasswordValid(false)
                setcpasswordError('Please enter a password.')
                return false
            }
        }

     //* date

        const validateDate = (date) => {
            if (date) {
                setisDateValid(true)
                setdateError('')
                return true
            } else {
                setisGenderValid(false)
                setgenderError('please select one option')
                return false
            }
        }

       


        //handleToggle
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

        //handleChange

        const handleChange = (event) => {
            console.log(event.target.name);
            const userDetailsCopy = { ...userDetails }
            userDetailsCopy[event.target.name] =event.target.value
            setuserDetails(userDetailsCopy)
        }

    

    return (
       <div className="row registration">
          
           <div className="col-7 login-form-style  registration-form-container-1">
           <h1>Registration</h1>

     <form onSubmit={register}>
     <div className="form-row">
      <div>
     <input type="text" placeholder='Firstname' name="fname" onChange={(event) => { handleChange(event) }}  value={userDetails.fname}/> <br></br>
     {!isFnameValid ? <span style={{color:'red', fontSize:'14px'}}>{fnameError}</span> : null}
      </div>
        
      <div>
     <input type="text" placeholder='Lastname' name="lname"  onChange={(event)=>{handleChange(event)}} value={userDetails.lname}/><br></br>
     {!isLnameValid ? <span style={{color:'red', fontSize:'14px'}}>{lnameError}</span> : null}
      </div>

      
      <div>
     <input type={type} placeholder='New Password'  name="password"  onChange={(event)=>{handleChange(event)}} value={userDetails.password} autoComplete="off"/>
     <span  className="reg-icon" onClick={handleToggle}><Icon icon={icon}  size={17}/></span> <br></br>
     {!isPasswordValid ? <span style={{color:'red', fontSize:'14px'}}>{passwordError}</span> : null}
      </div> 

      <div>
     <input type={type} placeholder='Confirm Password' name="cpassword" onChange={(event)=>{handleChange(event)}} value={userDetails.cpassword} style={{position:"relative",right:17}} autoComplete="off" />
     <span  className="reg-icon1" onClick={handleToggle}><Icon icon={icon}  size={17} /></span> <br></br>
     {!isCPasswordValid ? <span style={{color:'red', fontSize:'14px'}}>{cpasswordError}</span> : null}
      </div>
      <div>

     <input type="email" placeholder='Example@gmail.com' name="email" onChange={(event)=>{handleChange(event)}}  value={userDetails.email}/><br></br>
     {!isEmailValid ? <span style={{color:'red', fontSize:'14px'}}>{emailError}</span> : null}
     
      </div>

      <div>
     <input type="date" placeholder='Enter date' name="date" onChange={(event)=>{handleChange(event)}} value={userDetails.date} /><br></br>
     {!isDateValid ? <span style={{color:'red', fontSize:'14px'}}>{dateError}</span> : null}
      </div>

      </div>
 
      <div>
     <input type="submit" />
      </div>
   <p>Already have account? </p> 
  

</form>
        </div>
        

       </div>
     
        
    )
}

export default Register
