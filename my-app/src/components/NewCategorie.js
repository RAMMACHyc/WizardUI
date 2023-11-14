import React, { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { getCategory } from '../Data/data';
import SkeletonLoading from '../components/SkeletonLoading'

const NewCategory = () => {
  const { catId } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const oneCategory = getCategory(catId);
        setCategory(oneCategory);
      } catch (error) {
        console.error('Error fetching category:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchCategory();
  }, [catId]);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? 'rgb(0 157 207)' : 'black',
    };
  };


  return (
    <div>
      {loading ? (
        <SkeletonLoading number={category ? category.sessions.length : 1} />
      ) : category ? (
        <div>
          <h1 className="font-bold text-2xl text-gray-400">{category.name}</h1>
          {category.sessions.length > 0 ? (
            <div>
              <div className="flex gap-4 mt-4">
                {category.sessions.map((session) => (
                  <div key={session.id}>
                    <NavLink to={`session/${session.id}`} style={navLinkStyles}>
                      <div className="h-20 border border-gray-900 px-3">
                        <h1 className="text-center font-bold mt-3">{session.name}</h1>
                        <p className="text-center">
                          {session.speaker.name} | {session.speaker.org}
                        </p>
                      </div>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>No sessions available in this category</div>
          )}
          <Outlet />
        </div>
      ) : (
        <div>Category not found</div>
      )}
    </div>
  );
};

export default NewCategory;
