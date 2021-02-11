import React from 'react'

export default function Signin() {
    return (
        <div className="d-flex-center">
        <section class='login' id='login'>
            <div class='head'>
                <img src="https://mateuspntx.github.io/templates/login-page/i/telescope.png"/>
                <h1 class='company'>Admin Login</h1>
            </div>
            <p class='msg text-white'>Welcome back</p>
            <div class='form'>
                <form>
                <input type="text" placeholder='Username' class='text' id='username' required/><br/>
                <input type="password" placeholder='•••••' class='password'/><br/>
                <a href="#" class='btn-login' id='do-login'>Login</a>
           
                </form>
            </div>
      </section>
      </div>
    )
}
