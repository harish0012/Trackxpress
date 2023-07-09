import React, { useState } from "react"
import STYLE from './signup.module.css'
import { Link } from 'react-router-dom';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Signup=()=>{
    let[name,setname]=useState("")
    let[phonenumber,setphonenumber]=useState("")
    let[email,setemail]=useState("")
    let otp=123456

    let handleSubmit=(e)=>{
        e.preventDefault()
        let check= /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
        let emailcheck=check.test(email)
        console.log(emailcheck);
        let final=true
        if(name!=="" && phonenumber!=="" && email!=="" && emailcheck===final){
        let a=Number (prompt("Enter the otp number"))
        if(otp===a)
        {
        
        let userdata={
            username:name,
            phonenumber:phonenumber,
            email:email
        }
        
        localStorage.setItem("data",JSON.stringify(userdata))
        alert("Sign up successfull")
        window.location.assign("/login")
    }
    else{
        alert("Invalid otp number")
    }
}
else{
    toast.error("Some fields are empty / Enter valid email",{position:toast.POSITION.TOP_CENTER})
}

    }
    return(
        <>
        <ToastContainer/>
        <div id={STYLE.home}>
        <div id={STYLE.main1}>
           
            <div id={STYLE.register}>
                <h1 className={STYLE.reg}>REGISTER</h1>
        <form id={STYLE.formchild} >
            <label htmlFor="username" id={STYLE.label}>USERNAME:</label>
            <br />
            <input type="text" id={STYLE.username}  placeholder="username" onChange={(e)=>{
             setname(e.target.value)
             
            }}/>
            <br />
            <br />
            <label htmlFor="email" id={STYLE.label}>EMAIL:</label>
            <br />
            <input  type="email" id={STYLE.email} placeholder="email@gmail.com" required onChange={(e)=>{
             setemail(e.target.value)
             
            }}/>
            <br />
            <br />
            <label htmlFor="phonenumber" id={STYLE.label}>PHONE NUMBER:</label>
            <br />
            <input type="number" id={STYLE.phonenumber} placeholder="phonenumber" onChange={(e)=>{
                setphonenumber(e.target.value)
                
            }}/>
            <br /><br />
            <div id={STYLE.button}>
            <button type="reset" id={STYLE.button1}>CANCLE</button>
            <button onClick={handleSubmit} id={STYLE.button1}>SIGN IN</button>
            </div>
            <p id={STYLE.pa}>Already have an account? <Link to={'/login'} id={STYLE.ac}>Login</Link> </p>
        </form>
        </div>
        </div>
        </div>
        </>
        
    )
}
export default Signup