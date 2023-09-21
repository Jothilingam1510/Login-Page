import React, { useState } from 'react';
import design from '../images/Logo.png';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSignup = () => {
    const { email, password } = formData;
    const user = { email, password };
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(user);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <section className="whole">
        <div className="top">
          <img src={design} alt=""></img>
          <p>Apprigator</p>
        </div>

        <div className="main">
          <div className="sub-main1">
            <div className="images">
              <div className='email'>
                <p>Email</p>
                <input
                  type='text'
                  className='emailtext'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder='Enter your Email'
                />
              </div>
              <div className='password'>
                <p className='pass'>Password</p>
                <input
                  type='password'
                  className='emailtext'
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder='Enter your Password'
                />
              </div>
              <div className='bottom'>
                <Link className='signUP' to='/' onClick={handleSignup}>
                  SignUp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
