import React from 'react'


function Register() {
    return (
        <div>
            <h1 className="font-bold text-2xl mt-5">Register for Wizard Tech</h1>
            <div className="mt-5 w-[49rem]">
                <p>Make sure to grab your spot for this year's conference! We love technology and consistently
                    work towards being the premier provider of technolagy solutions and events that cannect the
                    world.</p>


                <div className='flex justify-center mt-16'>
                <div className='w-1/2'>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="input"
                            placeholder="you@example.com"
                        /> 


                        <button className='button mt-5' >Submit</button>
                   
                </div>
                </div>
            </div>
        </div>
    )
}

export default Register