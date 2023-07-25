import './register.css'

const Register = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h2 className="loginLogo">IB Social</h2>
                <span className="loginDesc">Connect with friends and the world around you on IB Social</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="name" placeholder='UserName' className="loginInput" />
                    <input type="email" placeholder='Email' className="loginInput" />
                    <input type="email" placeholder='Password' className="loginInput" />
                    <input type="password" placeholder='Confirm Password' className="loginInput" />

                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>

                    <button className="loginRegisterBtn">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register