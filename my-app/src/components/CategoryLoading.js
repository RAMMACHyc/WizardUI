import React from 'react';

const CategoryLoading = () => {
    return (
        <>
          {/* <h1 className="font-bold text-2xl mt-5">Session Categories</h1> */}
          <div  className="block h-4 w-80 bg-gray-300 rounded-md mt-5 animate-pulse"></div>


        <div className="grid grid-cols-3 gap-3 mt-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <div key={index} className="py-3 animate-pulse">
          
            <div  className="block h-3 w-52 bg-gray-200 rounded-md"></div>
            <div  className="block h-2 w-32 bg-gray-200 rounded-md mt-1"></div>
          </div>
        ))}
      </div>
      </>
    );
};

export default CategoryLoading;
