import React from "react";
// import "../style/login.css";

function Login() {

  return (
    <div className="loginbody">
      <div id="formContent" >
        <a href="/Login"><h2 className="inactive underlineHover"> Sign In </h2></a>
        <h2 className="active">Sign Up </h2>
      
        <div className="fadeIn first">
          <img src="https://cdn-icons-png.flaticon.com/512/1644/1644840.png" id="icon" alt="User Icon" />
          <img src="https://cdn-icons-png.flaticon.com/128/1644/1644838.png" id="icon" style={{marginLeft :'10px'}} alt="User Icon" />
        </div>
        <form action="">
       
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
        
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="user mail" />
         
          <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" />
       
          <input type="password" id="password" className="fadeIn third" name="login" placeholder="confirm password" />
          <input type="submit" className="fadeIn fourth" value="Sign Up" />
        </form>
        <div id="formFooter">
          {/* <a className="underlineHover" href="#">Forgot Password?</a> */}
        </div>
        </div>
      </div>
  )
}

export default Login;