import React from 'react'
import Authform from '../components/Authform'

const AuthPage = () => {
  return (
    <div className='h-[100dvh] w-[100%] flex justify-center items-center bg-[var(--bg-color-2)] my-container'>
        <Authform />
    </div>
  )
}

export default AuthPage