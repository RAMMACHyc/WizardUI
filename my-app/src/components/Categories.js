import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Categories = () => {

  return (
    <>
    <div>
  
    <h1 className="font-bold text-2xl mt-5">Session Categories</h1>
    </div>
    <nav className="py-8 ">
    <div className='grid grid-cols-3 gap-3'>
        <div className='grid grid-rows-3 gap-2'>
        <Link to='categorie'  ><p className='w-[10.70rem]'>3D Printing and Desgin</p></Link>
        <Link to='categorie'><p className='w-[10.70rem]'>Community Service</p></Link>
        <Link to='categorie'><p className='w-[10.70rem]'>Ethics and Environment</p></Link>

        </div>
        <div className='grid grid-rows-3 gap-2'>
        <Link to='session'><p className='w-[10.70rem]'>AI and Robotics</p></Link>
        <Link to='session'><p className='w-[10.70rem]'>Education and Training</p></Link>
        <Link to='session'><p className='w-[10.70rem]'>AI and Robotics</p></Link>
        </div>
        <div className='grid grid-rows-3 gap-2'>
        <Link to='session'><p className='w-[10.70rem]'>Arts, Crafts, Fashion, and Fare</p></Link>
        <Link to='session'><p className='w-[10.70rem]'>Entertainment</p></Link>
        <Link to='session'><p className='w-[10.70rem]'>Virtual and Augmented Reality</p></Link>

        </div>
        
        
    </div>

    </nav>
    <Outlet />
    </>
  )
}

export default Categories
