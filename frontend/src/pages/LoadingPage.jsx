import React from 'react'

const LoadingPage = () => {
  return (
    <div className="h-[100dvh] w-[100%] flex justify-center items-center  my-container">
      <img src="/icons/loading.svg" className='size-12 animate-spin' alt="loading icon" />
    </div>
  );
}

export default LoadingPage