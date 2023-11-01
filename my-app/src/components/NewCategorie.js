import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory } from '../Data/data'; // Make sure to use the correct relative path

const NewCategorie = () => {
  const { catId } = useParams();
  const [category, setCategory] = useState(null); // Initialize category as null
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Simulate data fetching with setTimeout
    setTimeout(() => {
      const fetchedCategory = getCategory(catId);
      setCategory(fetchedCategory);
      setLoading(false); // Set loading to false when data is available
    }, 1000); // Simulating an asynchronous data fetch
  }, [catId]);

  if (loading) {
    return <p>Loading...</p>; // Display a loading message while data is being fetched
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
          <p className="text-center">{category.desc}</p> {/* Use 'desc' instead of 'description' */}
        </div>
      </div>
    </div>
  );
};

export default NewCategorie;
