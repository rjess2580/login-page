import React from 'react'
import "./login.css"



const Login = ()=>{
     return(
        <div className='main'>
            <div className='sub-main'>
          <form action="">
                <div>
                    <label htmlFor="email">username</label>
                    <input  type="text" name="email" id="email" placeholder="email"/>

                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type ="text" name="password" id="password"placeholder="password"/>
                </div>
                
                <div><button type="submit">Login</button></div>
                <button type="submit">Register</button>
            </form>
            </div>
         </div>   
        
     )
}

export default Login