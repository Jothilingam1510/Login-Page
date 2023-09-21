import React, { useState } from 'react';
import './Login.css';
import design from '../images/Logo.png';
import rec from '../images/Rectangle 2.png';
import pic from '../images/Ellipse 1.png';
import check from '../images/default.png';
import { Link } from 'react-router-dom';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Home from './Home';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    message: '',
  });
  const[isAuth,setIsAuth]=useState(false);

  const handleLogin = (e) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const { email, password } = formData;
    const matchedUser = users.find((user) => user.email === email && user.password === password);

    if (matchedUser) {
      localStorage.setItem('isAuth', true);
      setFormData({ ...formData, message: 'Sign-in successful', isAuth: true });
      alert('Login Successfully');
      setIsAuth(true)
    } else {
      localStorage.setItem('isAuth', false);
      setFormData({ ...formData, message: 'Invalid email or password' });
      alert('Login failed, please input correct Email and Password');
    }

    setFormData({ ...formData, email: '', password: '' });
    e.preventDefault();
  };

  return (
    <>
      <section className="whole">
        <div className="top">
          <img src={design} alt="design"></img>
          <p>Apprigator</p>
        </div>

        {isAuth ? (
          <p className="nextmail">
            <Home /> {formData.email}{' '}
          </p>
        ) : (
          <div className="main">
            <div className="sub-main">
              <div className="images">
                <img className="rec" src={rec} alt="rec" />
                <img className="pic" src={pic} alt="pic" />
                <h4>
                  Welcome back, <span>Robert</span>
                </h4>
                <div className="email">
                  <p className="email1">Email</p>
                  <Input
                    type="text"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="password">
                  <p className="pass">Password</p>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Enter your Password"
                  />
                </div>
                <div className="remember">
                  <img src={check} alt="" />
                  <p>Remember Me</p>
                  <a href="?">Forgot password?</a>
                </div>
                <form>
                  <div className="login">
                    <Button text="Login" onClick={handleLogin} />
                  </div>
                  {formData.message}
                </form>

                <p className="robot">I’m not Robert</p>
                <div className="bottom">
                  <Link className="newuser" to="/SignUp">
                    Login as new user
                  </Link>
                  <Link className="signup" to="/SignUp">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default LoginPage;
