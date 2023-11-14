import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory } from '../Data/data';
import  SessionLoading  from './SessionLoading';


const Session = () => {
  const { catId, sessionId } = useParams();
  const category = getCategory(catId);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <SessionLoading />;
  }

  if (!category) {
    // return <CategoryNotFound />;
    console.log('category not Found');
  }

  const session = category.sessions.find((s) => s.id === sessionId);

  if (!session) {
    // return <SessionNotFound />;
    console.log('Session not Found');

  }

  return (
    <div>
      <h1 className="font-bold text-xl text-gray-800 mt-3 mb-3">{session.name}</h1>

      <div className="w-[42rem]">
        <p>{session.desc}</p>
      </div>

      <h1 className="font-bold text-gray-800 mt-5">{session.speaker.name}</h1>
      <p className="mb-5">{session.speaker.org}</p>

      <div className="w-[42rem]">
        <p>{session.speaker.bio}</p>
      </div>
    </div>
  );
};

export default Session;
