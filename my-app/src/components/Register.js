import React, { useState } from 'react';
import ThankYou from '../components/ThankYou';

function Register() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        
        <ThankYou email={email} />
      ) : (
        <div>
          <h1 className="font-bold text-2xl mt-5">Register for Wizard Tech</h1>
          <div className="mt-5 w-[49rem]">
            <p>Make sure to grab your spot for this year's conference! We love technology and consistently
              work towards being the premier provider of technology solutions and events that connect the
              world.</p>

            <div className='flex justify-center mt-16'>
              <div className='w-1/2'>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <button className='button mt-5' type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
}

export default Register;
