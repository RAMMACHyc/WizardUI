import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getCategories } from '../Data/data';
import CategoryLoading from './CategoryLoading';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fetchCategories = async () => {
        try {
          const categoriesData = await getCategories();
          setCategories(categoriesData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching categories:', error);
          setLoading(false);
        }
      };

      fetchCategories();
    }, 500); 

    return () => clearTimeout(timeout);
  }, []);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? 'rgb(0 157 207)' : 'black',
      backgroundColor: isActive ? 'black' : 'white',
    };
  };

  return (
    <div>
      {loading ? (
        <CategoryLoading />
      ) : (
        <div>
          <h1 className="font-bold text-2xl mt-5">Session Categories</h1>
          <nav className="py-8">
            <div className="grid grid-cols-3 gap-3">
              {categories.map((category) => (
                <div key={category.id}>
                  <NavLink to={'categorie/' + category.id} style={navLinkStyles}>
                    <p className="w-[10.70rem]">{category.name}</p>
                  </NavLink>
                </div>
              ))}
            </div>
          </nav>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Categories;
