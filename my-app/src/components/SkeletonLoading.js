
import React from 'react';

const SkeletonLoading = ({ number }) => (
  <div>
    <div className="relative flex w-[20rem] animate-pulse gap-2 py-4">

      {[...Array(number)].map((_, index) => (
        
        <div className="flex-1" key={index}>
        <div className="h-4 w-[100%] rounded-lg bg-slate-200 mb-1"></div>
        <div className="h-2 w-[60%] rounded-lg bg-slate-200 mb-5"></div>
          <div className="w-60 h-20 bg-gray-100 grid grid-rows-3 gap-1 rounded-sm">
            <div className="h-3 w-[80%] rounded-lg bg-slate-200 text-sm ml-5 mt-5"></div>
            <div className="h-2 w-[50%] rounded-lg bg-slate-200 text- ml-8 mt-3"></div>
            <div className="flex">
              <div className="h-2 w-[40%] rounded-lg bg-slate-200 text- ml-8"></div>
              <div className="h-2 w-[30%] rounded-lg bg-slate-200 text- ml-1"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkeletonLoading;
