import react, {useState} from "react"
import './register.css'
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register=()=>{
    const history=useHistory();
    //in the below code, the useState hook is being used to declare a single
    // state object with four properties (name, email, password, and reenterpassword) all at once
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reenterpassword:""
    })
    // below handle change will change the every change in the variables name,email,pass and re
    //enterpassword. above we have used the usestate for all of them.
    const handlechange=e=>{
        const{name,value}=e.target
        // by running below statement we can see what are the values of name and vale
        // in the console, when we type some text in any of the button the change will be observed.
        // console.log(name,value)
        setUser({
            ...user,
            [name]:value
        })
        // above will make change value in every variable.
        // console.log(value) 
    }
    const register=()=>{
        const{name,email,password,reenterpassword}=user
        if(name && email && password &&(password==reenterpassword)){
            // alert("posted successfully")
            // below user data is send as request body
            // below link will be directed to the backend register page, which is created
            axios.post('http://localhost:4000/register',user)
            // after the above line is executed below will be executed
            .then(res=>{
                // below the message is suceessfully regisered which is sent from back end index.js

                alert(res.data.message)
                // after displaying alert we will directly redirect to login page by using below line
                history.push('./login')
            })
        }
        else{
            alert('Enter correct details');
        }

    }
    return (
        <div className="register">
            {/* {console.log(user)}  */}
            <h1>Register</h1>
            <input type="text" name="name"  value={user.name}  placeholder="Enter Your Name"    onChange={handlechange}></input>
            <input type="text" name="email"  value={user.email}  placeholder="Enter Your Email"    onChange={handlechange}></input>
            <input type="password" name="password"   value={user.password}   placeholder="Enter Your password"    onChange={handlechange}></input>
            <input type="password" name="reenterpassword"   value={user.reenterpassword}   placeholder="Re-Enter password"    onChange={handlechange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            {/* history.push /login is used to redirect to login page */}
            <div className="button" onClick={()=>history.push('/login')}>Login</div>
            
        </div>
    )
}
export default Register