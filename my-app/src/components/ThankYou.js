import React from 'react'


const ThankYou = ({ email }) => {
    return (
      <div className='grid grid-cols-1 gap-5'>
          <h1 className="font-bold text-2xl mt-5">Thank You!</h1>
          <p>You're now registered for Wizard Tech.</p>

        <p>we've sent more details to <span className='font-bold text-[#2c6c80]'>{email}</span></p>
      </div>
    );
  };
  

export default ThankYou
