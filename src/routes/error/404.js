import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container mx-auto p-4">
        Error404
        <button onClick={() => navigate(-1)}>Back one page</button>
        <button onClick={() => navigate('/')}>Back to home</button>
      </div>
    </section>
  );
};

export default Error404;
