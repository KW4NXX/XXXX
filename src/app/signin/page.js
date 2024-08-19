import React from "react";
function signin (){
    return(
      <div>
        <center>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sign in</title>
  <h2>Sign in</h2>
  <form id="signUpForm">
    <label htmlfor="username">Username:</label>
    <input type="text" id="username" name="username" required />
    <br />
    <label htmlfor="password">Password:</label>
    <input type="password" id="password" name="password" required />
    <br />
    <button type="submit">Sign In</button>
  </form>
  <p>Already have an account? <a href="signIn.html">Sign up</a></p>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </center>
</div>


    )
}
export default signin
