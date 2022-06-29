import React from 'react'
import './Login.css'
function Login({email, setEmail, password, setPassword,handleLogin,handleSignup,
    hasAccount, setHasAccount, emailError, passwordError}){

    // const[email, setEmail, password, setPassword,handleLogin,handleSignup,
    //     hasAccount, setHasAccount, emailError, passwordError] = props;

  return (
    <section className='login'>
        <div className="loginContainer">
            <div className="d-flex justify-content-center">
                <h1>Movie Searcher</h1>
            </div>
            <label>Username</label>
            <input type="text" 
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <p className='errorMsg'>{emailError}</p>

            <label>Password</label>
            <input type="text" 
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <p className='errorMsg'>{passwordError}</p>

            <div className="btnContainer">
                {hasAccount ? (
                    <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Dont have account ? 
                        <span onClick={()=>setHasAccount(!hasAccount)} >Sign up</span></p>
                    </>
                ) : (
                    <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>Have an account ? 
                        <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>
                )}
            </div>
        </div>
    </section>
  )
}

export default Login