import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getCategories } from '../Data/data'

const Categories = () => {
  useEffect(() => {
    console.log(getCategories())
  }, [])
  const categories = getCategories();
  return (
    <>
      <div>

        <h1 className="font-bold text-2xl mt-5">Session Categories</h1>
      </div>
      <nav className="py-8 ">
        <div className='grid grid-cols-3 gap-3'>
          
            {categories.map((category) => (
              <div key={category.id}>
                <Link to={'categorie/'+category.id}  ><p className='w-[10.70rem]'>{category.name}</p></Link>
              </div>
            ))}

          </div>
    
     

      </nav>
      <Outlet />
    </>
  )
}

export default Categories
