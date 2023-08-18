import react,{useState} from "react"
import './login.css'
import axios from "axios"
import { useHistory } from "react-router-dom"
const Login=({setLoginUser})=>{
    // instance for history
    const history=useHistory()
         const[user,setUser]=useState({
        email:"",
        password:""
    })
     const handlechange=e=>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

const login=()=>{
    // below linke will be directed to the backend login page, which is created
    axios.post("http://localhost:4000/login",user)
    .then(res=>{
        // in return it will send the data and it cab=n be printed by res.data.message
        alert(res.data.message)
        //setLoginUser function is in app.js, and it will save the user data
        // to check it is saved see it in the console object when login is pressed.
        setLoginUser(res.data.user)
        history.push('./');
    })
}

    return (
        <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="text"  name="email"  value={user.email} placeholder="Enter Your Email" onChange={handlechange}></input>
            <input type="password" name="password"   value={user.password} placeholder="Enter Your password" onChange={handlechange}></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            {/* when we press below register register page will be opened by using history */}
            <div className="button" onClick={()=>history.push("/register")}>Register</div>
            
        </div>
    )
}
export default Login