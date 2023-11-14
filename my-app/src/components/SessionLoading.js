import React from 'react'

const SessionLoading = () => {
    return (
        <>
          {/* <h1 className="font-bold text-2xl mt-5">Session Categories</h1> */}
          <div  className="block h-4 w-64 bg-gray-300 rounded-md mt-5 animate-pulse"></div>


        <div className="grid grid-cols-1 gap-3 mt-2">
        {[1, 2, 3,].map((index) => (
          <div key={index} className="py-3 animate-pulse">
          
            <div  className="block h-2 w-[42rem] bg-gray-200 rounded-md"></div>
            <div  className="block h-2 w-[28rem] bg-gray-200 rounded-md mt-1"></div>
            <div  className="block h-2 w-40 bg-gray-200 rounded-md mt-1"></div>

          </div>
        ))}
      </div>
      </>
    );
}

export default SessionLoading
