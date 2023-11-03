import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory } from '../Data/data';
import { Link, Outlet } from 'react-router-dom'


const NewCategorie = () => {
  const { catId } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const oneCategory = getCategory(catId);

    if (oneCategory) {
      setCategory(oneCategory);
      setLoading(false);
    } else {
      setLoading(false); 
    }
  }, [catId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
    <Link to={'session/'+category.sessions[0].id}  > 
      <h1 className="font-bold text-2xl text-gray-400">{category.name}</h1>
      <div className="flex mt-4">
        <div className="w-52 h-20 border border-gray-900">
          <h1 className="text-center font-bold mt-3">{category.sessions[0].name}</h1>
          <p className="text-center">{category.sessions[0].speaker.name} | {category.sessions[0].speaker.org} </p>
        </div>
        <div className="w-60 h-20 border border-gray-900 ml-4">
          <h1 className="text-center font-bold mt-3">{category.sessions[1].name}</h1>
          <p className="text-center">{category.sessions[1].speaker.name} | {category.sessions[1].speaker.org} </p>
        </div>
      </div>
    </Link>
    <Outlet />

    </>
  );
};

export default NewCategorie;
