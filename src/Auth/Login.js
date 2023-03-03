import React from "react";
import "../style/Login.css";

function Login() {

  return (
<div className="loginbody">
      <div id="formContent" >
        <h2 className="active"> Sign In </h2>
        <a href="/Register"><h2 className="inactive underlineHover">Sign Up </h2></a>
      
        <div className="fadeIn first">
          <img src="https://cdn-icons-png.flaticon.com/512/1644/1644840.png" id="icon" alt="User Icon" />
          <img src="https://cdn-icons-png.flaticon.com/128/1644/1644838.png" id="icon" style={{marginLeft :'10px'}} alt="User Icon" />
        </div>
        <form action="">
          {/* <label htmlFor="mail">Email</label> */}
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="user mail" />
          {/* <label htmlFor="mail">Password</label> */}
          <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
        <div id="formFooter">
          {/* <a className="underlineHover" href="#">Forgot Password?</a> */}
        </div>
      </div>
      </div>
    
  )
}

export default Login;