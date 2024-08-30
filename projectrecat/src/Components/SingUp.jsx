import React,{useEffect, useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
    const [name,setname]= useState("");
    const [email,setemail]= useState("");
    const [password,setpassword]=useState("");
    const navigate  = useNavigate();
    
    useEffect (()=>{
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('')
      }
    })

    const collectdata= async () =>{
         console.log(name,email,password);
         let response = await fetch('http://localhost:9600/register', {
          method: 'POST',
          body: JSON.stringify({ name, email, password }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

         response = await response.json();
         console.log(response);
         localStorage.setItem('user',JSON.stringify(response))
         Navigate('/')
    }

  return (
    <div className="demo">
      <div className="Register">
        <h2>RAGISTETION</h2>
        <input className="Input-box" type="text"
        value={name} onChange={(e)=>setname(e.target.value)} placeholder="enter your name"></input>

        <input className="Input-box" type="text"
        value={email} onChange={(e)=>setemail(e.target.value)} placeholder="enter your email"></input>

        <input className="Input-box" type="password"
        value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="enter your password"></input>
        <button onClick={collectdata}>SING-UP</button>
      </div>

    </div>

  )
}

export default Signup;