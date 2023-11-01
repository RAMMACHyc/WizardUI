import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory } from '../Data/data'; // Make sure to use the correct relative path

const SingleCategory = () => {
  const { catId } = useParams();
  const category = getCategory(catId);

  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(category)
   
    if (category) {
      setLoading(false);
    }
  }, [category]);

  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-400">{category.name}</h1>
      <div className="flex mt-4">
        <div className="w-52 h-20 border border-gray-900">
          <h1 className="text-center font-bold mt-3">{category.name}</h1>
          <p className="text-center">{category.description}</p>
        </div>
        
      </div>
    </div>
  );
};

export default SingleCategory;
