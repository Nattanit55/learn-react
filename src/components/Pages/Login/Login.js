import { hasFormSubmit } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='block-email'>
          <label htmlFor='email'>E-Mail</label>
          <input type='email' placeholder='E-Mail' className='form-email' onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='block-password'>
          <label htmlFor='email'>Password</label>
          <input type='password' placeholder='Password' className='form-email' onChange={e => setPassword(e.target.value)} />
        </div>
        <button className='btn btn-login'>Login</button>
      </form>
    </>
  )
}
