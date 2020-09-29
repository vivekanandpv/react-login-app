import React, { useState } from 'react';
import FormInput from './FormInput';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (u) => {
    setUsername(u);
  };

  const handlePassword = (p) => {
    setPassword(p);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username,
      password,
    };

    console.log('Form Submitted', formData);
  };

  return (
    <React.Fragment>
      <form className='form-signin' onSubmit={handleSubmit}>
        <FormInput
          type='email'
          placeholder='Your email here'
          label='Email'
          required
          autoFocus
          handleChange={handleUsername}
        />

        <FormInput
          type='password'
          label='Password'
          required
          handleChange={handlePassword}
        />

        <button className='btn btn-lg btn-primary btn-block' type='submit'>
          Sign in
        </button>
      </form>
    </React.Fragment>
  );
};

export default Login;
