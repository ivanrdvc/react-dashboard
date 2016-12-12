import React from 'react';
import {Link} from 'react-router';


const login = () => {
  return (
    <div className="signup">
      <form className="signup__form">
        <legend className="signup__legend">Log In</legend>
        <input className="signup__input" placeholder="Email Address" />
        <input className="signup__input" placeholder="Password" />

        <Link to="/dashboard" className="signup__button">
          Log In
        </Link>
        <p className="signup__message">Forgot password?</p>
      </form>
      <p className="signup__footer">Don't have an account? <a href="#">Sign up</a></p>

    </div>
  );
};

export default login;