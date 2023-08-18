import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage/homepage';
import Register from './components/register/register';
import Login from './components/login/login';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route, Redirect,Navigate
} from "react-router-dom";
function App() {
  const[user,setLoginUser]=useState({})
  return (
    <div className="App">
      <Router>
        {/* switch is same as switch in pgmg
        based on the required url we switch between the pages */}
        <Switch>
          {/* if we dont use exact, below also considered as '/' instead of /login and /register */}
          {/* i.e., /login and /register are taken as /  */}
           {/* to get perfect understanding make /login as registerlogin nad type in url as /register */}
            
            <Route path='/home'><Homepage/></Route>
            
            <Route exact path='/'>

              {/* here we ware using an conditional rendering.
              if user has already logined then we will have user and userid, so if we have user and 
              user id then directly redirect it to login page, if we dont have them we redirect to 
              home page by using this condition. */}
              {
                user && user._id?<Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>
                
              }
              {/* <Homepage/> */}
            </Route>


            {/* if we want directly local host to get home page then comment above and remove
            comments fro below*/}


            {/* <Route path='/'>
              <Homepage/>
            </Route> */}


            <Route  path='/login'>
              <Login setLoginUser={setLoginUser}/>
            </Route>
            <Route path='/register'>
              <Register/>
            </Route>
        </Switch>
      </Router>
      {/* <Homepage/> */}
      {/* <Login/> */}
      {/* <Register/>  */}
    </div>
  );
}

export default App;
